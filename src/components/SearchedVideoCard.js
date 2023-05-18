import React from "react";

const SearchedVideoCard = ({ details }) => {
  const { snippet } = details ?? {};
  const { title, channelTitle, thumbnails, description, publishedAt } =
    snippet ?? {};

  const checkAndReplaceSpecialCharacters = (entity) => {
    if (entity.includes("&amp;")) {
      entity = entity.replaceAll("&amp;", "&");
    }
    return entity;
  };

  return (
    <div className="flex my-8 cursor-pointer">
      <img
        src={thumbnails?.medium?.url}
        alt="searchedVideo"
        className="rounded-lg"
      />
      <div className="flex flex-col mx-4">
        <h2 className="text-xl font-bold">
          {checkAndReplaceSpecialCharacters(title)}
        </h2>
        <h5 className="text-gray-600 my-2">
          {checkAndReplaceSpecialCharacters(channelTitle)}
        </h5>
        <h6 className="text-gray-600">
          {checkAndReplaceSpecialCharacters(description)}
        </h6>
      </div>
    </div>
  );
};

export default SearchedVideoCard;
