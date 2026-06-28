"use client";

import YtVideoCard from "@/components/YtvideoCard";
import type { YoutubeVideo } from "./GetYtVideos";

type Props = {
    videos: YoutubeVideo[];
};

function getThumbnail(video: YoutubeVideo) {
    return (
        video.snippet.thumbnails?.high?.url ??
        video.snippet.thumbnails?.medium?.url ??
        video.snippet.thumbnails?.default?.url ??
        "/thambnail/1.png"
    );
}

export default function GetYTClient({ videos }: Props) {
    if (videos.length === 0) {
        return (
            <div className="px-[6vw] py-20 text-center text-white/70">
                YouTube videos are unavailable right now.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-10 px-[6vw] py-24 md:grid-cols-3">
            {videos.map((video, index) => (
                <YtVideoCard
                    key={video.id.videoId}
                    index={index}
                    thumbnail={getThumbnail(video)}
                    videoId={video.id.videoId}
                />
            ))}
        </div>
    );
}
