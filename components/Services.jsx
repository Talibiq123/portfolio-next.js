import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className=" min-h-screen w-full px-[12%] py-8 scroll-mt-20"
    >
      <h4 className=" text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className=" text-center text-4xl font-Ovo">My Services</h2>

      <p className=" text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a passionate fresher specializing in web development with React.js.
        I enjoy creating dynamic, responsive user interfaces and eager to
        contribute to innovative projects while growing as a skilled developer.
      </p>

      <div className=" grid grid-cols-4 gap-6 my-10">
        {
            serviceData.map(({icon, title, description, link}, index) => (
                <div key={index}>
                    <Image src={icon} alt="" className=" w-10" />
                    <h3 className=" text-lg my-4 text-gray-700">{title}</h3>
                </div>
            ))
        }
      </div>

    </div>
  );
};

export default Services;