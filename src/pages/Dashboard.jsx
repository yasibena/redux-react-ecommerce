import React from 'react'
import Navbar from '../components/Navbar'
import { selectUseName } from '../Redux/feature/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { removeActiveUser } from '../Redux/feature/authSlice'

export default function Dashboard() {
    
    const userName = useSelector(selectUseName)
    const dispatch = useDispatch()
    const signOut = async () => {
        dispatch(removeActiveUser)
        navigate("/login");

    };

    return (
        <div>
            <Navbar />
            <div className='h-[6rem] bg-[#e7dfe5] my-[1rem] flex justify-between  items-center p-[2rem]'>
                <div>
                    <p>خوش اومدی <span className='text-[var(--basecolor)] text-[1rem] font-bold'>{userName}</span> جان</p>
                </div>
                <div>
                    <div className='flex '>
                        <Link to='/'><span> صفحه اصلی </span></Link>
                        <FaAngleLeft color='#6c3a5d' className='text-[1.5rem]' />
                        <Link to='/dashboard'><span>حساب کاربری </span></Link>
                    </div>
                </div>
            </div>
            <div className='flex w-[70%] h-[23rem] m-auto border-2 border-solid rounded border-[var(--basebordercolor)] mt-[4rem]' >
                <div className=' flex flex-row '>
                    <div className=' w-[20rem] text-[0.8rem]'>
                        <ul className=' flex flex-col gap-[2rem] mr-[3rem] mt-[5rem]'>
                            <Link to='/dashboard'>
                                <li className='border-b-4 border-[var(--basecolor)] w-[3rem]'>داشبورد</li>
                            </Link>
                            <li className='hover:border-b-4 hover:border-[var(--basecolor)] hover:w-[3rem] cursor-pointer'>سفارشات</li>
                            <li className='hover:border-b-4 hover:border-[var(--basecolor)] hover:w-[8rem] cursor-pointer'>اطلاعات حساب کاربری</li>
                            <li className='hover:border-b-4 hover:border-[var(--basecolor)] hover:w-[4rem] cursor-pointer' onClick={signOut}>خارج شدن</li>
                        </ul>
                    </div>
                    <div className=' rotate-180 w-[0.2rem] bg-[var(--basecolor)] ' />
                    <div className='flex flex-col gap-[2rem] mr-[2rem] justify-center'>
                        <h2>{userName} نیستید؟  خارج شوید</h2>
                        <p>ز داشبورد حساب خود می‌توانید سفارش‌های اخیر خود را مشاهده کنید، <br />
                            آدرس‌های ارسال و صورت‌حساب خود را مدیریت کنید و رمز عبور و جزئیات حساب خود را ویرایش کنید.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
