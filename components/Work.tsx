'use client'

import VideoCard from "./VideoCard";


const videos = [
    { thumbnail: "/thambnail/1.png", video: "/video/1.mp4" },
    { thumbnail: "/thambnail/2.png", video: "/video/2.mp4" },
    { thumbnail: "/thambnail/3.png", video: "/video/3.mp4" },
    { thumbnail: "/thambnail/4.png", video: "/video/4.mp4" },
    { thumbnail: "/thambnail/5.png", video: "/video/5.mp4" },
    { thumbnail: "/thambnail/6.png", video: "/video/6.mp4" },
];

export default function Work() {
    return (
        <div className="container p-2 md:p-10 md:ml-[10vw]">
            <h1 className="text-center text-4xl mb-10">Work</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videos.map((item, i) => (
                    <VideoCard
                        key={i}
                        thumbnail={item.thumbnail}
                        video={item.video}
                    />
                ))}
            </div>
        </div>
    );
}