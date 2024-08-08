import React from "react";

const Contact = () => {
  return (
    <div>
      <button
        className=""
        onClick={() => document.getElementById("my_modal_8").showModal()}
      >
        Contact Us
      </button>
      <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex items-center justify-center">
            <div className="p-8 rounded-lg border-[1px] border-black shadow-md w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Contact Us
              </h2>
              <form>
                <div className="mb-4">
                  <div className="flex flex-col gap-8">
                    <h3>
                      <span className="font-bold">Phone No:</span> +91
                      787843783#
                    </h3>
                    <h3>
                      <span className="font-bold">Email:</span> Ex@gmail.com
                    </h3>
                    <div>
                      <h3 className="font-bold">Address:</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Pariatur voluptate ratione perspiciatis aperiam
                        minima numquam itaque exercitationem nemo autem
                        eligendi!
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_8").close()}
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
