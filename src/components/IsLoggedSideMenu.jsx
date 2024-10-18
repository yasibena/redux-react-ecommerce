import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { selectUseName,selectUserID } from '../Redux/feature/authSlice';
import {
    EmailIcon,
    EmailShareButton,
    PinterestIcon,
    PinterestShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,

} from "react-share";
import { useDispatch, useSelector } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';
import { supabase } from '../supabase/client';
import removeActiveUser from '../Redux/feature/authSlice'
import { signOutUser } from '../Redux/feature/authSlice';
import { toast } from 'react-toastify';

export default function IsLoggedSideMenu({showSideMenu,setShowSideMenu}) {
    const nameOfUser=useSelector(selectUseName)
   

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const signOut = async () => {
        signOutUser()
        dispatch(removeActiveUser)
        navigate("/login");
        window.location.reload();
        
        
      };

    return (

        <div className={`bg-[#fff] z-50 h-full  absolute top-0 flex duration-300 left-0  overflow-hidden flex-col ${showSideMenu ? 'w-[30rem]' : 'w-0'} `}>
        <span><RxCross1 className=' m-5 text-[1.5rem] text-[var(--basecolor)] cursor-pointer' onClick={() => setShowSideMenu(!showSideMenu)} /></span>
        <div className='grid grid-cols-5 h-full bg-[#fff]'>
            <div className=' col-span-4'>
                <div className='flex justify-around'>
                    <div>خوش اومدی</div>
                    <div className='bg-[var(--basecolor)] text-[#fff] p-1 rounded'>{nameOfUser}</div>
                </div>
                <div>
                    <ul className='flex flex-col gap-[1rem] my-[2rem] mr-[3rem]'>
                        <Link to='/dashboard'>
                        <li>داشبورد</li>
                        </Link>
                        <hr/>
                        <li>سفارشات</li>
                        <hr/>
                        <li>اطلاعات حساب کاربری</li>
                        <hr/>
                        <li onClick={signOut} className='cursor-pointer'>خارج شدن</li>
                        
                    </ul>
                </div>
            </div>
            <div className='bg-[var(--basecolor)] text-[#fff] flex flex-col gap-[2rem] justify-center items-center'>
                <ul className='flex flex-col gap-[2rem]'>
                    <li className='text-[2rem]'>
                        <Link to='/'>
                            <div className='flex cursor-pointer'> <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1em"
                                width="1em"

                            >
                                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                            </svg></div>
                        </Link>
                    </li>
                    <li className='text-[2rem]'>
                        <Link to='/shop'>
                            <div className='flex cursor-pointer'><svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"


                            >
                                <path d="M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375
               0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375
                2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375
                 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 
                 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h1v-5a1 1 0 011-1h3a1 1 0 011 1v5h6V9a.5.5 0 011 0v6h.5a.5.5 0 010 
                 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3zm3 
                 0h-2v3h2v-3z"

                                />
                            </svg></div>
                        </Link>

                    </li>
                    <li className='text-[2rem]'>
                        <Link to='/contactus'>
                            <div className='flex cursor-pointer'> <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"

                            >
                                <path d="M16.57 22a2 2 0 001.43-.59l2.71-2.71a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0l-1.6 1.59a7.55 7.55 0 01-3-1.59 7.62 7.62 0 01-1.59-3l1.59-1.6a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 0L2.59 6A2 2 0 002 7.43 15.28 15.28 0 006.3 17.7 15.28 15.28 0 0016.57 22zM6 5.41L8.59 8 7.3 9.29a1 1 0 00-.3.91 10.12 10.12 0 002.3 4.5 10.08 10.08 0 004.5 2.3 1 1 0 00.91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 01-8.87-3.71A13.28 13.28 0 014 7.41zM20 11h2a8.81 8.81 0 00-9-9v2a6.77 6.77 0 017 7z" />
                                <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z" />
                            </svg></div>

                        </Link>
                    </li>

                </ul>

                <div className='flex flex-col gap-[2rem] my-[1rem]'>
                    <span className='logo italic font-serif text-[1rem] font-bold text-[#fff] max-lg:m-auto -rotate-90	'>
                        Shoppify
                    </span>
                </div>
                <div className='flex flex-col gap-[2rem]'>
                    <EmailShareButton>
                        <EmailIcon className='rounded-full h-[2rem] w-[2rem]' />
                    </EmailShareButton>
                    <TwitterShareButton>
                        <TwitterIcon className='rounded-full h-[2rem] w-[2rem]' />
                    </TwitterShareButton>
                    <WhatsappShareButton>
                        <WhatsappIcon className='rounded-full h-[2rem] w-[2rem]' />
                    </WhatsappShareButton>
                    <TelegramShareButton>
                        <TelegramIcon className='rounded-full h-[2rem] w-[2rem]' />
                    </TelegramShareButton>
                    <PinterestShareButton>
                        <PinterestIcon className='rounded-full h-[2rem] w-[2rem]' />
                    </PinterestShareButton>
                </div>
            </div>
        </div>
</div>

    )
}
