import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50918e7f?auto=format&fit=crop&q=80&w=2069", // Replaced broken/ugly local image with high-quality Event Tech/Abstract vibe
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2069",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2069",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=2069",
    "https://images.unsplash.com/photo-1465495910483-2d11e114b933?auto=format&fit=crop&q=80&w=2069"
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
