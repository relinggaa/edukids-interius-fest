import React, { useState, useEffect } from "react";
import kids from "./assets/img/kids.webp";

const HeroSection = () => {
  const [learningGames, setLearningGames] = useState(0);
  const [mentors, setMentors] = useState(0);
  const [members, setMembers] = useState(0);
  const [courses, setCourses] = useState(0);

  const animateNumber = (setValue, targetValue, duration) => {
    let startValue = 0;
    const increment = Math.ceil(targetValue / (duration / 50));
    const timer = setInterval(() => {
      startValue += increment;
      if (startValue > targetValue) {
        setValue(targetValue);
        clearInterval(timer);
      } else {
        setValue(startValue);
      }
    }, 50);
  };

  useEffect(() => {
    animateNumber(setLearningGames, 50, 2000);
    animateNumber(setMentors, 100, 2000);
    animateNumber(setMembers, 2000, 2000);
    animateNumber(setCourses, 100, 2000);
  }, []);

  return (
    <div id="hero" className="mt-28  xl:mt-32 relative  bg-white items-center ">
      <div className="background-gradient"></div>
      <div className=" w-auto h-auto justify-center   relative flex flex-col lg:flex-row items-center   z-10">
        <div className="lg:w-4/6 ps-5  ">
          <p className="text-blue-500 font-medium text-sm mb-2">
            Best E-Learning Platform
          </p>

          <h1 className="text-5xl  text-black mb-4">
            Welcome <br /> To Fun <br />
            <span className=" gradasi  bg-clip-text">
              Learning <br /> World
            </span>
          </h1>

          <a
            href="#"
            className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Join Course
          </a>
        </div>

        {/* Image */}

        <div className=" w-auto  lg:w-1/2 relative img-hero md:mt-20 lg:mt-32 xl:mt-3 lg:absolute right-0 lg:right-10 top-0 lg:top-[-200px] z-10">
          <img
            src={kids}
            alt="Girl with book"
            className="object-contain h-auto w-full lg:max-w-[883px] xl:max-w-[750px] max-w-full"
          />
        </div>
      </div>

      {/* Stats Section */}

      <div className=" stats-bg w-full h-full stats mt-36 py-6 flex flex-col lg:flex-row  justify-center gap-8 lg:gap-16 xl:gap-64 text-white xl:mt-16 z-20 relative">
        <div className="text-center px-4 w-full lg:w-auto">
          <h2 className="text-2xl lg:text-4xl font-bold">{learningGames}+</h2>
          <p className="text-gray-200 text-base lg:text-lg">Learning Games</p>
        </div>

        <div className="xl:border-l-4 border-white text-center px-4 w-full lg:w-auto">
          <h2 className="text-2xl lg:text-4xl font-bold">{mentors}+</h2>
          <p className="text-gray-200 text-base lg:text-lg">Mentors</p>
        </div>

        <div className="xl:border-l-4 border-white text-center px-4 w-full lg:w-auto">
          <h2 className="text-2xl lg:text-4xl font-bold">{members}+</h2>
          <p className="text-gray-200 text-base lg:text-lg">Members</p>
        </div>

        <div className="xl:border-l-4 border-white text-center px-4 w-full lg:w-auto">
          <h2 className="text-2xl lg:text-4xl font-bold">{courses}+</h2>
          <p className="text-gray-200 text-base lg:text-lg">Courses</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
