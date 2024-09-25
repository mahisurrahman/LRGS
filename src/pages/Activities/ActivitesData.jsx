import React from 'react'
import img1 from '../../../public/Activitis/teachers workshop .jpg'
import img2 from '../../../public/Activitis/minecraft workshop.jpg'
import img3 from '../../../public/Activitis/roboticss workshop.jpg'
import img4 from '../../../public/Activitis/penang.jpg'
import Activities from './Activities'





const ActivitesData = () => {
  const data = [
    {
      title: "Teachers WorkShop",
      image: img1,
    },
    {
      title: "Minecraft WorkShop",
      image: img2,
    },
    {
      title: "Robotics WorkShop",
      image: img3,
    },
    {
      title: "Workshop in Penang",
      image: img4,
    }
  ]
  return (
    <div>
     <Activities data={data}/>
    
  

    </div>
  )
}

export default ActivitesData