import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Image src="/logo.png" alt="Health Fusion 360" width={32} height={32} className="w-8 h-8" />
                            Health Fusion 360
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-sm">
                            Empowering your health journey with AI-driven insights and smart tracking. Designed to help you build lifelong healthy habits.
                        </p>
                        <a
                            href="mailto:support@healthfusion360.ai"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                        >
                            support@healthfusion360.ai
                        </a>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Explore</h4>
                        <ul className="space-y-4 text-gray-500 font-medium">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                            <li><Link href="#testimonials" className="hover:text-primary transition-colors">Built For You</Link></li>
                            <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><a href="mailto:support@healthfusion360.ai" className="hover:text-primary transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <div>© {new Date().getFullYear()} Health Fusion 360. All rights reserved.</div>
                    <div className="flex gap-8">
                        <span>English (US)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
