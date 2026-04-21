"use client";

import Marquee from "./Marquee";
import { Inder } from "next/font/google";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowDownLeft, ArrowDownRight, ArrowRight } from "lucide-react";

const inder = Inder({
    subsets: ["latin"],
    weight: "400",
})

export default function Hero() {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const firstTextRef = useRef<HTMLParagraphElement | null>(null);
    const secondTextRef = useRef<HTMLParagraphElement | null>(null);

    const xPercentRef = useRef(0);
    const directionRef = useRef(-1);

    useEffect(() => {
        if (!firstTextRef.current || !secondTextRef.current) return;
        gsap.set([firstTextRef.current, secondTextRef.current], { xPercent: 0 });

        let animationFrameId: number;

        const animate = () => {
            let xPercent = xPercentRef.current;

            if (xPercent <= -100) xPercent = 0;
            if (xPercent > 0) xPercent = -100;

            gsap.set([firstTextRef.current, secondTextRef.current], { xPercent });

            xPercent += 0.03 * directionRef.current;
            xPercentRef.current = xPercent;

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className=" h-screen md:h-screen  w-full  md:top-0  md:w-full bg-[#9da1a0] flex  ">



            {/* LOCATION */}
            <div className="flex  md:flex  md:flex-col md:w-[20vw] ">

                <Image
                    src="/browse.gif"
                    alt="Browse animation"
                    width={250}
                    height={250}
                    loading="lazy"
                    unoptimized
                    className="browser w-[15vw] bottom-5 right-[15vw] md:w-[2.5vw] md:mt-[35vh] absolute md:left-[16.7vw] z-10 md:top-[11vh] rounded-full "
                />

                <Image
                    src="/location.svg"
                    alt="Location"
                    width={800}
                    height={800}
                    className="md:w-[40vw] md:mt-[35vh] hidden md:block"
                />
            </div>


            {/* CENTER IMAGE */}
            <div className="w-[100vw] h-[100vh] md:w-[55vw]    flex ">

                <img
                    src="/manish12.png"
                    alt="Manish"
                    className={`top-0 z-0 w-screen h-[100vh]  object-cover md:w-[full] md:object-contain `}
                />
            </div>



            {/* ARROW */}
            <div className=" hidden md:flex md:flex-col ">

                <ArrowDownRight className="w-6 h-6 md:w-[3vw] md:h-[4vh] mt-[25vh] text-white" />

                <div className={`${inder.className} text-white text-2xl md:text-5xl md:mt-[10vh]`}>
                    Video Editor
                </div>

            </div>




            {/* <div className="absolute bottom-0 w-full h-[10vh]">
                <Marquee />
            </div> */}


            {/* RIGHT TEXT */}
            <div className={`absolute bottom-0 left-5 bottom-5 text-white text-2xl md:right-0.5  ${inder.className}`}>
                <ArrowDownRight className=" mb-10 left-[1vw]  w-9 md:hidden" />
                Real Estate Content <br />
                Growth Editor
            </div>


            <div className="absolute bottom-50 w-full overflow-hidden  py-3 md:bottom-15">
                <div ref={containerRef} className="flex whitespace-nowrap">

                    {/* First Copy */}
                    <p ref={firstTextRef} className="text-white text-9xl md:text-[18rem]  font-medium px-4">
                        Manish Kushwaha —  Manish Kushwaha —  Manish Kushwaha —
                    </p>

                    {/* Second Copy (for seamless loop) */}
                    <p ref={secondTextRef} className="text-white text-9xl md:text-[18rem] font-medium px-4">
                        Manish Kushwaha —  Manish Kushwaha —  Manish Kushwaha —
                    </p>

                </div>


            </div>


        </section>

    );
}