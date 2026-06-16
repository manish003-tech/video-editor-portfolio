import { GetYTVideos } from "@/app/Videos/GetYtVideos";


type Video = {
    id: {
        kind: string;
        videoId: string;
    };
    snippet: {

        title: string;

    };
};

type YoutubeResponse = {
    items: Video[];
}

export default async function GetYT() {
    const videos: YoutubeResponse = await GetYTVideos();
    console.log(videos);
    return (
        <div className="grid grid-col-1 md:grid-cols-3 gap-10 py-24 px-[6vw]">
            {
                videos.items.map((video: Video) => (
                    <div key={video.id.videoId}>
                        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen title="YouTube video player" className="aspect-video w-full rounded-3xl" />

                    </div>
                ))
            }

        </div>

    )

}
