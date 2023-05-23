import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  // Logic for API polling
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col">
        <div className="mx-4 p-2 border border-black w-[28rem] h-[25rem] bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {chatMessages.map((c, index) => (
            <ChatMessage
              key={index}
              name={c.name}
              message={c.message}
            />
          ))}
        </div>
        <form
          className="w-[28rem] mx-4 p-2 border border-black"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({ name: "User", message: liveMessage }));
            setLiveMessage("");
          }}>
          <input
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="border border-black px-4 py-1 w-80"
          />
          <button className="mx-4 px-2 py-1 bg-blue-500 rounded-md text-black">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
