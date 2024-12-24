import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${item.id}`, { state: { item } });
  };

  return (
    <div className="my-10 w-[18rem] transition-transform">
      <div
        className="card duration-300 ease-in hover:rotate-3d hover:-rotate-2 hover:scale-110 bg-base-100 w-[18rem] shadow-xl cursor-pointer border-[2px] transform hover:-translate-y-2 hover:shadow-2xl"
        onClick={handleClick}
      >
        <figure className="h-[11rem] overflow-hidden">
          <img
            src={item.image}
            alt={`${item.coursename} image`}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body h-[13rem] p-4">
          <h2 className="card-title text-lg font-bold">
            {item.coursename}
            {item.neworold && (
              <div className="badge bg-pink-500 badge-secondary ml-2">
                {item.neworold}
              </div>
            )}
          </h2>
          <p className="text-sm text-gray-600">
            {item.details || "Item details"}
          </p>
          <div className="card-actions justify-between mt-4">
            <span className="px-2 py-1 rounded-xl border-[1px] bg-gray-100 text-gray-800">
              ${item.price}
            </span>
            {/* <div className="badge badge-outline bg-pink-600 text-white hover:bg-pink-400 px-4 py-2">
              Buy
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
