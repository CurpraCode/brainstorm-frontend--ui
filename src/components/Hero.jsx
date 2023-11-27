/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React from "react";

const Hero = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">SpaceX Explorer</div>
          <nav>
            <ul className="flex space-x-4">
              <li className="hover:text-gray-300">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-gray-300">
                <a href="/search">Search</a>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </div>
      </header>
      <div className="banner flex-reverse items-center justify-center bg-gray-800 text-white p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
          <img
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4"
            src="https://www.spacex.com/vehicles/starship/assets/images/Starbase_Desktop.jpg"
            alt="SpaceX Banner"
          />
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">SpaceX Capsule Explorer</h1>
            <p className="text-lg">
              Explore SpaceX capsules and missions. Find information about launches,
              landings, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
