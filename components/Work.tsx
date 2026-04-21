'use client'

import VideoCard from "./VideoCard";
import Link from "next/link";
import { easeOut, motion } from "framer-motion";
import { Inder } from "next/font/google";

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

export const videos = [
    { thumbnail: "/thambnail/1.png", video: "/video/1.mp4" },
    { thumbnail: "/thambnail/2.png", video: "/video/2.mp4" },
    { thumbnail: "/thambnail/3.png", video: "/video/3.mp4" },
    { thumbnail: "/thambnail/4.png", video: "/video/4.mp4" },
    { thumbnail: "/thambnail/5.png", video: "/video/5.mp4" },
    { thumbnail: "/thambnail/6.png", video: "/video/6.mp4" },
];

export const allVideos = [
    ...videos,
    { thumbnail: "/thambnail/7.png", video: "/video/7.mp4" },
    { thumbnail: "/thambnail/8.png", video: "/video/8.mp4" },
    { thumbnail: "/thambnail/9.png", video: "/video/9.mp4" },
    { thumbnail: "/thambnail/10.png", video: "/video/10.mp4" },
];

export default function Work() {
    return (
        <div className={`bg-[#0a0a0a] text-white py-32 px-[6vw] ${inder.className}`}>

            {/* Section Header — matches About page hero label */}
            <motion.div {...fadeUp} className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-[1px] w-12 bg-[#9da1a0]" />
                    <span className="text-[#9da1a0] uppercase tracking-widest text-sm">Portfolio</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                    SELECTED <span className="text-[#9da1a0]">WORK</span>
                </h2>

                <div className="h-[2px] w-full bg-gray-900 overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1.5 }}
                        className="h-full w-full bg-[#9da1a0]"
                    />
                </div>
            </motion.div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {videos.map((item, i) => (
                    <VideoCard
                        key={i}
                        index={i}
                        thumbnail={item.thumbnail}
                        video={item.video}
                    />
                ))}
            </div>
        </div>
    );
}