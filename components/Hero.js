"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Apple, Play, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
};

export default function Hero() {
    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-1/2 z-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-block bg-blue-50/50 backdrop-blur-sm text-primary px-4 py-2 rounded-full font-bold text-sm mb-6 border border-blue-100 shadow-sm"
                        >
                            ✨ Introducing 360 AI Prediction
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
                        >
                            Predict Your Health. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">Shape Your Future.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-medium"
                        >
                            Go beyond simple tracking. Use our <strong>360 AI</strong> engine to receive accurate health predictions and daily personalized tips.
                        </motion.p>

                        <motion.div variants={itemVariants}>
                            <div className="mb-4 text-gray-900 font-semibold text-sm uppercase tracking-wider opacity-80">Get the App</div>
                            <div className="flex gap-4">
                                <Link href="#" className="group flex items-center gap-3 bg-gray-900 text-white px-6 py-3.5 rounded-2xl hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 ring-1 ring-white/10">
                                    <Play fill="white" size={24} className="group-hover:text-primary transition-colors" />
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] uppercase opacity-70 mb-0.5">Get it on</span>
                                        <span className="text-lg font-bold">Google Play</span>
                                    </div>
                                </Link>
                                <Link href="#" className="group flex items-center gap-3 bg-gray-900 text-white px-6 py-3.5 rounded-2xl hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 ring-1 ring-white/10">
                                    <Apple fill="white" size={24} className="group-hover:text-primary transition-colors" />
                                    <div className="flex flex-col items-start leading-none">
                                        <span className="text-[10px] uppercase opacity-70 mb-0.5">Download on the</span>
                                        <span className="text-lg font-bold">App Store</span>
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image Content (Phone Mockup) */}
                    <motion.div
                        className="w-full md:w-1/2 relative perspective-1000"
                        initial={{ opacity: 0, x: 50, rotateY: 10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ type: "spring", duration: 1.5, delay: 0.2 }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotateZ: [0, 1, 0, -1, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[320px] h-[650px] mx-auto bg-gray-900 rounded-[3.5rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl glass-dark z-10"
                        >
                            {/* Screen Content */}
                            <div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-br from-blue-600 via-primary to-indigo-600 rounded-b-[3rem] p-6 z-0"></div>

                                <div className="relative z-10 p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-center text-white mb-8 mt-8">
                                        <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md border border-white/20"><Menu size={20} /></div>
                                        <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/40 backdrop-blur-md"></div>
                                    </div>

                                    <div className="text-white mb-8">
                                        <motion.h2
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1 }}
                                            className="text-3xl font-bold tracking-tight"
                                        >
                                            Hello, Alex 👋
                                        </motion.h2>
                                        <p className="opacity-90 font-medium">Let's check your activity</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {[
                                            { label: "Steps", value: "8,432", delay: 1.2 },
                                            { label: "Calories", value: "420", delay: 1.4 }
                                        ].map((stat, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: stat.delay }}
                                                className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-white border border-white/10 shadow-lg"
                                            >
                                                <div className="text-xs opacity-80 mb-1 font-medium tracking-wide">{stat.label}</div>
                                                <div className="text-2xl font-bold">{stat.value}</div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.6 }}
                                        className="bg-white rounded-3xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex-1 mt-4"
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="font-bold text-gray-900">Weekly Goal</div>
                                            <div className="text-primary text-sm font-bold bg-blue-50 px-2 py-1 rounded-lg">85%</div>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-3 mb-6 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "85%" }}
                                                transition={{ duration: 1.5, delay: 2 }}
                                                className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                                            ></motion.div>
                                        </div>
                                        <div className="space-y-4">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors">
                                                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shadow-sm group-hover:bg-purple-100 transition-colors">🏃</div>
                                                    <div>
                                                        <div className="font-bold text-sm text-gray-900">Running</div>
                                                        <div className="text-xs text-gray-500 font-medium">30 mins • 5km</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Elements - Premium Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-[80px] -z-10 mix-blend-multiply"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
