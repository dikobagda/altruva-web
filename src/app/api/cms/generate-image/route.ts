import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { promises as fs } from 'fs';
import path from 'path';
import { verifySessionToken } from '@/lib/cms-auth';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('cms_session')?.value;
  return token && verifySessionToken(token);
}

export async function POST(request: Request) {
  const authenticated = await checkAuth();
  if (!authenticated) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { title, promptHint } = await request.json();

    if (!title) {
      return NextResponse.json({ error: 'Article title is required' }, { status: 400 });
    }

    let searchPrompt = `A premium, clean, minimalist, high-end photography of ${title} for an upscale aesthetic clinic. Neutral beige, cream, and warm gold colors, soft studio lighting, professional depth of field, high resolution.`;

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `You are an expert AI prompt engineer for image generation models.
Write a detailed, high-quality, photorealistic image generation prompt based on this article title/topic: "${title}".
The prompt should be written in English. The image is for a luxury, upscale aesthetic clinic website (Altruva).
It must look premium, modern, clean, with warm natural light, soft beige/gold/white color scheme. Avoid cheap looks.
Keep the prompt under 60 words. Do not wrap in quotes or code blocks, return ONLY the prompt text.`
                    }
                  ]
                }
              ]
            })
          }
        );

        if (geminiRes.ok) {
          const resData = await geminiRes.json();
          const cleanText = resData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (cleanText) {
            searchPrompt = cleanText.trim();
          }
        }
      } catch (geminiErr) {
        console.error('Gemini prompt crafting failed, using default:', geminiErr);
      }
    }

    // Add model specific styling details
    const finalPrompt = `${searchPrompt}, editorial photograph, 8k resolution, cinematic lighting, shot on 35mm lens --ar 2:1`;
    const encodedPrompt = encodeURIComponent(finalPrompt);

    // Call Pollinations AI to generate the image
    const seed = Math.floor(Math.random() * 1000000);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=512&nologo=true&seed=${seed}&model=flux`;

    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error('Failed to fetch image from generation model');
    }

    const imageArrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(imageArrayBuffer);

    // Save image locally
    const filename = `${Date.now()}-ai-cover.jpg`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, buffer);

    const relativeUrl = `/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      url: relativeUrl,
      prompt: finalPrompt
    });

  } catch (error: any) {
    console.error('AI Image generation error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
