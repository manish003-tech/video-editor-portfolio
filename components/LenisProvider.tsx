"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.2,
            smoothWheel: true,
            wheelMultiplier: 0.7,
            touchMultiplier: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 5),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}