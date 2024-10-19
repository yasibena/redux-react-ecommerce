import React, { useEffect } from 'react'
import EachFeatuerdItem from './EachFeatuerdItem'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllProducts } from '../Redux/feature/ProductSlice'
import { useGetItemsQuery } from '../Redux/feature/apiSlice'

export default function FeaturedItems() {

  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)

  const feturedProducts = products?.filter((e) => e?.featured == true)
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
