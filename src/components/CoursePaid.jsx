import React from "react";
import Card from "./Card";
import list from "../../public/list.json";

const CoursePaid = () => {
  const filterData = list.filter((data) => data.status === "not");

  return (
    <div className="mt-[4rem] pt-[2rem] max-w-screen-2xl mb-[1rem] container mx-auto md:px-20 px-4">
      <h1 className="text-2xl">
        Paid <span className="text-pink-500 text-3xl">Courses</span>
      </h1>

      <p className="mt-4">Explore the <span className="text-pink-600 text-xl font-semibold">Paid</span> courses with extra content!</p>
      <hr /> <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
        {filterData.map((item) => (
          <Card  item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CoursePaid;
