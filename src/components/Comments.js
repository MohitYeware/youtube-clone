import React from "react";

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-lg bg-gray-100 m-2">
      <img
        className="h-10 m-2"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2fmKVxObx6S1S87K3_FwX35IIwAPqgGs0A&usqp=CAU"
      />
      <div className="m-1 p-1">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
