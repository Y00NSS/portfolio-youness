import React from "react";
import Image from "next/image";
import ContactIcons from "@/app/components/ContactIcons";

interface Props {
  data: HeroSection;
}

type SocialMedia = {
  [key: string]: string;
};

const HeroSection = ({ data }: Props) => {
  const { my_name, job_title, title_description, social_media } = data;

  return (
    <div className="relative flex flex-col-reverse ">
      <div className="flex flex-col gap-3 rounded-md bg-background  p-5  mt-72 pt-3 sm:bg-transparent sm:p-0 sm:mt-40 sm:mb-0">
        <div className="relative sm:-top-24 space-y-10">
         <p className="animate-fade-left font-bold text-lg sm:text-2xl tracking-tight sm:mt-0 mt-2 ">
          Bonjour👋, je suis {my_name}
         </p>
         <h1
          className="animate-fade-left tracking-tight font-black text-5xl sm:text-6xl text-primary/80 dark:text-primary/80 sm:dark:text-primary/60 md:w-[45%]">
          {job_title}
         </h1>
         <p className="animate-fade-left font-medium text-xl sm:text-3xl">
          {title_description}
         </p>
        </div>
        <div className="animate-fade-up flex sm:gap-3 gap-2 capitalize">
          <ContactIcons socialMedia={social_media as SocialMedia} />
        </div>
      </div>
      <div>
        <Image
          priority={true}
          alt="hero_picture"
          width={900}
          height={1200}
          className="animate-fade-right absolute right-0 -top-4 w-[20rem] sm:right-0 sm:-top-10 h-auto sm:w-[28rem] -z-10 object-contain"
          src="/portfolio_hero.png"
        />
      </div>
    </div>
  );
};

export default HeroSection;
