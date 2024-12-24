import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import list from "../../public/list.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Lectures from "./Lectures";

function CourseDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [course, setCourse] = useState(location.state?.item || null);

  useEffect(() => {
    if (!course) {
      const foundCourse = list.find((item) => item.id === id);
      setCourse(foundCourse);
    }
  }, [id, course]);

  if (!course) return <div>No course details available</div>;

  return (
    <>
      <Navbar />
      <hr />
      <div className="mt-[8rem] max-w-screen-2xl mb-[1rem] container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left half: Course details */}
        <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-pink-600">
            {course.coursename}
          </h1>
          <p className="text-lg mb-4">
            {course.aboutCourse || "No details available"}
          </p>
          <p className="text-lg mb-4">
            <strong>Duration:</strong>{" "}
            {course.coursePeriod || "No duration available"}
          </p>

          {/* Price and Purchase button */}
          <div className="flex items-center mb-6">
            <span className="text-xl font-semibold text-black mr-4 bg-white  rounded-lg p-2">
              ${course.price}
            </span>
            {course.price > 0 && (
              <a
                href=""
                className="px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-500"
              >
                Purchase
              </a>
            )}
          </div>
        </div>

        {/* Right half: Teacher information and image */}
        <div className="order-1 md:order-2 w-full md:w-1/2 justify-center md:justify-end">
          {/* Teacher image */}
          <div className="  items-center flex flex-col mb-4">
            <img
              src={course.teacherImage}
              alt={`${course.teacher}'s image`}
              className=" w-[20rem] h-[20rem] object-cover rounded-lg"
            />
          </div>

          {/* Teacher details */}
          <div className="text-center">
            <p className="text-lg font-semibold mb-2 text-pink-700 ">
              {course.teacher || "No teacher information"}
            </p>
            <p className="text-sm text-gray-200 ">
              Qualifications:{" "}
              {course.qualifications || "No qualifications available"}
            </p>
          </div>
        </div>
      </div>
      <hr />


<Lectures/>

      <Footer />
    </>
  );
}

export default CourseDetail;
