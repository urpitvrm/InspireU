

import React from "react";

const Contact = () => {
  return (
    <div>
      <button
        className=""
        onClick={() => document.getElementById("my_modal_9").showModal()}
      >
        About us
      </button>
      <dialog id="my_modal_9" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex items-center justify-center">
          

            <div className="">
              <h1 className="text-3xl my-8 text-pink-600 font-bold">
                About Us
              </h1>
              <div className="mt-4  gap-2 font-sans">
                <p className="text-lg">This is an e-course platform.</p>
                <p className="text-lg ">
                  We offer a variety of online courses to help you expand your
                  knowledge and skills.
                </p>
                <p className="text-lg">
                  Our courses are designed by industry experts and are available
                  at affordable prices.
                </p>
                <p className="text-lg">
                  Join us today and start your learning journey!
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_9").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Contact;
