"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Fitness Enthusiast",
        content: "Health Fusion 360 completely transformed my daily routine. The AI insights are spot on!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        content: "I love the clean data visualization. It's so easy to track my progress over time.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
        name: "Emma Wilson",
        role: "Yoga Instructor",
        content: "The best health app I've used. It balances activity tracking with holistic wellness perfectly.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    {
        name: "David Miller",
        role: "Marathon Runner",
        content: "Keeps me accountable and motivated. The community features are a great bonus.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
        name: "Olivia Davis",
        role: "Nutritionist",
        content: "I recommend this to all my clients. The integration with other devices is seamless.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Loved by <span className="text-gradient">Thousands</span></h2>
                <p className="text-gray-600">See what our community has to say about their journey.</p>
            </div>

            {/* Marquee Container */}
            <div className="flex relative w-full overflow-hidden mask-fade-edges py-8">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Adjust speed
                            ease: "linear",
                        },
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[350px] inline-block whitespace-normal bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-200">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">"{testimonial.content}"</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
