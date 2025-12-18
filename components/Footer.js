import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <img src="/logo.png" className="w-8 h-8" />
                            Health Fusion 360
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-sm">
                            Empowering your health journey with AI-driven insights and smart tracking. Join thousands of users achieving their goals today.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-pointer"><Facebook size={20} /></div>
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-pointer"><Twitter size={20} /></div>
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-pointer"><Instagram size={20} /></div>
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors cursor-pointer"><Linkedin size={20} /></div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-500 font-medium">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><a href="mailto:support@healthfusion360.com" className="hover:text-primary transition-colors">Contact Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
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
