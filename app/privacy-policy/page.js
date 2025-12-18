"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-32 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Sidebar Navigation */}
                    <div className="w-full md:w-1/4">
                        <div className="sticky top-32">
                            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Contents</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li><a href="#collection" className="hover:text-primary transition-colors">1. Information Collection</a></li>
                                <li><a href="#healthkit" className="hover:text-primary transition-colors">2. HealthKit & Google Fit</a></li>
                                <li><a href="#usage" className="hover:text-primary transition-colors">3. Data Usage</a></li>
                                <li><a href="#security" className="hover:text-primary transition-colors">4. Security</a></li>
                                <li><a href="#contact" className="hover:text-primary transition-colors">5. Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full md:w-3/4">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                            <h1 className="text-4xl font-bold mb-2 text-gray-900">Privacy Policy</h1>
                            <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                            <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
                                <section id="introduction">
                                    <p className="text-lg leading-relaxed">
                                        Welcome to <strong>Health Fusion 360</strong>. We are committed to protecting your personal information and your right to privacy.
                                        This Privacy Policy explains how our mobile application and related services collect, use, and share your personal data.
                                    </p>
                                </section>

                                <section id="collection" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h3>
                                    <p className="mb-4">
                                        We collect personal information that you voluntarily provide to us when you register on the App, including:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                        <li><strong>Personal Identity:</strong> Name, email address, password, and profile image.</li>
                                        <li><strong>Health Data:</strong> Weight, height, age, gender, and activity levels.</li>
                                        <li><strong>Device Data:</strong> Information about your mobile device, IP address, and operating system.</li>
                                    </ul>
                                </section>

                                <section id="healthkit" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. HealthKit and Google Fit Data</h3>
                                    <p className="mb-4">
                                        To provide our core tracking features, Health Fusion 360 integrates with Apple's HealthKit and Google Fit.
                                        We read data such as step count, calories burned, heart rate, and sleep analysis from these services.
                                    </p>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                                        <p className="font-semibold text-blue-900 mb-2">Important Transparency Note:</p>
                                        <p className="text-blue-800 text-sm leading-relaxed">
                                            We do not use HealthKit or Google Fit data for marketing or advertising purposes.
                                            This data is used solely to provide health insights, visualize your progress, and power our AI prediction engine.
                                            Your health data stays private.
                                        </p>
                                    </div>
                                </section>

                                <section id="usage" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h3>
                                    <p className="mb-4">
                                        We use personal information collected via our App for a variety of business purposes described below:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>To facilitate account creation and the login process.</li>
                                        <li>To provide personalized health insights via our <strong>360 AI</strong> engine.</li>
                                        <li>To send you push notifications regarding your daily goals and achievements.</li>
                                        <li>To improve our App's functionality and user experience.</li>
                                    </ul>
                                </section>

                                <section id="security" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h3>
                                    <p>
                                        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.
                                        However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                                    </p>
                                </section>

                                <section id="contact" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h3>
                                    <p>
                                        If you have questions or comments about this policy, you may email us at <a href="mailto:support@healthfusion360.com" className="text-primary font-bold hover:underline">support@healthfusion360.com</a>.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
