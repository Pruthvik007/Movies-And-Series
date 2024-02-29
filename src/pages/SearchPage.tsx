import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Filters from "../components/Filters";
import MediaList from "../components/MediaList";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import { useSearchResults } from "../hooks/TmdbQueries";
import { MediaType, SearchMediaParamsType } from "../types/TmdbTypes";
import ErrorPage from "./ErrorPage";

const SearchPage = () => {
  const { ref, inView } = useInView();
  const [mediaType, setMediaType] = useState<MediaType>("movies");
  const [params, setParams] = useState<SearchMediaParamsType>({
    page: 1,
    query: "",
    include_adult: false,
  });
  const { data, error, fetchNextPage, isFetching, isFetchingNextPage } =
    useSearchResults(mediaType, params);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);
  if (error) return <ErrorPage />;
  return (
    <div className="container px-3">
      <p className="text-2xl md:text-3xl font-bold text-center py-3 text-neutral-content">
        Search For Movies And TV Series
      </p>
      <Filters
        classNames="mb-5"
        params={params}
        setParams={setParams}
        mediaType={mediaType}
        setMediaType={setMediaType}
      />
      <div className="flex flex-wrap gap-3 justify-center bg-neutral">
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            <MediaList
              mediaList={page.results}
              mediaType={mediaType as MediaType}
              isLoading={isFetching || isFetchingNextPage}
            />
          </React.Fragment>
        ))}
      </div>
      <div id="observer" ref={ref}></div>
      <ScrollToTopButton />
    </div>
  );
};

export default SearchPage;