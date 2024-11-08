import React from "react";
import RainbowButton from "./components/ui/rainbow-button.jsx";

function Footer() {
  return (
    <footer className="bg-slate-50 py-12 mt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 px-6">
        {/* Logo and CTA */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-5xl font-medium">
            <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Get started
            </span>
          </h1>
          <p className="text-gray-400">
            Start your 7-day free trial. No credit card required.
          </p>
          <RainbowButton className="w-48 mt-4">Get Course</RainbowButton>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-auto text-gray-400">
          <div className="flex flex-col space-y-2">
            <span className="bg-gradient-to-r text-2xl from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Product
            </span>
            <a href="#" className="hover:text-gray-200">
              Course
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="bg-gradient-to-r text-2xl from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Page
            </span>
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
            <a href="#" className="hover:text-gray-200">
              Course
            </a>
            <a href="#" className="hover:text-gray-200">
              Testimoni
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="bg-gradient-to-r text-2xl from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Contact
            </span>
            <a href="#" className="hover:text-gray-200">
              Instagram
            </a>
            <a href="#" className="hover:text-gray-200">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-200">
              WhatsApp
            </a>
            <a href="#" className="hover:text-gray-200">
              X
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="bg-gradient-to-r text-2xl from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Other
            </span>
            <a href="#" className="hover:text-gray-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="container mx-auto mt-12 flex flex-col md:flex-row items-center justify-between px-6 text-gray-400">
        <div className="d-flex">
          &copy; 2024 Web Devolepment by Relingga Aditya.<br></br> UI Design by
          Ariq Hisyam Nabil UX by Ade fathian nur aini
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
