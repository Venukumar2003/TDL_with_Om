import { youtubeVideos } from "./YoutubeData";

const YoutubeVideos = () => {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm">

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">

                <h2 className="text-m font-bold text-violet-900">
                    Latest YouTube Videos
                </h2>

                <button className="text-sm font-semibold text-violet-700 hover:text-violet-900 hover:bg-purple-200 rounded-2xl p-1 cursor-pointer">
                    View All
                </button>

            </div>


            <div className="space-y-8">
                {youtubeVideos.map((video) => (
                    <a
                        key={video.id}
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3 rounded-lg p-2 transition hover:bg-gray-100"
                    >
                        <img
                            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                            alt={video.title}
                            className="h-20 w-28 rounded-lg object-cover"
                        />

                        <div className="flex-1">
                            <h3 className="text-sm font-semibold leading-5 text-gray-800">
                                {video.title}
                            </h3>

                            <p className="mt-1 text-xs text-gray-500">
                                {video.views}
                            </p>

                            <p className="text-xs text-gray-400">
                                {video.time}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
};

export default YoutubeVideos;