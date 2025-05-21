import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-teal-400 to-black via-gray-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* logo and brand */}
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white bg-opacity-40 bg-white px-3 py-1 rounded-lg">
                  DB
                </span>
              </div>
              <div className="hidden md:block ml-4">
                <span className="text-white font-semibold text-lg ">
                  Dhruv Batham
                </span>
              </div>
            </div>
            {/* desktop nav links */}
            <div className="md:block hidden">
              <ul className="flex space-x-2">
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    Tracer
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            {/* mobile nav */}
            <div className="md:hidden ">
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="text-white hover:text-teal-200 focus:outline-none transition-color duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-teal-500 to-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200">
                About
              </a>
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200">
                Skills
              </a>
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200">
                Tracer
              </a>
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200">
                Projects
              </a>
              <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
