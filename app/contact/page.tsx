"use client";

import { motion } from "framer-motion";


export default function Contact() {
    return (
        <div className="bg-white text-black min-h-screen px-6 md:px-20 py-20">

            {/* HEADING */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                    Let’s work together.
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    Have a project in mind? Send me a message.
                </p>
            </motion.div>

            {/* SPACING */}
            <div className="h-16"></div>

            {/* FORM */}
            <motion.form
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-2xl flex flex-col gap-6"
            >

                {/* NAME */}
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border-b border-gray-300 focus:border-black outline-none py-3 text-lg"
                />

                {/* EMAIL */}
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border-b border-gray-300 focus:border-black outline-none py-3 text-lg"
                />

                {/* MESSAGE */}
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="border-b border-gray-300 focus:border-black outline-none py-3 text-lg resize-none"
                />

                {/* BUTTON */}
                <button
                    type="submit"
                    className="mt-6 bg-black text-white py-4 text-lg font-medium hover:opacity-80 transition"
                >
                    Send Message
                </button>

            </motion.form>
        </div>
    );
}


