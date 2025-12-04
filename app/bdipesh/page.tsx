'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const projects = [
    {
        name: 'Real HR soft',
        description: 'Streamlines payroll, attendance, onboarding, and performance management for businesses in Nepal.',
        logo: '/images/logos/realhrsoft.png',
        url: 'https://realhrsoft.com',
    },
    {
        name: 'Rojgari',
        description: "Nepal's leading blue-collar job portal bridging skilled/semi-skilled jobseekers with employers.",
        logo: '/images/logos/rojgari.png',
        url: 'https://rojgari.com',
    },
    {
        name: 'Agentcis',
        description: 'CRM for education and migration agencies with automation, workflows, analytics and document tracking.',
        logo: '/images/logos/agentcis.png',
        url: 'https://agentcis.com',
    },
    {
        name: 'Testapp',
        description: 'Cross-platform mobile app distribution & testing—feedback, analytics & SDK for Android & iOS.',
        logo: '/images/logos/testapp.png',
        url: 'https://testapp.io',
    },
    {
        name: 'Talktime',
        description: 'MENA-facing mental health platform matching clients to therapists for text/video/audio counselling.',
        logo: '/images/logos/talktime.png',
        url: 'https://talktime.ae',
    },
    {
        name: 'Copay',
        description: 'Co-ownership platform for luxury assets (homes, caravans, boats) in Australia—shared equity and hassle-free management.',
        logo: '/images/logos/copay.png',
        url: 'https://copay.com.au',
    },
];

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Talktime Limited',
        period: 'Mar 2024 — May 2025',
        location: 'UAE (Remote)',
    },
    {
        title: 'Software Engineer',
        company: 'Testapp.io',
        period: 'Mar 2021 — Oct 2023',
        location: 'UAE (Remote)',
    },
    {
        title: 'Software Engineer',
        company: 'Introcept Nepal',
        period: 'Jul 2020 — Mar 2021',
        location: 'Kathmandu (on-site)',
    },
    {
        title: 'Software Developer',
        company: 'Aaayulogic Pvt. Ltd',
        period: 'Aug 2018 — Jul 2020',
        location: 'Kathmandu (on-site)',
    },
    {
        title: 'Software Engineer',
        company: 'Self Employed',
        period: 'Nov 2020 — Present',
        location: '(Remote)',
    },
];

const testimonials = [
    {
        text: 'Dipesh is an amazing Software engineer. He helped a lot in our initial phase where we needed to develop and fix things quickly. He is polite, responsive, and highly skilled in Vuejs. I highly recommend him for any kind of project, he is worth it. Thank you Dipesh!',
        author: 'Client',
    },
    {
        text: 'Will take initiative and ownership and willing to deliver a superior product, flexible and value driven.',
        author: 'Client',
    },
    {
        text: 'Dipesh was polite and considerate in all our communications. When he finished tasks, he was always eager to have new work assigned',
        author: 'Client',
    },
    {
        text: 'Great freelancer who worked on Vuetify / Vue UI/UX designs.',
        author: 'Client',
    },
];

const highlights = [
    {
        title: 'Involvement',
        description: 'Currently working as a Software Engineer at Talktime UAE, contributing to cutting-edge Mental Health Counselling Platform remotely from Nepal.',
    },
    {
        title: 'Collaboration',
        description: 'Proven track record of successful remote collaborations, having worked with international teams at TestApp.io, Talktime and Upwork for nearly 3 years.',
    },
    {
        title: 'Experiences',
        description: 'Diverse experience ranging from startups to established companies, including roles at IntroCept Nepal and AayuLogic Pvt. Ltd.',
    },
    {
        title: 'Flexibility',
        description: 'Adaptable to both remote and on-site work environments, with a strong focus on delivering high-quality full stack solutions.',
    },
];

function AnimatedText({ text, className = '' }: { text: string; className?: string }) {
    const words = text.split(' ');

    return (
        <span className={className}>
      {words.map((word, i) => (
          <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="inline-block mr-2"
          >
              {word}
          </motion.span>
      ))}
    </span>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
                <div className="w-16 h-16 mb-4 relative overflow-hidden rounded-xl bg-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.name}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                </p>

                <Link
                    href={project.url}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                    Visit Project
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </motion.div>
    );
}

function ExperienceItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-8 border-l-2 border-blue-500/30 last:pb-0"
        >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900" />

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <h3 className="text-lg font-bold text-white mb-1">{experience.title}</h3>
                <p className="text-blue-400 font-medium mb-1">{experience.company}</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                    <span>{experience.period}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                </div>
            </div>
        </motion.div>
    );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
        >
            <div className="mb-4">
                <svg className="w-8 h-8 text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 italic">{testimonial.text}</p>
            <p className="text-blue-400 font-medium">— {testimonial.author}</p>
        </motion.div>
    );
}

export default function Home() {
    const { scrollYProgress } = useScroll();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen  bg-white    relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="fixed inset-0 opacity-30">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
            </div>

            {/* Cursor follower */}
            <motion.div
                className="fixed w-6 h-6 rounded-full bg-blue-500/30 pointer-events-none z-50 mix-blend-screen"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            />

            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-gray-900/50 border-b border-white/10"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        Dipesh Basnet
                    </motion.div>

                    <div className="flex gap-6">
                        <motion.a
                            href="/files/Dipesh_Basnet_CV.pdf"
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                        >
                            Download CV
                        </motion.a>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            <AnimatedText text="Software Engineer" />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                        >
                            Building exceptional digital experiences with React, Vue.js, Node.js, Express.js and TypeScript
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex gap-4 justify-center flex-wrap"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
                            >
                                View My Work
                            </motion.a>

                            <motion.a
                                href="https://www.linkedin.com/in/bdipesh/"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all"
                            >
                                Get in Touch
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-blue-400 mb-2">{highlight.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 text-lg">Innovative solutions I've built for clients worldwide</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="relative py-20 px-6 bg-black/20">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Experience
                        </h2>
                        <p className="text-gray-400 text-lg">My professional journey in software development</p>
                    </motion.div>

                    <div className="relative">
                        {experiences.map((experience, index) => (
                            <ExperienceItem key={index} experience={experience} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Client Testimonials
                        </h2>
                        <p className="text-gray-400 text-lg">What clients say about working with me</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative py-12 px-6 border-t border-white/10 bg-black/20">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-400">© 2025 Dipesh Basnet.</p>
                </div>
            </footer>
        </div>
    );
}
