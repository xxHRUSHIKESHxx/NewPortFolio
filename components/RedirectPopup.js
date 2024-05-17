import React, { useRef, useEffect } from "react";
import { BsTelegram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaReadme } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/router";

const RedirectPopup = (props) => {
  const router = useRouter();
  const pathname = router.pathname;
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        props.onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.onClose]);

  const handleSubmit = () => {
    props.onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
      <div
        ref={popupRef}
        className="bg-indigo-950 rounded-lg shadow-lg p-8 w-85"
      >
        <div className="flex items-center mb-4 justify-center"></div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-4 text-white ">
            {props.projectName}
          </h2>
          <div className="mb-4 text-white flex flex-col items-center">
            <p className="mb-2">
              {props.deployLink == null
                ? "This Project Is Not Deployed Yet"
                : "Check Github Code Base"}
            </p>
            <Link
              href={`${props.githubLink}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2 w-80 flex items-center justify-center"
              onClick={handleSubmit}
            >
              {" "}
              <FaGithub className="w-6 h-6 mr-2" />
              see git hub code base
            </Link>
          </div>
          {props.deployLink ? (
            <div className="mb-4 text-white flex  flex-col items-center">
              <p className="mb-2 mr-2">This Project Is Deployed</p>
              <Link
                href={`${props.deployLink}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-80  flex items-center justify-center"
                onClick={handleSubmit}
              >
                {" "}
                <BsTelegram className="w-6 h-6 mr-2 text-white" /> check the
                deployed demo
              </Link>
            </div>
          ) : null}

          <div className="mb-4 text-white flex flex-col items-center">
            <p className="mb-2 text-xs mr-2">
              Or Want To Be Registered As An Admin?
            </p>
            <Link
              href={{
                pathname: '/projectdesc',
                query: { 'title' : props.projectName },
              }}
              // href='/projectdesc'
              className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded w-80 flex items-center justify-center"
              onClick={handleSubmit}
            >
              <FaReadme className="w-6 h-6 mr-2" />
              Read about the project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectPopup;
