"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Active Users", value: "50k+" },
    { label: "Calories Burned", value: "10M+" },
    { label: "Goals Achieved", value: "150k+" },
    { label: "App Store Rating", value: "4.8" },
];

export default function Stats() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
