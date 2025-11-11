import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import profilepic from "./assets/images/profilepic.jpg";
import postimage from "./assets/images/postimage.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaImage, FaCheckCircle, FaComment } from "react-icons/fa";
import { CiSearch, CiCircleList, CiHeart, CiBookmark } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { FaLocationDot, FaRetweet } from "react-icons/fa6";
import { MdBarChart } from "react-icons/md";
import { MdOutlineGifBox, MdOutlineFileUpload } from "react-icons/md";
const App = () => {
  const textAreaRef = useRef(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    const el = textAreaRef.current;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }, [value]);

  return (
    <div className="lg:w-[80%] md:w-[90%]  w-full h-screen bg-black text-white flex mx-auto justify-between">
      <div className="lg:w-1/4 w-36 flex flex-col justify-between pb-4 overflow-y-auto pt-3">
        <div className="lg:inline flex flex-col items-center">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk lg:w-11 w-10 lg:p-2 p-1 cursor-pointer rounded-3xl hover:bg-[rgba(231,233,234,0.1)] transition duration-300"
            fill="white"
          >
            <g>
              <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
            </g>
          </svg>
          <div className="flex p-2 w-fit cursor-pointer rounded-3xl hover:bg-[rgba(231,233,234,0.1)] transition duration-300">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e w-6"
              fill="white"
            >
              <g>
                <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
              </g>
            </svg>
            <span className="hidden lg:flex lg:items-center lg:ml-2 lg:text-xl ">
              Home
            </span>
          </div>
          <div className="flex p-2 w-fit cursor-pointer rounded-3xl hover:bg-[rgba(231,233,234,0.1)] transition duration-300 ">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e w-6"
              fill="white"
            >
              <g>
                <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z "></path>
              </g>
            </svg>
            <span className="hidden lg:flex lg:items-center lg:ml-2 lg:text-xl">
              Explore
            </span>
          </div>
          <div className="flex p-2 w-fit cursor-pointer rounded-3xl hover:bg-[rgba(231,233,234,0.1)] transition duration-300 ">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e w-6"
              fill="white"
            >
              <g>
                <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
              </g>
            </svg>
            <span className="hidden lg:flex lg:items-center lg:ml-2 lg:text-xl">
              Notification
            </span>
          </div>
          <div className="flex p-2 w-fit cursor-pointer rounded-3xl hover:bg-[rgba(231,233,234,0.1)] transition duration-300">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e w-6"
              fill="white"
            >
              <g>
                <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
              </g>
            </svg>
            <span className="hidden lg:flex lg:items-center lg:ml-2 lg:text-xl">
              Messages
            </span>
          </div>

          <div className="flex p-2 w-fit cursor-pointer rounded-3xl hover:bg-[rgba(231,233,234,0.1)] transition duration-300">
            <svg
              viewBox="0 0 33 32"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e w-6"
              fill="white"
            >
              <g>
                <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path>
              </g>
            </svg>
            <span className="hidden lg:flex lg:items-center lg:ml-2 lg:text-xl">
              Grok
            </span>
          </div>
          <div className="flex p-2 w-fit cursor-pointer rounded-3xl hover:bg-[rgba(231,233,234,0.1)] transition duration-300">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e w-6"
              fill="white"
            >
              <g>
                <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
              </g>
            </svg>
            <span className="hidden lg:flex lg:items-center lg:ml-2 lg:text-xl">
              Profile
            </span>
          </div>
          <div className="flex p-2 w-fit cursor-pointer rounded-3xl hover:bg-[rgba(231,233,234,0.1)] transition duration-300">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e w-6"
              fill="white"
            >
              <g>
                <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
              </g>
            </svg>
            <span className="hidden lg:flex lg:items-center lg:ml-2 lg:text-xl">
              More
            </span>
          </div>
          <div className="flex pt-2 pb-2 ">
            <div className="w-full p-3 bg-white text-black text-center mr-10 rounded-3xl font-bold  hidden lg:block">
              <span>Post</span>
            </div>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1472mwg r-lrsllp w-8 inline lg:hidden"
              fill="white"
            >
              <g>
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex items-center lg:justify-between  rounded-3xl hover:bg-[rgba(231,233,234,0.1)] transition duration-300 cursor-pointer lg:p-2 lg:mr-1 justify-center">
          <div className="flex items-center ">
            <img src={profilepic} alt="" className="h-8 rounded-2xl" />

            <div className="lg:flex flex-col ml-2 hidden">
              <span className="text-sm font-bold">Md Anas</span>
              <span className="text-sm text-gray-400">@2004Anasxoxo</span>
            </div>
          </div>
          <BsThreeDotsVertical className="hidden lg:block" />
        </div>
      </div>
      <div className="mainfeed lg:w-1/2 lg:flex-grow-0 flex-grow border-x-[1px] border-[rgb(47,51,54)] overflow-y-auto">
        <div className="flex w-full border-b border-b-[rgb(47,51,54)] sticky top-0">
          <span className="hover:bg-[rgba(231,233,234,0.1)] transition duration-300 flex-grow py-3 text-center cursor-pointer font-bold backdrop-blur-sm bg-[rgba(0,0,0,0.5)]">
            For You
          </span>
          <span className="hover:bg-[rgba(231,233,234,0.1)] transition duration-300 flex-grow py-3 text-center cursor-pointer font-bold backdrop-blur-sm bg-[rgba(0,0,0,0.5)]">
            Following
          </span>
        </div>
        <div className="post p-2 flex border-b-[1px] border-[rgb(47,51,54)]">
          <img src={profilepic} alt="" className="h-8 rounded-3xl" />
          <div className="flex  flex-col flex-grow">
            <textarea
              value={value}
              ref={textAreaRef}
              placeholder="What's happening"
              className="flex-grow placeholder:text-[rgb(47,51,54)] bg-black outline-none ml-2 resize-none  border-b-[1px] border-[rgb(47,51,54)]"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div className="mt-2 flex flex-row justify-between items-center ">
              <ul className="flex justify-between w-2/5">
                <li className="p-1 cursor-pointer hover:bg-blue-100 transition duration-300 rounded-3xl">
                  <FaImage className="text-[rgb(29,155,240)]  " />
                </li>
                <li className="p-1 cursor-pointer hover:bg-blue-100 transition duration-300 rounded-3xl">
                  <MdOutlineGifBox className="text-[rgb(29,155,240)]  " />
                </li>
                <li className="p-1 cursor-pointer hover:bg-blue-100 transition duration-300 rounded-3xl">
                  <CiCircleList className="text-[rgb(29,155,240)]  " />
                </li>
                <li className="p-1 cursor-pointer hover:bg-blue-100 transition duration-300 rounded-3xl">
                  <BsEmojiSmile className="text-[rgb(29,155,240)]  " />
                </li>
                <li className="p-1 cursor-pointer hover:bg-blue-100 transition duration-300 rounded-3xl">
                  <FaLocationDot className="text-[rgb(29,155,240)]  " />
                </li>
              </ul>
              <button className=" md:w-20 w-15 p-2 text-center rounded-3xl bg-[rgb(120,122,122)]">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="content flex p-2 border-b-[1px] border-[rgb(47,51,54)]">
          <img
            src={profilepic}
            alt=""
            className="md:h-10 h-8 md:mt-1 rounded-3xl mr-1 "
          />

          <div className="flex-grow flex-col md:text-lg text-xs">
            <div className="flex  flex-col">
              <div className="flex flex-grow justify-between">
                <div className="flex items-center">
                  <span className="font-bold">Theo - t3.gg</span>
                  <span className="flex items-center mx-1">
                    <FaCheckCircle className="text-[rgb(29,155,240)]" />
                  </span>
                  <span className="text-[rgb(117,117,117)]">@theo · 14h</span>
                </div>
                <div className="flex items-center text-4xl">
                  <svg
                    viewBox="0 0 33 32"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                    fill="white"
                  >
                    <g>
                      <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path>
                    </g>
                  </svg>
                  <BsThreeDotsVertical className="ml-1 h-fit h-fit" />
                </div>
              </div>
              <div className="md:text-sm">
                Windows is an incredible operating system with no flaws
                whatsoever
              </div>
            </div>

            <img
              src={postimage}
              alt=""
              className="border-[1px] border-[rgb(47,51,54)] rounded-2xl mt-2"
            />
            <div className="postbuttons flex flex-grow mt-2 justify-between text-[rgb(117,117,117)] md:text-sm text-xs">
              <div className="w-[75%] flex justify-between">
                <div className="flex items-center md:gap-2 gap-1">
                  <FaComment /> <span>85</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <FaRetweet /> <span>21</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <CiHeart /> <span>636</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <MdBarChart /> <span>60K</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CiBookmark />
                <MdOutlineFileUpload />
              </div>
            </div>
          </div>
        </div>
        <div className="content flex p-2 border-b-[1px] border-[rgb(47,51,54)]">
          <img
            src={profilepic}
            alt=""
            className="md:h-10 h-8 md:mt-1 rounded-3xl mr-1 "
          />

          <div className="flex-grow flex-col md:text-lg text-xs">
            <div className="flex  flex-col">
              <div className="flex flex-grow justify-between">
                <div className="flex items-center">
                  <span className="font-bold">Theo - t3.gg</span>
                  <span className="flex items-center mx-1">
                    <FaCheckCircle className="text-[rgb(29,155,240)]" />
                  </span>
                  <span className="text-[rgb(117,117,117)]">@theo · 14h</span>
                </div>
                <div className="flex items-center text-4xl">
                  <svg
                    viewBox="0 0 33 32"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                    fill="white"
                  >
                    <g>
                      <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path>
                    </g>
                  </svg>
                  <BsThreeDotsVertical className="ml-1 h-fit" />
                </div>
              </div>
              <div className="md:text-sm">
                Windows is an incredible operating system with no flaws
                whatsoever
              </div>
            </div>

            <img
              src={postimage}
              alt=""
              className="border-[1px] border-[rgb(47,51,54)] rounded-2xl mt-2"
            />
            <div className="postbuttons flex flex-grow mt-2 justify-between text-[rgb(117,117,117)] md:text-sm text-xs">
              <div className="w-[75%] flex justify-between">
                <div className="flex items-center md:gap-2 gap-1">
                  <FaComment /> <span>85</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <FaRetweet /> <span>21</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <CiHeart /> <span>636</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <MdBarChart /> <span>60K</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CiBookmark />
                <MdOutlineFileUpload />
              </div>
            </div>
          </div>
        </div>
        <div className="content flex p-2 border-b-[1px] border-[rgb(47,51,54)]">
          <img
            src={profilepic}
            alt=""
            className="md:h-10 h-8 md:mt-1 rounded-3xl mr-1 "
          />

          <div className="flex-grow flex-col md:text-lg text-xs">
            <div className="flex  flex-col">
              <div className="flex flex-grow justify-between">
                <div className="flex items-center">
                  <span className="font-bold">Theo - t3.gg</span>
                  <span className="flex items-center mx-1">
                    <FaCheckCircle className="text-[rgb(29,155,240)]" />
                  </span>
                  <span className="text-[rgb(117,117,117)]">@theo · 14h</span>
                </div>
                <div className="flex items-center text-4xl">
                  <svg
                    viewBox="0 0 33 32"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                    fill="white"
                  >
                    <g>
                      <path d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"></path>
                    </g>
                  </svg>
                  <BsThreeDotsVertical className="ml-1 h-fit" />
                </div>
              </div>
              <div className="md:text-sm">
                Windows is an incredible operating system with no flaws
                whatsoever
              </div>
            </div>

            <img
              src={postimage}
              alt=""
              className="border-[1px] border-[rgb(47,51,54)] rounded-2xl mt-2"
            />
            <div className="postbuttons flex flex-grow mt-2 justify-between text-[rgb(117,117,117)] md:text-sm text-xs">
              <div className="w-[75%] flex justify-between">
                <div className="flex items-center md:gap-2 gap-1">
                  <FaComment /> <span>85</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <FaRetweet /> <span>21</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <CiHeart /> <span>636</span>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <MdBarChart /> <span>60K</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CiBookmark />
                <MdOutlineFileUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightsidebar lg:w-1/4 w-3/5 pl-5 pt-2 pb-3 md:flex flex-col gap-3 relative overflow-y-auto hidden">
        <div className="search flex rounded-3xl border-[rgb(47,51,54)] border  items-center p-2 sticky top-1 w- bg-black">
          <CiSearch className=" text-[rgb(117 117 117)]" />
          <input
            type="search"
            name=""
            id=""
            className=" ml-1 placeholder:text-[rgb(117,117,117) ] text-xs bg-black outline-none flex-grow"
            placeholder="Search"
          />
        </div>
        <div className="subtopremium mt-2 rounded-3xl border-[rgb(47,51,54)] border p-2 pl-3 pb-3 flex flex-col gap-2">
          <h1 className="font-bold text-lg">Subscribe to Premium</h1>
          <p className="text-xs">
            Subscribe to unlock new features and if eligible, receive a share of
            revenue.
          </p>
          <button className="block cursor-pointer bg-[rgb(30,155,241)] p-1 rounded-3xl pl-3 pr-3 text-xs font-bold  hover:bg-[rgb(22,114,175)] transition duration-300 ">
            Subscribe
          </button>
        </div>
        <div className="divider h-[1px] bg-[rgb(47,51,54)]"></div>
        <div className="happening flex flex-col   rounded-3xl border-[rgb(47,51,54)] border ">
          <h1 className="font-bold text-lg p-2 mb-2">What's Happening</h1>
          <div className="flex justify-between items-start cursor-pointer hover:bg-[rgba(231,233,234,0.1)] lg:p-3 p-2 transition duration-300">
            <div className="lg:text-sm text-xs">
              <p className="text-[rgb(90,94,98)]">
                Chennai Super Kings · Trending
              </p>
              <p className="font-semibold ">FLAT CHOR DHOBI</p>
              <p className="text-[rgb(90,94,98)]">12.6K posts</p>
            </div>
            <BsThreeDotsVertical className="mt-1" />
          </div>
          <div className="flex justify-between items-start cursor-pointer hover:bg-[rgba(231,233,234,0.1)] lg:p-3 p-2 transition duration-300">
            <div className="lg:text-sm text-xs">
              <p className="text-[rgb(90,94,98)]">
                Chennai Super Kings · Trending
              </p>
              <p className="font-semibold ">FLAT CHOR DHOBI</p>
              <p className="text-[rgb(90,94,98)]">12.6K posts</p>
            </div>
            <BsThreeDotsVertical className="mt-1" />
          </div>
          <div className="flex justify-between items-start cursor-pointer hover:bg-[rgba(231,233,234,0.1)] lg:p-3 p-2 transition duration-300">
            <div className="lg:text-sm text-xs">
              <p className="text-[rgb(90,94,98)]">
                Chennai Super Kings · Trending
              </p>
              <p className="font-semibold ">FLAT CHOR DHOBI</p>
              <p className="text-[rgb(90,94,98)]">12.6K posts</p>
            </div>
            <BsThreeDotsVertical className="mt-1" />
          </div>
          <div className="flex justify-between items-start cursor-pointer hover:bg-[rgba(231,233,234,0.1)] lg:p-3 p-2 transition duration-300">
            <div className="lg:text-sm text-xs">
              <p className="text-[rgb(90,94,98)]">
                Chennai Super Kings · Trending
              </p>
              <p className="font-semibold ">FLAT CHOR DHOBI</p>
              <p className="text-[rgb(90,94,98)]">12.6K posts</p>
            </div>
            <BsThreeDotsVertical className="mt-1" />
          </div>
          <div className="flex items-center cursor-pointer hover:bg-[rgba(231,233,234,0.1)] p-3 transition duration-300 rounded-b-3xl">
            <span className="text-[rgb(26,139,215)] text-xs">Show more</span>
          </div>
        </div>
        <footer>
          <ul className="text-xs text-[rgb(90,94,98)] flex flex-wrap gap-2">
            <li>Terms of Service</li>
            <li> |</li>
            <li>Privacy Policy</li>
            <li> |</li>
            <li>Cookie Policy</li>
            <li></li>
            <li>Accessibility</li>
            <li>|</li>
            <li>Ads info</li>
            <li>|</li>
            <li>More</li>
            <li>|</li>
            <li>© 2025 X Corp.</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default App;
