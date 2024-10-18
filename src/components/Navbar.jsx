import React, { useEffect, useState } from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import { Link } from 'react-router-dom'
import LoginForm from '../pages/LoginForm'
import Search from './Modals/Search'
import { useDispatch, useSelector } from 'react-redux'
import { openFavorite, openSearch, openCard, closeCard, closeFavorite, openWallet, closeWallet } from '../Redux/feature/modalSlice'
import { CgMathPlus } from "react-icons/cg";
import { IoAdd, IoRemove } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
import { TbTrash } from 'react-icons/tb'
import OpenSidebar from './Modals/OpenSidebar'
import { ToastContainer, toast } from 'react-toastify'
import { FaBars } from "react-icons/fa6";


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
import { BsBasket } from 'react-icons/bs'
import { IoIosLogOut } from "react-icons/io";
import { supabase } from '../supabase/client'
import { setActiveUser } from '../Redux/feature/authSlice'
import { selectIsLoggedIn } from '../Redux/feature/authSlice'
import NotShowOnLogin from './HiddenLinks'
import IsLoggedSideMenu from './IsLoggedSideMenu'
// const isloggedUser = useSelector(selectIsLoggedIn)
// console.log(isloggedUser, 'set');
// import { openModal } from '../Redux/feature/modalSlice'

