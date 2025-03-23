
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface SocialLinksProps {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ github, linkedin, twitter }) => {
  return (
    <div className="flex items-center space-x-4">
      {github && (
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      )}
      
      {linkedin && (
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
