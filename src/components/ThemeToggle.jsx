import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <button
            onClick={toggleDarkMode}
            className="relative flex items-center w-14 h-7 bg-corporate-100 dark:bg-corporate-800 rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Theme"
        >
            {/* الطبقة الخلفية: أيقونتان فقط لضمان التموضع الصحيح في الأطراف */}
            <div className="absolute inset-0 flex justify-between items-center px-2 text-corporate-400/50 dark:text-corporate-500/50 pointer-events-none">
                <Sun size={12} />
                <Moon size={12} />
            </div>

            {/* الدائرة المتحركة: z-10 لضمان ظهورها فوق الأيقونات الخلفية */}
            <motion.div
                className="relative z-10 w-5 h-5 bg-white dark:bg-white rounded-full shadow-md flex items-center justify-center"
                initial={false}
                animate={{ x: darkMode ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
                {darkMode ? (
                    <Moon size={12} className="text-accent-navy" />
                ) : (
                    <Sun size={12} className="text-accent-gold" />
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;