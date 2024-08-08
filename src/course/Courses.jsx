import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoursePaid from "../components/CoursePaid";

const Courses = () => {
  return (
    <>
      <Navbar />
      <div >
        <CoursePaid />
      </div><hr />
      <Footer />
    </>
  );
};

export default Courses;
