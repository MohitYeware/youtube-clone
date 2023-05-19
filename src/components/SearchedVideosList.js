import React, { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import SearchedVideoCard from "./SearchedVideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const SearchedVideosList = () => {
  const [searchVideoList, setSearchVideoList] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
    getSearchedVideoList();
  }, []);

  const getSearchedVideoList = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API + searchParams.get("search_query")
    );
    const json = await data.json();
    setSearchVideoList(json);
  };

  const getVideoId = (videoIdObj) => {
    const result = Object.keys(videoIdObj).filter((x) => {
      const idType =
        x.match("videoId") || x.match("playlistId") || x.match("channelId");
      return idType;
    });
    return videoIdObj[result];
  };

  return (
    <div>
      {searchVideoList?.error ? (
        <div className="flex h-96 content-center mx-auto my-auto">
          <h1 className="text-red-500 text-2xl font-bold mx-auto my-auto">
            There is some problem occurred. Please try after some time.
          </h1>
        </div>
      ) : (
        <div className="flex flex-col">
          {searchVideoList?.items?.map((video) => (
            <Link
              key={getVideoId(video.id)}
              to={`/watch?v=${getVideoId(video.id)}`}
              state={{ videoDetails: video }}>
              <SearchedVideoCard details={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchedVideosList;
