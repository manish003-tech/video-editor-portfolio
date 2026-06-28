"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    const whatsappNumber = "917383970758";
    // Replace with your WhatsApp number
    // Example: 919876543210

    const text = `
*New Collaboration Message*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📝 Message:
${formData.message}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

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
          Let&apos;s Collaborate
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Strategic growth starts with clarity, positioning, and execution.
        </p>
      </motion.div>

      {/* SPACING */}
      <div className="h-16"></div>

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl flex flex-col gap-6"
      >

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          className="border-b border-gray-300 focus:border-black outline-none py-3 text-lg"
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          className="border-b border-gray-300 focus:border-black outline-none py-3 text-lg"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          onChange={handleChange}
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

