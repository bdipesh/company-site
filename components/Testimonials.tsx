'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Omar M',
        role: 'CEO & Founder, Testapp.io',
        company: 'Testapp.io',
        content: 'YoursFriend helped us launch our MVP in just 6 weeks. Their technical expertise and clear communication made the entire process seamless. We\'ve now raised our seed round!',
        rating: 5,
    },
    {
        name: 'Himansu Arora',
        role: 'Founder',
        company: 'Copay.au',
        content: 'The team delivered beyond expectations. Not only did they build exactly what we needed, but they also suggested improvements that significantly boosted our conversion rates.',
        rating: 5,
    },
    {
        name: 'Omar G',
        role: 'Founder',
        company: 'Talktime',
        content: 'Working with YoursFriend felt like having a CTO on our team. They understood our vision and translated it into a beautiful, fast product that our users love.',
        rating: 5,
    },



];

export default function Testimonials() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                        Trusted by{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Ambitious Teams
            </span>
                    </h2>
                    <p className="text-xl  max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients say about working with us.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-primary/5  transition-all duration-300"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className=" mb-6 leading-relaxed">{testimonial.content}</p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-primary">{testimonial.name}</div>
                                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                                    <div className="text-xs text-slate-500">{testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
