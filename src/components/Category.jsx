import React from 'react'
import { IoShirtOutline } from "react-icons/io5";
import { PiPantsDuotone } from "react-icons/pi";
import { GrCoatCheck } from "react-icons/gr";
import { TbJacket } from "react-icons/tb";
import { TbBrandRedhat } from "react-icons/tb";
import { PiFlagPennant } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { countEachProducts, searchByCategory, searchByText,selectAllProducts,selectFilteredProducts } from '../Redux/feature/ProductSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'


export default function Category() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allProducts=useSelector(selectAllProducts)
    const filterProductFunc=(each)=>{
        

        const filteredP=allProducts?.filter((prod) => prod?.name.includes(each))
        return filteredP.length
 
    }
    const eachFunc = (e) => {
        dispatch(searchByText(e))
        navigate('/shop')

    }
    
    return (

        <div className='grid mx-[2vw]'>
            {/*  mx-[6.5em] */}
            <div className='flex flex-row justify-between items-center font-bold '>
                <h1 className=' mb-[2rem] mt-[2rem] text-[1.5vw] '>محصولات پرفروش</h1>
                <Link to='/shop'>
                    <button className='inline text-[#6c3a5d] border-solid border-2 border-[--var(basecolor)] px-5 py-2 rounded  duration-100 text-[1vw]
                hover:bg-[#6c3a5d] hover:border-2 hover:border-solid hover:border-[#ffff] hover:text-[#ffff]
                '
                onClick={dispatch(searchByText('همه'))}
                >دیدن همه</button>
                </Link>
            </div>

            <div className='grid grid-cols-6 gap-[1rem] '>

                <div className='flex flex-col items-center justify-center border-solid border-2 border-[#f2e7ef]  text-[1vw]
                rounded p-[2rem]  gap-[0.5rem] cursor-pointer transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 hover:border-[#6c3a5d]
                '
                onClick={(e)=>eachFunc('تیشرت')}
                >
                    <IoShirtOutline className='text-[3vw] text-[#6c3a5d]  ' />

                    <span >تیشرت</span>
                    <p >{filterProductFunc('تیشرت')} محصول</p>
                </div>

                <div className=' flex flex-col items-center justify-center border-solid border-2 border-[#f2e7ef]  text-[1vw]
                rounded p-[2rem]  gap-[0.5rem] cursor-pointer transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 hover:border-[#6c3a5d]
                '
                onClick={(e)=>eachFunc('پیراهن')}>
                    <GrCoatCheck className='text-[3vw] text-[#6c3a5d]  ' />
                    <span>پیراهن</span>
                    <p>{filterProductFunc('پیراهن')} محصول</p>
                </div>

                <div className=' flex flex-col items-center justify-center border-solid border-2 border-[#f2e7ef]  text-[1vw]
                rounded p-[2rem]  gap-[0.5rem] cursor-pointer transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 hover:border-[#6c3a5d]
                '
                onClick={(e)=>eachFunc('کت')}>
                    <TbJacket className='text-[3vw] text-[#6c3a5d]  ' />
                    <span>کت</span>
                    <p>{filterProductFunc('کت')} محصول</p>
                </div>
                <div className=' flex flex-col items-center justify-center border-solid border-2 border-[#f2e7ef]  text-[1vw]
                rounded p-[2rem]  gap-[0.5rem] cursor-pointer transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 hover:border-[#6c3a5d]
                '
                onClick={(e)=>eachFunc('شلوار')}>
                    <PiPantsDuotone className='text-[3vw] text-[#6c3a5d]  ' />
                    <span>شلوار</span>
                    <p>{filterProductFunc('شلوار')} محصول</p>
                </div>

                <div className=' flex flex-col items-center justify-center border-solid border-2 border-[#f2e7ef]  text-[1vw]
                rounded p-[2rem]  gap-[0.5rem] cursor-pointer transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 hover:border-[#6c3a5d]
                '
                onClick={(e)=>eachFunc('روسری')}>
                    <PiFlagPennant className='text-[3vw] text-[#6c3a5d]  ' />
                    <span>شال و روسری</span>
                    <p>{filterProductFunc('روسری')} محصول</p>
                </div>

                <div className=' flex flex-col items-center justify-center border-solid border-2 border-[#f2e7ef]  text-[1vw]
                rounded p-[2rem]  gap-[0.5rem] cursor-pointer transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 hover:border-[#6c3a5d]
                '
                onClick={(e)=>eachFunc('کلاه')}
                >
                    <TbBrandRedhat className='text-[3vw] text-[#6c3a5d]' />
                    <span  >سایر</span>
                    <p>{filterProductFunc('کلاه')} محصول</p>
                </div>

            </div>

        </div>
    )
}
