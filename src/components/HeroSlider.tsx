import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local images
import heroRomance from '../assets/images/hero_romance.jpg';
import heroTable from '../assets/images/hero_table.jpg';
import heroFloral from '../assets/images/hero_floral.jpg';

const heroImages = [
    heroRomance, // Couple (1st)
    heroTable,   // Table (2nd)
    heroFloral   // Floral (3rd)
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
            {/* Crossfade (no "wait" mode) so there's never a frame without an image,
                which used to flash the white page background behind the white headline. */}
            <AnimatePresence initial={false}>
                <motion.img
                    key={index}
                    src={heroImages[index]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                    alt=""
                    fetchPriority={index === 0 ? 'high' : undefined}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
    );
}
