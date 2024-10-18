import React from 'react'
import { Link } from 'react-router-dom'


export default function NewArrival() {
  return (
    <div className='NewArrival flex justify-center '>
      <div className=' flex rounded bg-[#6c3a5d] w-[80vw]  px-[2rem] py-[1rem] '>

        <img src='../../public/images/prettyGirlSitting.png' className='h-[20vw]' alt="" />

        <Link to='/shop'>
          <h2 className='rotate-[-10deg] italic cursor-pointer font-serif text-[1.4vw] ml-[5rem] mt-[4rem] text-[#ffff] 
      underline duration-200 hover:text-[2vw] '>پیشنهاد ویژه</h2>
        </Link>

        <div className='flex justify-center flex-col text-[#fff] gap-[1rem] text-[1vw]'>
          <h1 className='font-bold text-[2vw]'>محصولات جدید رسید</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            <br />
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            <br />
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .
          </p>


          <div>
           <Link to='/shop'>
           <button className='px-[0.5rem] py-[0.3rem] rounded border-2 border-sold text-[1vw] border-[#fff] 
        duration-200  hover:bg-[#ffff] hover:text-[#6c3a5d]'>دیدن جزییات</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
