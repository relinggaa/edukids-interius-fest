import React, { useState, useEffect } from "react";
import Science from "./assets/img/Science.jpg";
import Mathematic from "./assets/img/Math.jpg";
import Drawing from "./assets/img/Drawing.jpg";
import Komputer from "./assets/img/Komputer.jpg";
import History from "./assets/img/History.jpg";
import Reading from "./assets/img/reading.jpg";
import Biology from "./assets/img/biology.jpg";
import Gp from "./assets/img/geography.jpg";
import Fs from "./assets/img/Fisika.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faBookOpen,
  faChartBar,
  faCompass,
  faCog,
  faSearch,
  faSignOutAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

// Mock data for explore courses
const exploreCourses = [
  {
    name: "Basic Mathematic",
    price: "IDR 50.000/Years",
    img: Mathematic,
    students: 1345,
    progress: 60,
  },
  {
    name: "Science",
    price: "IDR 50.000/Years",
    img: Science,
    students: 1345,
    progress: 30,
  },
  {
    name: "Drawing Fun",
    price: "IDR 50.000/Years",
    img: Drawing,
    students: 1345,
    progress: 100,
  },
  {
    name: "Computer For kids",
    price: "IDR 50.000/Years",
    img: Komputer,
    students: 1345,
    progress: 0,
  },
  {
    name: "History",
    price: "IDR 50.000/Years",
    img: History,
    students: 1345,
    progress: 20,
  },
  {
    name: "Geography",
    price: "IDR 50.000/Years",
    img: Gp,
    students: 1345,
    progress: 45,
  },
  {
    name: "Physics for kids",
    price: "IDR 50.000/Years",
    img: Fs,
    students: 1345,
    progress: 10,
  },
  {
    name: "Biology for kids",
    price: "IDR 50.000/Years",
    img: Biology,
    students: 1345,
    progress: 50,
  },
  {
    name: "Reading English",
    price: "IDR 50.000/Years",
    img: Reading,
    students: 1345,
    progress: 90,
  },
];

const allCourses = exploreCourses.slice(0, 3);

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState(allCourses);
  const [selectedCourse, setSelectedCourse] = useState(allCourses[0]);
  const [notifications, setNotifications] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const filteredCourses = allCourses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCourses(filteredCourses);
  }, [searchQuery]);

  const overallProgress =
    courses.reduce((sum, course) => sum + course.progress, 0) / courses.length;

  const renderDashboard = () => (
    <>
      <h2 className="text-2xl font-bold mb-6 text-sky-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sky-700">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={overallProgress} className="w-full" />
            <p className="mt-2 text-sky-600">
              {overallProgress.toFixed(1)}% Complete
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderMyCourses = () => (
    <>
      <h2 className="text-2xl font-bold mb-6 text-sky-800">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.name}
            className="cursor-pointer hover:shadow-lg transition-shadow border-sky-200"
            onClick={() => setSelectedCourse(course)}
          >
            <img
              src={course.img}
              alt={course.name}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle className="text-sky-700">{course.name}</CardTitle>
              <CardDescription className="text-sky-600">
                {course.price}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Progress value={course.progress} className="w-full" />
                <span className="ml-2 text-sm font-medium text-sky-600">
                  {course.progress}%
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                See Course
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );

  const renderExploreCourses = () => (
    <>
      <h2 className="text-2xl font-bold mb-6 text-sky-800">Explore Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exploreCourses.map((course) => (
          <Card
            key={course.name}
            className="hover:shadow-lg transition-shadow border-sky-200"
          >
            <img
              src={course.img}
              alt={course.name}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle className="text-sky-700">{course.name}</CardTitle>
              <CardDescription className="text-sky-600">
                {course.price}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sky-600">{course.students} students</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                Get Course
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );

  const renderSettings = () => (
    <>
      <h2 className="text-2xl font-bold mb-6 text-sky-800">Profile Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle className="text-sky-700">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-sky-700">
              Parent Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-sky-700">
              Kids name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="text-sky-700">
              Email
            </Label>
            <Input
              id="name"
              placeholder="JohnDoe@gmail.com"
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password" className="text-sky-700">
              Password
            </Label>
            <Input
              type="password"
              id="name"
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </>
  );

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-sky-50">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="p-4 md:hidden"
      >
        <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-sky-800" />
      </button>
      <aside
        className={`fixed md:relative z-20 w-64 h-full bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-4">
          <span className="self-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Edu<span className="text-green-500">Kids</span>
          </span>
        </div>
        <nav className="mt-6">
          {(e) => {
            e.preventDefault();
            if (item.id === "logout") {
              window.location.href = "/";
            } else {
              setActiveNav(item.id);
            }
          }}
          {[
            { id: "dashboard", icon: faHome, label: "Dashboard" },
            { id: "courses", icon: faBookOpen, label: "My Courses" },
            { id: "explore", icon: faCompass, label: "Explore Courses" },
            { id: "settings", icon: faCog, label: "Settings" },
            { id: "logout", icon: faSignOutAlt, label: "Logout" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                if (item.id === "logout") {
                  // Handle logout logic (e.g., clearing session or redirecting)
                  window.location.href = "/";
                } else {
                  handleNavClick(item.id); // For other items, handle navigation as usual
                }
              }}
              className={`flex items-center w-full px-4 py-2 mt-2 text-left text-sky-800 transition-colors duration-200 hover:bg-sky-100 ${
                activeNav === item.id ? "bg-sky-100" : ""
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full mb-4 border-sky-200 focus:border-sky-400 focus:ring-sky-400"
        />
        {activeNav === "dashboard" && renderDashboard()}
        {activeNav === "courses" && renderMyCourses()}
        {activeNav === "explore" && renderExploreCourses()}
        {activeNav === "settings" && renderSettings()}
      </main>
    </div>
  );
}
