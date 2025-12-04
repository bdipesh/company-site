'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
    {
        icon: MessageSquare,
        title: 'Discovery',
        description: 'We dive deep into your business goals, target audience, and technical requirements.',
        details: ['Stakeholder interviews', 'Competitive analysis', 'Technical audit', 'Project roadmap'],
    },
    {
        icon: Lightbulb,
        title: 'Strategy',
        description: 'We create a comprehensive plan that balances your vision with technical feasibility.',
        details: ['Architecture design', 'Technology selection', 'UX wireframes', 'Sprint planning'],
    },
    {
        icon: Code,
        title: 'Development',
        description: 'Agile development with weekly updates. You see progress every step of the way.',
        details: ['Iterative builds', 'Weekly demos', 'Quality assurance', 'Performance optimization'],
    },
    {
        icon: Rocket,
        title: 'Launch & Scale',
        description: 'We deploy, monitor, and continuously optimize for growth and performance.',
        details: ['Deployment strategy', 'Performance monitoring', 'User feedback loops', 'Ongoing support'],
    },
];

export default function Process() {
    return (
        <section className="py-24 px-4 sm:px-6 bg-white lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Process
            </span>
                    </h2>
                    <p className="text-xl  max-w-2xl mx-auto">
                        A proven methodology that delivers results, on time and on budget
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-[calc(100%+0.75rem)] w-6 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                            )}

                            <div className="p-8 rounded-2xl hover:shadow bg-primary/5  transition-all duration-300 h-full">
                                {/* Step number */}
                                <div className="text-sm font-bold text-primary mb-4">Step {index + 1}</div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                                    <step.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                                <p className=" mb-6">{step.description}</p>

                                <ul className="space-y-2">
                                    {step.details.map((detail) => (
                                        <li key={detail} className="flex items-center text-sm ">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline visual */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block px-6 py-3 rounded-full bg-secondary/10 text-primary">
                        <span className="font-semibold">Average project timeline: 4-12 weeks</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
