import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { refactorVideoCount } from "../utils/helper";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { videoDetails } = state;
  const { snippet, statistics } = videoDetails;
  const { title, channelTitle, description } = snippet;

  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex flex-col">
      <div className="p-5">
        <div className="flex">
          <iframe
            width="900"
            height="450"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <LiveChat />
        </div>
        <div className="mx-5 my-2">
          <h4 className="font-bold">{title}</h4>
          <h5>{channelTitle}</h5>
        </div>
        <div className="bg-gray-200 mx-5 rounded-lg p-2 w-[56rem] h-24">
          {statistics && (
            <p className="font-bold">
              {refactorVideoCount(statistics?.viewCount)}
            </p>
          )}
          <p className="truncate">{description}</p>
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
