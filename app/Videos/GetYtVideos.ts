export async function GetYTVideos() {


    const apiUrl =
        process.env.NEXT_PUBLIC_YOUTUBE_API_URL;

    const apiKey =
        process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    const channelId =
        process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

    const maxResults = 10;

    console.log(
        "YT API HIT:",
        new Date().toISOString()
    );

    // console.log(apiUrl);
    // console.log(apiKey);
    // console.log(channelId);

    try {

        const res = await fetch(
            // `${apiUrl}?part=snippet&channelId=${channelId}&maxResults=6&order=date&type=video&key=${apiKey}`,
            `${apiUrl}?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&maxResults=${maxResults}`,
            {
                cache: "force-cache",
                next: { revalidate: 3600 }
            }
        );

        console.log(res);

        if (!res.ok) {
            throw new Error("Failed to fetch videos");
        }

        return await res.json();

    } catch (error) {

        console.error(error);

        return { items: [] };
    }
}



