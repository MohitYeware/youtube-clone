import React from "react";
import Comments from "./Comments";
import { CommentsData } from "../utils/helper";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mx-5 p-2">
      <h1 className="text-2xl font-bold mb-2">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