// import g from '../../public/images/'
export default function Navbar() {
  // const [openSearch, setOpenSearch] = useState(false)
  const { isSearchOpen, isFavoriteOpen, isWalletOpen, isCardOpen } = useSelector((store) => store.modal)
  const [showSideMenu, setShowSideMenu] = useState(false)
  const [currentUser, setCurrentUser] = useState({});
  const [displayName, setDisplayName] = useState('')


  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    if (isCardOpen==true || showSideMenu==true || isSearchOpen == true) {
      document.body.style.overflow = "hidden";

    }
    
    else {
      document.body.style.overflow = "";
    }

  }, [isSearchOpen,isCardOpen])




  useEffect(() => {


    supabase.auth.onAuthStateChange((event, session) => {


      if (event === "SIGNED_IN") {

        // toast.success('با موفقیت وارد شوید');
        // thisis payloadthat we sent
        dispatch(setActiveUser({
          email: session.user.email,
          name: session.user.user_metadata.name,
          userId: session.user.id

        }))
        setDisplayName(session.user.user_metadata.name)

      }
    });


    // thisis payloadthat we sent
    // dispatch(setActiveUser({
    //   email: session.email,
    //   name: session.app_metadata.name,
    //   userID: session.id

    // }))
  }, [])

  const openWalletCard = () => {
    dispatch(openCard())
    dispatch((openWallet()))
    dispatch((closeFavorite()))
  }
  const openFavoriteCard = () => {
    dispatch(openCard())
    dispatch((openFavorite()))
    dispatch((closeWallet()))
  }



  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate("/");
    }
  };

  return (

    <div className=' '>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {/* <div className={`bg-[#fff] z-50 w-[30rem] h-full absolute top-0 flex left-0  duration-300 overflow-x-hidden flex-col`}> */}
      {/* <div className={`bg-[#fff] z-50 h-full absolute top-0 flex duration-300 left-0  overflow-hidden flex-col ${showSideMenu ? 'w-[30rem]' : 'w-0'} `}>
        <span><FaBars className=' m-5 text-[1.5rem] text-[var(--basecolor)] cursor-pointer' onClick={() => setShowSideMenu(!showSideMenu)} /></span>
        <ul className='flex flex-col gap-[2rem] my-[2rem]'>
          <Link to='/'>
            <div className='flex cursor-pointer'> <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              className='text-[1.5rem] mx-[1rem]'
            >
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
            </svg><li>صفحه اصلی</li></div>
          </Link>
          <hr />


          <Link to='/shop'>
            <div className='flex cursor-pointer'><svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              className='text-[1.5rem] mx-[1rem]'

            >
              <path d="M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375
               0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375
                2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375
                 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 
                 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h1v-5a1 1 0 011-1h3a1 1 0 011 1v5h6V9a.5.5 0 011 0v6h.5a.5.5 0 010 
                 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3zm3 
                 0h-2v3h2v-3z"
                className='text-[1.5rem] mx-[1rem]'
              />
            </svg><li>فروشگاه</li></div>
          </Link>
          <hr />
          <Link to='/login'>


            <div className='flex cursor-pointer'>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                className='text-[1.5rem] mx-[1rem]'
              >
                <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
              </svg>ّ

              <li>حساب کاربری</li></div>
          </Link>

          <hr />

          <div className='flex cursor-pointer'> <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            className='text-[1.5rem] mx-[1rem]'
          >
            <path d="M16.57 22a2 2 0 001.43-.59l2.71-2.71a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 
              0l-1.6 1.59a7.55 7.55 0 01-3-1.59 7.62 7.62 0 01-1.59-3l1.59-1.6a1 1 0 000-1.41l-4-4a1 
              1 0 00-1.41 0L2.59 6A2 2 0 002 7.43 15.28 15.28 0 006.3 17.7 15.28 15.28 0 0016.57 22zM6
               5.41L8.59 8 7.3 9.29a1 1 0 00-.3.91 10.12 10.12 0 002.3 4.5 10.08 10.08 0 004.5 2.3 1 1 0 
               00.91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 01-8.87-3.71A13.28 13.28 0 014 7.41zM20
                11h2a8.81 8.81 0 00-9-9v2a6.77 6.77 0 017 7z" />
            <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z" />
          </svg><li>تماس با ما</li></div>

          <hr />

          <div className='flex cursor-pointer'><svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            className='text-[1.5rem] mx-[1rem]'
          >
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
          </svg><li>علاقه مندی ها</li></div>

          <hr />

          <div className='mx-[1rem] '>
            <div className='flex items-center'>
              <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
                className='text-[1.5rem] mx-2 text-[var(--basecolor)]'

              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M176 256 A48 48 0 0 1 128 304 A48 48 0 0 1 80 256 A48 48 0 0 1 176 256 z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M432 112 A48 48 0 0 1 384 160 A48 48 0 0 1 336 112 A48 48 0 0 1 432 112 z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M432 400 A48 48 0 0 1 384 448 A48 48 0 0 1 336 400 A48 48 0 0 1 432 400 z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
                />
              </svg>
              <h1 className='font-bold text-[var(--basecolor)]'> حساب ما در شبکه های اجتماعی دنبال کنید</h1>
            </div>
            <div className='flex justify-center my-[2rem] gap-[2rem]'>
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


        </ul>



      </div> */}
      {/* <div className={`bg-[#fff] z-50 w-[30rem] h-full absolute top-0 flex left-0  duration-300 overflow-x-hidden flex-col`}> */}
      {
        isLoggedIn ?
          <IsLoggedSideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
          :

          <div className={`bg-[#fff] z-50 h-full absolute  top-0 flex duration-300 left-0  overflow-hidden flex-col ${showSideMenu ? 'w-[30rem]' : 'w-0'} `}>
            <span><FaBars className=' m-5 text-[1.5rem] text-[var(--basecolor)] cursor-pointer' onClick={() => setShowSideMenu(!showSideMenu)} /></span>
            <ul className='flex flex-col gap-[2rem] my-[2rem]'>
              <Link to='/'>
                <div className='flex cursor-pointer'> <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className='text-[1.5rem] mx-[1rem]'
                >
                  <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                </svg><li>صفحه اصلی</li></div>
              </Link>
              <hr />


              <Link to='/shop'>
                <div className='flex cursor-pointer'><svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  className='text-[1.5rem] mx-[1rem]'

                >
                  <path d="M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375
               0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375
                2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375
                 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 
                 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h1v-5a1 1 0 011-1h3a1 1 0 011 1v5h6V9a.5.5 0 011 0v6h.5a.5.5 0 010 
                 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3zm3 
                 0h-2v3h2v-3z"
                    className='text-[1.5rem] mx-[1rem]'
                  />
                </svg><li>فروشگاه</li></div>
              </Link>
              <hr />
              <Link to='/login'>
                <div className='flex cursor-pointer'>
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className='text-[1.5rem] mx-[1rem]'
                  >
                    <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
                  </svg>ّ

                  <li>حساب کاربری</li></div>
              </Link>

              <hr />

              <div className='flex cursor-pointer'> <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className='text-[1.5rem] mx-[1rem]'
              >
                <path d="M16.57 22a2 2 0 001.43-.59l2.71-2.71a1 1 0 000-1.41l-4-4a1 1 0 00-1.41 
              0l-1.6 1.59a7.55 7.55 0 01-3-1.59 7.62 7.62 0 01-1.59-3l1.59-1.6a1 1 0 000-1.41l-4-4a1 
              1 0 00-1.41 0L2.59 6A2 2 0 002 7.43 15.28 15.28 0 006.3 17.7 15.28 15.28 0 0016.57 22zM6
               5.41L8.59 8 7.3 9.29a1 1 0 00-.3.91 10.12 10.12 0 002.3 4.5 10.08 10.08 0 004.5 2.3 1 1 0 
               00.91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 01-8.87-3.71A13.28 13.28 0 014 7.41zM20
                11h2a8.81 8.81 0 00-9-9v2a6.77 6.77 0 017 7z" />
                <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z" />
              </svg><li>تماس با ما</li></div>

              <hr />

              <div className='flex cursor-pointer'><svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                className='text-[1.5rem] mx-[1rem]'
              >
                <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
              </svg><li>علاقه مندی ها</li></div>

              <hr />

              <div className='mx-[1rem] '>
                <div className='flex items-center'>
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className='text-[1.5rem] mx-2 text-[var(--basecolor)]'

                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M176 256 A48 48 0 0 1 128 304 A48 48 0 0 1 80 256 A48 48 0 0 1 176 256 z"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M432 112 A48 48 0 0 1 384 160 A48 48 0 0 1 336 112 A48 48 0 0 1 432 112 z"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M432 400 A48 48 0 0 1 384 448 A48 48 0 0 1 336 400 A48 48 0 0 1 432 400 z"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
                    />
                  </svg>
                  <h1 className='font-bold text-[var(--basecolor)]'> حساب ما در شبکه های اجتماعی دنبال کنید</h1>
                </div>
                <div className='flex justify-center my-[2rem] gap-[2rem]'>
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


            </ul>



          </div>

      }

      {/* </div> */}
      <Search className='z-50 ' />
      <OpenSidebar />
      <nav className={isSearchOpen ? 'flex v-hidden justify-between items-center h-[10vh] -z-50 '
        :
        'flex justify-between items-center h-[10vh] -z-50 '}>


        <div className='icons grid grid-cols-4  relative'>

          <span className=' hover:text-[#6c3a5d]  '>
            {
              isLoggedIn ?
                <Link to='/dashboard'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-6 max-sm:size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </Link>
                :

                <Link to='/login'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-6 max-sm:size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </Link>
            }


          </span>
          {/* <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-6 max-sm:size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"

            >
              <path d="M11.178 19.569a.998.998 0 001.644 0l9-13A.999.999 0 0021 5H3a1.002 1.002 0 00-.822 1.569l9 13z" />
            </svg>
            <div className='flex flex-col bg-[red] absolute top-[40%]'>
              <div><p>{displayName}</p></div>
              <div>داشبورد</div>
              <div>سبد خرید</div>
              <div>مورد علاقه ها</div>
              <div>خروج از حساب </div>
            </div>
          </div> */}

          <span className=' hover:text-[#6c3a5d] max-lg:hidden' onClick={() => openFavoriteCard()} >
            {/* <span className='margine-x hover:text-[#6c3a5d] ' onClick={()=>favoriteFunc()} > */}
            <span className='absolute bottom-[0.9rem] left-[6rem] rounded-full bg-[var(--basecolor)]  text-[#fff]  w-[1rem] h-[1rem] text-[0.5vw] flex items-center justify-center '>0</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 max-md:size-6 max-sm:size-4"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>

          </span>



          <span className='margine-x hover:text-[#6c3a5d] ' onClick={() => openWalletCard()}>
            {/* <span className='margine-x hover:text-[#6c3a5d]' onClick={()=>basketFunc()}> */}
            <span className='absolute bottom-[0.9rem] left-[3.5rem] rounded-full bg-[#6c3a5d] max-lg:left-[8.5rem] text-[#fff] w-[1rem] h-[1rem] text-[0.5vw] flex items-center justify-center '>0</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="size-6 max-md:size-6 max-sm:size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
              1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 
              0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

          </span>


          <span className='margine-x hover:text-[#6c3a5d] max-lg:hidden' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-6 max-sm:size-4"
              onClick={() => { dispatch(openSearch()) }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </span>
        </div>

        <div className='flex max-lg:hidden'>
          <ul className='menu flex text-[1vw]'>
            {/* <ul className='grid-flow-row grid gap-4 grid '> */}
            <Link to='/'><li className='hover:text-[#6c3a5d]'>صفحه اصلی</li></Link>
            <Link to='/shop'><li className='hover:text-[#6c3a5d]'> فروشگاه</li></Link>
            {/* <li className='hover:text-[#6c3a5d]'>مردانه</li>
          <li className='hover:text-[#6c3a5d]'>زنانه</li> */}
            <Link to='/contactus'>  <li className='hover:text-[#6c3a5d]'>تماس با ما</li></Link>
          </ul>
        </div>


        <div className="flex ">

          <span className='logo italic font-serif text-[1.5vw] font-bold text-[#6c3a5d] max-lg:m-auto'>
            {/* <img src="../../public/images/logo.svg" alt="j" className='h-[70px] text-[red]' /> */}Shoppify
          </span>
          <span><FaBars className='flex items-center justify-center mt-[0.3rem] mr-2 text-[1.5rem] text-[var(--basecolor)] cursor-pointer' onClick={() => setShowSideMenu(!showSideMenu)} /></span>
        </div>



      </nav>

    </div>
  )
}
