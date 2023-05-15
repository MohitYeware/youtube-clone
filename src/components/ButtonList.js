import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Web development",
  "News",
  "Comedy",
  "Cricket",
  "Movies",
];

const ButtonList = () => {
  return (
    <div className="flex m-2">
      {list.map((button, index) => (
        <Button
          key={index}
          name={button}
        />
      ))}
    </div>
  );
};

export default ButtonList;
