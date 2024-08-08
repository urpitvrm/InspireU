
import React from "react";
import logo from "../assets/logo.png"; // Corrected import

function Banner() {
  const isWideScreen = window.innerWidth >= 700;

  return (
    <div className="mt-[4rem] max-w-screen-2xl mb-[1rem] container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className="order-2 md:order-1 w-full md:w-1/2">
        <h1 className="text-4xl font-bold mt-[2rem]">
          {isWideScreen ? (
            <>
              Welcome to <span className="text-pink-600">unfair sensei!</span>
            </>
          ) : (
            <>
              <span className="text-pink-600">Welcome to</span> unfair sensei!
            </>
          )}
        </h1>
        <p className="mt-[3rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis
          deleniti odit incidunt autem est quas soluta corrupti sit nostrum
          nulla magni hic iure eaque, in ducimus esse fuga fugiat. Dolor
          reprehenderit perferendis voluptatem impedit vero debitis nostrum aut
          consectetur ratione. Tenetur necessitatibus provident commodi!
        </p>
        <label className="mt-[4rem] input border-r-gray-500 border-l-gray-500 outline-none flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow border-none outline-none"
            placeholder="Email"
            style={{ color: "#FF69B4" }}
          />
        </label>
        <button className="mt-[3rem] text-white bg-pink-600 px-4 py-2 rounded hover:bg-pink-500 duration-400">
          Subscribe
        </button>
      </div>
      <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={logo}
          alt="Logo"
          className="hover:scale-105 duration-600 w-full max-w-sm md:max-w-full"
        />
      </div>
    </div>
  );
}

export default Banner;
