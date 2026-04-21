'use client'

import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SeeMore() {
    return (
        <div className="bg-[#0a0a0a] pb-20 px-[6vw]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="flex justify-center"
            >
                <Link
                    href="/work"
                    className="group inline-flex items-center gap-3 px-10 py-5 rounded-full border border-gray-800 text-white text-lg font-bold uppercase tracking-widest hover:border-[#9da1a0]/50 hover:bg-[#9da1a0]/5 transition-all duration-500"
                >
                    View All Work
                    <ArrowRight className="w-5 h-5 text-[#9da1a0] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </motion.div>
        </div>
    )
}