
"use client";

import { Check } from "lucide-react";
import Hero from '@/components/CoWork/Hero'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CoworkingPage() {
  return (
      <>
        <Navigation/>
        <Hero/>

      {/* Why */}
      <section className="flex mt-10 w-full md:w-1/2 mx-auto  justify-evenly items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Coworking?</h2>
          <p className=" leading-relaxed">
            Working from home or cafés limits focus and growth. Our coworking
            space gives you a distraction-free, tech-friendly environment where
            productivity meets community.
          </p>
            <div className="space-y-3 my-6">
                {[
                    "High-speed internet",
                    "Uninterrupted power backup",
                    "Quiet & focused workspace",
                    "Tech-driven community",
                ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                        <Check className="text-green-500" size={18} />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>

      </section>

      {/* Pricing */}
      <section className="max-w-6xl  mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Flexible Pricing Plans
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Daily */}
          <div className="rounded-2xl border text-white border-primary bg-primary p-6 hover:border-indigo-600 transition">
            <h3 className="text-xl font-semibold mb-2">Daily Pass</h3>
            <p className="text-white mb-4">Best for short-term work</p>
            <p className="text-3xl font-bold mb-6">NPR 300</p>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex gap-2"><Check size={16}/> Full-day access</li>
              <li className="flex gap-2"><Check size={16}/> High-speed internet</li>
              <li className="flex gap-2"><Check size={16}/> Power backup</li>
            </ul>
            <a
              href="/contact"
              className="block text-center rounded-xl bg-secondary py-2 hover:bg-secondary transition"
            >
              Choose Plan
            </a>
          </div>

          {/* Monthly */}
          <div className="rounded-2xl border-2 text-white border-indigo-600 bg-primary p-6 shadow-xl scale-105">
            <span className="inline-block mb-3 text-xs font-semibold text-indigo-400">
              MOST POPULAR
            </span>
            <h3 className="text-xl font-semibold mb-2">Monthly Membership</h3>
            <p className=" mb-4">Ideal for professionals</p>
            <p className="text-3xl font-bold mb-6">NPR 6,000</p>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex gap-2"><Check size={16}/> Unlimited access</li>
              <li className="flex gap-2"><Check size={16}/> Dedicated desk</li>
              <li className="flex gap-2"><Check size={16}/> Community events</li>
            </ul>
            <a
              href="/contact"
              className="block text-center rounded-xl bg-secondary py-2 font-semibold hover:bg-indigo-500 transition"
            >
              Get Started
            </a>
          </div>

          {/* Student */}
          <div className="rounded-2xl border text-white border-primary bg-primary p-6 hover:border-indigo-600 transition">
            <h3 className="text-xl font-semibold mb-2">Student Plan</h3>
            <p className=" mb-4">Affordable learning space</p>
            <p className="text-3xl font-bold mb-6">NPR 5,000</p>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex gap-2"><Check size={16}/> Daytime access</li>
              <li className="flex gap-2"><Check size={16}/> Study-friendly environment</li>
              <li className="flex gap-2"><Check size={16}/> Mentor guidance</li>
            </ul>
            <a
              href="/contact"
              className="block text-center rounded-xl bg-secondary py-2 hover:bg-secondary transition"
            >
              Choose Plan
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Coming Soon 🚧</h2>
        <p className=" mb-8">
          Reserve your seat early and get exclusive member benefits.
        </p>
        <a
          href="/contact"
          className="inline-block rounded-xl bg-secondary px-10 py-3 font-semibold hover:bg-indigo-500 transition"
        >
          Contact Us
        </a>
      </section>
          <Footer/>
    </>
  );
}

