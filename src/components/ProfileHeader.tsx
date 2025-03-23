
import React from 'react';
import { MapPin } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  title: string;
  location: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, title, location }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        {name}
      </h1>
      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
        {title}
      </p>
      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
        <MapPin className="h-4 w-4" />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
