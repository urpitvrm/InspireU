import React from "react";
import logo from "../assets/logo.png"; // Corrected import

function Banner() {
  const isWideScreen = window.innerWidth >= 700;

  return (
    <div className="mt-[4rem] max-w-screen-2xl mb-[1rem] container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-between items-center">
      {/* Left side: Text content */}
      <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-bold mt-[2rem]">
          {isWideScreen ? (
            <>
              Welcome to <span className="text-pink-600">InspireU !</span>
            </>
          ) : (
            <>
              <span className="text-pink-600">Welcome to</span> InspireU !
            </>
          )}
        </h1>
        <p className="mt-[3rem]">
          Dive into a diverse selection of courses designed to help you succeed.
          Whether you're looking to advance your career or explore new
          interests, our courses provide expert instruction, hands-on practice,
          and flexible scheduling to fit your needs. From introductory classes
          to specialized training, we have something for everyone.
        </p>
      </div>

      {/* Right side: Logo */}
      <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={logo}
          alt="Logo"
          className="w-full max-w-sm md:max-w-md object-contain"
        />
      </div>
    </div>
  );
}

export default Banner;
