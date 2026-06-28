import Navbar from "@/components/Navbar";
import Transition from "@/components/TransitionPage";
import GetYT from "../Videos/GetYT";
import { Suspense } from "react";
import WorkPageClient from "./WorkPageClient";

function YoutubeFallback() {
  return (
    <div className="bg-[#0a0a0a] px-[6vw] py-20 text-center text-white/70">
      Loading YouTube videos...
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <Transition>
        <WorkPageClient />
        <Suspense fallback={<YoutubeFallback />}>
          <GetYT />
        </Suspense>
      </Transition>
    </>
  );
}
