import React from 'react';
import Link from "next/link";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoDocumentTextOutline
} from "react-icons/io5";

interface Framework {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const allContacts: Framework[] = [
  { value: 'github', label: 'Github', icon: <IoLogoGithub size={25} /> },
  { value: 'linkedin', label: 'Linkedin', icon: <IoLogoLinkedin size={25} /> },
];

interface SocialMedia {
  [key: string]: string;
}

const renderContact = (socialMedia: SocialMedia) => {
  const renderedContacts = [];

  const githubUrl = socialMedia['github'];
  if (githubUrl) {
    renderedContacts.push(
      <div key="github" className="w-8 h-8 rounded-full hover:-translate-y-1 text-foreground/80 bg-background shadow-lg hover:shadow-primary transition-all flex items-center justify-center">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <IoLogoGithub size={25} />
        </Link>
      </div>
    );
  }

  const linkedinUrl = socialMedia['linkedin'];
  if (linkedinUrl) {
    renderedContacts.push(
      <div key="linkedin" className="w-8 h-8 rounded-full hover:-translate-y-1 text-foreground/80 bg-background shadow-lg hover:shadow-primary transition-all  flex items-center justify-center">
        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin size={25} />
        </Link>
      </div>
    );
  }

  const cvDownloadUrl = socialMedia['cv_download'];
  if (cvDownloadUrl) {
    renderedContacts.push(
      <Link key="cv_download" href={cvDownloadUrl} target="_blank" rel="noopener noreferrer" className="h-8 px-4 rounded-full hover:-translate-y-1 text-foreground/80 bg-background shadow-lg hover:shadow-primary transition-all flex items-center justify-center gap-2">
        <IoDocumentTextOutline size={18} />
        <span className="text-sm font-medium">Consulter CV</span>
      </Link>
    );
  }

  return renderedContacts;
};

const ContactIcons = ({ socialMedia }: { socialMedia: SocialMedia }) => {
  return (
    <div className="flex gap-2">
      {renderContact(socialMedia)}
    </div>
  );
};

export default ContactIcons;