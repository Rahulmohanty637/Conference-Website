/* eslint-disable no-unused-vars */
import React from "react";

const ChiefPatron = () => {
  return (
    <div className="bg-neutral-800">
      <h1
        data-aos="fade-up"
        className="pt-10 text-3xl heading text-white font-bold text-center sm:text-4xl"
      >
        Chief Patron
      </h1>
      <div className="flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                src="https://thegttech.com/wp-content/uploads/2023/09/Mukti_Mishra.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-2">
              <h1 className="font-dmserif text-lg heading font-bold text-white">
                Prof. (Dr.) Mukti Kanta Mishra
              </h1>
              <h3 className="font-dmserif text-md heading font-bold text-white">
                Founder, President
              </h3>
              <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Centurion University of Technology and Management, India
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125"
                src="https://thegttech.com/wp-content/uploads/2023/09/DN_Rao-300x300.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-2">
              <h1 className="font-dmserif text-lg heading font-bold text-white">
                Prof. D. Narsimha Rao
              </h1>
              <h3 className="font-dmserif text-md heading font-bold text-white">
                Founder, Vice-President
              </h3>
              <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Centurion University of Technology and Management, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiefPatron;
