"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
    thumbnail: string;
    video: string;
    index?: number;
};

export default function VideoCard({ thumbnail, video, index = 0 }: Props) {
    const [play, setPlay] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className="cursor-pointer group"
        >
            {!play ? (
                <div
                    className="relative rounded-[30px] overflow-hidden"
                    onClick={() => setPlay(true)}
                >
                    <img
                        src={thumbnail}
                        className="w-full h-[600px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        alt="Video thumbnail"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-[#9da1a0] group-hover:bg-black/60">
                            <Play className="w-7 h-7 text-white ml-1" fill="white" fillOpacity={0.8} />
                        </div>
                    </div>
                </div>
            ) : (
                <video
                    src={video}
                    className="w-full h-[600px] object-cover rounded-[30px]"
                    autoPlay
                    controls
                    muted
                />
            )}
        </motion.div>
    );
}