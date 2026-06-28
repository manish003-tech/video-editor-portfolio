"use client";

import { allVideos } from "@/components/Work";
import VideoCard from "@/components/VideoCard";
import { easeOut, motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: easeOut }
};

export default function WorkPageClient() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] px-[6vw] py-32 text-white">
            <motion.div {...fadeUp} className="mb-20">
                <div className="mb-8 flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-[#9da1a0]" />
                    <span className="text-sm uppercase tracking-widest text-[#9da1a0]">Execution</span>
                </div>

                <h2 className="mb-8 text-5xl text-[#9da1a0] md:text-7xl">
                    PROOF OF <span className="font-satoshi mb-8 font-bold tracking-tighter text-white">WORK</span>
                </h2>

                <div className="h-[2px] w-full overflow-hidden bg-gray-900">
                    <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1.5 }}
                        className="h-full w-full bg-[#9da1a0]"
                    />
                </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {allVideos.map((item, i) => (
                    <VideoCard
                        key={item.video}
                        index={i}
                        thumbnail={item.thumbnail}
                        video={item.video}
                    />
                ))}
            </div>
        </div>
    );
}
