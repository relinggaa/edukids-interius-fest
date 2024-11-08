import React from "react";
import ba from "./assets/img/ba.svg";

const Certified = () => {
  return (
    <div id="certified" className="relative py-20 xl:ms-16">
      <div className="bg-gradient-to-r from-pink-300 to-violet-500 tc-bg"></div>

      <div className="container  grid grid-cols-1 md:grid-cols-2 items-center xl:gap-16  relative ">
        <div className="flex flex-col items-center pe-14 md:items-start">
          <div className="flex justify-center items-center md:items-start">
            <img className="mx-auto" src={ba} alt="Teacher" />
          </div>
        </div>

        <div className="text-center md:text-left  xxl:w-[150%] xxl:ps-56">
          <h1 className="text-4xl md:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Certified
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
              And
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">
              Expert
            </span>
          </h1>
          <p className="mt-4 xl:mt-10 text-gray-500 text-sm md:text-base xl:text-lg">
            At EduKids, we take pride in our team of mentors who are not only
            experts in their respective fields but also hold official
            certifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certified;
