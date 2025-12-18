import React from 'react';
import CalendlyButton from "@/components/CandenlyAction";
import Link from "next/link";
import {motion} from "framer-motion";

export default function CoWorkingHeroBackground() {
    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
            {/* Animated Background SVG */}
            <div className="absolute inset-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {/* Gradients for shapes */}
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                            <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.3 }} />
                        </linearGradient>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.5 }} />
                            <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 0.3 }} />
                        </linearGradient>
                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.5 }} />
                            <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 0.3 }} />
                        </linearGradient>
                        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.5 }} />
                            <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.3 }} />
                        </linearGradient>
                    </defs>

                    {/* Connection Lines */}
                    <g className="connection-lines">
                        <line x1="15%" y1="20%" x2="35%" y2="40%" stroke="#3b82f6" strokeWidth="1" opacity="0.3">
                            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite" />
                        </line>
                        <line x1="65%" y1="30%" x2="80%" y2="50%" stroke="#06b6d4" strokeWidth="1" opacity="0.3">
                            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5s" repeatCount="indefinite" />
                        </line>
                        <line x1="25%" y1="70%" x2="45%" y2="55%" stroke="#8b5cf6" strokeWidth="1" opacity="0.3">
                            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="6s" repeatCount="indefinite" />
                        </line>
                        <line x1="70%" y1="65%" x2="85%" y2="80%" stroke="#10b981" strokeWidth="1" opacity="0.3">
                            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4.5s" repeatCount="indefinite" />
                        </line>
                    </g>

                    {/* Floating Circles (representing people/nodes) */}
                    <circle cx="15%" cy="20%" r="40" fill="url(#grad1)">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 10,-15; 0,0"
                            dur="8s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <circle cx="35%" cy="40%" r="30" fill="url(#grad2)">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; -15,10; 0,0"
                            dur="10s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <circle cx="65%" cy="30%" r="35" fill="url(#grad3)">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 12,20; 0,0"
                            dur="9s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <circle cx="80%" cy="50%" r="25" fill="url(#grad4)">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; -10,-12; 0,0"
                            dur="7s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    {/* Geometric Shapes */}
                    {/* Squares */}
                    <rect x="20%" y="65%" width="50" height="50" fill="url(#grad1)" opacity="0.4" rx="5">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 15,10; 0,0"
                            dur="11s"
                            repeatCount="indefinite"
                        />
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="0 25 70; 15 25 70; 0 25 70"
                            dur="11s"
                            repeatCount="indefinite"
                            additive="sum"
                        />
                    </rect>

                    <rect x="75%" y="70%" width="40" height="40" fill="url(#grad2)" opacity="0.4" rx="5">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; -12,15; 0,0"
                            dur="9s"
                            repeatCount="indefinite"
                        />
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="0 77 72; -15 77 72; 0 77 72"
                            dur="9s"
                            repeatCount="indefinite"
                            additive="sum"
                        />
                    </rect>

                    {/* Triangles */}
                    <polygon points="45,15 55,35 35,35" fill="url(#grad3)" opacity="0.4">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; -8,12; 0,0"
                            dur="12s"
                            repeatCount="indefinite"
                        />
                    </polygon>

                    <polygon points="85,25 92,40 78,40" fill="url(#grad4)" opacity="0.4">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 10,-8; 0,0"
                            dur="10s"
                            repeatCount="indefinite"
                        />
                    </polygon>

                    {/* Small accent circles */}
                    <circle cx="50%" cy="85%" r="20" fill="url(#grad1)" opacity="0.3">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 8,-10; 0,0"
                            dur="7s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <circle cx="90%" cy="15%" r="15" fill="url(#grad2)" opacity="0.3">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; -5,8; 0,0"
                            dur="8s"
                            repeatCount="indefinite"
                        />
                    </circle>

                    <circle cx="10%" cy="50%" r="18" fill="url(#grad3)" opacity="0.3">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 12,5; 0,0"
                            dur="9s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </svg>
            </div>

            {/* Content Area - Example */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                        Welcome to Your
                        <br />
                        <div className="text-primary mt-6">Coworking Space at Yoursfriend
</div>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        The first professional coworking space in the area — built for developers, freelancers, students, and startups.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex mt-6 flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <CalendlyButton fromHeader={true}/>

                        <Link
                            href="https://wa.me/9779824961082"
                            target="_blank"
                            className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Whatsapp
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
