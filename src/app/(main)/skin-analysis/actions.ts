
'use server';
/**
 * @fileOverview Server actions for the skin analysis feature.
 *
 * - analyzeSkin - A function that handles the skin analysis process.
 * - SkinAnalysisInput - The input type for the analyzeSkin function.
 * - SkinAnalysisOutput - The return type for the analyzeSkin function.
 */

import {genkit, z} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {services} from '@/lib/constants';

const SkinAnalysisInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user's skin, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'"
    ),
  skinConcerns: z
    .string()
    .describe('A description of the user provided skin concerns.'),
  questionnaireResponses: z
    .string()
    .describe(
      'The user provided responses to a skincare questionnaire.'
    ),
});
export type SkinAnalysisInput = z.infer<typeof SkinAnalysisInputSchema>;

const SkinAnalysisOutputSchema = z.object({
  skinType: z
    .string()
    .describe('The identified skin type (e.g., oily, dry, combination).'),
  skinCondition: z
    .string()
    .describe(
      'The identified skin condition(s) (e.g., acne, rosacea, eczema).'
    ),
  recommendations: z
    .string()
    .describe(
      'Personalized skincare recommendations based on the analysis.'
    ),
  suggestedTreatments: z
    .string()
    .describe(
      'Suitable treatments that address the user provided skin concerns. This should be a bulleted list of treatments from the provided list (e.g., "- Treatment Name").'
    ),
});
export type SkinAnalysisOutput = z.infer<typeof SkinAnalysisOutputSchema>;

const altruvaServices = services
  .map(s => `- ${s.title}: ${JSON.stringify(s.description)}`) // Pass description as a JSON string
  .join('\n');

export async function analyzeSkin(
  input: SkinAnalysisInput
): Promise<SkinAnalysisOutput> {
  // Initialize Genkit and define the prompt *inside* the server action
  // to prevent it from running during the build process.
  const ai = genkit({
    plugins: [googleAI()],
  });

  const prompt = ai.definePrompt({
    name: 'skinAnalysisPrompt',
    input: {schema: SkinAnalysisInputSchema},
    output: {schema: SkinAnalysisOutputSchema},
    model: googleAI.model('gemini-1.0-pro'),
    prompt: `You are an expert dermatologist at Altruva Aesthetic Clinic, specializing in analyzing skin and providing personalized skincare recommendations.

You will use the information provided to analyze the user's skin, identify any issues, and provide appropriate recommendations.

Crucially, you MUST suggest suitable treatments from the official list of Altruva's services provided below. Your suggested treatments must be a selection from this list. Do not recommend services that are not on this list.

Here is the list of available Altruva treatments:
---
${altruvaServices}
---

Now, analyze the user's information:
Photo: {{media url=photoDataUri}}
Skin Concerns: {{{skinConcerns}}}
Questionnaire Responses: {{{questionnaireResponses}}}

Based on your analysis, provide the skin type, skin condition, general skincare recommendations, and a list of specific, suitable treatments from the Altruva services list above. For the suggested treatments, format them as a bulleted list (e.g., using '-').`,
  });

  const {output} = await prompt(input);
  if (!output) {
    throw new Error('Failed to get a response from the AI model.');
  }
  return output;
}
