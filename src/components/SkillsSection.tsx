
import React from 'react';
import { Tool } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center gap-2">
        <Tool className="h-5 w-5" />
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="text-sm space-y-2 list-disc pl-5">
          <li><strong>Public Cloud:</strong> Amazon Web Services (AWS), Microsoft Azure (AZ), Google Cloud Platform (GCP), On-prem VMware servers.</li>
          <li><strong>Scripting language:</strong> Python, Shell script, PowerShell for windows.</li>
          <li><strong>DevOps Tools (CI/CD/CM):</strong> Complete deployment setup in AWS, or tools like GitHub, TeamCity, Octopus deploy, Jenkins.</li>
          <li><strong>GenAi services:</strong> Amazon Bedrock, OpenAI, GitHub Copilot and multiple others LLM's.</li>
          <li><strong>Non-technical skills:</strong> Business Presentation, Communication and building rapport with clients/customers, stakeholders and team members, Quick learner, Problem solver, creative & critical thinking, and a good listener.</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
