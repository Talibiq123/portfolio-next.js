import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";


const About = ({ isDarkMode }) => {
  return (
    <motion.div id="about" className="min-h-screen w-full px-[12%] py-8 scroll-mt-16" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 5}}>
      <motion.h4 id="about"  initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}} className=" text-center mb-2 text-lg font-Ovo ">Introduction</motion.h4>
      <h2 className=" text-center mb-2 text-4xl font-extrabold text-gray-800  dark:text-white">
        About Me
      </h2>

      <motion.div className=" flex w-full flex-col lg:flex-row items-center gap-20 my-8 " initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}}>
        <motion.div className=" w-64 sm:w-80 rounded-3xl max-w-none" initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale:1}} transition={{duration: 0.6}}>
          <Image
            src={assets.user_image}
            alt="user_image"
            className=" w-full rounded-3xl"
          />
        </motion.div>

        <motion.div className=" flex-1" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.8}}>
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

          <motion.ul className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, delay: 1}} >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileInView={{scale: 1.05}}
                key={index}
                className=" border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover: bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:bg-darkTheme dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className=" w-7 mt-3"
                />
                <h3 className=" my-3 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className=" text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 initial={{ y: 20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{delay: 1.3, duration: 0.5}} className="m-6 text-xl text-black-700 font-Ovo">Tools I use</motion.h4>
          <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 1.5, duration: 0.6}} className=" flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{scale: 1.05}}
                key={index}
                className=" flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className=" w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
