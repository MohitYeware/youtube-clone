import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json);
  };

  return (
    <div>
      {videos?.error ? (
        <div className="flex h-96 content-center px-auto py-auto">
          <h1 className="text-red-500 text-2xl font-bold mx-auto my-auto">
            There is some problem occurred. Please try after some time.
          </h1>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap">
          {videos?.items?.map((video) => (
            <Link
              key={video.id}
              to={`/watch?v=${video.id}`}
              state={{ videoDetails: video }}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
