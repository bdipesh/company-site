'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, LineChart, Zap, Database, Layout } from 'lucide-react';

const services = [
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Lightning-fast websites and web applications built with Next.js, React, and TypeScript. Optimized for performance and SEO.',
        features: ['Next.js & React', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
    },
    {
        icon: Zap,
        title: 'MVP Development',
        description: 'Launch your product in weeks, not months. We build scalable MVPs that validate your idea and attract investors.',
        features: ['Rapid Development', 'Scalable Architecture', 'User Testing', 'Iterative Approach'],
    },
    {
        icon: Database,
        title: 'Full-Stack Solutions',
        description: 'End-to-end development with modern backend technologies. From databases to APIs, we handle the complete stack.',
        features: ['Supabase & PostgreSQL', 'RESTful APIs', 'Authentication', 'Real-time Features'],
    },
    {
        icon: Layout,
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that users love. We create designs that convert visitors into customers.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
        icon: LineChart,
        title: 'Performance Optimization',
        description: 'Speed matters. We optimize your application for lightning-fast load times and better search rankings.',
        features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting', 'Caching Strategies'],
    },
    {
        icon: Rocket,
        title: 'Growth & Scale',
        description: 'Technical partner for your growth journey. We help you scale from 100 to 100,000 users seamlessly.',
        features: ['Infrastructure Scaling', 'Performance Monitoring', 'DevOps', 'Technical Strategy'],
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
