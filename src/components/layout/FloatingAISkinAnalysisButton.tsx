
"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import SkinAnalysisForm from '@/components/skin-analysis/SkinAnalysisForm';
import AnalysisResultCard from '@/components/skin-analysis/AnalysisResultCard';
import type { SkinAnalysisOutput } from '@/app/(main)/skin-analysis/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { Bot, RefreshCw, Sparkles } from 'lucide-react'; // Added Sparkles
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function FloatingAISkinAnalysisButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<SkinAnalysisOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset state when dialog is closed
  useEffect(() => {
    if (!isOpen) {
      setAnalysisResult(null);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleAnalysisComplete = (result: SkinAnalysisOutput) => {
    setAnalysisResult(result);
    // setIsLoading will be set to false by SkinAnalysisForm's finally block
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setIsLoading(false);
  };

  // Do not show the button on the dedicated skin analysis page
  if (pathname === '/skin-analysis') {
    return null;
  }

  if (!isMounted) {
    return null; // Avoid rendering on server or before hydration to prevent layout shifts/errors
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                variant="default"
                size="icon"
                className="fixed bottom-[100px] right-6 h-14 w-14 rounded-full shadow-xl z-50 animate-pulse hover:animate-none"
                aria-label="Open AI Assistant"
              >
                <Sparkles className="h-7 w-7" /> {/* Changed from Bot to Sparkles */}
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-primary text-primary-foreground">
            <p>AI Assistant</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="font-serif text-2xl text-primary flex items-center">
            <Bot className="h-6 w-6 mr-2 text-accent" /> {/* Bot icon remains for title */}
            AI Skin Analysis
          </DialogTitle>
          {!analysisResult && !isLoading && (
            <DialogDescription>
              Upload a clear photo and answer questions for your personalized analysis.
            </DialogDescription>
          )}
          {analysisResult && (
             <DialogDescription>
              Your personalized skin analysis results.
            </DialogDescription>
          )}
           {isLoading && (
             <DialogDescription>
              Analyzing your skin, please wait...
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="flex-grow overflow-y-auto pr-2">
          {!analysisResult && !isLoading && (
            <SkinAnalysisForm onAnalysisComplete={handleAnalysisComplete} setIsLoading={setIsLoading} />
          )}
          
          {isLoading && !analysisResult && (
            <div className="space-y-4 py-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
              <p className="text-center text-primary font-semibold">Analyzing your skin...</p>
            </div>
          )}

          {analysisResult && !isLoading && (
            <AnalysisResultCard result={analysisResult} />
          )}
        </div>
        <DialogFooter className="flex-shrink-0 pt-4">
          {analysisResult && !isLoading && (
             <Button variant="outline" onClick={handleReset} className="mr-auto">
              <RefreshCw className="mr-2 h-4 w-4" />
              Start New Analysis
            </Button>
          )}
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
