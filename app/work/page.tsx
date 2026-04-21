'use client'

import { allVideos } from '@/components/Work'
import Transition from '@/components/TransitionPage'
import Navbar from '@/components/Navbar'
import VideoCard from '@/components/VideoCard';
import { easeOut, motion } from 'framer-motion';
import { Inder } from 'next/font/google';

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

const Page = () => {
    return (
        <Transition>
            <Navbar />
            <div className={`bg-[#0a0a0a] text-white min-h-screen pt-32 pb-32 px-[6vw] ${inder.className}`}>

                {/* Section Header */}
                <motion.div {...fadeUp} className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-[#9da1a0]" />
                        <span className="text-[#9da1a0] uppercase tracking-widest text-sm">Portfolio</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                        ALL <span className="text-[#9da1a0]">WORK</span>
                    </h1>

                    <div className="h-[2px] w-full bg-gray-900 overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "0%" }}
                            transition={{ duration: 1.5 }}
                            className="h-full w-full bg-[#9da1a0]"
                        />
                    </div>
                </motion.div>

                {/* Video Grid — all 10 videos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {allVideos.map((item, i) => (
                        <VideoCard
                            key={i}
                            index={i}
                            thumbnail={item.thumbnail}
                            video={item.video}
                        />
                    ))}
                </div>
            </div>
        </Transition>
    )
}

export default Page