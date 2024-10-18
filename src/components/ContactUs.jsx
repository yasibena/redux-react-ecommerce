import React from 'react'
import { LiaMotorcycleSolid } from "react-icons/lia";
import { PiMoneyWavy } from "react-icons/pi";
import { MdOutlineGppGood } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa"
import Navbar from './Navbar';

export default function ContactUs() {
    return (

        <>
            {/* <Navbar /> */}
            <div className='grid justify-center bg-[#6c3a5d] text-[#fff] w-full h-[60vh] pb-[3rem] gap-[1rem] pt-[2rem]'>

                <div className='grid grid-cols-3 justify-center items-center justify-items-center'>
                    <div className='flex flex-col justify-center rounded-[1rem] text-center items-center border-2 border-4 border-[#fff] w-[12vw] p-2'>
                        <span className='text-[5vw]'><LiaMotorcycleSolid /></span>
                        <h2 className='text-[1.3vw]'>ارسال سریع</h2>
                    </div>

                    <div className='flex flex-col justify-center rounded-[1rem] text-center items-center border-2 border-4 border-[#fff] w-[12vw] p-2'>
                        <span className='text-[5vw]'><PiMoneyWavy /></span>
                        <h1 className='text-[1.3vw]'>خرید به صرفه</h1>
                    </div>

                    <div className='flex flex-col justify-center rounded-[1rem] text-center items-center border-2 border-4 border-[#fff] w-[12vw] p-2'>
                        <span className='text-[5vw]'><MdOutlineGppGood /></span>
                        <h1 className='text-[1.3vw]'>کیفیت بالا</h1>
                    </div>

                </div>




                <div className='grid  grid-cols-4 justify-center items-center justify-items-center text-[1vw]'>

                    <div className=''>
                        <p className='cursor-pointer hover:underline' >خرید</p>
                        <p className='cursor-pointer hover:underline' >زنانه</p>
                        <p className='cursor-pointer hover:underline' >مردانه</p>
                        <p className='cursor-pointer hover:underline' >بچگانه</p>
                    </div>


                    <div className=''>
                        <p className='cursor-pointer hover:underline' >خدمات مشتریان</p>
                        <p className='cursor-pointer hover:underline' >پاسخ به پرسش های متداول</p>
                        <p className='cursor-pointer hover:underline' >رویه های بازگرداندن کالا</p>
                        <p className='cursor-pointer hover:underline' >شرایط استفاده</p>
                    </div>


                    <div className=''>
                        <p className='cursor-pointer hover:underline' >ارتباط با ما</p>
                        <p className='cursor-pointer hover:underline' >تماس با ما</p>
                        <p className='cursor-pointer hover:underline' >آدرس ما</p>
                        <p className='cursor-pointer hover:underline' >همکاری با ما</p>
                    </div>


                    <div className=''>
                        <p className='cursor-pointer hover:underline'  >در خبرنامه ما عضو شوید و <br />از تخفیفات مطلع شوید</p>
                        <input type="email" name="" id="" className='outline-none rounded mt-[1rem] text-[#000] px-[0.5rem] py-[0.2rem]' placeholder='ایمیل خود را وارد کنید' />
                        <button className='m-[0.5rem] outline-none text-[1vw] border-2 border-[#fff] border-solid rounded px-2 py-1 mx-[1rem] duration-200 hover:bg-[#fff] hover:text-[#6c3a5d]'> ارسال</button>
                    </div>




                </div>
                <div className='flex flex-col jusstify-center items-center text-[1vw] gap-[1rem] '>
                    <p>مارا در شبکه های اجتماعی دنبال کنید.</p>
                    <div className='flex gap-[1rem]'>
                        <span className='cursor-pointer text-[1.7vw] hover:animate-bounce duration-100  hover:text-[2vw] hover:text-[2vw]'><FaInstagram /></span>
                        <span className='cursor-pointer text-[1.7vw] hover:animate-bounce duration-100 hover:text-[2vw]'><FaYoutube /></span>
                        <span className='cursor-pointer text-[1.7vw] hover:animate-bounce duration-100 hover:text-[2vw]'><FaTelegram /></span>
                    </div>
                </div>
            </div>
        </>
    )
}
