import React from "react";

const Activities = ({ data }) => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="md:h-[100vh] lg:h-[80vh]  p-11 md:p-16 flex items-center justify-center w-full">
      <div className="">
        <h2 className="text-center font-extrabold text-5xl">
          ACTIVITIES
        </h2>
        <h5 className='pt-5 text-center text-gray-600 text-wrap text-sm font-bold tracking-widest'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
        <div className="flex justify-center w-full  ">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10  pt-16  rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark ">
            {data.map((activity, key) => (
              <div
                key={key}
                className="block max-w-[18rem] hover:scale-105 transition-all duration-500  rounded-lg hover:border border-gray-400 bg-gray-100  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
              >
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
            key={key}
            className="rounded-t-lg w-80 h-60 object-cover cursor-pointer"
            src={activity.image}
            alt={activity.title}
            onClick={() => handleImageClick(activity.image)}
          />
                </div>
                <div className="p-6">
                  +
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
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative  p-5 rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute  top-5 right-7 text-gray-900 hover:text-gray-700"
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
