import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-full px-[12%] py-8 scroll-mt-16">
      <h4 className=" text-center mb-2 text-lg font-Ovo ">Introduction</h4>
      <h2 className=" text-center mb-2 text-4xl font-extrabold text-gray-800 ">
        About Me
      </h2>

      <div className=" flex w-full flex-col lg:flex-row items-center gap-20 my-8 ">
        <div className=" w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user_image"
            className=" w-full rounded-3xl"
          />
        </div>

        <div className=" flex-1">
          <p className=" mb-6">
            Hi! I’m a web developer passionate about building interactive and
            user-friendly applications. I enjoy creating dynamic web experiences
            using React.js, turning complex ideas into functional and visually
            appealing designs. Problem-solving and learning new technologies
            excite me as I strive to write clean, efficient code and deliver
            meaningful solutions. As a fresher, I’m eager to collaborate on
            exciting projects, enhance my skills, and make a positive impact in
            the ever-evolving world of web development.
          </p>

          <ul className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className=" border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover: bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
              >
                <Image src={icon} alt={title} className=" w-7 mt-3" />
                <h3 className=" my-3 font-semibold text-gray-700">{title}</h3>
                <p className=" text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="m-6 text-xl text-black-700 font-Ovo">Tools I use</h4>
          <ul className=" flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className=" flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className=" w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
