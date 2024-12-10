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
    <div className="md:h-[110vh] flex justify-center items-center pt-16 md:pt-16 lg:pt-0  w-full">
      <div className="w-full">
        <h2 className="text-5xl tracking-tighter font-extrabold text-center ">
          RESEARCH TEAM
        </h2>
        <h5 className="tracking-wider pt-5 text-center text-wrap text-gray-600 text-sm font-bold p-6 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h5>
        <div className="flex justify-center w-full">
          <div className="w-full flex items-center justify-center gap-28 flex-wrap pt-10 rounded-lg">
            {team.map((activity, key) => (
              <div key={key} className="block max-w-[18rem] rounded-lg">
                <div className="mb-3">
                  <h5 className="text-xl font-semibold leading-tight text-black tracking-widest text-center">
                    {activity.title}
                  </h5>
                </div>
                <div className="mb-3 flex justify-center">
                  <img
                    className="rounded-2xl w-[30vw] h-[28vh] object-contain"
                    src={activity.image}
                    alt={activity.title}
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-sm font-semibold leading-tight text-black tracking-widest text-center">
                    {activity.status}
                  </h5>
                </div>
                <div className="my-3 text-justify">
                  <h5 className="text-xs text-black text-wrap leading-tight tracking-widest text-justify">
                    {activity.description}
                  </h5>
                </div>
                <div className="mt-10 text-black text-center flex justify-center">
                  {/* <button className="border w-20 rounded border-black hover:scale-105 duration-500">
                    {activity.cv}
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
