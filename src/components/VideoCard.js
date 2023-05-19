import React from "react";
import { refactorVideoCount } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex flex-col p-2 mx-1 my-2 w-72">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li className="text-gray-500">{channelTitle}</li>
        <li className="text-gray-500">
          {refactorVideoCount(statistics?.viewCount)}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
