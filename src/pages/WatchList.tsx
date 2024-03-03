import { useState } from "react";
import MediaSelector from "../components/MediaSelector";
import { MediaType } from "../types/TmdbTypes";
import useWatchList from "../hooks/useWatchList";
import MediaList from "../components/MediaList";

const WatchList = () => {
  const [mediaType, setMediaType] = useState<MediaType>("movies");
  const { watchList } = useWatchList();
  const mediaList = watchList[mediaType];
  const isEmpty = mediaList.length === 0;

  return (
    <div className="p-5 rounded-xl space-y-5 flex flex-col">
      <MediaSelector mediaType={mediaType} setMediaType={setMediaType} />
      <div className="rounded-xl flex flex-wrap bg-neutral gap-5 justify-start p-3">
        {isEmpty ? (
          <p className="text-xl font-bold text-yellow-500 mx-auto">
            No {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)} Added To
            Watchlist!
          </p>
        ) : (
          <MediaList mediaType={mediaType} mediaList={mediaList} />
        )}
      </div>
    </div>
  );
};

export default WatchList;
