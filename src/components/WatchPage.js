import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { refactorVideoCount } from "../utils/helper";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { videoDetails } = state;
  const { snippet, statistics } = videoDetails;
  const { title, channelTitle, description } = snippet;

  useEffect(() => {
    window.scrollTo(0, 0);
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
        <div className="mx-0 my-4">
          <h4 className="font-bold text-xl w-[56rem]">{title}</h4>
          <div className="flex flex-row py-2 px-0.5">
            <h5>{channelTitle}</h5>
            <button
              className="border border-gray-300 ml-20 px-4 py-2 font-bold rounded-full"
              disabled>
              Join
            </button>
            <button
              className="border bg-black text-white mx-2 px-4 py-2 font-bold rounded-full"
              disabled>
              Subscribe
            </button>
            <div className="flex flex-row ml-48 px-4 py-2 bg-gray-100 rounded-full">
              <BiLike size={25} />
              <span className="px-3">{statistics?.likeCount}</span>
              <span className="border border-r-1 border-gray-300"></span>
              <span className="px-1.5" />
              <BiDislike size={25} />
            </div>
            <div className="flex flex-row mx-2 p-2 bg-gray-100 rounded-full">
              <RiShareForwardLine size={25} />
              <span className="mx-1 font-bold">Share</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 mt-2 rounded-lg p-2 w-[56rem] h-20">
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
