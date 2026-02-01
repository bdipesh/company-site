'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Layers } from 'lucide-react';
import Dialog from "@/components/ui/Dialog";
import { useState } from "react";
import ContactForm from "@/components/Forms/Contact";

const paths = [
    {
        icon: Code2,
        title: 'Frontend Development',
        subtitle: 'For UI-focused & creative developers',
        description:
            'Learn how to build beautiful, fast, and interactive user interfaces using modern frontend tools and best practices.',
        features: [
            'HTML, CSS & Modern JavaScript',
            'React & Next.js',
            'Component-driven UI',
            'Responsive & Accessible Design',
            'Real-world Frontend Projects',
        ],
        outcome: 'Build production-ready user interfaces with confidence.',
    },
    {
        icon: Server,
        title: 'Backend Development',
        subtitle: 'For logic & system thinkers',
        description:
            'Focus on the server side of applications. Learn how data, APIs, and authentication work behind the scenes.',
        features: [
            'Node.js & APIs',
            'Databases (PostgreSQL)',
            'Authentication & Security',
            'Business Logic & Validation',
            'Scalable Backend Projects',
        ],
        outcome: 'Design and build reliable backend systems.',
    },
    {
        icon: Layers,
        title: 'Full-Stack Development',
        subtitle: 'For future-ready developers',
        description:
            'Become a complete developer by learning both frontend and backend. Build real products from start to finish.',
        features: [
            'Frontend + Backend',
            'Next.js Full-Stack Apps',
            'APIs & Databases',
            'Authentication & Deployment',
            'End-to-End Real Projects',
        ],
        outcome: 'Ship complete applications like a professional developer.',
        highlight: true,
    },
];
const show = true

export default function TrainingPaths() {
    const [showDialog, setShowDialog] = useState(false);
    return (
        <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <Dialog open={showDialog} title={`Thank you for your interest.`} onClose={() => setShowDialog(false) }>
                <div>

                    <div className="h-96 md:h-auto">
                        <ContactForm onClose={() => setShowDialog(false)} />
                    </div>

                </div>
            </Dialog>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <p className="text-sm uppercase tracking-wide text-secondary mb-3">
                        Training Programs
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Choose Your
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {' '}Learning Path
            </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Whether you want to focus on frontend, backend, or become a full-stack
                        developer, our programs are designed to make you job-ready through
                        real projects and practical learning.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paths.map((path, index) => (
                        <motion.div
                            key={path.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-2xl bg-white border transition hover:shadow-lg ${
                                path.highlight
                                    ? 'border-primary shadow-md'
                                    : 'border-slate-200'
                            }`}
                        >
                            {path.highlight && (
                                <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white">
                  Most Popular
                </span>
                            )}

                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                                <path.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-1">
                                {path.title}
                            </h3>
                            <p className="text-sm text-secondary mb-4">
                                {path.subtitle}
                            </p>

                            <p className="text-sm text-slate-600 mb-5">
                                {path.description}
                            </p>

                            <ul className="space-y-2 mb-6">
                                {path.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-sm text-slate-700 flex items-start gap-2"
                                    >
                                        <span className="text-primary mt-1">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-sm font-medium text-primary mb-6">
                                Outcome: {path.outcome}
                            </p>

                            <button onClick={() => setShowDialog(true)}  className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition">
                                Explore This Path
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
