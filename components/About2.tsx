"use client";

import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { Inder } from "next/font/google";
import { useRef } from "react";
import { ArrowDownRight, Zap, Smartphone, Play } from "lucide-react";

const inder = Inder({
    subsets: ["latin"],
    weight: "400",
});

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: easeOut }
};

export default function About2() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div className={`bg-[#0a0a0a] text-white selection:bg-[#9da1a0] selection:text-black ${inder.className}`}>

            {/* HERO / INTRO */}
            <section className="min-h-screen flex flex-col justify-center px-[6vw] pt-32">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-12 bg-[#9da1a0]" />
                    <span className="text-[#9da1a0] uppercase tracking-widest text-sm">About Me</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[12vw] md:text-[8vw] leading-[0.85] font-bold tracking-tighter mb-12"
                >
                    I Build <br />
                    <span className="text-[#9da1a0]">BRANDS</span> THAT <br />
                    Attract Demand.
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-12 items-end">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed"
                    >
                        Strategic content and positioning systems for real estate professionals building long-term authority.
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="hidden md:flex justify-end"
                    >
                        <div className="w-32 h-32 rounded-full border border-gray-800 flex items-center justify-center animate-spin-slow">
                            <ArrowDownRight className="w-12 h-12 text-[#9da1a0]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PARALLAX IMAGE SECTION */}
            <section ref={containerRef} className="py-32 px-[6vw] overflow-hidden">
                <div className="relative h-[80vh] w-full rounded-[40px] overflow-hidden">
                    <motion.div style={{ y: imgY }} className="absolute inset-0 w-full h-[120%]">
                        <img
                            src="/manish2.jpeg"
                            alt="Manish Kushwaha"
                            className="w-full h-full md:h-[80vh] object-cover md:object-contain grayscale brightness-75"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-12 left-12">
                        <h2 className="text-4xl md:text-6xl font-bold">Manish Kushwaha</h2>
                        <p className="text-[#9da1a0] text-xl mt-2 italic">Growth Partner</p>
                    </div>
                </div>
            </section>

            {/* SERVICES / EXPERTISE */}
            <section className="py-32 px-[6vw] bg-[#0f0f0f]">
                <motion.div {...fadeUp} className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">Growth System</h2>
                    <div className="h-[2px] w-full bg-gray-900 overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "0%" }}
                            transition={{ duration: 1.5 }}
                            className="h-full w-full bg-[#9da1a0]"
                        />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <Smartphone className="w-8 h-8" />, title: "Attenstion System ", desc: "Short-form content designed to capture attention and compound authority over time." },
                        { icon: <Play className="w-8 h-8" />, title: "Positioning Strategy", desc: "Strategic messaging and content frameworks built to differentiate brands in competitive markets." },
                        { icon: <Zap className="w-8 h-8" />, title: "Demand Generation", desc: "Content systems focused on trust, inbound demand, and long-term brand growth." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            {...fadeUp}
                            transition={{ delay: index * 0.2 }}
                            className="p-10 bg-[#161616] rounded-[30px] border border-gray-900 hover:border-[#9da1a0]/30 transition-colors group"
                        >
                            <div className="text-[#9da1a0] mb-6 transform group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PHILOSOPHY SECTION */}
            <section className="py-32 px-[6vw]">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <motion.div {...fadeUp}>
                        <h2 className="text-4xl md:text-6xl font-bold mb-10">Our <span className="text-[#9da1a0]">PRINCIPLES</span></h2>
                        <p className="text-2xl text-gray-400 italic mb-8 leading-relaxed">
                            Content should create <span className="text-[#9da1a0]">leverage</span>, not just <span className="text-[#9da1a0]">impressions</span>
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            I believe content is a positioning tool, not just a distribution channel.
                            Every decision — messaging, pacing, structure, and narrative — should strengthen long-term brand authority and demand.
                        </p>
                    </motion.div>
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative h-[60vh] rounded-[30px] overflow-hidden"
                    >
                        <img
                            src="/manish12.png"
                            alt="Process"
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-[#9da1a0]/10 mix-blend-overlay" />
                    </motion.div> */}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-[6vw] text-center bg-[#9da1a0] text-black">
                <motion.div >
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12">BUILD SOMETHING
                        <br />THAT COMPOUNDS</h2>
                    <p className="text-2xl mb-12 max-w-2xl mx-auto opacity-80">
                        Designed for brands that value positioning, consistency, and strategic growth.
                    </p>
                    <a
                        href="https://wa.me/yournumber"
                        target="_blank"
                        className="inline-block px-12 py-6 bg-black text-white rounded-full text-xl font-bold hover:scale-105 transition-transform"
                    >
                        Start a Conversation
                    </a>
                </motion.div>
            </section>

            {/* FOOTER-ISH */}
            <footer className="py-12 px-[6vw] text-center text-gray-600 text-sm">
                <p>&copy; 2026 MANISH KUSHWAHA. ALL RIGHTS RESERVED.</p>
            </footer>

            <style jsx global>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </div>
    );
}
