type Thumbnail = {
    url: string;
};

type ThumbnailSet = {
    default?: Thumbnail;
    medium?: Thumbnail;
    high?: Thumbnail;
};

type YoutubeApiItem = {
    id?: {
        videoId?: string;
    };
    snippet?: {
        title?: string;
        thumbnails?: ThumbnailSet;
    };
};

type YoutubeApiResponse = {
    items?: YoutubeApiItem[];
};

export type YoutubeVideo = {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails?: ThumbnailSet;
    };
};

export async function GetYTVideos(): Promise<YoutubeVideo[]> {


    const apiUrl =
        process.env.YOUTUBE_API_URL ?? process.env.NEXT_PUBLIC_YOUTUBE_API_URL;

    const apiKey =
        process.env.YOUTUBE_API_KEY ?? process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    const channelId =
        process.env.YOUTUBE_CHANNEL_ID ?? process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

    const maxResults = 10;

    if (!apiUrl || !apiKey || !channelId) {
        console.warn("YouTube API config is missing.");
        return [];
    }

    const url = new URL(apiUrl);
    url.searchParams.set("key", apiKey);
    url.searchParams.set("channelId", channelId);
    url.searchParams.set("order", "date");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("maxResults", String(maxResults));
    url.searchParams.set("type", "video");

    // console.log(apiUrl);
    // console.log(apiKey);
    // console.log(channelId);

    try {

        const res = await fetch(
            url,
            {
                next: { revalidate: 3600 }
            }
        );

        // console.log(res);

        if (!res.ok) {
            throw new Error(`Failed to fetch videos: ${res.status}`);
        }

        const data = (await res.json()) as YoutubeApiResponse;

        return (data.items ?? []).flatMap((item) => {
            const videoId = item.id?.videoId;

            if (!videoId) return [];

            return [{
                id: { videoId },
                snippet: {
                    title: item.snippet?.title ?? "YouTube video",
                    thumbnails: item.snippet?.thumbnails
                }
            }];
        });

    } catch (error) {

        console.error("YouTube videos could not be loaded.", error);

        return [];
    }
}



