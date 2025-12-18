"use client";
import { motion } from 'framer-motion';
import { Download, UserPlus, Activity, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: <Download className="w-6 h-6 text-white" />,
        title: "Download App",
        description: "Get Health Fusion 360 from the App Store or Google Play.",
        color: "bg-blue-500",
    },
    {
        icon: <UserPlus className="w-6 h-6 text-white" />,
        title: "Create Profile",
        description: "Set up your personalized health profile and fitness goals.",
        color: "bg-cyan-500",
    },
    {
        icon: <Activity className="w-6 h-6 text-white" />,
        title: "Track Activity",
        description: "Connect devices or manually log your daily workouts and meals.",
        color: "bg-indigo-500",
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        title: "See Progress",
        description: "View AI-generated insights and watch your health improve.",
        color: "bg-violet-500",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-gray-600">Start your journey in 4 simple steps.</p>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6 z-10`}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
