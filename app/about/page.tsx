"use client";

import { motion } from "framer-motion";
import Transition from "@/components/TransitionPage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
    return (
        <Transition>

            <div className="bg-white text-black min-h-screen px-6 md:px-20 py-20">

                {/* HERO TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                        I create high-impact video edits that grab attention and keep people watching.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <Image src="/monish.png" alt="" width={100} height={100} />
                </motion.div>

                {/* SPACING */}
                <div className="h-20"></div>

                {/* ABOUT TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed"
                >
                    <p>
                        I’m MANISH, a video editor focused on short-form and long-form content.
                        I help creators and brands turn raw footage into engaging, scroll-stopping videos.
                    </p>

                    <br />

                    <p>
                        My approach is simple — clean cuts, strong pacing, and visuals that actually hold attention.
                        No unnecessary effects. Just results.
                    </p>
                </motion.div>

                {/* SPACING */}
                <div className="h-24"></div>

                {/* SKILLS / SERVICES */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg"
                >
                    <div>
                        <h3 className="font-semibold mb-2">Short Form</h3>
                        <p className="text-gray-600">Reels, TikTok, YouTube Shorts</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Long Form</h3>
                        <p className="text-gray-600">YouTube videos, vlogs, podcasts</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Editing Style</h3>
                        <p className="text-gray-600">Fast-paced, engaging, minimal</p>
                    </div>
                </motion.div>

            </div>
        </Transition>
    );
}

