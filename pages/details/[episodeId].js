import { BookmarkIcon } from "@heroicons/react/24/outline";
import Episodes from "../../episode.json";
import { useRouter } from "next/router";
export default function EpisodeDetails() {
  const router = useRouter();
  const { episodeId } = router.query;

  return (
    <div className="h-[900px]">
      {Episodes.map((post) => (
        <div>
          {post.episodeCollection.map((episode) => (
            <>
              {+episode.episodeId === +episodeId ? (
                <div className="flex flex-col items-center justify-center w-[90%] mt-10">
                  <img
                    src={episode.episodeImage}
                    className="w-[60%] rounded-lg"
                    alt=""
                    key={episode.episodeId}
                  />
                  <div className="flex flex-col items-center justify-center ">
                    <h1 className="pt-10 text-2xl font-bold text-center text-white ">
                      {episode.title} Season {episode.season}{" "}
                      <span className="text-red-600">•Subtitled</span>{" "}
                    </h1>

                    <p className="text-xs text-center text-white w-[90%] pt-4">
                      {episode.episodeDescription}
                    </p>

                    <p className="text-sm text-red-600">
                      28 min{" "}
                      <BookmarkIcon className="inline w-5 h-5 ml-4 text-red-700" />
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
}
