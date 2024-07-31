/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../assets/Logo for the website.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const links = [
    { name: "Dates", link: "/" },
    {
      name: "Calls",
      link: "",
      submenu: [
        {
          name: "Call fro Papers",
          link: "/",
          external: false,
        },
        {
          name: "Call for Tutorial Proposals",
          link: "/",
          external: false,
        },
        { name: "Call for Workshop Proposals", link: "/", external: false },
        { name: "Call for Musical Performance", link: "/", external: false },
        { name: "Call for Socials", link: "/", external: false },
        { name: "Call for AI Art", link: "/", external: false },
        { name: "Call for Demos", link: "/", external: false },
        {
          name: "Call for Participation: Doctral Consortium",
          link: "/",
          external: false,
        },
      ],
    },
    {
      name: "Author Guidelines",
      link: "/adminstrative",
      submenu: [
        {
          name: "OpenReview Author Instructions",
          link: "/",
          external: false,
        },
        { name: "Author Suggested Practices", link: "/", external: false },
        { name: "Author Ethic Guidelines", link: "/", external: false },
      ],
    },
    {
      name: "Attend",
      link: "/",
      submenu: [
        {
          name: "Register",
          link: "/",
          external: false,
        },
        {
          name: "Invitation Letter",
          link: "/",
          external: false,
        },
        { name: "Code of Conduct", link: "/", external: false },
        { name: "Program Overview", link: "/", external: false },
      ],
    },
    {
      name: "Expo",
      link: "/",
      submenu: [
        {
          name: "Sponsers",
          link: "/",
          external: false,
        },
        {
          name: "Exhibitor Information ",
          link: "/",
          external: false,
        },
        { name: "Floor Plan", link: "/", external: false },
        { name: "Exhibitor Manual", link: "/", external: false },
      ],
    },
    {
      name: "Media",
      link: "/",
      submenu: [
        {
          name: "Media Center",
          link: "/",
          external: false,
        },
        {
          name: "Get Media Pass",
          link: "/",
          external: false,
        },
        { name: "News and Resources", link: "/", external: false },
      ],
    },
    {
      name: "Organization",
      link: "/",
      submenu: [
        {
          name: "Organizing Committee",
          link: "/",
          external: false,
        },
        {
          name: "Program Committee",
          link: "/",
          external: false,
        },
      ],
    },
    { name: "Conference Site", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuClick = (submenuItem) => {
    setActiveSubmenu(submenuItem);
    setOpen(false); // Close the navbar
  };

  const handleContactClick = () => {
    setOpen(false); // Close the navbar
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 border-white">
        <a className="flex items-center" href="#">
          <img
            src={logo}
            alt="logo"
            className="w-[154px] h-[154px] object-contain md:w-32"
          />
        </a>
        <div className="space-y-2 lg:ml-1 ml-3">
          <p className="text-sm lg:text-3xl neuton-regular font-medium text-black ">
            2024 International Conference on
          </p>
          <h1 className="text-lg neuton-bold font-semibold md:text-4xl lg:text-4xl">
            Responsible, Generative and Explainable AI (ResGenXAI)
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* <button className="btn bg-purple-600 text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#c9379b] w-full">
            Register Now
          </button> */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/146/072/original/white-robot-floating-free-vector.jpg"
            className="h-[152px] w-[132px] object-contain md:w-32"
          />
        </div>
      </header>
      <nav className="sticky top-0 shadow-md w-full border border-gray-400 z-50 bg-gray-400">
        <div className="container mx-4 px-4">
          <div className="flex items-center justify-end py-4 relative gap-8">
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-white focus:outline-none"
              >
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            <ul
              className={`md:flex md:items-center md:space-x-8 ${
                open
                  ? "block absolute top-full left-0 w-full bg-gray-900 p-4"
                  : "hidden"
              } md:static md:w-auto md:bg-transparent md:p-0`}
            >
              {links.map((link) => (
                <li
                  key={link.name}
                  className="menu-item text-base relative group py-2 md:py-0"
                >
                  <a
                    href={link.link}
                    className="text-black text-lg heading hover:text-white transition duration-300"
                  >
                    {link.name}
                  </a>
                  {link.submenu && (
                    <ul className="submenu w-60 md:absolute md:bg-white md:shadow-lg md:rounded-base md:mt-2">
                      {link.submenu.map((subItem, index) => (
                        <li
                          key={index}
                          className={`md:px-4 md:py-2 ${
                            activeSubmenu === subItem.name
                              ? "bg-purple-200"
                              : ""
                          }`}
                          onClick={() => handleSubmenuClick(subItem.name)}
                        >
                          {subItem.external ? (
                            <a
                              href={subItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black heading hover:text-[#dc44d5] block"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              to={subItem.link}
                              className="text- heading hover:text-[#dc44d5] block"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="md:hidden mt-4">
                <Link to="/contact" onClick={handleContactClick}>
                  <button className="btn bg-purple-600 text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#a037c9] w-full">
                    Register Now
                  </button>
                </Link>
              </li>
            </ul>
            <Link
              to="/contact"
              className="hidden md:block"
              onClick={handleContactClick}
            >
              <button className="btn bg-purple-600 text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#c9379b] w-full">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// export const links = [
//   {
//     name: "Home",
//     link: "/home",
//   },
//   {
//     name: "About",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "About the Conference",
//         sublink: [
//           { name: "About the Conference", link: "/about/conference" },
//           { name: "Organizers", link: "/about/organizers" },
//           { name: "Committees", link: "/about/committees" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Program",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Program",
//         sublink: [
//           { name: "Schedule", link: "/program/schedule" },
//           { name: "Keynote Speakers", link: "/program/keynotes" },
//           { name: "Workshops", link: "/program/workshops" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Call for Papers",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Call for Papers",
//         sublink: [
//           { name: "Submission Guidelines", link: "/callforpapers/guidelines" },
//           { name: "Important Dates", link: "/callforpapers/dates" },
//           { name: "Tracks", link: "/callforpapers/tracks" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Registration",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Registration",
//         sublink: [
//           { name: "Registration Fees", link: "/registration/fees" },
//           { name: "Registration Form", link: "/registration/form" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Venue",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Venue",
//         sublink: [
//           { name: "Location", link: "/venue/location" },
//           { name: "Accommodation", link: "/venue/accommodation" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Sponsors",
//     submenu: true,
//     sublinks: [
//       {
//         Head: "Sponsors",
//         sublink: [
//           { name: "Sponsorship Opportunities", link: "/sponsors/opportunities" },
//           { name: "Current Sponsors", link: "/sponsors/current" },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Contact",
//     link: "/contact",
//   },
// ];
