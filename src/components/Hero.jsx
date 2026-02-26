import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-corporate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-accent-gold uppercase bg-corporate-100 dark:bg-corporate-900 rounded-sm mb-8">
                            Senior Internal Auditor & YCPA
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
                            MOHAMMED <br />
                            <span className="text-accent-navy dark:text-corporate-400">AL-DHUBAIBI</span>
                        </h1>
                        <p className="text-xl text-corporate-600 dark:text-corporate-400 max-w-xl mb-12 leading-relaxed font-light">
                            A highly accomplished <span className="font-bold text-corporate-900 dark:text-corporate-100">Yemeni Certified Public Accountant</span> with 12+ years of expertise in Internal Audit, Financial Control, and Strategic Advisory.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="#experience" className="btn-primary">
                                Professional History
                            </a>
                            <button className="btn-outline flex items-center justify-center gap-3">
                                <Download size={18} />
                                <span>Executive CV</span>
                            </button>
                        </div>

                        <div className="mt-20 pt-8 border-t border-corporate-100 dark:border-corporate-900 flex items-center gap-10 opacity-40">
                            <div className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Distinguished Career at</div>
                            <div className="flex gap-10 items-center">
                                <span className="font-serif text-xl font-bold italic tracking-tight">Grant Thornton</span>
                                <span className="font-serif text-xl font-bold italic tracking-tight">AYCC</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Professional Portrait Area with sophisticated placeholder */}
                        <div className="relative z-10 w-full aspect-[4/5] bg-corporate-100 dark:bg-corporate-900 border border-corporate-200 dark:border-corporate-800 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-navy/10 to-transparent"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-corporate-300 dark:text-corporate-700">
                                <div className="w-24 h-24 border-2 border-accent-gold/20 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-4xl font-serif italic text-accent-gold/40">MA</span>
                                </div>
                                <span className="text-xs uppercase tracking-widest font-bold opacity-30">Executive Portrait</span>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 border-t-[1px] border-r-[1px] border-accent-gold/30 z-0"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 border-b-[1px] border-l-[1px] border-accent-navy/30 z-0"></div>

                        {/* Distinction Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -right-6 bottom-12 z-20 bg-white dark:bg-corporate-900 p-6 shadow-xl border border-corporate-100 dark:border-corporate-800 max-w-[200px]"
                        >
                            <div className="text-accent-gold text-2xl font-bold mb-1">12+ Years</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-corporate-500 leading-tight">
                                Auditing Yemen's Largest Sectors
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
