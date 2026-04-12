"use client";
import { motion } from 'framer-motion';
import { Download, UserPlus, Activity, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: Download,
        title: "Download",
        description: "Get Health Fusion 360 from the App Store or Google Play.",
    },
    {
        icon: UserPlus,
        title: "Create Profile",
        description: "Set up your personalized health profile and fitness goals.",
    },
    {
        icon: Activity,
        title: "Track Activity",
        description: "Connect devices or manually log your daily workouts and meals.",
    },
    {
        icon: TrendingUp,
        title: "See Progress",
        description: "View AI-generated insights and watch your health improve.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-28 scroll-mt-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full font-semibold text-sm mb-5 shadow-sm"
                    >
                        Getting Started
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight"
                    >
                        How It <span className="text-gradient">Works</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Start your journey in 4 simple steps.
                    </motion.p>
                </div>

                <div className="relative grid md:grid-cols-4 gap-12 max-w-5xl mx-auto">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                className="relative flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.12, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 text-primary flex items-center justify-center shadow-sm mb-5 z-10">
                                    <Icon className="w-6 h-6" strokeWidth={2.25} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
