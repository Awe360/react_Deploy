import React from 'react';

function NavBar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">My Website</h1>
          </div>
          <div>
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
    </nav>
  );
}

export default NavBar;
