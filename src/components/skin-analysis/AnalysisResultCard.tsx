
import type { SkinAnalysisOutput } from '@/app/(main)/skin-analysis/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, CheckSquare, Microscope, Stethoscope } from 'lucide-react';

interface AnalysisResultCardProps {
  result: SkinAnalysisOutput;
}

const ResultSection: React.FC<{ title: string; content: string; Icon: React.ElementType, badgeContent?: string }> = ({ title, content, Icon, badgeContent }) => (
  <div className="mb-6 p-4 border border-border rounded-lg bg-card/50">
    <div className="flex items-center mb-2">
      <Icon className="h-6 w-6 text-accent mr-3" />
      <h3 className="text-xl font-semibold font-serif text-primary">{title}</h3>
      {badgeContent && <Badge variant="secondary" className="ml-auto">{badgeContent}</Badge>}
    </div>
    <p className="text-foreground/80 whitespace-pre-wrap">{content}</p>
  </div>
);

export default function AnalysisResultCard({ result }: AnalysisResultCardProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl mt-8">
      <CardHeader>
        <CardTitle className="font-serif text-3xl text-center text-primary">Your Personalized Skin Analysis</CardTitle>
        <CardDescription className="text-center text-lg">
          Here are the insights and recommendations based on your submission.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <ResultSection 
            Icon={Microscope}
            title="Identified Skin Type" 
            content={result.skinType || "Not specified"} 
          />
          <ResultSection 
            Icon={Stethoscope}
            title="Identified Skin Condition(s)" 
            content={result.skinCondition || "Not specified"} 
          />
          <ResultSection 
            Icon={Lightbulb}
            title="Personalized Skincare Recommendations" 
            content={result.recommendations || "No specific recommendations provided."} 
          />
          <ResultSection 
            Icon={CheckSquare}
            title="Suggested Treatments" 
            content={result.suggestedTreatments || "No specific treatments suggested."}
          />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
