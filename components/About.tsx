'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users, Target } from 'lucide-react';

const values = [
    {
        icon: GraduationCap,
        title: 'Learning by Building',
        description:
            'Students learn by working on real projects, not just watching tutorials or slides.',
    },
    {
        icon: Briefcase,
        title: 'Industry Mindset',
        description:
            'We follow real-world practices so learners and clients get production-ready results.',
    },
    {
        icon: Users,
        title: 'People First',
        description:
            'We care about our students, our clients, and the people using the products we build.',
    },
    {
        icon: Target,
        title: 'Clear Outcomes',
        description:
            'Our focus is simple: job-ready skills for students and reliable software for businesses.',
    },
];

export default function About() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm uppercase tracking-wide text-secondary mb-3">
                            About Us
                        </p>

                        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            Building Skills.
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Building Software.
              </span>
                        </h2>

                        <div className="space-y-4 text-lg text-slate-600 mb-8">
                            <p>
                                We are a tech-focused team helping students and businesses grow
                                through real, practical software development.
                            </p>

                            <p>
                                For students, we offer hands-on training where you learn by
                                building real projects using modern tools and workflows used in
                                the industry.
                            </p>

                            <p>
                                For businesses, we design and develop clean, reliable, and
                                scalable software solutions that solve real problems.
                            </p>

                            <p>
                                Our goal is simple: prepare students for real tech careers and
                                help businesses ship quality products with confidence.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4">
                            <div className="px-4 py-3 rounded-lg bg-white border border-blue-500/20">
                                <div className="text-2xl font-bold text-primary">8+ Years</div>
                                <div className="text-sm text-slate-600">Industry Experience</div>
                            </div>

                            <div className="px-4 py-3 rounded-lg bg-white border border-blue-500/20">
                                <div className="text-2xl font-bold text-primary">15+ Projects</div>
                                <div className="text-sm text-slate-600">Delivered Successfully</div>
                            </div>

                            <div className="px-4 py-3 rounded-lg bg-white border border-blue-500/20">
                                <div className="text-2xl font-bold text-primary">10+ Students</div>
                                <div className="text-sm text-slate-600">Joining more</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl bg-white border border-slate-200 hover:shadow transition"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-primary mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
