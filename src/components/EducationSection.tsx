
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationSectionProps {
  className?: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center gap-2">
        <GraduationCap className="h-5 w-5" />
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Master of Technology (Int M.Tech)</h3>
            <span className="text-sm text-muted-foreground">September 2020</span>
          </div>
          <p className="text-sm font-medium">Central University of Karnataka</p>
          <p className="text-sm">
            Pursued integrated master's in Information & Communication Technology (ICT) with a project on "Design and simulation of 5G microstrip patch antenna array and dodecagonal (12-side) prism shaped base station." Awarded 9.2 CGPA out of 10.
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Bachelor of Technology (B.Tech)</h3>
            <span className="text-sm text-muted-foreground">May 2019</span>
          </div>
          <p className="text-sm font-medium">Central University of Karnataka</p>
          <p className="text-sm">
            Pursued bachelor's degree in Electronics & Communication Engineering (ECE) with a final year project on "Li-Fi enabled underwater communication system." Achieved 6.9 CGPA overall with consistent improvement from 1st to 8th semester.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationSection;
