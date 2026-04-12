"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, Loader2 } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!EMAIL_REGEX.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setStatus('loading');

        try {
            // TODO: Replace this localStorage stub with a real API call once
            // the backend exposes /api/v1/waitlist (or wire to Resend/Mailchimp directly).
            const existing = JSON.parse(localStorage.getItem('hf_waitlist') || '[]');
            if (!existing.includes(email)) {
                existing.push(email);
                localStorage.setItem('hf_waitlist', JSON.stringify(existing));
            }
            await new Promise((r) => setTimeout(r, 600));
            setStatus('success');
        } catch (err) {
            setError('Something went wrong. Please try again.');
            setStatus('idle');
        }
    };

    return (
        <section id="waitlist" className="py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-2xl shadow-blue-500/20"
                >
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-[22px] px-8 py-12 md:px-16 md:py-16">
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />

                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full font-bold text-sm mb-5 border border-blue-100">
                                <Mail size={16} />
                                Early Access
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                Be First in Line for <br />
                                <span className="text-gradient">Health Fusion 360</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-xl mx-auto">
                                Join the waitlist and we'll let you know the moment the app drops on the App Store.
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            {status !== 'success' ? (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="max-w-xl mx-auto"
                                >
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="flex-1 relative">
                                            <Mail
                                                size={20}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                            />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@example.com"
                                                aria-label="Email address"
                                                disabled={status === 'loading'}
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 min-w-[140px]"
                                        >
                                            {status === 'loading' ? (
                                                <Loader2 size={20} className="animate-spin" />
                                            ) : (
                                                'Join Waitlist'
                                            )}
                                        </button>
                                    </div>
                                    {error && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-600 text-sm mt-3 text-center"
                                            role="alert"
                                        >
                                            {error}
                                        </motion.p>
                                    )}
                                    <p className="text-xs text-gray-400 text-center mt-4">
                                        No spam, ever. Unsubscribe in one click.
                                    </p>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                    className="max-w-xl mx-auto text-center py-4"
                                    role="status"
                                    aria-live="polite"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                        className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4"
                                    >
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
                                    <p className="text-gray-600">
                                        We'll send <strong>{email}</strong> a note the moment we launch.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
