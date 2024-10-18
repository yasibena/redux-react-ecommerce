import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { IoAdd, IoRemove } from 'react-icons/io5'
import { CgMathPlus } from 'react-icons/cg'
import { CiHeart } from "react-icons/ci";
import { TbTrash } from 'react-icons/tb';
import { useSelector, useDispatch } from 'react-redux';
import { closeFavorite, openFavorite, closeCard, closeWallet, openWallet } from '../../Redux/feature/modalSlice';


export default function OpenSidebar() {
    const { isFavoriteOpen, isWalletOpen, isCardOpen } = useSelector((store) => store.modal)
    const dispatch = useDispatch()
    var content, content2;

    if (isCardOpen == true && isFavoriteOpen == true) {
        content =
            <div>
                <button>اضافه کردن به سبدخرید</button>
            </div>
            ;
        content2 =
            <div className=' '>
                <Link to='/shop'>
                    <div className='flex mx-2 items-center '>
                        <div>  <CiHeart className='text-[4rem] text-[#ccc4c4]' /></div>
                        <div><span className=' hover:text-[var(--basecolor)] underline font-bold '>همین الان بخرید</span></div>

                    </div>
                </Link>
            </div>

    }
    if (isCardOpen == true && isWalletOpen == true) {
        content =
            <div className='flex justify-between'>
                <div className='flex justify-center items-center'>
                    <span className='text-[0.75rem] cursor-pointer'><IoRemove /></span>
                    <span className='text-[0.75rem]'>0</span>
                    <span className='text-[0.75rem] cursor-pointer'><IoAdd /></span>
                </div>
            </div>
            ;
        content2 =
            <div className='flex justify-between'>
                <Link to='/card'>
                    <button className='bg-[#000] text-[#fff] p-2 rounded duration-300 hover:bg-[#000000b6] mr-2' onClick={() => dispatch(closeCard())}>رفتن به سبد خرید</button>
                </Link>
                <button className='bg-[#000] text-[#fff] p-2 rounded duration-300 hover:bg-[#000000b6]'>صورتحساب</button>
            </div>

    }

    const changeFaToWa = () => {
        dispatch(closeWallet())
        dispatch(openFavorite())
    }
    const changeWaToFa = () => {
        dispatch(closeFavorite())
        dispatch(openWallet())

    }

    return (
        <div className={isCardOpen ? 'absolute top-0 w-[460px]  overflow-hidden h-full z-50 bg-[#fff] duration-300   ' : 'absolute top-0 w-0  h-full z-50 bg-[#fff] duration-300 mr-[-40rem]  '}>
            <div className='h-[90vh]  w-[420px] '>
                <div className='flex gap-[0.6rem] m-6 justify-between items-center'>
                    <div className='flex gap-[0.5rem]'>
                        <span className='margine-x hover:text-[#6c3a5d] ' onClick={() => changeFaToWa()} >
                            <span className='absolute bottom-[0.9rem]  rounded-full cursor-pointer bg-[var(--basecolor)]  text-[#fff]  w-[1rem] h-[1rem] text-[0.6vw] flex items-center justify-center right-[3.2rem] top-[1.2rem] '>0</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 max-md:size-6 max-sm:size-4 cursor-pointer"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </span>
                        <span className='margine-x hover:text-[#6c3a5d]' onClick={() => changeWaToFa()}>
                            <span className='absolute bottom-[0.9rem] left-[2.2rem] rounded-full cursor-pointer bg-[red] text-[#fff] w-[1rem] h-[1rem] text-[0.6vw] flex items-center justify-center right-[1rem] top-[1.2rem]'>0</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 max-md:size-6 max-sm:size-4 cursor-pointer"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </span>
                        <span>price</span>
                    </div>
                    <div>
                        < RxCross1 className='bg-[#8080802a] p-[7px] text-[2rem] rounded-full duration-100 hover:-rotate-90 cursor-pointer'
                            onClick={() => { dispatch(closeCard()) }}
                        />
                    </div>
                </div>
                <div className='w-[98%] h-[0.01rem] bg-[#80808072] m-auto'></div>
                <div className='flex justify-between  p-3'>
                    <div className=' flex '>
                        <div className='flex items-center'>
                            <img src='https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/glass-name-1-450x450.webp' alt=""
                                className='w-[5rem] h-[5rem] '
                            />
                        </div>
                        <div className='flex flex-col p-5'>
                            <div>
                                <h2>عینک</h2>
                            </div>
                            <div className='flex'>
                                <span >222</span><CgMathPlus className='rotate-45 mt-1' /> <span>3</span>
                            </div>
                            {content}
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <TbTrash className='text-[1.2rem] cursor-pointer hover:text-[#626161]' />
                    </div>
                </div>
                {content2}
            </div>

        </div>
    )
}
