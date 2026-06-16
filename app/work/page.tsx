"use client";

import Navbar from "@/components/Navbar";
import Transition from "@/components/TransitionPage";
import { allVideos } from "@/components/Work";
import VideoCard from "@/components/VideoCard";
import { motion, easeOut } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: easeOut }
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <Transition>
        <div className="bg-[#0a0a0a] text-white py-32 px-[6vw] min-h-screen">
          {/* Section Header */}
          <motion.div {...fadeUp} className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#9da1a0]" />
              <span className="text-[#9da1a0] uppercase tracking-widest text-sm">Execution</span>
            </div>

            <h2 className="text-5xl md:text-7xl text-[#9da1a0] mb-8">
              PROOF OF <span className="text-white font-satoshi font-bold tracking-tighter mb-8">WORK</span>
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
    </>
  );
}
