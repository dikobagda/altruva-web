'use server';
/**
 * @fileOverview An AI agent for analyzing skin and providing personalized skincare recommendations.
 *
 * - analyzeSkin - A function that handles the skin analysis process.
 * - SkinAnalysisInput - The input type for the analyzeSkin function.
 * - SkinAnalysisOutput - The return type for the analyzeSkin function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkinAnalysisInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the user's skin, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  skinConcerns: z.string().describe('A description of the user provided skin concerns.'),
  questionnaireResponses: z
    .string()
    .describe('The user provided responses to a skincare questionnaire.'),
});
export type SkinAnalysisInput = z.infer<typeof SkinAnalysisInputSchema>;

const SkinAnalysisOutputSchema = z.object({
  skinType: z.string().describe('The identified skin type (e.g., oily, dry, combination).'),
  skinCondition: z
    .string()
    .describe('The identified skin condition(s) (e.g., acne, rosacea, eczema).'),
  recommendations: z
    .string()
    .describe('Personalized skincare recommendations based on the analysis.'),
  suggestedTreatments: z
    .string()
    .describe('Suitable treatments that address the user provided skin concerns.'),
});
export type SkinAnalysisOutput = z.infer<typeof SkinAnalysisOutputSchema>;

export async function analyzeSkin(input: SkinAnalysisInput): Promise<SkinAnalysisOutput> {
  return analyzeSkinFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skinAnalysisPrompt',
  input: {schema: SkinAnalysisInputSchema},
  output: {schema: SkinAnalysisOutputSchema},
  prompt: `You are an expert dermatologist specializing in analyzing skin and providing personalized skincare recommendations.

You will use the information provided to analyze the user's skin, identify any issues, and provide appropriate recommendations and suggest suitable treatments.

Photo: {{media url=photoDataUri}}
Skin Concerns: {{{skinConcerns}}}
Questionnaire Responses: {{{questionnaireResponses}}}`,
});

const analyzeSkinFlow = ai.defineFlow(
  {
    name: 'analyzeSkinFlow',
    inputSchema: SkinAnalysisInputSchema,
    outputSchema: SkinAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
