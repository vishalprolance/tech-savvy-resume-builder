
import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CertificationsSectionProps {
  className?: string;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center gap-2">
        <Award className="h-5 w-5" />
        <CardTitle>Professional Certifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="text-sm space-y-2 list-disc pl-5">
          <li>MongoDB Certificate SI Associate – 3rd Mar 2025</li>
          <li>AWS Solution Architect Associate – 4th Jan 2025</li>
          <li>Google Cloud Platform (GCP) Associate Cloud Engineer (ACE) – valid till 14th May 2026</li>
          <li>Microsoft Azure Fundamentals (AZ-900) – achieved on October 30, 2022</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default CertificationsSection;
