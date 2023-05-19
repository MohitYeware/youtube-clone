import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-lg bg-gray-100 m-2">
      <HiOutlineUserCircle
        className="mx-1 my-2"
        size={40}
      />
      <div className="m-1 p-1">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
