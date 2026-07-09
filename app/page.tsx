import HeroSection from "@/app/HeroSection";
import SeparatorBar from "@/app/SeparatorBar";
import hero_section from "@/change_data/hero_section.json";
import AboutMe from "@/app/AboutMe";
import MySkills from "@/app/MySkills";
import MyProjects from "@/app/MyProjects";
import ActivitiesSection from "@/app/ActivitiesSection";
import ContactSection from "@/app/ContactSection";
import Footer from "@/app/Footer";
import ExperiencesTimeline from "@/app/ExperiencesTimeline";
import EducationTimeline from "@/app/EducationTimeline";
import CertificationsCards from "@/app/components/CertificationsCards";

export default function Home() {
    return (
        <main className="flex flex-col sm:gap-10 gap-5 ">
            <HeroSection data={hero_section}/>
            <div>
                <SeparatorBar data={hero_section}/>
                <AboutMe/>
                <EducationTimeline />
                <ExperiencesTimeline />
                <MySkills data={hero_section}/>
                <MyProjects/>
                <ActivitiesSection/>
                <CertificationsCards />
                <ContactSection/>
            </div>
            <Footer data={hero_section}/>
        </main>
    );
}
