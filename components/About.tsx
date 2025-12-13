'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: 'Results-Driven',
        description: 'We measure success by your business outcomes, not just deliverables.',
    },
    {
        icon: Clock,
        title: 'Lightning Fast',
        description: 'Speed is our competitive advantage. We ship quality code, fast.',
    },
    {
        icon: Users,
        title: 'True Partnership',
        description: "Your success is our success. We're invested in your long-term growth.",
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'We obsess over details and never compromise on code quality.',
    },
];

export default function About() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            Building the Future,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                One Line at a Time
              </span>
                        </h2>
                        <div className="space-y-4 text-lg  mb-8">
                            <p>
                                We're a team of senior developers and designers who are obsessed with building
                                products that people love. No bloat, no unnecessary meetings, just great code
                                and results that matter.
                            </p>
                            <p>
                                With years of experience building for startups and enterprises, we know what
                                it takes to go from idea to scale. We've been in your shoes, and we're here
                                to help you avoid the pitfalls and accelerate your growth.
                            </p>
                            <p>
                                Whether you're a founder looking to build your MVP or a growing company
                                needing technical expertise, we're your technical co-pilot for the journey ahead.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="px-4 py-2 rounded-lg bg-white border border-blue-500/20 text-primary">
                                <div className="text-2xl font-bold">8+</div>
                                <div className="text-sm">Years Experience</div>
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-white border border-blue-500/20 text-primary">
                                <div className="text-2xl font-bold">8+</div>
                                <div className="text-sm">Projects Delivered</div>
                            </div>
                            <div className="px-4 py-2 rounded-lg bg-white border border-blue-500/20 text-primary">
                                <div className="text-2xl font-bold">100%</div>
                                <div className="text-sm">Remote Team</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl bg-white hover:shadow border border-slate-700/50"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                                <p className="text-sm ">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
