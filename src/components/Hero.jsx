import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-corporate-950">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-accent-gold uppercase bg-corporate-100 dark:bg-corporate-900 rounded-sm mb-6 md:mb-8">
                            Senior Internal Auditor & YCPA
                        </span>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] md:leading-[0.9] mb-8">
                            MOHAMMED <br />
                            <span className="text-accent-navy dark:text-corporate-400">AL-DHUBAIBI</span>
                        </h1>
                        <p className="text-lg md:text-xl text-corporate-600 dark:text-corporate-400 max-w-xl mb-12 leading-relaxed font-sans font-light">
                            A highly accomplished <span className="font-semibold text-corporate-900 dark:text-corporate-100">Yemeni Certified Public Accountant</span> with 12+ years of expertise in Internal Audit, Financial Control, and Strategic Advisory.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <a href="#experience" className="btn-primary text-center">
                                Professional History
                            </a>
                            <button className="btn-outline flex items-center justify-center gap-3">
                                <Download size={18} />
                                <span>Executive CV</span>
                            </button>
                        </div>

                        <div className="mt-16 md:mt-20 pt-8 border-t border-corporate-100 dark:border-corporate-900 flex flex-wrap items-center gap-6 md:gap-10 opacity-50">
                            <div className="text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Distinguished Career at</div>
                            <div className="flex gap-8 md:gap-10 items-center">
                                <span className="font-serif text-lg md:text-xl font-bold italic tracking-tight">Grant Thornton</span>
                                <span className="font-serif text-lg md:text-xl font-bold italic tracking-tight">AYCC</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end"
                    >
                        {/* تم تصغير max-w لتصغير الحجم الكلي */}
                        <div className="relative w-full max-w-[75%] lg:max-w-[70%]">

                            {/* Executive Portrait */}
                            <div className="relative z-10 w-full aspect-[4/5] bg-corporate-100 dark:bg-corporate-900 border border-corporate-200 dark:border-corporate-800 overflow-hidden shadow-2xl rounded-sm">
                                <img
                                    src="/screenshot.png"
                                    alt="Mohammed Al-Dhubaibi | YCPA"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-accent-navy/40 via-transparent to-transparent"></div>
                            </div>

                            {/* Decorative Elements - تم تصغيرها لتناسب الحجم الجديد */}
                            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-t-[1px] border-r-[1px] border-accent-gold/30 z-0"></div>
                            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-b-[1px] border-l-[1px] border-accent-navy/30 z-0"></div>

                            {/* Distinction Badge - تم تصغير الأبعاد والنصوص */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -right-3 md:-right-4 bottom-4 md:bottom-8 z-20 bg-white dark:bg-corporate-900 p-2 md:p-4 shadow-xl border border-corporate-100 dark:border-corporate-800 max-w-[110px] md:max-w-[150px]"
                            >
                                <div className="text-accent-gold text-base md:text-lg font-bold mb-0.5">12+ Years</div>
                                <div className="text-[8px] font-bold uppercase tracking-widest text-corporate-500 leading-tight">
                                    Auditing Yemen's Largest Sectors
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
