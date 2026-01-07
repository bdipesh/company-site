'use client';

import Link from 'next/link';
import { Github, Instagram, Facebook, Linkedin, Twitter, Mail } from 'lucide-react';
import Image from "next/image";

const footerLinks = {
    services: [
        { label: 'Web Development', href: '#services' },
        { label: 'MVP Development', href: '#services' },
        { label: 'Full-Stack Solutions', href: '#services' },
        { label: 'UI/UX Design', href: '#services' },
    ],
    company: [
        { label: 'About Us', href: '#about' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Process', href: '#process' },
        { label: 'Contact', href: '/contact' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
    ],
};

const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/yoursfriendtech/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/yoursfriend', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61574579494003', label: 'Twitter' },
    { icon: Mail, href: 'mailto:info.yoursfriend@gmail.com', label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800/50 px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src="/logo-full-light.svg" alt='Logo' width={250} height={250} />

                        </Link>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            Building lightning-fast web applications that drive real business results.
                            Your technical co-pilot from MVP to scale.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} YoursFriend. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
