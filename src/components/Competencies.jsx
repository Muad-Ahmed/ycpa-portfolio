import React from 'react';
import { Settings, Shield, Target, FileText, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
    { name: "Risk-Based Auditing", level: "Expert", icon: <Shield size={20} /> },
    { name: "IFRS / ISA Standards", level: "Senior", icon: <FileText size={20} /> },
    { name: "Internal Control Systems", level: "Expert", icon: <Settings size={20} /> },
    { name: "Corporate Governance", level: "Consultant", icon: <Target size={20} /> },
    { name: "Tax Law Compliance", level: "Expert", icon: <Shield size={20} /> },
    { name: "Policy Development", level: "Consultant", icon: <Layers size={20} /> }
];

const tools = [
    { name: "Microsoft Excel", type: "Advanced Analysis" },
    { name: "Voyager", type: "GT Audit Suite" },
    { name: "TBeam", type: "Specialized Software" },
    { name: "ERP Systems", type: "Financial Systems" },
    { name: "Financial Analytics", type: "Strategic Insight" }
];

const Competencies = () => {
    return (
        <section id="competencies" className="py-24 bg-corporate-900 text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold opacity-10 skew-x-12 translate-x-1/2"></div>

            <div className="section-container !px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-8">Core <span className="text-accent-gold">Competencies</span></h2>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="text-accent-gold">{skill.icon}</span>
                                        <span className="text-base md:text-lg font-medium">{skill.name}</span>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest text-white/40">{skill.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-8">Financial <span className="text-accent-gold">Toolkit</span></h2>
                        <div className="flex flex-wrap gap-4">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white/5 border border-white/10 p-6 rounded-sm w-full sm:w-[calc(50%-8px)]"
                                >
                                    <Database className="text-accent-gold mb-4" size={24} />
                                    <h4 className="text-lg md:text-xl font-bold mb-1">{tool.name}</h4>
                                    <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">{tool.type}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 border-2 border-dashed border-white/10 rounded-sm">
                            <p className="text-white/60 text-center italic font-sans text-sm md:text-base leading-relaxed">
                                "Expert proficiency in technical English with high accuracy in financial translation and IFRS-aligned reporting."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Competencies;
