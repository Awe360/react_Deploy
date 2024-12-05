import React, { useState } from 'react';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when an item is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">My Website</h1>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="/"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Drawer Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-red-600 text-white transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col items-center py-4">
          <ul className="space-y-6">
            <li>
              <a
                href="/"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMobileMenu}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={closeMobileMenu}
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
