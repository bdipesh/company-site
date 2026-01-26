import Hero from '@/components/Hero';
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CaseStudies from "@/components/Casestudies";
import Process from "@/components/Process";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Navigation from "@/components/Navigation";
import NewHero from "@/components/NewHero";
import TrainingPaths from "@/components/TraningPaths";


export default function Home() {
    return (
        <>
            <nav className="sticky top-0 z-50 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/new-logo/main-logo.svg" height={200} width={200} />
                    </div>


                    <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
                        <a href="#programs" className="hover:text-primary">Programs</a>
                        <a href="#about" className="hover:text-primary">About</a>
                        <a href="#contact" className="hover:text-primary">Contact</a>
                    </div>


                    <a
                        href="https://tawk.to"
                        target="_blank"
                        className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium"
                    >
                        Chat With Us
                    </a>
                </div>
            </nav>
            <main className="min-h-screen bg-primary/5 ">
                <NewHero/>
                <TrainingPaths/>
                <Services/>
                <CaseStudies/>
                <Process/>
                <About/>
                <Testimonials/>
                <CTA/>

            </main>
            <Footer/>
        </>
    );
}
