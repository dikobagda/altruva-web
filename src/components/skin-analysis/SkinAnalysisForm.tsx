
"use client";

import { useState, type ChangeEvent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { analyzeSkin, type SkinAnalysisInput, type SkinAnalysisOutput } from '@/app/(main)/skin-analysis/actions';
import { Loader2, UploadCloud } from 'lucide-react';
import Image from 'next/image';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const skinAnalysisFormSchema = z.object({
  photo: z
    .any()
    .refine((file) => file?.length == 1, "A photo of your skin is required.")
    .refine((file) => file?.[0]?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are accepted."
    ),
  skinConcerns: z.string().min(10, "Please describe your skin concerns (min. 10 characters).").max(500),
  questionnaireResponses: z.string().min(10, "Please provide some details (min. 10 characters).").max(1000),
});

type SkinAnalysisFormValues = z.infer<typeof skinAnalysisFormSchema>;

interface SkinAnalysisFormProps {
  onAnalysisComplete: (result: SkinAnalysisOutput) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export default function SkinAnalysisForm({ onAnalysisComplete, setIsLoading }: SkinAnalysisFormProps) {
  const { toast } = useToast();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SkinAnalysisFormValues>({
    resolver: zodResolver(skinAnalysisFormSchema),
    defaultValues: {
      skinConcerns: "",
      questionnaireResponses: "",
    },
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const onSubmit: SubmitHandler<SkinAnalysisFormValues> = async (data) => {
    setIsSubmitting(true);
    setIsLoading(true);

    if (!data.photo || data.photo.length === 0) {
      toast({
        title: "Error",
        description: "Please upload a photo.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      setIsLoading(false);
      return;
    }

    const file = data.photo[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const photoDataUri = e.target?.result as string;
      if (!photoDataUri) {
        toast({ title: "Error reading file", variant: "destructive" });
        setIsSubmitting(false);
        setIsLoading(false);
        return;
      }

      const input: SkinAnalysisInput = {
        photoDataUri,
        skinConcerns: data.skinConcerns,
        questionnaireResponses: data.questionnaireResponses,
      };

      try {
        const result = await analyzeSkin(input);
        onAnalysisComplete(result);
        toast({
          title: "Analysis Complete!",
          description: "Your personalized skin analysis results are ready.",
        });
      } catch (error) {
        console.error("Skin analysis error:", error);
        toast({
          title: "Analysis Failed",
          description: "An error occurred during skin analysis. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
        setIsLoading(false);
      }
    };

    reader.onerror = () => {
      toast({ title: "Error reading file", variant: "destructive" });
      setIsSubmitting(false);
      setIsLoading(false);
    };
    
    reader.readAsDataURL(file);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-primary">AI Skin Analysis</CardTitle>
        <CardDescription>
          Upload a clear, well-lit photo of your face and answer a few questions to receive your personalized analysis.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="photo" className="text-base">Upload Skin Photo</FormLabel>
                  <FormControl>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        {previewImage ? (
                          <Image src={previewImage} alt="Preview" width={200} height={200} className="mx-auto h-32 w-32 object-cover rounded-md" />
                        ) : (
                          <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                        )}
                        <div className="flex text-sm text-muted-foreground justify-center">
                          <Label
                            htmlFor="photo"
                            className="relative cursor-pointer rounded-md font-medium text-primary hover:text-accent focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-ring"
                          >
                            <span>Upload a file</span>
                            <Input
                              id="photo"
                              type="file"
                              className="sr-only"
                              accept={ACCEPTED_IMAGE_TYPES.join(",")}
                              onBlur={field.onBlur}
                              name={field.name}
                              onChange={(e) => {
                                field.onChange(e.target.files);
                                handleFileChange(e);
                              }}
                              ref={field.ref}
                            />
                          </Label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-muted-foreground">PNG, JPG, WEBP up to 5MB</p>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="skinConcerns"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="skinConcerns" className="text-base">Your Skin Concerns</FormLabel>
                  <FormControl>
                    <Textarea
                      id="skinConcerns"
                      placeholder="e.g., acne, dark spots, dryness, fine lines..."
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="questionnaireResponses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="questionnaireResponses" className="text-base">Brief Skincare Questionnaire</FormLabel>
                  <FormControl>
                    <Textarea
                      id="questionnaireResponses"
                      placeholder="Describe your current skincare routine, allergies, and lifestyle factors (e.g., sun exposure, stress levels)."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full font-semibold" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Analyze My Skin
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
