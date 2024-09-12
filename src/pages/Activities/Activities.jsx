import React from "react";

const Activities = ({ data }) => {
  return (
    <div className="md:h-[85vh] flex items-center justify-center w-full">
      <div className="">
        <h2 className="text-center font-extrabold text-6xl">
          ACTIVITIES
        </h2>
        <div className="pt-5">
          <p className="text-center text-wrap text-lg md:text-lg lg:text-xl font-semibold tracking-widest   ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s,
          </p>
        </div>
        <div className="flex justify-center w-full  ">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5  pt-16  rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark ">
            {data.map((activity, key) => (
              <div
                key={key}
                className="block max-w-[18rem] rounded-lg hover:border border-gray-400 bg-gray-100  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="rounded-t-lg"
                    src={activity.image}
                    alt={activity.title}
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-black tracking-widest text-center">
                    {activity.title}
                  </h5>
                  <p className="text-base">
                    {activity.description}{" "}
                    {/* Assuming there's a description field */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
