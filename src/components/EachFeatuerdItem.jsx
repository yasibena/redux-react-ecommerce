import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import { CiHeart } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function EachFeatuerdItem({ prod }) {
    return (



        <div className='flex flex-col w-full h-auto gap-[0.5rem] cursor-pointer duration-100 
                    ransition ease-in-out delay-100 mb-[2rem]  text-[0.9rem] hover:opacity-95 hover:scale-110 
                    '>
                        {/* hover:color-[#6c3a5d3d] */}
            <img src={prod?.img} className=' bg-[#80808047] object-cover h-auto w-auto hover:opacity-80' alt="" />
            <span className='absolute bg-[#ffff] rounded-full  p-[0.2rem] hover:text-[#ffff] hover:bg-[#000]'><CiHeart /></span>
            <span className='absolute mt-[2rem] bg-[#ffff] rounded-full   p-[0.2rem] hover:text-[#ffff] hover:bg-[#000]'><AiOutlineEye /></span>
           <div className='m-auto'>
           <h2>{prod?.name}</h2>
           <span className=''>{prod?.price}</span>
           <div className='flex items-center'><FaStar className='text-[gold]' /> <span>{prod?.rate}</span></div>
           </div>
          
        </div>






    )
}
