import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

// Import local cinematic asset
import cinematicAsset from '../assets/images/hero_table.jpg';

export default function VideoShowcase() {
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic effect basics
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        mouseX.set(distanceX * 0.2);
        mouseY.set(distanceY * 0.2);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden bg-black group cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Cinematic Background Fallback (Behind Video) */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src={cinematicAsset}
                    className="w-full h-full object-cover opacity-60"
                    alt="Cinematic Backdrop"
                />
            </motion.div>

            {/* Background Video (YouTube for maximum reliability) */}
            <div className={`absolute inset-0 w-full h-full transition-all duration-1000 ${isHovered ? 'scale-105 opacity-80' : 'opacity-40'}`}>
                <iframe
                    src="https://www.youtube.com/embed/R_0XpL5_c9M?autoplay=1&mute=1&loop=1&playlist=R_0XpL5_c9M&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=http://localhost:5173"
                    className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                ></iframe>
            </div>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 pointer-events-none" />

            {/* Light Leak Effect */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    x: ["-10%", "10%", "-10%"]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,165,0,0.1),transparent_70%)] pointer-events-none"
            />

            {/* Floating Magnetic UI */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <motion.div
                    style={{ x: springX, y: springY }}
                    className="relative flex items-center justify-center"
                >
                    {/* Animated Ripple Rings */}
                    <AnimatePresence>
                        {isHovered && [1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 2.5, opacity: 0 }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.6,
                                    ease: "easeOut"
                                }}
                                className="absolute w-32 h-32 border border-white/30 rounded-full"
                            />
                        ))}
                    </AnimatePresence>

                    {/* Central Play Button */}
                    <motion.div
                        initial={false}
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                            backgroundColor: isHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.1)"
                        }}
                        className="w-24 h-24 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-white/20 backdrop-blur-md transition-shadow hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] pointer-events-auto"
                    >
                        <Play className={`w-8 h-8 md:w-16 md:h-16 transition-colors duration-300 translate-x-1 ${isHovered ? 'text-black fill-black' : 'text-white fill-white'}`} />
                    </motion.div>

                    {/* Circular Floating Text */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className={`absolute -inset-20 md:-inset-24 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <svg className="w-full h-full" viewBox="0 0 200 200">
                            <defs>
                                <path id="textCircle" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                            </defs>
                            <text className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] fill-white/80">
                                <textPath href="#textCircle">
                                    • EXPERIENCE THE MAGIC • WATCH THE STORY • ARIYA EVENTS •
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Tagline */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                <motion.div
                    animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                >
                    <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] mb-4">PRODUCTION 2026</div>
                    <div className="h-20 w-[1px] bg-gradient-to-t from-primary-600 to-transparent mx-auto" />
                </motion.div>
            </div>
        </section>
    );
}
