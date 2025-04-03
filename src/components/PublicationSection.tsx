
import React from 'react';
import { Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PublicationSectionProps {
  className?: string;
}

const PublicationSection: React.FC<PublicationSectionProps> = ({ className }) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center gap-2">
        <Book className="h-5 w-5" />
        <CardTitle>Publication</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Book Chapter</h3>
            <span className="text-sm text-muted-foreground">November 2021</span>
          </div>
          <p className="text-sm">
            Published a book chapter titled "Design and simulation of 5G microstrip patch antenna array and dodecagonal (12-side) prism shaped base station" in the book "Microstrip Antenna Design for Wireless Applications", published by Taylor & Francis Group.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicationSection;
