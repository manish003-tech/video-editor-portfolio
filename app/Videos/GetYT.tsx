import { GetYTVideos } from "@/app/Videos/GetYtVideos";
import GetYTClient from "./GetYTClient";

export default async function GetYT() {
    const videos = await GetYTVideos();

    return (
        <section className="bg-[#0a0a0a] text-white">
            <GetYTClient videos={videos} />
        </section>
    );
}
