/* eslint-disable no-unused-vars */
import React from "react";

const FinanceChair = () => {
  return (
    <div className="bg-neutral-800">
      <h1
        data-aos="fade-up"
        className="pt-10 text-3xl text-white font-bold text-center sm:text-4xl "
      >
        Finance Chair
      </h1>
      <div className="flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[58%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-2">
              <h1 className="font-dmserif text-lg font-bold text-white">
                Prof. (Dr.) Sujata Chakravarty
              </h1>
              <h3 className="font-dmserif text-md font-bold text-white">
                Dean, SoET, Department of Computer Science & Engineering
              </h3>
              <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Centurion University of Technology and Management, India
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button> */}
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[52%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-2">
              <h1 className="font-dmserif text-lg font-bold text-white">
                Dr. Rajendra Khadanga
              </h1>
              <h3 className="font-dmserif text-md font-bold text-white">
                Department of Electrical Engineering
              </h3>
              <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Centurion University of Technology and Management, India
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button> */}
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[52%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-2">
              <h1 className="font-dmserif text-lg font-bold text-white">
                Dr. Sudhansu Samal
              </h1>
              <h3 className="font-dmserif text-md font-bold text-white">
                Department of Electrical Engineering
              </h3>
              <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Centurion University of Technology and Management, India
              </p>
              {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceChair;
