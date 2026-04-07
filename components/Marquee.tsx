"use client";

import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { Inder } from "next/font/google";


const spacegrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: "400",
})

const inder = Inder({
    subsets: ["latin"],
    weight: "400",
})

export default function Marquee() {
    return (
        <div className="absolute bottom-0 w-full overflow-hidden">

            <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 40,
                    repeat: Infinity,
                }}
            >
                {/* FIRST SET */}
                <div className="flex shrink-0">
                    <span className={`mx-10 text-[14rem]  font-semibold text-white  ${inder.className}`}>
                        Manish Kushwaha -
                    </span>
                    <span className={`mx-10 text-[14rem] font-semibold text-white  ${inder.className}`}>
                        Manish Kushwaha -
                    </span>
                    <span className={`mx-10 text-[14rem] font-semibold text-white  ${inder.className}`}>
                        Manish Kushwaha -
                    </span>
                </div>

                {/* DUPLICATE */}
                <div className="flex shrink-0">
                    <span className={`mx-10 text-[14rem] font-semibold text-white  ${spacegrotesk.className}`}>
                        Manish Kushwaha -
                    </span>
                    <span className={`mx-10 text-[14rem] font-semibold text-white  ${spacegrotesk.className}`}>
                        Manish Kushwaha -
                    </span>
                    <span className={`mx-10 text-[14rem] font-semibold text-white  ${spacegrotesk.className}`}>
                        Manish Kushwaha -
                    </span>
                </div>

            </motion.div>
        </div>
    );
}