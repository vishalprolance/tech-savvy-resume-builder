
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ProfileHeader from "@/components/ProfileHeader";
import ContactInfo from "@/components/ContactInfo";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50 transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeToggle />
      </div>

      {/* Hero Section with Profile */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <ProfileHeader 
                name="Vishal A Ker"
                title="GenAI, Cloud and DevOps Senior Engineer"
                location="Bengaluru"
              />
              
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <ContactInfo email="vishalaker1997@gmail.com" />
                <SocialLinks 
                  github="https://github.com/vishalprolance"
                  linkedin="https://www.linkedin.com/in/vishalaker/"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button 
                  className="w-full sm:w-auto"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                >
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </div>
            </div>
            
            <div className="mx-auto lg:mx-0 flex items-center justify-center">
              <Card className="w-full max-w-sm overflow-hidden">
                <AspectRatio ratio={4/5} className="bg-muted">
                  <Avatar className="h-full w-full rounded-none">
                    <AvatarImage 
                      src="/lovable-uploads/57ba1c87-10cc-4bf0-ac29-a550d01787e4.png" 
                      alt="Vishal A Ker" 
                      className="object-cover h-full w-full"
                    />
                    <AvatarFallback className="text-3xl">VAK</AvatarFallback>
                  </Avatar>
                </AspectRatio>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for future sections */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Coming Soon</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                More details about my career, projects, and skills will be added here soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
