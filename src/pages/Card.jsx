import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaRegTrashCan } from "react-icons/fa6";
import { deleteItem } from '../Redux/feature/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserID } from '../Redux/feature/authSlice';
import { supabase } from '../supabase/client';
import { selectTotalAmountAll, selectTotalQuantityAll } from '../Redux/feature/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card() {

  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userId = useSelector(selectUserID)
  const totalAmount = useSelector(selectTotalAmountAll)
  const totalQuantity = useSelector(selectTotalQuantityAll)




  const getCardFromProfile = async (userId) => {
    setLoading(true)
    const { data, error, status } = await supabase
      .from('profiles')
      .select('card')
      .eq('id', userId);

    if (status == 200) {
      setLoading(false)
    }
    setProductsOfCard(data[0].card)
    setPriceOfProducts(data[0]?.price)

    return data.length > 0 ? data[0].card : null;
  }

  const [productsOfCard, setProductsOfCard] = useState()

  useEffect(() => {
    getCardFromProfile(userId)
  }, [productsOfCard])








  return (
    <main className=''>

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


      <section>
        <Navbar />
      </section>

      <section className=''>

        <div className=' bg-[#6c3a5d29] p-[1rem] my-[2rem]'>

          <div className='flex  justify-between items-center '>
            <div className=''>
              <span className='text-[2rem] '>
                سبدخرید
              </span>
            </div>
            <div className='flex'>
              <Link to='/'><span> صفحه اصلی </span></Link>
              <FaAngleLeft color='#6c3a5d' className='text-[1.5rem]' />
              <Link to='/card'><span>سبدخرید </span></Link>
            </div>
          </div>

        </div>
      </section>

      {
        loading ? (
          <div class="m-auto  flex justify-center mt-11 animate-spin h-16 w-16 border-4 border-dashed rounded-full border-(--var-base)"></div>

        ) : (
          <section className='grid grid-cols-3 mx-[5rem] max-lg:grid-cols-2 '>
            <div className=' col-span-2'>
              {
                productsOfCard?.length > 0 ? (

                  productsOfCard?.map(each => (
                    <>
                      <hr />
                      <div className=' flex justify-between items-center px-6 '>
                        <div className='flex justify-between my-[1rem] text-[0.8rem]'>
                          <hr />
                          <div className='flex mx-3'>
                            <img src={each.img} className='h-32 bg-[#8080802c]' alt="" />
                          </div>
                          <div className='flex mr-2  justify-center items-center '>

                            <h2 className='mx-2'>{each.name}</h2>
                            <h3 className='mx-2'>{each.price}*{each.quantity}تومان</h3>
                          </div>

                          <div className='flex mr-3 items-center  gap-[1rem]'>
                            <span className='cursor-pointer rounded-full w-[20px] h-[20px] border-2 border-solid border-[#000]'
                              style={{ backgroundColor: `${each.color}` }
                              }
                            ></span>
                          </div>
                          <div className='flex  mr-2  items-center  flex-row gap-[0.5rem]'>
                            <span className='cursor-pointer rounded-full text-[0.6rem] flex items-center justify-center p-[0.6rem] w-[20px] h-[20px] border-2 border-solid border-[#a5528c]'
                            >{each.size}</span>


                          </div>

                        </div>

                        <div>

                          {
                            each.totalPrice ? <p>{each.totalPrice} تومان</p> : <p>{each.price} تومان</p>
                          }

                        </div>

                        <div className='cursor-pointer'>
                          {/* total price */}
                          <FaRegTrashCan className='text-[#808080bf]' onClick={() => dispatch(deleteItem(each.id))} />
                        </div>
                      </div>
                      <hr />

                    </>
                  )

                  ))

                  :


                  (

                    <div className=' flex justify-between items-center px-6 '>
                      <div className='flex justify-between my-[1rem] text-[1.5rem]'>
                        <hr />

                        <div> سبد خرید شما خالی است!</div>


                      </div>
                      <button className='bg-[#000] text-[#fff] p-2 rounded duration-300 hover:bg-[#000000b6]' onClick={(e) => {
                        e.preventDefault();
                        navigate("/shop");
                      }}
                      >
                        <Link to="shop">رفتن به فروشگاه</Link></button>
                    </div>
                  )
              }


            </div>

            <div className='border-solid h-[16rem] rounded pb-[2rem] border-2 mr-[3rem] max-lg:my-[2rem] max-lg:pb-[1rem] '>
              <div className='p-6'>
                <h2 className='font-bold'>صورتحساب</h2>
              </div>
              <div className='flex justify-between py-2 px-6'>
                <div >
                  <p>کل قیمت:</p>
                </div>
                <div>
                  {
                    totalAmount && <p>{totalAmount} تومان</p>
                  }
                </div>
              </div>
              <div className='flex justify-between py-2 px-6'>
                <div >
                  <p> تعدادکل:</p>
                </div>
                {totalQuantity && <p>{totalQuantity} عدد</p>}
              </div>

              <div className='flex justify-center items-center rounded mt-[2rem] bg-[#000] p-3 mx-2 cursor-pointer duration-200 hover:bg-[#000000cf]'>
                <button className=' text-[#fff] '>پرداخت صورت حساب</button>
              </div>
            </div>
          </section>
        )
      }
    </main >
  )
}


