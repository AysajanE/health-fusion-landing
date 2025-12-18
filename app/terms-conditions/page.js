"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsConditions() {
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
                                <li><a href="#agreement" className="hover:text-primary transition-colors">1. Agreement</a></li>
                                <li><a href="#medical" className="hover:text-primary transition-colors">2. Medical Disclaimer</a></li>
                                <li><a href="#registration" className="hover:text-primary transition-colors">3. Registration</a></li>
                                <li><a href="#subscriptions" className="hover:text-primary transition-colors">4. Subscriptions</a></li>
                                <li><a href="#prohibited" className="hover:text-primary transition-colors">5. Prohibited Activities</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full md:w-3/4">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                            <h1 className="text-4xl font-bold mb-2 text-gray-900">Terms and Conditions</h1>
                            <p className="text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                            <div className="prose prose-blue max-w-none text-gray-700 space-y-8">

                                <section id="agreement" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h3>
                                    <p>
                                        These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <strong>Health Fusion 360</strong> ("we," "us", or "our"),
                                        concerning your access to and use of the Health Fusion 360 mobile application.
                                    </p>
                                </section>

                                <section id="medical" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Medical Disclaimer</h3>
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                                        <p className="font-semibold text-red-900 mb-2">Critical Health Warning:</p>
                                        <p className="text-red-800 text-sm leading-relaxed">
                                            The App provides health and fitness information and is designed for educational and entertainment purposes only. You should not rely on this information
                                            as a substitute for, nor does it replace, professional medical advice, diagnosis, or treatment. Always consult with a physician or other healthcare professional
                                            before starting any fitness program.
                                        </p>
                                    </div>
                                </section>

                                <section id="registration" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3. User Registration</h3>
                                    <p>
                                        You may be required to register with the App. You agree to keep your password confidential and will be responsible for all use of your account and password.
                                        We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate.
                                    </p>
                                </section>

                                <section id="subscriptions" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Premium Subscriptions</h3>
                                    <p>
                                        Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis (such as monthly or annually).
                                        Subscription fees are non-refundable except as required by law.
                                    </p>
                                </section>

                                <section id="prohibited" className="scroll-mt-32">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Activities</h3>
                                    <p>
                                        You may not access or use the App for any purpose other than that for which we make the App available. The App may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
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
