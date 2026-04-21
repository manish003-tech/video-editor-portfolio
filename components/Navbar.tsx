"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Inder } from "next/font/google";
import { FileX, WrenchIcon } from "lucide-react";
import Link from "next/link";

const inder = Inder({
    subsets: ["latin"],
    weight: "400",
});

const Links = [
    { href: '/work', name: "Work" },
    { href: '/about', name: "About" },
    { href: '/contact', name: "Contact" }
]

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <div className={`flex justify-between bg-[#9da1a0] items-center px-5 py-5 md:px-10 md:py-8   text-black ${inder.className}`}>

                {/* LOGO */}
                <Link href='/' className="text-sm md:text-xl text-white ">© MANISH</Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex gap-10 text-xl  text-white">
                    {Links.map((link) => (
                        <Link key={link.href} href={link.href}>
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-sm cursor-pointer text-white"
                    onClick={() => setOpen(true)}
                >
                    MENU
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            {open && (
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8 }}
                    className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col justify-center items-center z-[9999]"
                >
                    {/* CLOSE */}
                    <button
                        className="absolute top-6 right-6"
                        onClick={() => setOpen(false)}
                    >
                        <div>
                            <FileX />
                        </div>
                    </button>

                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-6 text-3xl">
                        {Links.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: i * 0.15,
                                    duration: 0.5,
                                }}
                            >
                                <Link href={link.href} onClick={() => setOpen(false)}>
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
}