"use client";
import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Laptop, Flower2, Footprints, Apple } from "lucide-react";

const personas = [
    {
        icon: Dumbbell,
        audience: "Fitness Enthusiasts",
        value: "Track every workout, monitor recovery, and let AI predict your optimal training zones.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Laptop,
        audience: "Desk Workers",
        value: "Get gentle nudges to move, hydrate, and protect your posture throughout the workday.",
        color: "from-indigo-500 to-purple-500",
    },
    {
        icon: Flower2,
        audience: "Wellness Seekers",
        value: "Balance activity with mindfulness through holistic sleep, stress, and recovery metrics.",
        color: "from-pink-500 to-rose-500",
    },
    {
        icon: Footprints,
        audience: "Endurance Athletes",
        value: "Long-term trend graphs and race-day readiness scores keep you accountable to big goals.",
        color: "from-orange-500 to-amber-500",
    },
    {
        icon: Apple,
        audience: "Health-Conscious",
        value: "Pin the metrics that matter most and watch them improve week over week.",
        color: "from-emerald-500 to-teal-500",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <div className="inline-block bg-white border border-gray-200 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-4 shadow-sm">
                    👥 Built for Everyone
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Designed for Every <span className="text-gradient">Lifestyle</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Whatever your routine, Health Fusion 360 adapts to your goals.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="flex relative w-full overflow-hidden py-8">
                <motion.div
                    className="flex gap-8 shrink-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                >
                    {[...personas, ...personas, ...personas].map((persona, index) => {
                        const Icon = persona.icon;
                        return (
                            <div
                                key={index}
                                className="w-[340px] shrink-0 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${persona.color} flex items-center justify-center shadow-lg mb-5`}>
                                    <Icon className="w-7 h-7 text-white" strokeWidth={2.25} />
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg mb-2">{persona.audience}</h4>
                                <p className="text-gray-600 leading-relaxed">{persona.value}</p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
