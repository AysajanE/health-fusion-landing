"use client";
import { Activity, Zap, CheckCircle, BarChart2, Heart, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
    const features = [
        {
            title: "360 AI Predictions",
            description: "Stop guessing. Let our AI predict health trends so you can prevent issues before they start.",
            icon: <Zap className="w-6 h-6 text-white" />,
            color: "bg-blue-600",
            size: "col-span-1 md:col-span-1",
        },
        {
            title: "Fill Your Wave",
            description: "Gamify your health. Close your daily 'Wave' rings to build consistent, life-changing habits.",
            icon: <Activity className="w-6 h-6 text-white" />,
            color: "bg-cyan-500",
            size: "col-span-1 md:col-span-2",
        },
        {
            title: "Morning Briefing",
            description: "Wake up to personalized advice. Your daily briefing adapts to yesterday's data.",
            icon: <CheckCircle className="w-6 h-6 text-white" />,
            color: "bg-indigo-500",
            size: "col-span-1 md:col-span-1",
        },
        {
            title: "Your Data, Your Way",
            description: "Customizable dashboard. Pin the metrics that matter most to your specific goals.",
            icon: <BarChart2 className="w-6 h-6 text-white" />,
            color: "bg-purple-600",
            size: "col-span-1 md:col-span-2",
        },
        {
            title: "Progress You Can See",
            description: "Interactive graphs clearly show your improvement over weeks, months, and years.",
            icon: <Heart className="w-6 h-6 text-white" />,
            color: "bg-rose-500",
            size: "col-span-1 md:col-span-1",
        },
        {
            title: "Instant Filters",
            description: "Drill down into your data by day, week, or month with a single tap.",
            icon: <Moon className="w-6 h-6 text-white" />,
            color: "bg-orange-500",
            size: "col-span-1 md:col-span-1",
        },
    ];

    return (
        <section id="features" className="py-24 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-white border border-gray-200 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-4 shadow-sm"
                    >
                        🔥 Powerful Features
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
                    >
                        Everything You Need for a <br /> <span className="text-gradient">Healthier You.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Unlock your full potential with tools designed to help you understand your body and achieve your wellness goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`glass p-8 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-1 ${feature.size}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center shadow-lg mb-6`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
