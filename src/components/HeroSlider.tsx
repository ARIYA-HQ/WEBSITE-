import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local images
import heroRomance from '../assets/images/hero_romance.jpg';
import heroTable from '../assets/images/hero_table.jpg';
import heroFloral from '../assets/images/hero_floral.jpg';
import heroBallroom from '../assets/images/hero_ballroom.jpg';

const heroImages = [
    heroRomance, // Couple (1st)
    heroTable,   // Table (2nd)
    heroFloral,  // Floral (3rd)
    heroBallroom // Ballroom (4th)
];

export default function HeroSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={heroImages[index]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full h-full object-cover brightness-50"
                    alt="Hero background slide"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>
    );
}
