'use client';

import { easeIn, motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

export default function Transition({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* PAGE CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1, ease: easeIn }}
            >
                {children}
            </motion.div>

            {/* OVERLAY (MAIN MAGIC) */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-black z-999"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
            />
        </>
    );
}