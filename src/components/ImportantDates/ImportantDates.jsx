/* eslint-disable no-unused-vars */
import React from "react";
import {
  AiOutlineFileDone,
  AiOutlineCheckCircle,
  AiOutlineCamera,
  AiOutlineCalendar,
} from "react-icons/ai";

const ImportantDates = () => {
  const dates = [
    {
      id: 1,
      icon: (
        <AiOutlineFileDone className="max-w-[200px] w-16 h-16 mx-auto hover:scale-110 duration-300 img-shadow " />
      ),
      title: "Final Submission of manuscripts for review (Full Paper)",
      date: "10th August, 2024",
    },
    {
      id: 2,
      icon: (
        <AiOutlineCheckCircle className="max-w-[200px] w-16 h-16 mx-auto hover:scale-110 duration-300 img-shadow" />
      ),
      title: "Acceptance Notification",
      date: "30th January, 2025",
    },
    {
      id: 3,
      icon: (
        <AiOutlineCamera className="max-w-[200px] w-16 h-16 mx-auto hover:scale-110 duration-300 img-shadow" />
      ),
      title: "Camera ready paper submission",
      date: "15th February, 2025",
    },
    {
      id: 4,
      icon: (
        <AiOutlineCalendar className="max-w-[200px] w-16 h-16 mx-auto hover:scale-110 duration-300 img-shadow" />
      ),
      title: "Last Date of Registration",
      date: "20th February, 2025",
    }
  ];

  return (
    <div className="container my-16 heading space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h1 className="text-3xl font-bold text-dark">Important Dates</h1>
        <p className="text-sm opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          numquam natus fuga nostrum porro harum incidunt adipisci mollitia
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {dates.map(({ id, icon, title, date }) => (
          <div
            key={id}
            data-aos="fade-up"
            data-aos-delay=""
            className="p-4 text-center space-y-6"
          >
            {icon}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">{date}</h1>
              <p className="text-dark">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
