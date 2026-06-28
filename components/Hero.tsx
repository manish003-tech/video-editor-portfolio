"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";





export default function Hero() {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const firstTextRef = useRef<HTMLParagraphElement | null>(null);
    const secondTextRef = useRef<HTMLParagraphElement | null>(null);

    const xPercentRef = useRef(0);
    const directionRef = useRef(-1);

    useEffect(() => {
        const firstText = firstTextRef.current;
        const secondText = secondTextRef.current;

        if (!firstText || !secondText) return;

        const marqueeItems = [firstText, secondText];
        let isActive = true;

        gsap.set(marqueeItems, {
            xPercent: 0,
        });

        let animationFrameId: number | undefined;

        const animate = () => {
            if (!isActive) return;

            let xPercent = xPercentRef.current;

            if (xPercent <= -100) xPercent = 0;
            if (xPercent > 0) xPercent = -100;

            gsap.set(
                marqueeItems,
                { xPercent }
            );

            xPercent += 0.03 * directionRef.current;
            xPercentRef.current = xPercent;

            animationFrameId = requestAnimationFrame(animate);
        };

        const timeoutId = setTimeout(() => {
            animationFrameId = requestAnimationFrame(animate);
        }, 4000);

        return () => {
            isActive = false;
            clearTimeout(timeoutId);
            if (animationFrameId !== undefined) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <section className={` h-[85vh] md:h-screen md:h-screen  w-full  md:top-0  md:w-full bg-[#9da1a0] flex `}>



            {/* LOCATION */}
            <div className="flex  md:flex  md:flex-col md:w-[20vw] ">

                <Image
                    src="/browse.gif"
                    alt="Browse animation"
                    width={250}
                    height={250}
                    loading="lazy"
                    unoptimized
                    className="browser w-[10vw] left-26 bottom-4 right-[15vw] md:w-[2.5vw] md:mt-[35vh] absolute md:left-[16.7vw] z-10 md:top-[11vh] rounded-full "
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
                    className={`z-0 w-screen h-[100vh] object-cover -translate-y-8 scale-100 md:scale-107
                         md:w-full md:object-contain `}
                />
            </div>



            {/* ARROW */}
            <div className=" hidden md:flex md:flex-col ">

                <ArrowDownRight className="w-6 h-6 md:w-[3vw] md:h-[4vh] mt-[25vh] text-white" />

                <div className={` text-white text-2xl md:text-5xl md:mt-[10vh]`}>
                    Growth Partner
                </div>

            </div>




            {/* <div className="absolute bottom-0 w-full h-[10vh]">
                <Marquee />
            </div> */}


            {/* RIGHT TEXT */}
            <div className={`absolute  font-satoshi left-1 bottom-5 text-white text-2xl md:right-0.5  `}>
                <ArrowDownRight className=" mb-1     left-[1vw]  w-9 md:hidden" />
                Content, Positioning & <br />
                Demand
            </div>

            <div className="absolute bottom-[8rem] w-full overflow-hidden py-3 md:bottom-15">

                <div
                    ref={containerRef}
                    className="flex whitespace-nowrap will-change-transform"
                    style={{ width: "fit-content" }}
                >

                    <p
                        ref={firstTextRef}
                        className="sat text-white tracking-tighter font-satoshi text-[28vw] leading-[0.8] md:text-[18rem] md:leading-none"
                    // className="sat text-white  tracking-tighter font-satoshi md:font-bold text-[22vw] md:text-[18rem] leading-none  flex-shrink-0"
                    >
                        Manish Kushwaha — Manish Kushwaha — Manish Kushwaha —
                    </p>

                    <p
                        ref={secondTextRef}
                        className="sat text-white tracking-tighter font-satoshi text-[28vw] leading-[0.8] md:text-[18rem] md:leading-none"
                    // className="sat text-white  tracking-tighter font-satoshi md:font-bold     text-[22vw] md:text-[18rem] leading-none flex-shrink-0"
                    >
                        Manish Kushwaha — Manish Kushwaha — Manish Kushwaha —
                    </p>

                </div>

            </div>


        </section>

    );
}
