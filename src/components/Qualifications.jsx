import React from 'react';
import { Award, GraduationCap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Qualifications = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-corporate-950">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Professional <br /><span className="text-accent-gold">Qualifications</span></h2>
                        <p className="text-lg text-corporate-600 dark:text-corporate-400 mb-8 leading-relaxed">
                            Certified expertise backed by academic excellence and over a decade of hands-on experience in the financial heart of Yemen.
                        </p>

                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-4 p-6 bg-corporate-50 dark:bg-corporate-900 border-l-4 border-accent-gold"
                            >
                                <Award className="text-accent-navy flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="text-xl font-bold text-corporate-900 dark:text-corporate-100">YCPA</h4>
                                    <p className="text-corporate-600 dark:text-corporate-400">Yemeni Certified Public Accountant (2022)</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-4 p-6 bg-corporate-50 dark:bg-corporate-900 border-l-4 border-accent-navy"
                            >
                                <GraduationCap className="text-accent-navy flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="text-xl font-bold text-corporate-900 dark:text-corporate-100">Bachelor of Accounting</h4>
                                    <p className="text-corporate-600 dark:text-corporate-400">Sana’a University (2010 – 2011)</p>
                                    <p className="text-sm font-bold text-accent-gold mt-1 uppercase">Grade: Very Good (88.72%)</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="h-48 bg-corporate-100 dark:bg-corporate-900 overflow-hidden relative border border-corporate-200 dark:border-corporate-800">
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                    <span className="text-4xl font-bold text-accent-navy dark:text-corporate-400">12+</span>
                                    <span className="text-xs uppercase tracking-tighter text-corporate-500">Years Experience</span>
                                </div>
                            </div>
                            <div className="h-64 bg-accent-navy flex flex-col justify-end p-6 border border-accent-navy">
                                <span className="text-white/60 text-xs uppercase tracking-widest mb-2 font-bold">Latest Milestone</span>
                                <span className="text-white text-xl font-bold">Successfully Audited Yemen Mobile (2013-16)</span>
                            </div>
                        </div>
                        <div className="space-y-4 pt-8">
                            <div className="h-64 bg-accent-gold flex flex-col justify-end p-6 border border-accent-gold">
                                <span className="text-white/80 text-xs uppercase tracking-widest mb-2 font-bold">Core Standard</span>
                                <span className="text-white text-xl font-bold">Expert in IFRS & ISA Methodologies</span>
                            </div>
                            <div className="h-48 bg-corporate-200 dark:bg-corporate-800 border border-corporate-300 dark:border-corporate-700">
                                {/* Placeholder for pattern or simple graphic */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
