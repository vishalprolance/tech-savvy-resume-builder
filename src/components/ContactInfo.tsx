
import React from 'react';
import { Mail } from 'lucide-react';

interface ContactInfoProps {
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email }) => {
  return (
    <div className="flex items-center space-x-2">
      <Mail className="h-4 w-4" />
      <a 
        href={`mailto:${email}`} 
        className="text-sm hover:underline"
      >
        {email}
      </a>
    </div>
  );
};

export default ContactInfo;
