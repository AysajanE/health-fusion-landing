"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Smartphone, Gift } from 'lucide-react';

const valueProps = [
    {
        icon: Sparkles,
        title: "AI-Powered",
        subtitle: "Smart predictions",
    },
    {
        icon: ShieldCheck,
        title: "Private & Secure",
        subtitle: "Your data stays yours",
    },
    {
        icon: Smartphone,
        title: "Apple HealthKit",
        subtitle: "Native integration",
    },
    {
        icon: Gift,
        title: "Free to Start",
        subtitle: "No credit card",
    },
];

export default function Stats() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {valueProps.map((prop, index) => {
                        const Icon = prop.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
                                    <Icon className="w-7 h-7 text-white" strokeWidth={2.25} />
                                </div>
                                <div className="text-xl md:text-2xl font-extrabold text-gradient mb-1">
                                    {prop.title}
                                </div>
                                <div className="text-sm text-gray-500 font-medium">{prop.subtitle}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
