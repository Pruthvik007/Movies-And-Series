import React from "react";
import { saveIcon, savedIcon } from "../assets/assets";
import { useWatchList } from "../hooks/useWatchList";
import { Media, MediaDetails, MediaType } from "../types/TmdbTypes";

type WatchlistButtonsProps = {
  mediaDetails: MediaDetails;
  mediaType: MediaType;
  asIcons?: boolean;
  className?: string;
};

const WatchlistButtons: React.FC<WatchlistButtonsProps> = ({
  mediaDetails,
  mediaType,
  asIcons = false,
  className = "",
}) => {
  const {
    addMediaToWatchList,
    removeMediaFromWatchList,
    isMediaPresentInWatchlist,
  } = useWatchList();

  const handleAddToWatchlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addMediaToWatchList(mediaDetails as Media, mediaType);
  };

  const handleRemoveFromWatchlist = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    removeMediaFromWatchList(mediaDetails as Media, mediaType);
  };

  const renderButton = (isInWatchlist: boolean) => {
    const handleClick = isInWatchlist
      ? handleRemoveFromWatchlist
      : handleAddToWatchlist;
    const buttonClass = isInWatchlist
      ? `bg-red-500 hover:bg-red-700 ${
          asIcons && "btn btn-xs md:btn-sm rounded-full"
        }`
      : `bg-blue-500 hover:bg-blue-700 ${
          asIcons && "btn btn-xs md:btn-sm rounded-full"
        }`;
    const iconSrc = isInWatchlist ? savedIcon : saveIcon;
    const buttonText = isInWatchlist
      ? "Remove From Watchlist"
      : "Add To Watchlist";

    return (
      <button
        onClick={handleClick}
        className={`${buttonClass} text-white font-bold p-2 rounded-lg ${className}`}
      >
        {asIcons ? (
          <img
            src={iconSrc}
            alt={buttonText}
            className="w-full h-full"
            loading="lazy"
          />
        ) : (
          <span>{buttonText}</span>
        )}
      </button>
    );
  };

  return (
    <div>
      {renderButton(isMediaPresentInWatchlist(mediaDetails.id, mediaType))}
    </div>
  );
};

export default WatchlistButtons;
