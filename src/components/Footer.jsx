import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-corporate-950 border-t border-corporate-200 dark:border-corporate-800 py-16 md:py-20">
            <div className="section-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="sm:col-span-2 lg:col-span-2">
                        <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-accent-navy dark:text-corporate-100">
                            M. AL-DHUBAIBI <span className="text-accent-gold">YCPA</span>
                        </span>
                        <p className="mt-6 text-corporate-600 dark:text-corporate-400 max-w-sm leading-relaxed text-sm md:text-base">
                            Dedicated to financial transparency and operational excellence. Senior Auditor and Financial Consultant with 12+ years of experience in Yemen's major sectors.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <a href="#" className="p-3 bg-corporate-100 dark:bg-corporate-900 rounded-sm hover:bg-accent-gold hover:text-white transition-all" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:mhdhubaibi@gmail.com" className="p-3 bg-corporate-100 dark:bg-corporate-900 rounded-sm hover:bg-accent-gold hover:text-white transition-all" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-corporate-900 dark:text-corporate-100">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-corporate-600 dark:text-corporate-400">
                            <li><a href="#about" className="hover:text-accent-gold transition-colors">Qualifications</a></li>
                            <li><a href="#experience" className="hover:text-accent-gold transition-colors">Career Timeline</a></li>
                            <li><a href="#portfolio" className="hover:text-accent-gold transition-colors">Audit Portfolio</a></li>
                            <li><a href="#competencies" className="hover:text-accent-gold transition-colors">Core Competencies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-corporate-900 dark:text-corporate-100">Contact</h4>
                        <div className="space-y-4 text-sm text-corporate-600 dark:text-corporate-400">
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-accent-gold" />
                                <span>+967 777 668 050</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-accent-gold" />
                                <span>mhdhubaibi@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-accent-gold" />
                                <span>Sana'a, Yemen</span>
                            </div>
                            <div className="flex items-center gap-2 mt-4 px-3 py-1 bg-corporate-100 dark:bg-corporate-900 rounded-sm inline-flex">
                                <ShieldCheck size={14} className="text-green-600" />
                                <span className="text-[10px] font-bold uppercase">YCPA Certified 2022</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-corporate-100 dark:border-corporate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-corporate-400 uppercase font-bold tracking-widest">
                    <p className="text-center md:text-left">© {new Date().getFullYear()} Mohammed Abdullah Al-Dhubaibi. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Executive Excellence <span className="text-accent-gold">|</span> YCPA
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
