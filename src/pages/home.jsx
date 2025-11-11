import { Contact } from "../components/Contact";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Background Effect */}
            <StarBackground />

            {/* navbar */}
            <Navbar />

            {/* {main content} */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectSection />
                <Contact />
            </main>
            <Footer/>
            
        </div>
    )
};