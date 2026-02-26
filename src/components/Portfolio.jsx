import React from 'react';
import { Smartphone, Factory, HardHat, HeartHandshake, FileCheck, RefreshCw, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const auditSectors = [
    {
        title: "Telecommunications",
        icon: <Smartphone size={28} />,
        client: "Yemen Mobile",
        description: "Led external audit for 4 consecutive fiscal years (2013-2016).",
        color: "bg-blue-50 dark:bg-blue-900/10 border-blue-200"
    },
    {
        title: "Industrial & Cement",
        icon: <Factory size={28} />,
        client: "Arabian Yemen Cement",
        description: "Comprehensive audits for major industrial entities in Yemen.",
        color: "bg-orange-50 dark:bg-orange-900/10 border-orange-200"
    },
    {
        title: "Construction & Steel",
        icon: <HardHat size={28} />,
        client: "Mukalla Iron and Steel",
        description: "Risk assessment and financial compliance for heavy industries.",
        color: "bg-slate-50 dark:bg-slate-900/10 border-slate-200"
    },
    {
        title: "NGOs & International",
        icon: <HeartHandshake size={28} />,
        client: "EU, SFD, Islamic Relief",
        description: "Spearheaded audits for international projects and crisis response.",
        color: "bg-green-50 dark:bg-green-900/10 border-green-200"
    },
    {
        title: "Pharmaceuticals",
        icon: <FileCheck size={28} />,
        client: "Medica Pharmaceutical",
        description: "Financial and operational audits for manufacturing units.",
        color: "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200"
    },
    {
        title: "Strategic Advisory",
        icon: <RefreshCw size={28} />,
        client: "Marib International",
        description: "Managed liquidations and corporate restructuring assignments.",
        color: "bg-purple-50 dark:bg-purple-900/10 border-purple-200"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-white dark:bg-corporate-950">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Audit Expertise <span className="text-accent-gold">Portfolio</span></h2>
                        <p className="text-corporate-600 dark:text-corporate-400 text-lg leading-relaxed">
                            A record of diligence across Yemen's most vital sectors, balancing global standards with local regulatory requirements.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent-navy dark:text-corporate-400">
                        <BarChart3 size={18} className="text-accent-gold" />
                        <span>Sector Multi-faceted</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {auditSectors.map((sector, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className={`p-8 border rounded-sm transition-all duration-300 flex flex-col h-full ${sector.color}`}
                        >
                            <div className="mb-6 text-accent-navy dark:text-corporate-200">
                                {sector.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-1 text-corporate-900 dark:text-corporate-100">{sector.title}</h3>
                            <p className="text-sm font-bold text-accent-gold uppercase tracking-wider mb-4">{sector.client}</p>
                            <p className="text-corporate-600 dark:text-corporate-400 leading-relaxed mb-6 flex-grow">
                                {sector.description}
                            </p>
                            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
                                <span className="text-xs font-bold uppercase tracking-widest text-corporate-400">Case Study Verified</span>
                                <div className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
