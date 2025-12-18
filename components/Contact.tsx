'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const  openDynamicEmail = ()=> {
        const subject = 'Want to discuss about Idea';
        const body = formData.message;

        const mailtoLink = `mailto:bdipesh08@gmail.com/?subject=${subject}&body=

${formData.name}
${formData.email}
${formData.budget}
${formData.company}
${body}`;

        window.location.href = mailtoLink;
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        openDynamicEmail();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitted(true);
        setIsSubmitting(false);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', company: '', budget: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            {/*<div className="absolute inset-0 overflow-hidden">*/}
            {/*    <div className="bubble absolute bottom-0 w-16 h-16 bg-[#164484] rounded-full opacity-60"></div>*/}
            {/*    <div className="bubble absolute bottom-0 w-20 h-20 bg-[#6aa964] rounded-full opacity-50"></div>*/}
            {/*    <div className="bubble absolute bottom-0 w-24 h-24 bg-[#164484] rounded-full opacity-55"></div>*/}
            {/*    <div className="bubble absolute bottom-0 w-12 h-12 bg-[#6aa964] rounded-full opacity-65"></div>*/}
            {/*    <div className="bubble absolute bottom-0 w-18 h-18 bg-[#164484] rounded-full opacity-60"></div>*/}
            {/*    <div className="bubble absolute bottom-0 w-14 h-14 bg-[#6aa964] rounded-full opacity-50"></div>*/}
            {/*    <div className="bubble absolute bottom-0 w-10 h-10 bg-[#164484] rounded-full opacity-70"></div>*/}
            {/*    <div className="bubble absolute bottom-0 w-22 h-22 bg-[#6aa964] rounded-full opacity-55"></div>*/}
            {/*    <div className="bubble absolute bottom-0 w-16 h-16 bg-[#164484] rounded-full opacity-65"></div>*/}
            {/*    <div className="bubble absolute bottom-0 w-12 h-12 bg-[#6aa964] rounded-full opacity-60"></div>*/}
            {/*</div>*/}
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
                        {`Let's Build{' '}`}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Together
            </span>
                    </h1>
                    <p className="text-xl  max-w-2xl mx-auto">
                        {`                        Tell us about your project and we'll get back to you within 24 hours with a plan to bring your vision to life.
`}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
                                <p className=" mb-8">
                                    {`We're here to answer any questions you have about our services.
                                    Reach out and we'll respond as soon as possible.`}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">Email</div>
                                        <a href="bdipesh08@gmail.com" className=" hover:text-primary transition-colors">
                                            hello@yoursfriend.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-primary mb-1">Phone</div>
                                        <a href="tel:+9779824961082" className=" hover:text-primary transition-colors">
                                            +9779824961082
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-primary mb-1">Location</div>
                                        <p className="">
                                            Remote-first team<br />
                                            Serving clients worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h3 className="text-lg font-semibold text-primary mb-4">Why Work With Us?</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Free project consultation',
                                        '24-hour response time',
                                        'Transparent pricing',
                                        'Agile development process',
                                        'Ongoing support & maintenance',
                                    ].map((benefit) => (
                                        <li key={benefit} className="flex items-center ">
                                            <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div className="p-8 lg:p-12 rounded-2xl bg-primary/5 shadow">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                                    <p className="">
                                        We've received your message and will get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium  mb-2">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium  mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium  mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                                placeholder="Your Company"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-medium  mb-2">
                                                Project Budget
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-white text-primary focus:outline-none focus:border-blue-500 transition-colors"
                                            >
                                                <option value="">Select budget range</option>
                                                <option value="<10k">Less than $10k</option>
                                                <option value="10k-25k">$10k - $25k</option>
                                                <option value="25k-50k">$25k - $50k</option>
                                                <option value="50k+">$50k+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium  mb-2">
                                            Tell us about your project *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-white text-primary placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                            placeholder="Describe your project, goals, and timeline..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-primary cursor-pointer text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
