
"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { glowQuizQuestions, type QuizResult } from '@/lib/constants';
import { Progress } from '@/components/ui/progress';
import QuizResultCard from './QuizResultCard';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GlowQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const currentQuestion = glowQuizQuestions[currentQuestionIndex];
  const progressValue = (currentQuestionIndex / glowQuizQuestions.length) * 100;
  const isLastQuestion = currentQuestionIndex === glowQuizQuestions.length - 1;

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      calculateResult();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleAnswerSelect = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = score;
    setAnswers(newAnswers);
  };
  
  const calculateResult = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    let resultTier: 'LUMI' | 'AURA' | 'ÉLEVÉ';

    if (totalScore <= 8) {
        resultTier = 'LUMI';
    } else if (totalScore <= 12) {
        resultTier = 'AURA';
    } else {
        resultTier = 'ÉLEVÉ';
    }
    
    // This assumes `quizResults` is imported from constants and has keys LUMI, AURA, ELEVÉ
    const { quizResults } = require('@/lib/constants'); 
    setQuizResult(quizResults[resultTier]);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizResult(null);
  };
  
  // Reset state when dialog is closed
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Delay reset to allow closing animation to finish
      setTimeout(() => {
        resetQuiz();
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary" className="font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          Take the Glow Quiz
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="font-serif text-2xl text-primary text-center">
            🌟 Altruva Glow Quiz 🌟
          </DialogTitle>
          {!quizResult && (
            <DialogDescription className="text-center">
              Find Your Rhythm. Follow Your Biology. Reveal the Best Version of You.
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="px-6 pb-6">
          {!quizResult ? (
            <div className="space-y-6">
              <Progress value={progressValue} className="w-full" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                  {`Q${currentQuestion.id}: ${currentQuestion.question}`}
                </h3>
                <RadioGroup
                  value={answers[currentQuestionIndex]?.toString()}
                  onValueChange={(value) => handleAnswerSelect(Number(value))}
                  className="space-y-3"
                >
                  {currentQuestion.options.map(option => (
                    <Label
                      key={option.score}
                      htmlFor={`${currentQuestion.id}-${option.score}`}
                      className={cn(
                        "flex items-center space-x-3 rounded-md border p-4 transition-all cursor-pointer",
                        answers[currentQuestionIndex] === option.score 
                          ? "border-primary bg-primary/10"
                          : "border-border hover:bg-accent/50"
                      )}
                    >
                      <RadioGroupItem value={option.score.toString()} id={`${currentQuestion.id}-${option.score}`} />
                      <span>{option.text}</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            </div>
          ) : (
            <QuizResultCard result={quizResult} />
          )}
        </div>

        <DialogFooter className="bg-secondary/30 p-4 flex justify-between w-full">
            {quizResult ? (
                <Button variant="outline" onClick={resetQuiz}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Retake Quiz
                </Button>
            ) : (
                <div /> // Placeholder to push next button to the right
            )}

          <div className="flex items-center gap-4">
            {!quizResult && (
                <p className="text-sm text-muted-foreground">{`${currentQuestionIndex + 1} / ${glowQuizQuestions.length}`}</p>
            )}
            {!quizResult ? (
                <Button 
                    onClick={handleNextQuestion} 
                    disabled={answers[currentQuestionIndex] === undefined}
                >
                    {isLastQuestion ? 'See My Result' : 'Next'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            ) : (
                <DialogClose asChild>
                    <Button type="button">Close</Button>
                </DialogClose>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
