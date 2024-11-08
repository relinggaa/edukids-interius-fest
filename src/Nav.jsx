import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1050);

  const handleScroll = () => {
    if (window.scrollY > 50 && isDesktop) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }

    const parentsaySection = document.getElementById("Parentsay");
    const testimoniSection = document.getElementById("testimoni");
    const contactSection = document.getElementById("contact");

    if (parentsaySection) {
      const parentsayRect = parentsaySection.getBoundingClientRect();
      if (parentsayRect.top <= 0 && parentsayRect.bottom >= 0) {
        setIsNavHidden(true);
        if (window.location.hash !== "#Parentsay") {
          history.pushState(null, null, "#Parentsay");
        }
      } else if (testimoniSection) {
        const testimoniRect = testimoniSection.getBoundingClientRect();
        if (testimoniRect.top <= 0 && testimoniRect.bottom >= 0) {
          setIsNavHidden(true);
          if (window.location.hash !== "#Testimoni") {
            history.pushState(null, null, "#Testimoni");
          }
        } else if (contactSection) {
          const contactRect = contactSection.getBoundingClientRect();
          if (contactRect.top <= 0 && contactRect.bottom >= 0) {
            setIsNavHidden(true);
            if (window.location.hash !== "#contact") {
              history.pushState(null, null, "#contact");
            }
          } else {
            setIsNavHidden(false);
            if (
              window.location.hash === "#Parentsay" ||
              window.location.hash === "#Testimoni" ||
              window.location.hash === "#contact"
            ) {
              history.pushState(null, null, " ");
            }
          }
        }
      }
    }
  };

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 1050);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [isDesktop]);

  if (isNavHidden) return null;

  return (
    <nav
      className={`${
        scrollNav || !isDesktop ? "bg-white shadow-md" : "bg-transparent"
      } fixed w-full z-10 top-0 transition-all duration-300`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center"
          onClick={() => scroll.scrollToTop()}
        >
          <span className="self-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Edu<span className="text-green-500">Kids</span>
          </span>
        </a>
        <div className="flex xl:order-2 items-center space-x-3">
          <a
            href="register"
            type="button"
            className="text-gray-700 hover:gray-100"
          >
            Sign up
          </a>
          <a
            href="login"
            type="button"
            className="text-white sign-up-bt hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center signup"
          >
            Login
          </a>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mr-4"
            aria-controls="navbar-cta"
            aria-expanded={isNavOpen}
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1 xl:ps-16 xxl:ps-0 ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className=" flex flex-col font-medium p-4 xl:p-0 mt-4 border rounded-lg xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 ">
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                spy={true}
                hashSpy={true}
                className="cursor-pointer block py-2 px-3 xl:p-0 text-gray-900 hover:text-blue-700"
                activeClass="text-blue-700"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="wcs"
                smooth={true}
                duration={500}
                spy={true}
                hashSpy={true}
                className="cursor-pointer block py-2 px-3 xl:p-0 text-gray-900 hover:text-blue-700"
                activeClass="text-blue-700"
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="course"
                smooth={true}
                duration={500}
                spy={true}
                hashSpy={true}
                className="cursor-pointer block py-2 px-3 xl:p-0 text-gray-900 hover:text-blue-700"
                activeClass="text-blue-700"
              >
                Course
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="testimoni"
                smooth={true}
                duration={500}
                spy={true}
                hashSpy={true}
                className="cursor-pointer block py-2 px-3 xl:p-0 text-gray-900 hover:text-blue-700"
                activeClass="text-blue-700"
              >
                Testimoni
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                hashSpy={true}
                className="cursor-pointer block py-2 px-3 xl:p-0 text-gray-900 hover:text-blue-700"
                activeClass="text-blue-700"
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="Parentsay"
                smooth={true}
                duration={500}
                spy={true}
                hashSpy={true}
                className="invisible cursor-pointer block py-2 px-3 xl:p-0 text-gray-900 hover:text-blue-700"
                activeClass="text-blue-700"
              >
                Parentsay
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
