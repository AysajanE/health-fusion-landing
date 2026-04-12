"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
        <section className="pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden relative">
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
                            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-primary px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-blue-100 shadow-sm"
                        >
                            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Introducing 360 AI Prediction
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

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link
                                href="#waitlist"
                                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-2xl font-semibold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
                            >
                                Join Waitlist
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#features"
                                className="inline-flex items-center gap-2 text-gray-700 px-2 py-4 font-semibold hover:text-primary transition-colors"
                            >
                                Learn more
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        className="w-full md:w-1/2 relative flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative">
                            {/* Ground shadow */}
                            <div
                                aria-hidden="true"
                                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[260px] h-8 bg-black/20 blur-2xl rounded-full"
                            />

                            {/* Phone frame */}
                            <div className="relative w-[300px] h-[610px] bg-gray-900 rounded-[3rem] border-[10px] border-gray-900 overflow-hidden shadow-2xl">
                                {/* iPhone notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-6 bg-gray-900 rounded-b-2xl z-20" />

                                {/* Screen */}
                                <div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
                                    {/* Gradient top band */}
                                    <div className="absolute top-0 left-0 w-full h-[55%] bg-gradient-to-br from-primary via-primary to-accent" />

                                    <div className="relative z-10 p-7 flex-1 flex flex-col">
                                        {/* Greeting */}
                                        <div className="text-white mt-10 mb-10">
                                            <p className="text-sm font-medium opacity-80 mb-1">Good morning</p>
                                            <h2 className="text-3xl font-extrabold tracking-tight">Alex</h2>
                                        </div>

                                        {/* Circular Progress Ring */}
                                        <div className="flex justify-center mb-8">
                                            <div className="relative w-[180px] h-[180px]">
                                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="42"
                                                        fill="none"
                                                        stroke="rgba(255,255,255,0.15)"
                                                        strokeWidth="8"
                                                    />
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="42"
                                                        fill="none"
                                                        stroke="white"
                                                        strokeWidth="8"
                                                        strokeLinecap="round"
                                                        strokeDasharray="263.9"
                                                        strokeDashoffset="39.6"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                                    <div className="text-4xl font-extrabold tracking-tight">8,432</div>
                                                    <div className="text-xs font-medium opacity-80 mt-1 uppercase tracking-wider">Steps</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Supporting stats card */}
                                        <div className="bg-white rounded-2xl p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] mt-auto">
                                            <div className="grid grid-cols-3 divide-x divide-gray-100">
                                                <div className="text-center px-2">
                                                    <div className="text-xl font-extrabold text-gray-900 tracking-tight">420</div>
                                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5 font-medium">kcal</div>
                                                </div>
                                                <div className="text-center px-2">
                                                    <div className="text-xl font-extrabold text-gray-900 tracking-tight">5.2</div>
                                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5 font-medium">km</div>
                                                </div>
                                                <div className="text-center px-2">
                                                    <div className="text-xl font-extrabold text-gray-900 tracking-tight">72</div>
                                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5 font-medium">bpm</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
