
import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center gap-2">
        <Briefcase className="h-5 w-5" />
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">System Engineer</h3>
            <span className="text-sm text-muted-foreground">March 2021 - Present (4+ Years)</span>
          </div>
          <p className="text-sm font-medium">Tata Consultancy Services Limited</p>
          <ul className="text-sm space-y-2 list-disc pl-5">
            <li>Designed and implemented a Generative AI (GenAI) solution on AWS for log analysis, successfully engaging multiple banks in the ANZ region by showcasing its business value and scalability.</li>
            <li>Received multiple awards and recognitions from both client and organizational leadership for excellence in delivering innovative cloud-based solutions.</li>
            <li>Consulted in architecting a cloud solution for an internal auditing tool leveraging GenAI for one of the oldest British banks in India, ensuring enhanced automation and compliance.</li>
            <li>Proficient in building scalable, secure, and cost-effective cloud architectures with detailed documentation on enterprise Confluence platforms. Skilled in designing multi-cloud and hybrid-cloud environments to meet diverse business needs.</li>
            <li>Led the migration of middleware systems for an Australian bank, including scripting Ant Build packages on TeamCity (CI) and automating deployments (CD) using Shell scripting and Octopus Deploy. Improved DevSecOps maturity by implementing robust security measures across CI/CD pipelines and artifact storage systems.</li>
            <li>Extensive experience with modern architectures, including microservices (SOA), virtualization of services (Akana), serverless computing (AWS Lambda), and containerization (Docker, EKS, ECS). Hands-on expertise in API testing for REST and SOAP architectures.</li>
            <li>Skilled in managing cloud infrastructure, including virtual machines, storage, and networking. Proficient in writing Infrastructure as Code (IaC) using AWS CloudFormation for automated deployments.</li>
            <li>Expert in AWS networking with strong knowledge of VPC design, subnetting, routing, Internet Gateway configurations, and implementing network security best practices.</li>
            <li>Demonstrated ability to analyze complex business requirements and develop tailored cloud solutions to align with organizational goals.</li>
            <li>Experienced in reviewing, troubleshooting, and optimizing cloud environments for enhanced performance, security, and cost efficiency.</li>
            <li>Facilitates knowledge-sharing initiatives by leading technical talks on AWS and Generative AI within BFSI domains. Active member of the organizational AI.Cloud academy, promoting AI-driven solutions and cloud innovations.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceSection;
