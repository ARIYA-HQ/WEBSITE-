import { useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { Play } from 'lucide-react';
import { EVENT_IMAGES } from '../config/eventImages';

export default function VideoShowcase() {
    const shouldReduceMotion = useReducedMotion();
    const [isHovered, setIsHovered] = useState(false);
    const pointerAngle = useMotionValue(0);
    const smoothPointerAngle = useSpring(pointerAngle, { damping: 24, stiffness: 160 });

    return (
        <section
            aria-label="ÀRIYÁ event showcase"
            className="group relative isolate flex h-[60vh] min-h-[440px] cursor-none items-center justify-center overflow-hidden bg-black text-white md:h-[90vh] md:min-h-[620px]"
            onPointerEnter={(event) => setIsHovered(event.pointerType === 'mouse')}
            onPointerLeave={() => setIsHovered(false)}
            onPointerMove={(event) => {
                if (event.pointerType !== 'mouse') return;

                const bounds = event.currentTarget.getBoundingClientRect();
                const x = event.clientX - bounds.left - bounds.width / 2;
                const y = event.clientY - bounds.top - bounds.height / 2;
                pointerAngle.set((Math.atan2(y, x) * 180) / Math.PI + 90);
            }}
        >
            <motion.img
                src={EVENT_IMAGES.pinkGeleCelebration}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-60"
                initial={false}
                animate={
                    shouldReduceMotion
                        ? { scale: 1.04 }
                        : { scale: isHovered ? 1.05 : [1.04, 1.12, 1.04] }
                }
                transition={
                    isHovered
                        ? { duration: 1, ease: 'easeOut' }
                        : { duration: 28, repeat: shouldReduceMotion ? 0 : Infinity, ease: 'linear' }
                }
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-black opacity-80"
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,165,0,0.1),transparent_70%)]"
                animate={
                    shouldReduceMotion
                        ? { x: 0 }
                        : { x: ['-4%', '4%', '-4%'] }
                }
                transition={{ duration: 9, repeat: shouldReduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
            />
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                    {[0, 1, 2].map((pulse) => (
                        <motion.div
                            key={pulse}
                            aria-hidden="true"
                            className="pointer-events-none absolute h-20 w-20 rounded-full border border-white/30 md:h-32 md:w-32"
                            animate={
                                shouldReduceMotion || !isHovered
                                    ? { opacity: 0, scale: 1 }
                                    : { opacity: [0.55, 0], scale: [1, 2.5] }
                            }
                            transition={
                                shouldReduceMotion || !isHovered
                                    ? { duration: 0.2 }
                                    : {
                                          duration: 2.4,
                                          delay: pulse * 0.65,
                                          repeat: Infinity,
                                          ease: 'easeOut',
                                      }
                            }
                        />
                    ))}
                    <motion.div
                        aria-hidden="true"
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className={`pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 backdrop-blur-md transition-[background-color,box-shadow] duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] md:h-32 md:w-32 ${
                            isHovered ? 'bg-white' : 'bg-white/10'
                        }`}
                    >
                        <Play
                            aria-hidden="true"
                            className={`h-6 w-6 translate-x-0.5 transition-colors duration-300 md:h-12 md:w-12 ${
                                isHovered ? 'fill-black text-black' : 'fill-white text-white'
                            }`}
                        />
                    </motion.div>
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-12 transition-opacity duration-500 md:-inset-20"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        style={{ rotate: shouldReduceMotion ? 0 : smoothPointerAngle }}
                    >
                        <svg className="h-full w-full" viewBox="0 0 200 200">
                            <defs>
                                <path
                                    id="ariya-showcase-circle"
                                    d="M 100, 100 m -88, 0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"
                                />
                            </defs>
                            <text
                                textLength="540"
                                lengthAdjust="spacing"
                                className="fill-white/90 text-[7px] font-black uppercase tracking-[0.2em] md:text-[8px]"
                            >
                                <textPath href="#ariya-showcase-circle">
                                    • ÀRIYÁ EVENTS • EXPERIENCE THE MAGIC • WATCH THE STORY •
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 text-center md:bottom-20"
            >
                <div className="mb-4 text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
                    Production 2026
                </div>
                <div className="mx-auto h-20 w-px bg-gradient-to-t from-primary-600 to-transparent" />
            </motion.div>
        </section>
    );
}
