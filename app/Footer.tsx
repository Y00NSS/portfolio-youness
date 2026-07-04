import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import ContactIcons from "@/app/components/ContactIcons";


interface SocialMedia {
  [key: string]: string;
}

const Footer = ({data}: { data: HeroSection }) => {
  return (
      <div className="flex justify-between items-center animate-fade-up flex-col gap-5 sm:flex-row ">
        <div className="flex sm:flex-row flex-col items-center gap-5 sm:gap-10">
          <Avatar className="shadow-xl shadow-primary ">
            <AvatarImage rel="apple-touch-icon" src="favicon.ico"/>
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="text-muted-foreground sm:text-sm text-xs flex justify-center sm:justify-start">
            <div className="flex sm:flex-row flex-col gap-0 sm:gap-2">
              <p className="flex gap-1">
                <span className="text-muted-foreground">Développé & conçu par</span> <Link
                className="flex items-center hover:underline hover:text-foreground transition-all font-semibold"
                href="https://github.com/ayoub007-Bit">Ayoub Khachchab</Link>
              </p>
              <p>
                Le code source est disponible sur <Link
                className="underline font-semibold hover:text-foreground transition-all"
                href="https://github.com/ayoub007-Bit/My-Portfolio-Nextjs-typescript">Github</Link>.
              </p>
            </div>
          </div>

        </div>
        <div className="flex sm:gap-5 gap-3 capitalize">
          <ContactIcons socialMedia={data.social_media as SocialMedia}/>
        </div>
      </div>
  )
    ;
};

export default Footer;
