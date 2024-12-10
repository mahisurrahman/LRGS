import React from "react";

function About() {
  return (
    <div className="h-auto md:h-screen w-full flex items-center justify-center py-10 md:py-0">
      <div>
        <div className="text-center px-5 md:px-0">
          <h1 className="text-center text-wrap text-3xl md:text-5xl lg:text-7xl font-extrabold">About The Project</h1>
          <p className="mt-4 tex-wrap">

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis ipsam nihil molestias animi in cumque necessitatibus, <br /> adipisci ab rem laboriosam, aliquid aut quasi ut eius eos beatae tempora optio fugiat? Libero, ullam aut? Possimus accusamus itaque repellendus, eos eius nemo.
          </p>
        </div>
        <div className="md:px-40 md:mt-16 grid grid-cols-1 md:grid-cols-12 w-full">
            <div className="col-span-9 border-r-2 border-yellow-800 px-10 py-5 text-md text-justify text-wrap">
                <p>Science Technology Engineering and Mathematics (STEM) is one of the main focus in Malaysia education curriculum with the aim to achieve 60:40 ratio of science to social sciences students. The effort is still not reaching the target in the school system as well as at the higher education. In 2016, only 29-33% of students were from the science stream, including technical and vocational programmes. In addition our performance in
                2012 PISA was far below the OECD average. This raises concerns about the education system’s ability to produce sufficient STEM graduates for the economy. The emphasis for developed nation is to have enough innovative and creative human capital who are the contributor to the technology. While solar energy is a growing industry, it is a sector of many job opportunities that Malaysia youngsters should be trained. However there is no such published framework for effective teaching and learning for solar energy technology especially using the new technology of 4IR. Therefore this study aims to develop a framework for mobile learning for teaching and learning photovoltaic technology. The Design and Development Research (DDR) will be employed to develop the effective T&L framework which later will be used to develop the hybric mobile learning modules for PV. Both the framework and the modules are the outcomes of the research. Human capitals with the knowledge and skills in the PV technologies is also the outcome as a result of knowledge transfer through the capacity building. The outcomes are considered a prototype to be duplicated to a large school population hence will help to produce more innovative human capitals of the nation.”</p>
            </div>
            <div className="col-span-3 pl-5 py-5 text-md md:w-full" >
                <div className="grid grid-cols-1 md:grid-cols-3 w-full text-sm text-wrap overflow-hidden">
                        <h1 className="font-extrabold col-span-1 text-yellow-800">Project Title:</h1>
                        <h1 className="col-span-2 md:text-justify ">Effective Learing on Solar Energy Technologies Through Mobile-Research-Labratory for Secondary Schools in Urban and Rural Areas</h1>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 w-full">
                        <h1 className="font-extrabold col-span-1 text-yellow-800">Project ID:</h1>
                        <h1 className="col-span-2">15341</h1>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 w-full">
                        <h1 className="font-extrabold col-span-1 text-yellow-800">University:</h1>
                        <h1 className="col-span-2">Universiti Kebangsaan Malaysia (UKM)</h1>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 w-full">
                        <h1 className="font-extrabold col-span-1 text-yellow-800">Reference Code:</h1>
                        <h1 className="col-span-2">LRGS/1/2019/UKM/01/6/4</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  ); 
}

export default About;
