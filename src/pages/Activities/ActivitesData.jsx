import React from 'react'
import img1 from '../../../public/UpdatedFiles/6291922279285766987.jpg'
import img2 from '../../../public/UpdatedFiles/6291922279285766988.jpg'
import img3 from '../../../public/UpdatedFiles/6291922279285766989.jpg'
import img4 from '../../../public/UpdatedFiles/6291922279285766990.jpg'
import Activities from './Activities'





const ActivitesData = () => {
  const data = [
    {
      title: "Teachers WorkShop",
      image: img4,
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
      image: img1,
    }
  ]
  return (
    <div>
     <Activities data={data}/>
    
  

    </div>
  )
}

export default ActivitesData