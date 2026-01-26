'use client';

import { motion } from 'framer-motion';
import { Code2, GraduationCap, LineChart, Zap, Database, Layout } from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: 'Web Development',
        description: 'We build fast, modern, and SEO-friendly websites and web apps using today’s best technologies.',
        features: [
            'Next.js & React',
            'Vue & Nuxt',
            'TypeScript',
            'Responsive Design',
            'Performance & SEO'
        ],
    },

    {
        icon: Database,
        title: 'Full-Stack Solutions',
        description: 'Complete software solutions from backend to frontend. We design, build, and scale your product end to end.',
        features: [
            'Supabase & PostgreSQL',
            'Secure APIs',
            'Authentication & Authorization',
            'Real-time Applications'
        ],
    },

    {
        icon: GraduationCap,
        title: 'Job-Ready Training',
        description: 'Hands-on training focused on real projects, modern tools, and skills required in today’s tech jobs.',
        features: [
            'Real-World Projects',
            'Modern Tech Stack',
            'Mentorship & Code Reviews',
            'Career & Interview Guidance'
        ],
    },


];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                        Services Built for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Growth
            </span>
                    </h2>
                    <p className="text-xl  max-w-2xl mx-auto">
                        Comprehensive development solutions to take your business from idea to industry leader
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-primary/10  hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                                <p className=" mb-6">{service.description}</p>

                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm ">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
