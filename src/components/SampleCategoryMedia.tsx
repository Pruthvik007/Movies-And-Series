import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CONSTANTS,
  END_POINT_OF_MEDIA_OF_CATEGORY,
} from "../helpers/Constants";
import { useSampleMedia } from "../hooks/TmdbQueries";
import { MediaType } from "../types/TmdbTypes";
import MediaList from "./MediaList";
import MediaSelector from "./MediaSelector";

type SampleCategoryMediaProps = {
  category:
    | keyof typeof END_POINT_OF_MEDIA_OF_CATEGORY.MOVIES
    | keyof typeof END_POINT_OF_MEDIA_OF_CATEGORY.SHOWS;
};
const SampleCategoryMedia = ({ category }: SampleCategoryMediaProps) => {
  const navigate = useNavigate();
  const [mediaType, setMediaType] = useState<MediaType>("MOVIES");
  const { isLoading, data } = useSampleMedia(mediaType, category);

  return (
    <div className="flex flex-col gap-3 p-3 bg-neutral rounded-xl">
      <div className="w-full flex flex-row place-content-between items-center">
        <div className="flex flex-row gap-4  items-center">
          <p className="text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-white">
            {CONSTANTS.CATEGORIES[category]}
          </p>
          <MediaSelector mediaType={mediaType} setMediaType={setMediaType} />
        </div>
        <button
          onClick={() => navigate(`/media/${mediaType}/${category}`)}
          className="btn btn-active btn-primary btn-sm md:btn-sm lg:btn-md"
        >
          View More
        </button>
      </div>
      <div className="flex flex-row gap-3 scrollbar-hidden">
        <MediaList
          mediaList={data?.results}
          mediaType={mediaType}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default SampleCategoryMedia;
