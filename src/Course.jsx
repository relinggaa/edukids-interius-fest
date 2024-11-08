import { cn } from "@/lib/utils";
import Marquee from "./components/ui/marquee";
import Science from "./assets/img/Science.jpg";
import Mathematic from "./assets/img/Math.jpg";
import Drawing from "./assets/img/Drawing.jpg";
import Komputer from "./assets/img/Komputer.jpg";
import History from "./assets/img/History.jpg";
import Reading from "./assets/img/reading.jpg";
import Biology from "./assets/img/biology.jpg";
import Gp from "./assets/img/geography.jpg";
import Fs from "./assets/img/Fisika.jpg";
import Chemistry from "./assets/img/Chemistry.jpg";
import RainbowButton from "./components/ui/rainbow-button.jsx";
import NeonGradientCard from "./components/ui/neon-gradient-card.jsx";

const courses = [
  {
    name: " Basic Mathematic",
    price: "IDR 50.000/Years",
    img: Mathematic,
    students: 1345,
  },
  {
    name: "Science",
    price: "IDR 50.000/Years",
    img: Science,
    students: 1345,
  },
  {
    name: "Drawing Fun",
    price: "IDR 50.000/Years",
    img: Drawing,
    students: 1345,
  },
  {
    name: "Computer For kids",
    price: "IDR 50.000/Years",
    img: Komputer,
    students: 1345,
  },
  {
    name: "History",
    price: "IDR 50.000/Years",
    img: History,
    students: 1345,
  },
  {
    name: "Geography",
    price: "IDR 50.000/Years",
    img: Gp,
    students: 1345,
  },
  {
    name: "Physics for kids",
    price: "IDR 50.000/Years",
    img: Fs,
    students: 1345,
  },
  {
    name: "Chemistry",
    price: "IDR 50.000/Years",
    img: Chemistry,
    students: 1345,
  },
  {
    name: "Biology for kids",
    price: "IDR 50.000/Years",
    img: Biology,
    students: 1345,
  },
  {
    name: "Reading English",
    price: "IDR 50.000/Years",
    img: Reading,
    students: 1345,
  },
];

const CourseCard = ({ name, price, img, students }) => {
  return (
    <NeonGradientCard className="w-64 m-4 ">
      {" "}
      <img className="w-full h-40 object-cover" src={img} alt={name} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{name}</h3>{" "}
        <div className="flex justify-between items-center mt-2 ">
          <span className="text-black">{price}</span>{" "}
        </div>
        <div className="mt-2">
          <div className="mt-2">
            <RainbowButton className=" w-44">Get Course</RainbowButton>
          </div>
        </div>
      </div>
    </NeonGradientCard>
  );
};

const MarqueeCourses = () => {
  return (
    <div id="course" className="relative w-full overflow-hidden ">
      <div className="w-full h-1 shadow-md mb-6"></div>

      <h2 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent pt-">
        Explore Course
      </h2>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background z-10"></div>

      <Marquee
        pauseOnHover
        className="[--duration:60s] flex items-center justify-start w-full"
      >
        {courses.map((course) => (
          <CourseCard key={course.name} {...course} />
        ))}
      </Marquee>

      <Marquee
        reverse
        pauseOnHover
        className="[--duration:60s] flex items-center justify-start w-full mt-4"
      >
        {courses.map((course) => (
          <CourseCard key={course.name} {...course} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background z-10"></div>
    </div>
  );
};

export default MarqueeCourses;
