"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
    thumbnail: string;
    videoId: string;
    index?: number;
};

export default function VideoCard({
    thumbnail,
    videoId,
    index = 0,
}: Props) {

    const [play, setPlay] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            className="group"
        >

            {!play ? (

                <div
                    onClick={() => setPlay(true)}
                    className="relative overflow-hidden rounded-3xl cursor-pointer"
                >

                    <img
                        src={thumbnail}
                        alt="thumbnail"
                        className="aspect-video w-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">

                        <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">

                            <Play
                                className="text-white ml-1"
                                fill="white"
                            />

                        </div>

                    </div>

                </div>

            ) : (

                <iframe
                    className="aspect-video w-full rounded-3xl"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube Video Player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

            )}

        </motion.div>
    );
}