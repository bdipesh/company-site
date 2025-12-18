'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import CalendlyButton from "@/components/CandenlyAction";

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 overflow-hidden">
                <div className="bubble absolute bottom-0 w-16 h-16 bg-[#164484] rounded-full opacity-60"></div>
                <div className="bubble absolute bottom-0 w-20 h-20 bg-[#6aa964] rounded-full opacity-50"></div>
                <div className="bubble absolute bottom-0 w-24 h-24 bg-[#164484] rounded-full opacity-55"></div>
                <div className="bubble absolute bottom-0 w-12 h-12 bg-[#6aa964] rounded-full opacity-65"></div>
                <div className="bubble absolute bottom-0 w-18 h-18 bg-[#164484] rounded-full opacity-60"></div>
                <div className="bubble absolute bottom-0 w-14 h-14 bg-[#6aa964] rounded-full opacity-50"></div>
                <div className="bubble absolute bottom-0 w-10 h-10 bg-[#164484] rounded-full opacity-70"></div>
                <div className="bubble absolute bottom-0 w-22 h-22 bg-[#6aa964] rounded-full opacity-55"></div>
                <div className="bubble absolute bottom-0 w-16 h-16 bg-[#164484] rounded-full opacity-65"></div>
                <div className="bubble absolute bottom-0 w-12 h-12 bg-[#6aa964] rounded-full opacity-60"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto text-center">


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
                >

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-blue-500/20 text-primary text-sm font-medium"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>I am Dipesh Basnet</span>
                    </motion.div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary  to-secondary">
            Software Engineer
          </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl  mb-12 max-w-3xl mx-auto"
                >
                    Crafting responsive and user-friendly applications. Worked with many clients and startups around the globe, helping to implement ideas into applications using latest technologies in market.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <CalendlyButton fromHeader={true}/>

                    <Link
                        href="#case-studies"
                        className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                        View my Work
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-20 text-sm "
                >
                    <p>Trusted by startups and scale-ups worldwide</p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
