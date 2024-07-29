import React, { useState, useEffect, useRef } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [collapse, setCollapse] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navbarRef = useRef(null);

  // Détermine l'ID de la section visible lors du défilement de la page
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionMiddle = sectionTop + sectionHeight / 2;

        if (scrollY >= sectionTop && scrollY < (sectionTop + sectionHeight)) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Met à jour l'état scroll lors du défilement de la page
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fait défiler la page vers la section correspondante lors du clic sur un lien de navigation
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    const sectionTop = section.offsetTop - navbarRef.current.clientHeight;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <nav
        ref={navbarRef}
        className={
          scroll
            ? `fixed w-full top-0 bg-[#113839]/70 backdrop-blur z-50 transition-all duration-500`
            : `fixed w-full duration-500 top-0 z-50 transition-all`
        }
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div
            className={
              collapse
                ? `relative flex flex-col py-5 h-fit transition-all`
                : `relative flex h-16 items-center justify-between transition-all`
            }
          >
            <div
              className={
                collapse
                  ? `absolute right-0 flex items-center sm:hidden`
                  : `absolute inset-y-0 left-0 flex items-center sm:hidden`
              }
            >
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setCollapse(!collapse);
                }}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {collapse ? (
                  <LiaTimesSolid size={30} />
                ) : (
                  <>
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                    <svg
                      className="hidden h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
            <div
              className={
                collapse
                  ? `flex flex-col space-y-4`
                  : `flex flex-1 items-center justify-center sm:items-center sm:justify-between h-full `
              }
            >
              <div className="flex flex-shrink-0 items-center  h-full">
                <img
                  className="h-14 w-auto"
                  src="/logo.png"
                  alt="Your Company"
                />
              </div>
              <div
                className={
                  collapse
                    ? ` block sm:ml-6 sm:block`
                    : ` hidden sm:ml-6 sm:block h-full`
                }
              >
                <div
                  className={
                    collapse ? `flex flex-col space-y-4` : `flex py-2 space-x-4 h-full`
                  }
                >
                  <Link
                    to="/"
                    className={
                      activeSection === "home"
                        ? "border-b-[#D8BB71] border-b-2 text-white  px-3 h-full text-sm font-medium flex justify-center items-center"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 h-full text-sm font-medium flex justify-center items-center"
                    }
                    onClick={() => handleNavLinkClick("home")}
                  >
                    Accueil
                  </Link>
                  <Link
                    to="/"
                    className={
                      activeSection === "about"
                        ? "border-b-[#D8BB71] border-b-2 text-white  px-3 h-full  text-sm font-medium flex justify-center items-center"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 h-full  text-sm font-medium flex justify-center items-center"
                    }
                    onClick={() => handleNavLinkClick("about")}
                  >
                    A propos
                  </Link>
                  <Link
                    href="/"
                    className={
                      activeSection === "skills"
                        ? "border-b-[#D8BB71] border-b-2 text-white  px-3 h-full flex justify-center items-center text-sm font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 h-full flex justify-center items-center text-sm font-medium"
                    }
                    onClick={() => handleNavLinkClick("skills")}
                  >
                    Compétences
                  </Link>
                  <Link
                    href="/"
                    className={
                      activeSection === "service"
                        ? "border-b-[#D8BB71] border-b-2 text-white  px-3 h-full flex justify-center items-center text-sm font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 h-full flex justify-center items-center text-sm font-medium"
                    }
                    onClick={() => handleNavLinkClick("service")}
                  >
                    Services
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
