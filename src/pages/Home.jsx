import { ThemeToggle } from "../Component/ThemeToggle";
import { NavBar } from "../Component/NavBar";
import { StarBackground } from "../Component/StarBackground";
import { HeroSection } from "../Component/HeroSection";
import { cn } from "../lib/utils";
import { AboutSection } from "../Component/AboutSection";
import { SkillsSection } from "../Component/SkillsSection";
import { ProjectsSection } from "../Component/ProjectsSection";
import { ContactSection } from "../Component/ContactSection";
import { Footer } from "../Component/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground  items-center justify-center">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effect */}
            <StarBackground />

            {/* Navbar */}
            <NavBar />
            {/* {Main Content} */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Main Content */}

            {/* Footer */}
            <Footer />
        </div>
    );
};
