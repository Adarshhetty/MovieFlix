import React from 'react'
import marvel from '../assets/images/marvel.png'
import national from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'
import disney from '../assets/images/disney.png'

import marvelV from '../assets/videos/marvel.mp4'
import nationalV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starwarV from '../assets/videos/star-wars.mp4'
import disneyV from '../assets/videos/disney.mp4'
const Production = () => {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:national,
            video:nationalV
        },

    ]
  return (
    <div className='flex  gap-2 md:gap-5 p-2 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[3px] border-gray-200 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800'>
               <video src={item.video} autoPlay loop playsInline muted className='absolute rounded-md z-0  opacity-0 hover:opacity-100'/>
                <img src={item.image} className='w-full'/>
                
            </div>
        ))}
    </div>
  )
}

export default Production