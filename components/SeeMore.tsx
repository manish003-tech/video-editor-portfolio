'use client'

import Link from "next/link";

export default function SeeMore() {
    return (
        <Link href='/work' className="h-10 w-auto flex  m-8 justify-center ">
            <button className="rounded-xl  bg-black text-white px-4 py-2 md:h-10 md:w-50 ">SEE MORE</button>
        </Link>
    )
}