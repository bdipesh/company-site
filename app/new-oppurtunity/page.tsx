"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Users, Calendar, Gift, MapPin, Phone, Zap, Target, Award, Code, Briefcase } from 'lucide-react';
import Navigation from "@/components/Navigation";
import CalendlyButton from "@/components/CandenlyAction";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openChatWithMessage = () => {
        const tawkApi = (window as any).Tawk_API;
        if(tawkApi) {
            // Predefined message context for the agent
            tawkApi.addEvent('interested-in-demo', {
                'message': 'I would like to register for the 3-day demo bootcamp'
            }, (error: any) => {
                if (error) console.error('Tawk_API error:', error);
            });
            tawkApi.maximize();
        }
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const scaleIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <Navigation/>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-4">
                <div className="max-w-6xl mx-auto">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center"
                    >

                        <motion.div
                            variants={fadeInUp}
                            className="inline-block mt-10 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                        >
                            📌 Founding Batch – Only 10 Students | Personal Mentorship
                        </motion.div>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-12 mt-6 leading-tight"
                        >
                            FROM CONFUSED IT STUDENT<br />
                            TO
                            <span className="text-transparent bg-clip-text mx-3 bg-gradient-to-r from-primary  to-secondary">
            JOB-READY DEVELOPER
          </span>
                             IN 90 DAYS
                        </motion.h1>



                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <CalendlyButton fromHeader={true}/>

                            <Link
                                href="/co-work"
                                className="px-8 py-4 border border-secondary text-secondary rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                            >
                                Free 3-day Bootcamp
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#164484] opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6aa964] opacity-5 rounded-full translate-x-32 translate-y-32"></div>
            </section>

            {/* Problem Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-bold text-center text-primary mb-4"
                        >
                            Why We are Here
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-center text-gray-600 mb-12"
                        >
                            Sound familiar?
                        </motion.p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'Degree but no practical skills?',
                                'YouTube courses but no direction?',
                                'Fear of interviews & real projects?',
                                'Unsure how to start your tech career?'
                            ].map((problem, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-start gap-4 p-6 bg-red-50 rounded-xl border-l-4 border-red-500"
                                >
                                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                    <p className="text-lg text-gray-700">{problem}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-2xl font-semibold text-center text-black mt-12"
                        >
                            👉 You are not alone. Most IT students are stuck here.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-[#164484] to-[#1a5299] text-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-bold text-center mb-4"
                        >
                            How can we help you
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl text-center mb-12 text-blue-100"
                        >
                            At YoursFriend Tech & Software Solutions, we train you like a real software company does.
                        </motion.p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Code, text: 'Live Coding (No theory-only)' },
                                { icon: Briefcase, text: 'Real Industry Project' },
                                { icon: Users, text: 'Personal 1-on-1 Mentorship' },
                                { icon: Award, text: 'Internship Certificate' },
                                { icon: Target, text: 'Job & Freelancing Guidance' },
                                { icon: Zap, text: 'Hands-on Practice' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={scaleIn}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                                >
                                    <div className="bg-[#6aa964] p-3 rounded-lg">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-lg flex-1">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Who Should Join */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-bold text-center text-[#164484] mb-12"
                        >
                            🎯 WHO SHOULD JOIN?
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                'Final year IT / CS students',
                                'Recently graduated students',
                                'Beginners serious about tech career'
                            ].map((audience, index) => (
                                <motion.div
                                    key={index}
                                    variants={scaleIn}
                                    whileHover={{ y: -10 }}
                                    className="text-center p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-lg"
                                >
                                    <div className="w-16 h-16 bg-[#6aa964] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Check className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-lg font-semibold text-gray-800">{audience}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Course Details */}
            <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl font-bold text-center text-[#164484] mb-8"
                        >
                            ⏳ COURSE DURATION
                        </motion.h2>
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-wrap justify-center gap-6 mb-12"
                        >
                            <div className="flex items-center gap-3 bg-[#164484] text-white px-6 py-3 rounded-full">
                                <Calendar className="w-5 h-5" />
                                <span className="font-semibold">90 Days</span>
                            </div>
                            <div className="flex items-center gap-3 bg-[#6aa964] text-white px-6 py-3 rounded-full">
                                <MapPin className="w-5 h-5" />
                                <span className="font-semibold">Offline</span>
                            </div>
                            <div className="flex items-center gap-3 bg-[#164484] text-white px-6 py-3 rounded-full">
                                <Users className="w-5 h-5" />
                                <span className="font-semibold">Small Batch</span>
                            </div>
                        </motion.div>

                        <motion.h3
                            variants={fadeInUp}
                            className="text-2xl md:text-3xl font-bold text-center text-[#6aa964] mb-6"
                        >
                            🎁 FOUNDING BATCH BENEFITS
                        </motion.h3>

                        <motion.div
                            variants={staggerContainer}
                            className="space-y-4"
                        >
                            {[
                                'Lowest fee ever (one-time offer)',
                                'Direct access to senior developer',
                                'Lifetime community support',
                                'Certificate + project portfolio'
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-center gap-4 p-4 bg-green-50 rounded-lg"
                                >
                                    <div className="bg-[#6aa964] p-2 rounded-full">
                                        <Check className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="text-lg text-gray-800">{benefit}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Demo Bootcamp CTA */}
            <section id="demo" className="py-16 px-4 bg-gradient-to-br from-[#6aa964] to-[#5a9954]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-bold text-white mb-6"
                        >
                            🚀 FREE 3-DAY DEMO BOOTCAMP
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-2xl text-white mb-8"
                        >
                            Learn first → Decide later
                        </motion.p>
                        <motion.div
                            variants={scaleIn}
                            className="bg-white p-8 rounded-2xl shadow-2xl"
                        >
                            <p className="text-lg text-gray-700 mb-6">
                                Experience our teaching methodology, meet your mentor, and see if this is the right fit for you - absolutely FREE!
                            </p>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openChatWithMessage()}
                                className="inline-block bg-[#164484] text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-[#1a5299] transition-colors shadow-lg"
                            >
                                Register for Demo
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl font-bold text-[#164484] mb-8"
                        >
                            📍 VISIT US
                        </motion.h2>

                        <motion.div
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                YoursFriend Co-Working & Training Space
                            </h3>
                            <div>
                                Birtamode, Hicola road
                            </div>
                            <p className="text-xl text-gray-600 mb-4">
                                🌐 www.yoursfriend.com
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="bg-[#164484] text-white p-8 rounded-2xl shadow-xl"
                        >
                            <h3 className="text-2xl font-bold mb-4">
                                📞 CALL / WHATSAPP NOW
                            </h3>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="https://wa.me/+9779824961082"
                                target="_blank"
                                className="inline-flex items-center gap-3 bg-white text-[#164484] px-8 py-4 rounded-full text-2xl font-bold hover:bg-gray-100 transition-colors"
                            >
                                <Phone className="w-6 h-6" />
                                9824961082
                            </motion.a>
                            <p className="text-xl mt-6 text-yellow-300 font-semibold">
                                ⚠️ Only 10 Seats – First Come First Serve
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer/>

            {/* Floating CTA Button */}
            <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/+9779824961082"
                target="_blank"
                className="fixed bottom-8 right-8 bg-[#6aa964] text-white p-4 rounded-full shadow-2xl z-50 hover:bg-[#5a9954] transition-colors"
            >
                <Phone className="w-6 h-6" />
            </motion.a>
        </div>
    );
}
