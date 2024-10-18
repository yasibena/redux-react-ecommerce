import React from 'react'
import { selectAllProducts } from '../Redux/feature/ProductSlice'
import { useSelector } from 'react-redux'
import { CiHeart } from 'react-icons/ci'
import { AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'


export default function Suggest({ productId, category }) {

  
    
    const selectedCategory=["زنانه","مردانه","بچگانه","اسپرت"]

    const products = useSelector(selectAllProducts)
    
    // const suggestedProducts = products.filter(e => (e.category == category || e.category == 'اسپرت') && e.id !== productId)
     const suggestedProducts =products.filter((pro) => {
        return category.every((ca) =>
          pro.category.includes(ca)  && pro.id!==productId
        );
      });

      
      
    const navigate = useNavigate();
    const navigateTo = (Id) => {
        // to={`/shop/${prod.id}`}

        // <Navigate to={`/shop/${Id}`}/>

        navigate(`/shop/${Id}`)
        window.scrollTo(0, -800);


    }

    return (
        <>
            {
                suggestedProducts?.map(e => (
                    // <Navigate to={`/shop/${e.id}`}>
                    <div className='flex flex-col flex-wrap gap-[1rem] cursor-pointer ease-in duration-300 mx-[1rem]' >
                        <img src={e.img} alt="" className=' bg-[#80808047] object-cover h-[35vh] w-[25vw] hover:bg-[red] duration-100 hover:opacity-95 hover:scale-110'
                            onClick={() => navigateTo(e.id)}
                        />
                        <span className='absolute bg-[#ffff] rounded-full  p-[0.2rem] hover:text-[#ffff] hover:bg-[#000] m-[0.5rem] cursor-pointer'><CiHeart /></span>
                        <span className='absolute mt-[2rem] bg-[#ffff] rounded-full   p-[0.2rem] hover:text-[#ffff] hover:bg-[#000] m-[0.5rem] cursor-pointer'><AiOutlineEye /></span>
                        <span>{e.name}</span>
                        <span>{e.price}</span>
                        <span className='flex'><FaStar className='text-[gold]' />{e.rate}</span>
                    </div>
                    //  </Navigate>
                ))
            }
        </>
    )
}
