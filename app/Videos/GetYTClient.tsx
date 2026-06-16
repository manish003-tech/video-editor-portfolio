// 'use client';

// type Video = {
//     id: {
//         videoId: string;
//     };
//     snippet: {
//         title: string;
//     };
// };

// type Props = {
//     videos: Video[];
// };

// export default function GetYTClient({ videos }: Props) {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {videos.map((video) => (
//                 <div key={video.id.videoId}>
//                     <iframe
//                         src={`https://www.youtube.com/embed/${video.id.videoId}`}
//                         title={video.snippet.title}
//                         allowFullScreen
//                         className="aspect-video w-full rounded-3xl"
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// }