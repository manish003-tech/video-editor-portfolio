'use client'

import Work from '@/components/Work'
import Transition from '@/components/TransitionPage'
import Navbar from '@/components/Navbar'
import VideoCard from '@/components/VideoCard';


const videos = [
    { thumbnail: "/thambnail/1.png", video: "/video/1.mp4" },
    { thumbnail: "/thambnail/2.png", video: "/video/2.mp4" },
    { thumbnail: "/thambnail/3.png", video: "/video/3.mp4" },
    { thumbnail: "/thambnail/4.png", video: "/video/4.mp4" },
    { thumbnail: "/thambnail/5.png", video: "/video/5.mp4" },
    { thumbnail: "/thambnail/6.png", video: "/video/6.mp4" },


    { thumbnail: "/thambnail/7.png", video: "/video/7.mp4" },
    { thumbnail: "/thambnail/8.png", video: "/video/8.mp4" },
    { thumbnail: "/thambnail/9.png", video: "/video/9.mp4" },
    { thumbnail: "/thambnail/10.png", video: "/video/10.mp4" },


];


const Page = () => {


    return (
        <Transition>
            <Navbar />
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
                {/* 
                        <Link href='/work' className="h-10 w-auto flex  m-8 justify-center ">
                            <button className="rounded-xl  bg-black text-white px-4 py-2 md:h-10 md:w-50 ">SEE MORE</button>
                        </Link> */}
            </div>
        </Transition>
    )
}

export default Page