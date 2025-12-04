'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import CalendlyButton from "@/components/CandenlyAction";


export default function CTA() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />

                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                    {/* Content */}
                    <div className="relative z-10 text-center py-20 px-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-bold text-white mb-6"
                        >
                            Ready to Build Something Amazing?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
                        >
                            Let's turn your vision into reality. Book a free consultation and
                            discover how we can accelerate your business growth.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Link
                                href="/contact"
                                className="group px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 flex items-center gap-2 shadow-lg"
                            >
                                Start Your Project
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <CalendlyButton fromHeader={true}/>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-8 text-white/70 text-sm"
                        >
                            <p>No commitment required • Get a free project estimate • Response within 24 hours</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
