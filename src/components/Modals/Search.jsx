import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { closeSearch, toggleMenu, closeMenu } from '../../Redux/feature/modalSlice';
import { RxCross1 } from "react-icons/rx";
import { FaSearch } from 'react-icons/fa';
import { searchByText, searchByCategory } from '../../Redux/feature/ProductSlice';

export default function () {
    const { isSearchOpen, isShowMenu } = useSelector((store) => store.modal)
    const [textSearch, setTextSearch] = useState('')
    
    const dispatch = useDispatch()
    const textSearchFunc = () => {
        dispatch(searchByText(textSearch))
    }

    const includeNameFunc = (input) => {
        if (input) {
            dispatch(searchByText(input))
        }
        dispatch(closeMenu())
    }

    const includeCategoryFunc = (input) => {
        if (input) {
            dispatch(searchByCategory(input))
        }
    }
    return (
        <div className={isSearchOpen ? 'search-style opacity-1 bg-[#fff] flex flex-col mt-[1rem] absolute justify-center items-center z-[999]  w-full h-[35%] text-[1vw]  duration-200' :
            'flex flex-col  absolute justify-center items-center bg-[#fff] w-full h-[35%] text-[1vw] z-50 duration-200 -translate-y-full'}
        >
            <div className='cursor-pointer' >
                < RxCross1 className='bg-[#8080802a] p-[7px] text-[2rem] rounded-full duration-100 hover:-rotate-90' onClick={() => { dispatch(closeSearch()) }} />
            </div>
            <div className=' flex justify-center items-center gap-[1rem]'>
                <input className='outline-none px-[1rem] border-none w-[15vw] h-[6vw]' type="text" name="" id="" placeholder='جست و جو کنید'
                    onChange={(e) => setTextSearch(e.target.value)}
                />
                <FaSearch className='text-[#8080802a] text-[1vw]  cursor-pointer center m-auto' onClick={textSearchFunc} />
                <div className='flex flex-col w-[10rem]'>
                    <button className="flex text-[0.8rem] text-[#808080af]" type="button" onClick={() => { dispatch(toggleMenu()) }}>انتخاب دسته بندی
                        <svg className={isShowMenu ? "duration-200  rotate-180 w-2.5 h-2.5 ms-3 mt-1 text-[#8080807e]" : "w-2.5 h-2.5 ms-3 mt-1 text-[#8080807e]"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div className={isShowMenu ? 'scale-100 opacity-1 text-[2vw] block bg-[#fff] shadow-md absolute mt-5 p-2 w-[8rem]' : 'scale-75 hidden opacity-0 bg-[#fff] shadow-md absolute mt-5 p-2 w-[8rem]'}>
                        <ul class=" text-[0.7rem] "  >
                            <li className='hover:bg-[#a5528c] hover:text-[#fff] cursor-pointer p-2 m-auto duration-100'
                            >
                                <a href="#" className="" onClick={(e) => includeNameFunc(e.target.innerText)}  >همه</a>
                            </li>
                            <li className='hover:bg-[#a5528c] hover:text-[#fff] cursor-pointer p-2 m-auto duration-100'
                            >
                                <a href="#" className="" onClick={(e) => includeNameFunc(e.target.innerText)}  >تیشرت</a>
                            </li>
                            <li className='hover:bg-[#a5528c] hover:text-[#fff] cursor-pointer p-2 m-auto'
                            >
                                <a href="#" className="" onClick={(e) => includeNameFunc(e.target.innerText)}  >شلوار</a>
                            </li>
                            <li className='hover:bg-[#a5528c] hover:text-[#fff] cursor-pointer p-2 m-auto'
                            >
                                <a href="#" className="" onClick={(e) => includeNameFunc(e.target.innerText)}  >کلاه</a>
                            </li>
                        </ul>

                    </div>
                </div>
                <button onClick={(e) => includeNameFunc('همه')}>حذف فیلترها</button>
            </div>
            <div className='h-[0.1rem] w-[40%] bg-[#80808025] '></div>
            <div className='flex m-auto text-[1.2vw]  gap-[0.5rem]'>
                <div className=''><h1>جست و جوی سریع</h1></div>
                <div className='bg-[#8080802a] flex text-[1vw] px-[0.5rem] rounded cursor-pointer' onClick={(e) => includeCategoryFunc('زنانه')}>
                    <FaChevronRight className='text-[gray] flex m-auto' />
                    <span className=' text-[gray] px-[0.5rem] py-[0.2rem]'  >زنانه</span>
                    <img src="../../public/images/shirt.png" alt="" className='h-[2vw]' />
                </div>

                <div className='bg-[#8080802a] flex text-[1vw] px-[0.5rem] rounded cursor-pointer' onClick={(e) => includeCategoryFunc('مردانه')}>
                    <FaChevronRight className='text-[gray] flex m-auto' />
                    <span className=' text-[gray] px-[0.5rem] py-[0.2rem]' >مردانه</span>
                    <img src="../../public/images/jackets.png" alt="" className='h-[2vw]' />
                </div>

                <div className='bg-[#8080802a] flex text-[1vw] px-[0.5rem] rounded cursor-pointer' onClick={(e) => includeCategoryFunc('اسپرت')}>
                    <FaChevronRight className='text-[gray] flex m-auto' />
                    <span className=' text-[gray] px-[0.5rem] py-[0.2rem]' >اسپرت</span>
                    <img src="../../public/images/hatg.png" alt="" className='h-[2vw]' />
                </div>
            </div>

        </div>
    )
}
