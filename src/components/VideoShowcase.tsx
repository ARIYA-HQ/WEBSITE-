import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoShowcase() {
    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black group cursor-pointer">
            {/* Background Video/Image */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105"
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-friends-at-a-party-shot-from-top-4436-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay for Cinematic Feel */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />

            {/* Minimalist Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
                >
                    {/* Outer thin ring */}
                    <div className="absolute inset-0 border-2 border-white/80 rounded-full" />

                    {/* Subtle Glow */}
                    <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Play icon */}
                    <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-current translate-x-1" />
                </motion.div>
            </div>

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30" />
        </section>
    );
}
