"use client";
import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Laptop, Flower2, Footprints, Apple } from "lucide-react";

const personas = [
    {
        icon: Dumbbell,
        audience: "Fitness Enthusiasts",
        value: "Track every workout, monitor recovery, and let AI predict your optimal training zones.",
    },
    {
        icon: Laptop,
        audience: "Desk Workers",
        value: "Get gentle nudges to move, hydrate, and protect your posture throughout the workday.",
    },
    {
        icon: Flower2,
        audience: "Wellness Seekers",
        value: "Balance activity with mindfulness through holistic sleep, stress, and recovery metrics.",
    },
    {
        icon: Footprints,
        audience: "Endurance Athletes",
        value: "Long-term trend graphs and race-day readiness scores keep you accountable to big goals.",
    },
    {
        icon: Apple,
        audience: "Health-Conscious",
        value: "Pin the metrics that matter most and watch them improve week over week.",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-28 scroll-mt-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full font-semibold text-sm mb-5 shadow-sm"
                    >
                        Built for Everyone
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight"
                    >
                        Designed for Every <span className="text-gradient">Lifestyle</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Whatever your routine, Health Fusion 360 adapts to your goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {personas.map((persona, index) => {
                        const Icon = persona.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                                    <Icon className="w-6 h-6" strokeWidth={2.25} />
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg mb-2 tracking-tight">{persona.audience}</h4>
                                <p className="text-gray-600 leading-relaxed">{persona.value}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
