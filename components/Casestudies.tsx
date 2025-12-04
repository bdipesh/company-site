'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Zap, Users } from 'lucide-react';
import Image from 'next/image';

const caseStudies = [
    {
        title: 'CoPay',
        category: 'Real Estate Platform',
        description: 'Co-ownership real estate platform enabling fractional property investment',
        image: '/images/copay-hero.jpg', // You'll need to add this
        link: 'https://copay.au',
        tags: ['Next.js', 'TypeScript', 'Supabase', 'SEO'],
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Talktime.ae',
        category: 'SaaS Platform',
        description: 'Convenient, secure, and confidential online therapy from the comfort of your home.',
        image: '/images/financeflow.jpg',
        link: 'https://talktime.ae',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        title: 'Testapp.io',
        category: 'SaaS Platform',
        description: 'TestApp.io is a powerful, easy-to-use platform that enables mobile app teams to test and release their apps smoothly, quickly, and reliably.',
        image: '/images/shoplocal.jpg',
        link: 'https://testapp.io',
        tags: ['Next.js', 'Shopify', 'Tailwind', 'GraphQL'],
        gradient: 'from-orange-500 to-red-500',
    },
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                        Our Current{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Clients
            </span>
                    </h2>
                    <p className="text-xl  max-w-2xl mx-auto">
                        Real businesses. Real growth. See how we've helped companies scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-12 gap-12">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative col-span-12 bg-white md:col-span-4 h-full hover:shadow rounded-2xl  overflow-hidden  transition-all duration-300"
                        >
                            <div className="grid lg:grid-cols-2 gap-8 p-8 h-auto bg-white lg:p-12">
                                {/* Content */}
                                <div className="flex flex-col bg-white col-span-4 h-auto justify-center">
                                    <div className="text-sm text-primary font-semibold mb-2">{study.category}</div>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{study.title}</h3>
                                    <p className="text-lg mb-6">{study.description}</p>

                                    {/* Results */}



                                    <Link
                                        href={study.link}
                                        target="_blank"
                                        className="inline-flex bg-white items-center gap-2  transition-colors group"
                                    >
                                        <span className="font-semibold text-primary">View Project</span>
                                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                </div>


                            </div>

                            {/* Hover effect */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
