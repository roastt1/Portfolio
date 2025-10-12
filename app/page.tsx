import HomeSection from "./home/components/HomeSection";
import About from "./about/components/About";
import Skills from "./skills/components/Skills";
import Projects from "./projects/components/Projects";

export default function Home() {
    return (
        <div>
            <section id="home" className="min-h-screen">
                <HomeSection />
            </section>
            <section id="about" className="min-h-screen">
                <About />
            </section>
            <section id="skills" className="min-h-screen">
                <Skills />
            </section>
            <section id="projects" className="min-h-screen">
                <Projects />
            </section>
        </div>
    );
}
