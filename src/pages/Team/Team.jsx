import React from "react";
import img1 from "../../../public/teamLeaderProfessorRuhizan.jpg";
import img2 from "../../../public/coResearcherProfMadyaNazrulAnuarNayan.jpeg";
import img3 from "../../../public/coResearcherProfessorDrLiliaHalim.jpg";

const Team = () => {
  const team = [
    {
      title: "Team Leader",
      image: img1,
      status: "Professor DR.RUHIZAN MOHAMMAD YASIN",
      description:
        "Prof. Dr. Ruhizan M. Yasin is a Professor in Technology and Vocational Education at the Centre for STEM Enculturation, Faculty of Education, Universiti Kebangsaan Malaysia (National University of Malaysia). She specialised in Curriculum and Evaluation. She is also an expert in STEM Education",
      cv: "CV",
    },
    {
      title: "Co-Researcher",
      image: img3,
      status: "Professor DR.LILIA HALIM",
      description:
        "Lilia Halim, Professor in Science Education in the Centre of STEM Enculturation, Faculty of Education, Universiti Kebangsaan Malaysia. Her research interests include understanding science teachers’ thinking, development of teachers’ professional knowledge namely teachers’ pedagogical content knowledge and the design of innovative science teaching and learning.",
      cv: "CV",
    },
    {
      title: "Co-Researcher",
      image: img2,
      status: "PROF. MADYA IR. DR. NAZRUL ANUAR NAYAN",
      description:
        "Associate Professor Ir. Dr. Nazrul Anuar Nayan is a senior lecturer at the Department of Electrical, Electronics & Systems Engineering, Faculty of Engineering & Built Environment, Universiti Kebangsaan Malaysia (UKM).",
      cv: "CV",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center py-16 w-full">
    <div className="w-full max-w-6xl px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight">
        RESEARCH TEAM
      </h2>
      <h5 className="pt-5 text-center text-gray-600 text-sm sm:text-base md:text-lg font-bold leading-relaxed px-2 md:px-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br /> Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s.
      </h5>
      <div className="flex justify-center w-full mt-8">
      <div className="flex items-center justify-center flex-wrap gap-10 md:gap-28">
  {team.map((activity, key) => (
    <div
      key={key}
      className="w-full sm:w-[18rem] h-[32rem] flex flex-col items-center text-center rounded-lg bg-white shadow-md p-4"
    >
      {/* Title */}
      <h5 className="text-lg sm:text-xl font-semibold text-black tracking-widest h-[2.5rem] flex items-center justify-center">
        {activity.title}
      </h5>

      {/* Image */}
      <div className="my-3">
        <img
          className="rounded-2xl w-full h-[14rem] object-cover"
          src={activity.image}
          alt={activity.title}
        />
      </div>

      {/* Status */}
      <h5 className="text-sm sm:text-base font-semibold text-black tracking-widest h-[2rem] flex items-center justify-center">
        {activity.status}
      </h5>

      {/* Description */}
      <p className="mt-3 text-xs sm:text-sm text-justify text-gray-700 tracking-wide leading-relaxed h-[6rem] overflow-hidden">
        {activity.description}
      </p>
    </div>
  ))}
</div>

      </div>
    </div>
  </div>
  
  );
};

export default Team;
