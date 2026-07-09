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
        <div className="relative sm:-top-24 space-y-10 max-sm:space-y-4">
         <p className="animate-fade-left whitespace-nowrap text-[15px] font-bold tracking-tight sm:mt-0 mt-2 sm:text-2xl ">
          Bonjour👋, je suis {my_name}
         </p>
         <h1
          className="animate-fade-left whitespace-nowrap text-[34px] font-black leading-none tracking-tight text-primary/80 dark:text-primary/80 sm:text-6xl sm:dark:text-primary/60 md:w-[45%]">
          {job_title}
         </h1>
         <p className="animate-fade-left  whitespace-nowrap text-medium tracking-tight sm:text-3xl">
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
          className="animate-fade-right absolute right-0 -top-4 w-[20rem] h-auto -z-10 object-contain max-sm:left-1/2 max-sm:right-auto max-sm:-translate-x-[45%] sm:right-0 sm:-top-10 sm:w-[28rem]"
          src="/portfolio_hero.png"
        />
      </div>
    </div>
  );
};

export default HeroSection;
