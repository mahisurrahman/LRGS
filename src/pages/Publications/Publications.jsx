import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import pdfIcon from "../../../public/pngicon.png";

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
    <div className=" w-full flex items-center justify-center py-10">
      <div className="w-full ">
        <h2 className="text-center font-extrabold text-5xl">PUBLICATIONS</h2>
        <h5 className="pt-5 text-center text-gray-600 text-wrap text-sm font-bold tracking-widest">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h5>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-12 items-center h-screen md:h-auto w-full">
          <div className="col-span-4">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div className="md:mx-10 col-span-8 h-[50vh] overflow-y-scroll grid md:grid-cols-2 gap-x-5 gap-y-5">
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
                  onClick={() => window.open('../../../public/pdf/Revisiting Education Sustainability.pdf', '_blank')}
                  className="px-4 py-1 rounded bg-yellow-800 font-bold text-white">
                    Read
                  </button>
                  <a href="../../../public/pdf/Revisiting Education Sustainability.pdf" download="Revisitng Education Sustainability.pdf" className="px-2 py-1 rounded bg-green-700 font-bold text-white">
                    Download
                  </a>
                  <button className="px-2 py-1 rounded bg-blue-700 font-bold text-white">
                    Comment
                  </button>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-3 items-center w-full border-2 h-[20vh] rounded-lg shadow-md">
              <div className="col-s flex items-center justify-center">
                <img className="w-20 h-20 object-fit" src={pdfIcon} alt="" />
              </div>
              <div className="col-span-2 text-left w-full pr-5">
                <p className="font-bold text-sm">
                  Revisiting Education for Sustainable Development
                </p>
                <div className="mt-5 flex gap-x-2 text-xs items-center justify-start w-full">
                  <button 
                  onClick={() => window.open('../../../public/pdf/Revisiting Education Sustainability.pdf', '_blank')}
                  className="px-4 py-1 rounded bg-yellow-800 font-bold text-white">
                    Read
                  </button>
                  <a href="../../../public/pdf/Revisiting Education Sustainability.pdf" download="Revisitng Education Sustainability.pdf" className="px-2 py-1 rounded bg-green-700 font-bold text-white">
                    Download
                  </a>
                  <button className="px-2 py-1 rounded bg-blue-700 font-bold text-white">
                    Comment
                  </button>
                </div>
              </div>
            </section>
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
                  onClick={() => window.open('../../../public/pdf/Revisiting Education Sustainability.pdf', '_blank')}
                  className="px-4 py-1 rounded bg-yellow-800 font-bold text-white">
                    Read
                  </button>
                  <a href="../../../public/pdf/Revisiting Education Sustainability.pdf" download="Revisitng Education Sustainability.pdf" className="px-2 py-1 rounded bg-green-700 font-bold text-white">
                    Download
                  </a>
                  <button className="px-2 py-1 rounded bg-blue-700 font-bold text-white">
                    Comment
                  </button>
                </div>
              </div>
            </section>
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
                  onClick={() => window.open('../../../public/pdf/Revisiting Education Sustainability.pdf', '_blank')}
                  className="px-4 py-1 rounded bg-yellow-800 font-bold text-white">
                    Read
                  </button>
                  <a href="../../../public/pdf/Revisiting Education Sustainability.pdf" download="Revisitng Education Sustainability.pdf" className="px-2 py-1 rounded bg-green-700 font-bold text-white">
                    Download
                  </a>
                  <button className="px-2 py-1 rounded bg-blue-700 font-bold text-white">
                    Comment
                  </button>
                </div>
              </div>
            </section>
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
                  onClick={() => window.open('../../../public/pdf/Revisiting Education Sustainability.pdf', '_blank')}
                  className="px-4 py-1 rounded bg-yellow-800 font-bold text-white">
                    Read
                  </button>
                  <a href="../../../public/pdf/Revisiting Education Sustainability.pdf" download="Revisitng Education Sustainability.pdf" className="px-2 py-1 rounded bg-green-700 font-bold text-white">
                    Download
                  </a>
                  <button className="px-2 py-1 rounded bg-blue-700 font-bold text-white">
                    Comment
                  </button>
                </div>
              </div>
            </section>
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
                  onClick={() => window.open('../../../public/pdf/Revisiting Education Sustainability.pdf', '_blank')}
                  className="px-4 py-1 rounded bg-yellow-800 font-bold text-white">
                    Read
                  </button>
                  <a href="../../../public/pdf/Revisiting Education Sustainability.pdf" download="Revisitng Education Sustainability.pdf" className="px-2 py-1 rounded bg-green-700 font-bold text-white">
                    Download
                  </a>
                  <button className="px-2 py-1 rounded bg-blue-700 font-bold text-white">
                    Comment
                  </button>
                </div>
              </div>
            </section>
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
                  onClick={() => window.open('../../../public/pdf/Revisiting Education Sustainability.pdf', '_blank')}
                  className="px-4 py-1 rounded bg-yellow-800 font-bold text-white">
                    Read
                  </button>
                  <a href="../../../public/pdf/Revisiting Education Sustainability.pdf" download="Revisitng Education Sustainability.pdf" className="px-2 py-1 rounded bg-green-700 font-bold text-white">
                    Download
                  </a>
                  <button className="px-2 py-1 rounded bg-blue-700 font-bold text-white">
                    Comment
                  </button>
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
