import React from "react";
import { MdError } from "react-icons/md";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";

const MessageSuccessPopUp = (props) => {
  console.log("message from message poup", props.message);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-blue-950 rounded-lg p-8 text-white text-center flex flex-col items-center">
        {props.message === "success" ? (
          <>
            <div className="flex items-center justify-center mb-4">
              <MdOutlineSentimentVerySatisfied className="text-accent text-6xl" />
            </div>
            <div>Message sent successfully!</div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center mb-4">
              <MdError className="text-red-500 text-6xl" />
            </div>
            <div>Something went wrong. Please try again later.</div>
          </>
        )}
      </div>
    </div>
  );
};

export default MessageSuccessPopUp;
