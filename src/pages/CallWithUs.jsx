import React from 'react'
import Navbar from '../components/Navbar';
import { Map } from '../components/Map';
import ContactUs from '../components/ContactUs';


export default function CallWithUs() {
    const location = {
        address: "1600 Amphitheatre Parkway, Mountain View, california.",
        lat: 37.42216,
        lng: -122.08427,
    };

    return (
        <>
            <Navbar />
            <main className='my-[2rem]'>
                <div className='grid grid-cols-2  gap-[2rem] max-lg:grid-cols-1  '>
                    <div className=''>
                        <Map />
                    </div>
                    <div className='grid grid-cols-2 '>
                        <div className='flex flex-col gap-[2rem] '>
                            <h1 className='text-[1.1rem] font-bold'>آدرس فروشگاه</h1>

                            <p className='text-[0.9rem]'>ایران-تهران-خیابان کوروش-ساختمان پاسارگاد</p>
                            <p className='text-[0.9rem]'>+900000000000</p>
                            <p className='text-[0.9rem]'>0210000000000</p>
                        </div>
                        <div className='flex flex-col gap-[2rem] '>
                            <h1 className='text-[1.1rem] font-bold'>تماس با ما</h1>
                            <p className='text-[0.9rem]'>شما می توانید هر چیزی را که می خواهید در مورد محصولات یا خدمات ما بدانید از طریق این ایمیل بپرسید.
                            </p>
                            <p className='text-[0.9rem]'>help@styler.themecom</p>
                            <p className='text-[0.9rem]'>refund@styler.themecom</p>
                        </div>
                        <div className='flex flex-col gap-[1rem] col-span-2 justify-center '>
                            <h2>ارسال پیام</h2>
                            <input className='p-2 w-[45rem] border-2 border-solid border-gray rounded duration-200 focus:border-[var(--basecolor)] focus:outline-none' type="text" name="" id="" placeholder='نام شما' ></input>
                            <input className='p-2 w-[45rem] border-2 border-solid border-gray rounded duration-200 focus:border-[var(--basecolor)] focus:outline-none' type="text" name="" id="" placeholder='ایمیل شما'></input>
                            <input className='p-2 w-[45rem] border-2 border-solid border-gray rounded duration-200 focus:border-[var(--basecolor)] focus:outline-none' type="text" name="" id="" placeholder='موضوع پیام '></input>
                            <input className='p-2 w-[45rem] border-2 border-solid border-gray rounded duration-200 focus:border-[var(--basecolor)] focus:outline-none' type="comment" name="" id="" placeholder='پیام'></input>
                            <button className='bg-[var(--basecolor)] w-[6rem] rounded text-[#fff] p-2'>ارسال</button>
                        </div>
                    </div>


                </div>

            </main>
            <ContactUs />
        </>

    )
}
