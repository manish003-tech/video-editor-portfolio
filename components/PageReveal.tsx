"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";


export default function PageReveal() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const greetings = [
            "Hello",
            "Bonjour",
            "你好",
            "नमस्ते",
            "Hola",
            "Ciao",
            "안녕하세요",

        ];

        const tl = gsap.timeline({
            onComplete: () => {

            },
        });

        greetings.forEach((word, index) => {
            tl.to(textRef.current, {
                opacity: 1,
                // y: 20,
                duration: 0.01,
                onComplete: () => {
                    if (textRef.current) textRef.current.innerText = word;
                },
            }).to(textRef.current, {
                opacity: 1,
                // y: 0,
                duration: 0.08,
                ease: "power4.out",
            });

            // slight delay except last
            if (index !== greetings.length - 1) {
                tl.to({}, { duration: 0.1 });
            }
        });

        // exit animation
        tl.to(overlayRef.current, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.1,
            ease: "power4.inOut",
        });
    }, []);

    return (
        <div
            ref={overlayRef}
            className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] flex items-center justify-center"
        >
            <div
                ref={textRef}
                className="text-white text-6xl font-bold tracking-wide"
            >
                Hello
            </div>
        </div>
    );
}