"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type Props = {
    thumbnail: string;
    video: string;
};

export default function VideoCard({ thumbnail, video }: Props) {
    const [play, setPlay] = useState(false);

    return (
        <div className="cursor-pointer">
            {!play ? (
                <div
                    className="relative"
                    onClick={() => setPlay(true)}
                >
                    <img
                        src={thumbnail}
                        className="w-full h-[600px] object-cover rounded-xl"
                    />

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white bg-black/50 p-2 rounded-full" />
                    </div>
                </div>
            ) : (
                <video
                    src={video}
                    className="w-full h-[600px] object-cover rounded-xl"
                    autoPlay
                    controls
                    muted
                />
            )}
        </div>
    );
}