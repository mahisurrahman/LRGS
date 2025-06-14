import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import pdfIcon from "../../../public/pngicon.png";
import './publications.css'

function Publications() {
  const options = {
    chart: {
      type: "pie",
    },
    series: [
      {
        data: [
          { y: 180, name: "Journal Articles 2 (40%)", color: "green" },
          { y: 320, name: "Journal Articles 4 (60%)", color: "Blue" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full">
        <h2 className="text-center font-extrabold text-5xl">PUBLICATIONS</h2>
        <h5 className="pt-5 lg:text-center text-gray-600 text-wrap text-sm font-bold tracking-widest text-justify px-4">
  Discover a curated collection of insightful publications spanning diverse 
  topics, showcasing groundbreaking research and innovative perspectives.
  <br /> Explore articles that inspire, inform, and drive academic excellence.
</h5>
        <div className="mt-5  items-center w-full">
       
          <div className="mx-20  grid md:grid-cols-2 gap-x-5 gap-y-5">
            <section className="grid grid-cols-3 items-center w-full border-2 h-[20vh] rounded-lg shadow-md">
              <div className="col-span-1 flex items-center justify-center">
                <img className="w-20 h-20 object-fit" src={pdfIcon} alt="" />
              </div>
              <div className="col-span-2 text-left w-full pr-5">
                <p className="font-bold text-sm">
                  Revisiting Education for Sustainable Development
                </p>
                <div className="mt-5 flex gap-x-2 text-xs items-center justify-start w-full">
                  <button
                    onClick={() =>
                      window.open(
                        "../../../pdf/Revisiting Education Sustainability.pdf",
                        "_blank"
                      )
                    }
                    className="px-4 py-1 rounded bg-yellow-800 font-bold text-white"
                  >
                    Read
                  </button>
                  <a
                    href="../../../pdf/Revisiting Education Sustainability.pdf"
                    download="Revisitng Education Sustainability.pdf"
                    className="px-2 py-1 rounded bg-green-700 font-bold text-white"
                  >
                    Download
                  </a>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-3 items-center w-full border-2 h-[20vh] rounded-lg shadow-md">
              <div className="col-s flex items-center justify-center">
                <img className="w-20 h-20 object-fit" src={pdfIcon} alt="" />
              </div>
              <div className="col-span-2 text-left w-full pr-5">
                <p className="font-bold text-sm">
                  Research In Progressive Education & Development
                </p>
                <div className="mt-5 flex gap-x-2 text-xs items-center justify-start w-full">
                  <button
                    onClick={() =>
                      window.open(
                        "../../../UpdatedFiles/1566907-Article 1.pdf",
                        "_blank"
                      )
                    }
                    className="px-4 py-1 rounded bg-yellow-800 font-bold text-white"
                  >
                    Read
                  </button>
                  <a
                    href="../../../UpdatedFiles/1566907-Article 1.pdf"
                    download="Revisitng Education Sustainability.pdf"
                    className="px-2 py-1 rounded bg-green-700 font-bold text-white"
                  >
                    Download
                  </a>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-3 items-center w-full border-2 h-[20vh] rounded-lg shadow-md">
              <div className="col-span-1 flex items-center justify-center">
                <img className="w-20 h-20 object-fit" src={pdfIcon} alt="" />
              </div>
              <div className="col-span-2 text-left w-full pr-5">
                <p className="font-bold text-sm">
                  European Journal of Educational Research
                </p>
                <div className="mt-5 flex gap-x-2 text-xs items-center justify-start w-full">
                  <button
                    onClick={() =>
                      window.open(
                        "../../../UpdatedFiles/1625359-EU-JER_11_4_2127.pdf",
                        "_blank"
                      )
                    }
                    className="px-4 py-1 rounded bg-yellow-800 font-bold text-white"
                  >
                    Read
                  </button>
                  <a
                    href="../../../UpdatedFiles/1625359-EU-JER_11_4_2127.pdf"
                    download="Revisitng Education Sustainability.pdf"
                    className="px-2 py-1 rounded bg-green-700 font-bold text-white"
                  >
                    Download
                  </a>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-3 items-center w-full border-2 h-[20vh] rounded-lg shadow-md">
              <div className="col-span-1 flex items-center justify-center">
                <img className="w-20 h-20 object-fit" src={pdfIcon} alt="" />
              </div>
              <div className="col-span-2 text-left w-full pr-5">
                <p className="font-bold text-sm">
                  Mobile Learning to Promote Renewable Energy
                </p>
                <div className="mt-5 flex gap-x-2 text-xs items-center justify-start w-full">
                  <button
                    onClick={() =>
                      window.open(
                        "../../../UpdatedFiles/1819420_Open_Access_proceedings_Journal_of_Physics_Conference_series.pdf",
                        "_blank"
                      )
                    }
                    className="px-4 py-1 rounded bg-yellow-800 font-bold text-white"
                  >
                    Read
                  </button>
                  <a
                    href="../../../UpdatedFiles/1819420_Open_Access_proceedings_Journal_of_Physics_Conference_series.pdf"
                    download="Revisitng Education Sustainability.pdf"
                    className="px-2 py-1 rounded bg-green-700 font-bold text-white"
                  >
                    Download
                  </a>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-3 items-center w-full border-2 h-[20vh] rounded-lg shadow-md">
              <div className="col-span-1 flex items-center justify-center">
                <img className="w-20 h-20 object-fit" src={pdfIcon} alt="" />
              </div>
              <div className="col-span-2 text-left w-full pr-5">
                <p className="font-bold text-sm">
                  Empowering the Next Generation: Using Minecraft Education
                </p>
                <div className="mt-5 flex gap-x-2 text-xs items-center justify-start w-full">
                  <button
                    onClick={() =>
                      window.open(
                        "../../../UpdatedFiles/2064497-IJIET-12316 updated manuscript.pdf",
                        "_blank"
                      )
                    }
                    className="px-4 py-1 rounded bg-yellow-800 font-bold text-white"
                  >
                    Read
                  </button>
                  <a
                    href="../../../UpdatedFiles/2064497-IJIET-12316 updated manuscript.pdf"
                    download="Revisitng Education Sustainability.pdf"
                    className="px-2 py-1 rounded bg-green-700 font-bold text-white"
                  >
                    Download
                  </a>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-3 items-center w-full border-2 h-[20vh] rounded-lg shadow-md">
              <div className="col-span-1 flex items-center justify-center">
                <img className="w-20 h-20 object-fit" src={pdfIcon} alt="" />
              </div>
              <div className="col-span-2 text-left w-full pr-5">
                <p className="font-bold text-sm">
                  Secondary Students' Awareness on Renewable Energy
                </p>
                <div className="mt-5 flex gap-x-2 text-xs items-center justify-start w-full">
                  <button
                    onClick={() =>
                      window.open(
                        "../../../UpdatedFiles/2128217-Secondary_Students_Awareness_on_Renewable_Energy_.pdf",
                        "_blank"
                      )
                    }
                    className="px-4 py-1 rounded bg-yellow-800 font-bold text-white"
                  >
                    Read
                  </button>
                  <a
                    href="../../../UpdatedFiles/2128217-Secondary_Students_Awareness_on_Renewable_Energy_.pdf"
                    download="Revisitng Education Sustainability.pdf"
                    className="px-2 py-1 rounded bg-green-700 font-bold text-white"
                  >
                    Download
                  </a>
                
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publications;
