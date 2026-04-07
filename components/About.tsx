"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-16 py-20 flex flex-col justify-between">

            {/* TOP SECTION */}
            <div>

                {/* Heading + Avatar */}
                <div className="flex items-start gap-6">
                    <Image
                        src="/manish123.png" // replace with your client image
                        alt="profile"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                    />

                    <h1 className="text-[60px] md:text-[120px] leading-[0.9] font-medium">
                        Let’s work <br /> together
                    </h1>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 my-16 relative">

                    {/* Floating Button */}
                    <div className="absolute right-0 -top-20">
                        <div className="w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center relative group cursor-pointer">
                            <span className="text-sm">Get in touch</span>

                            <ArrowUpRight
                                className="absolute top-6 right-6 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 border border-white/20 rounded-full">
                        manisheditspro@gmail.com
                    </div>

                    <div className="px-6 py-3 border border-white/20 rounded-full">
                        +91 73839 70758
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end text-sm text-white/60 mt-20 gap-6">

                <div>
                    <p>VERSION</p>
                    <p className="text-white">2026 © Edition</p>
                </div>

                <div>
                    <p>LOCAL TIME</p>
                    <p className="text-white">05:22 PM IST</p>
                </div>

                <div className="flex gap-6">
                    <span>Instagram</span>
                    <span>Twitter</span>
                    <span>LinkedIn</span>
                </div>

            </div>
        </div>
    );
}