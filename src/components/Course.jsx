import React from "react";
import Slider from "react-slick";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

function Course() {
  // Filter the data to get only the courses that are free
  const filterData = list.filter((data) => data.status === "free");

  // Log the filtered data to the console
  console.log(filterData);

  // Slider settings
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600,
    arrows: true, // Optional: Add navigation arrows
    dots: true, // Optional: Add pagination dots
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1064,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-center mt-8 mb-8">
        <h1 className="text-4xl font-bold text-pink-600">Free Courses</h1>
        <p className="text-lg text-pink-500 mt-2">
          {window.innerWidth >= 768
            ? "Explore our wide range of free courses available for you"
            : "Explore free courses"}
        </p>
      </div>
      <div className="m-4 mb-12 mx-8">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Course;
