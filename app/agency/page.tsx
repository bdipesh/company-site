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


export default function Home() {
    return (
        <>
            <Navigation/>
            <main className="min-h-screen bg-primary/5 ">
                <Hero />
                <Stats/>
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
