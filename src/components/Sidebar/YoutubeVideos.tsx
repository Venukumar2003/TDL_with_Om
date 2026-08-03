import { youtubeVideos } from "./YoutubeData";

const YoutubeVideos = () => {
    return (
        <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-2 transition-all duration-500 ">

            {/* Header */}
            <div className="mb-8 flex items-center justify-between">

                <h2 className="text-2xl sm:text-xl font-bold text-violet-900">
                    Latest YouTube Videos
                </h2>

                <button className="text-sm font-semibold text-violet-700 hover:text-violet-900 hover:bg-purple-200 rounded-2xl p-1 cursor-pointer">
                    View All
                </button>

            </div>


            <div className="space-y-4">
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
                            className="h-16 w-24 rounded-lg object-cover sm:h-20 sm:w-28"
                        />

                        <div className="flex-1">
                            <h3 className="text-xs font-semibold leading-5 sm:text-sm text-gray-800">
                                {video.title}
                            </h3>

                            <p className="mt-1 text-[11px] text-gray-500 sm:text-xs text-gray-500">
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