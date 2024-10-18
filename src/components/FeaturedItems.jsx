import React, { useEffect } from 'react'
import EachFeatuerdItem from './EachFeatuerdItem'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllProducts } from '../Redux/feature/ProductSlice'
import { useGetItemsQuery } from '../Redux/feature/apiSlice'
// import { useGetProductsQuery,setProducts } from '../Redux/feature/ProductSlice'

export default function FeaturedItems() {


  
  // const {data:AllProductsData}=useGetProductsQuery()
  // console.log(AllProductsData);
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)

  // console.log(AllProductsData,'products');



  // const products=useSelector(selectAllProducts)
  // const products=useSelector(selectAllProducts)

  const feturedProducts = products?.filter((e) => e?.featured == true)


  // const obj = [
  //     { id: 1, name: 'تیشرت سفید', img: '../../public/images/shirt.png', price: '200,000 هزار تومان',favorite:true },
  //     { id: 2, name: 'شلوار کرم', img: '../../public/images/pants.png', price: '200,000 هزار تومان' ,favorite:true},
  //     { id: 3, name: 'پیراهن آبی', img: '../../public/images/blouses.jpg', price: '200,000 هزار تومان',favorite:true },
  //     { id: 4, name: 'پیراهن آبی', img: '../../public/images/jackets.png', price: '200,000 هزار تومان',favorite:true },
  //     { id: 5, name: 'کلاه مشکی', img: '../../public/images/hatg.png', price: '200,000 هزار تومان' },
  //     { id: 6, name: 'روسری', img: '../../public/images/scarf.png', price: '200,000 هزار تومان' },

  // ]
  return (

    <div className='flex flex-col justify-center items-center'>
      <div className='mb-[2rem] text-[1.7vw] '><span>محصولات ویژه</span></div>

      <div className='grid grid-cols-5  mx-[1rem] gap-[1rem]'>
        {
          feturedProducts?.map((prod) => (

            <Link to={`/shop/${prod?.id}`} onClick={() => window.scrollTo(0, -800)}>

              <EachFeatuerdItem prod={prod} />
            </Link>



          ))
        }
      </div>
    </div>
  )
}
