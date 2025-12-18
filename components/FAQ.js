"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is 360 AI?",
        answer: "360 AI is our advanced health prediction engine. It analyzes your historical data—like sleep patterns, activity levels, and heart rate—to provide accurate future health predictions and personalized recommendations to prevent issues before they arise.",
    },
    {
        question: "How does the 'Wave' goal tracking work?",
        answer: "The 'Wave' is a visual representation of your daily progress. As you complete your goals (like steps or water intake), the wave fills up. Reaching 100% completes the wave for that metric, giving you a satisfying visual confirmation of your success.",
    },
    {
        question: "Can I customize my dashboard metrics?",
        answer: "Yes! You can pin up to 4 key metrics to your home screen for quick access. Choose from a wide variety of trackers including Steps, Calories, Sleep, Heart Rate, and more to focus on what matters most to you.",
    },
    {
        question: "Is my health data private and secure?",
        answer: "Absolutely. We treat your health data with the highest level of security. Your data is encrypted and never sold to third parties. We strictly use it to generate your personalized insights and AI tips.",
    },
    {
        question: "Do I need a premium subscription for AI Tips?",
        answer: "Basic tracking is free for everyone. However, our specialized 'Daily Personalized Tips' and deep '360 AI' predictions are part of our Premium plan, designed for users who want granular, actionable guidance.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Got questions? We've got answers.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="text-primary flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-gray-50 px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100"
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
