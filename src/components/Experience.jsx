import React from 'react';
import { Award, GraduationCap, Briefcase, Building2, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        company: "ARABIAN YEMEN CEMENT COMPANY LTD.",
        role: "Senior Internal Financial & Administrative Auditor",
        period: "May 2017 – Present",
        highlights: [
            "Played a pivotal role in establishing the Internal Audit Department from the ground up.",
            "Developed and executed annual risk-based audit plans covering financial and operational cycles.",
            "Formulated high-level audit reports for the Audit Committee and Executive Management.",
            "Conducted extensive field audits across all production phases to ensure efficiency."
        ],
        logo: <Building2 className="text-accent-navy" size={24} />
    },
    {
        company: "GRANT THORNTON YEMEN",
        role: "Senior Auditor",
        period: "July 2012 – April 2017",
        highlights: [
            "Led the audit of Yemen Mobile for four consecutive fiscal years (2013-2016).",
            "Managed audits for major industrial entities including Mukalla Iron and Steel.",
            "Spearheaded audits for International NGOs (SFD, European Union, Islamic Relief).",
            "Managed corporate restructuring and liquidation processes for major groups."
        ],
        logo: <Globe className="text-accent-navy" size={24} />
    }
];

const Experience = () => {
    return (
        <section id="experience" className="bg-corporate-50 dark:bg-corporate-900/50 py-24">
            <div className="section-container">
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-accent-gold"></div>
                </div>

                <div className="space-y-12">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 group"
                        >
                            <div className="lg:col-span-1">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-white dark:bg-corporate-800 shadow-sm border border-corporate-200 dark:border-corporate-700">
                                        {exp.logo}
                                    </div>
                                    <div className="lg:hidden">
                                        <p className="text-[10px] font-bold text-accent-gold tracking-widest uppercase">{exp.period}</p>
                                        <h3 className="text-base font-bold text-corporate-900 dark:text-corporate-100 uppercase">{exp.company}</h3>
                                    </div>
                                </div>
                                <div className="hidden lg:block">
                                    <p className="text-[10px] font-bold text-accent-gold tracking-widest uppercase mb-1">{exp.period}</p>
                                    <h3 className="text-lg font-bold text-corporate-900 dark:text-corporate-100 uppercase leading-tight">{exp.company}</h3>
                                </div>
                            </div>

                            <div className="lg:col-span-3 bg-white dark:bg-corporate-950 p-6 md:p-8 border border-corporate-200 dark:border-corporate-800 shadow-sm group-hover:shadow-md transition-all duration-300">
                                <h4 className="text-lg md:text-xl font-bold mb-6 text-accent-navy dark:text-corporate-300">{exp.role}</h4>
                                <ul className="space-y-4">
                                    {exp.highlights.map((item, id) => (
                                        <li key={id} className="flex gap-4 text-corporate-600 dark:text-corporate-400">
                                            <div className="mt-1.5 flex-shrink-0">
                                                <div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div>
                                            </div>
                                            <span className="text-sm md:text-base leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
