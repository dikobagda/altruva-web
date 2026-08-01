
"use client";

import { useState } from 'react';
import PageTitle from '@/components/shared/PageTitle';
import SectionWrapper from '@/components/shared/SectionWrapper';
import SkinAnalysisForm from '@/components/skin-analysis/SkinAnalysisForm';
import AnalysisResultCard from '@/components/skin-analysis/AnalysisResultCard';
import type { SkinAnalysisOutput } from '@/app/(main)/skin-analysis/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { Bot } from 'lucide-react';

export default function SkinAnalysisContent() {
  const [analysisResult, setAnalysisResult] = useState<SkinAnalysisOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalysisComplete = (result: SkinAnalysisOutput) => {
    setAnalysisResult(result);
  };

  return (
    <SectionWrapper>
      <PageTitle
        as="h1"
        title="AI Skin Analysis"
        subtitle="Upload a photo and answer a few questions to receive your personalized AI-powered skin analysis."
      />

      {!analysisResult && (
        <SkinAnalysisForm onAnalysisComplete={handleAnalysisComplete} setIsLoading={setIsLoading} />
      )}
      
      {isLoading && !analysisResult && (
        <div className="max-w-2xl mx-auto mt-8 space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-12 w-1/2 mx-auto" />
          <p className="text-center text-primary font-semibold animate-pulse">Analyzing your skin, please wait...</p>
        </div>
      )}

      {analysisResult && !isLoading && (
        <AnalysisResultCard result={analysisResult} />
      )}
    </SectionWrapper>
  );
}
