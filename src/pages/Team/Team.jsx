import React from 'react'
import img1 from '../../../public/teamLeaderProfessorRuhizan.jpg'
import img2 from '../../../public/coResearcherProfMadyaNazrulAnuarNayan.jpeg'
import img3 from '../../../public/coResearcherProfessorDrLiliaHalim.jpg'

const Team = () => {
  const team =[
    {
      title: "Team Leader",
      image: img1,
      status:'Professor DR.RUHIZAN MOHAMMAD YASIN',
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      cv:'CV'
    },
    {
      title: "Co-Researcher",
      image: img3,
      status:'Professor DR.LILIA HALIM',
       description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
       cv:'CV'
    },
    {
      title: "Co-Researcher",
      image: img2,
      status:'PROF. MADYA IR. DR. NAZRUL ANUAR NAYAN',
       description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
       cv:'CV'
    },
  ]

  return (
    <div className='md:h-[110vh] flex  justify-center items-center '>
      <div className=''>
        <h2 className='text-6xl font-extrabold text-center'>RESEARCH TEAM</h2>
         <h5 className='pt-5 text-center text-wrap text-gray-700 text-sm md:text-lg lg:text-xl font-bold tracking-widest'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
         <div className="flex justify-center w-full">

         <div className='grid md:flex  justify-center items-center gap-20 flex-wrap  pt-10  rounded-lg shadow-secondary-1 dark:bg-surface-dark '>
         {team.map((activity, key) => (
              <div
                key={key}
                className="block max-w-[18rem]  rounded-lg   text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
              >
                 <div className="mb-3">
                  <h5 className="text-xl  font-semibold leading-tight text-black tracking-widest text-center">
                    {activity.title}
                  </h5>
                </div>
                <div className="mb-3">
                  <img
                    className="rounded-2xl border   h-[40vh] object-cover w-full"
                    src={activity.image}
                    alt={activity.title}
                  />
                </div>
                <div className="mb-3">
                  <h5 className="text-sm  font-semibold leading-tight text-black tracking-widest text-center">
                    {activity.status}
                  </h5>
                </div>
                <div className="mb-3 m">
                  <h5 className="text-sm text-black text-wrap   leading-tight  tracking-widest text-center">
                    {activity.description}
                  </h5>
                </div>
                <div className='text-black text-center flex justify-center'>

                <button className='border w-20 rounded border-black hover:scale-105 duration-500'>{activity.cv}</button>
                </div>
              </div>
            ))}
         </div>
         </div>
      </div>
    </div>
  )
}

export default Team