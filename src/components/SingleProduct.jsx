import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { FaHeart, FaPlus, FaStar } from 'react-icons/fa6'
// import { selectAllProducts } from '../Redux/feature/ProductSlice'
import ReactImageMagnify from 'react-image-magnify'
import {
    EmailIcon,
    EmailShareButton,
    FacebookShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestIcon,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

import { CiDeliveryTruck, CiHeart } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { selectAllProducts } from '../Redux/feature/ProductSlice'
import { IoAdd, IoRemove } from 'react-icons/io5'
import { addItem, selectAllCartItems, selectTotalAmount, selectTotalQuantity } from '../Redux/feature/cartSlice'
import Suggest from './Suggest'
import { selectUserID } from '../Redux/feature/authSlice'


export default function SingleProduct() {


    const products = useSelector(selectAllProducts)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [mouseMove, setMouseMove] = useState(false)
    const dispatch = useDispatch()

    const params = useParams()
    const Id = parseInt(params.id)
    const mainProduct = products?.filter((item) => item.id == Id)
    const userId = useSelector(selectUserID)
    

    const userCartItem = useSelector(selectAllCartItems)
    const userTotalQuantity = useSelector(selectTotalQuantity)
    const userTotalAmount = useSelector(selectTotalAmount)
    const[selectedColor,setSelectedColor]=useState()
    const[selectedSize,setSelectedSize]=useState()



    const handleMouseHover = (e) => {
        setX(e.clientX - e.target.offsetLeft)
        setY(e.clientY - e.target.offsetTop)
        setMouseMove(true)


    }

    return (
        <div>
            <Navbar />
            {
                mainProduct.map((each) => (

                    <>
                        <article className='grid grid-cols-2 gap-[2rem] p-[2rem] max-lg:grid-cols-1	'>

                            <div className='bg-[#80808054] flex justify-center overflow-hidden'
                                onMouseMove={handleMouseHover}
                                onMouseLeave={() => setMouseMove(false)}
                            >


                                <img src={each.img} alt=""
                                    className=' h-[100%] w-[100%] object-cover  hover:overflow-hidden '
                                    style={{

                                        transformOrigin: mouseMove ? `${x}px ${y}px` : 'center',
                                        transform: mouseMove ? "scale(3)" : 'scale(1)',
                                    }}

                                />
                            </div>

                            <div className=' gap-[1.2rem] flex flex-col mt-[2rem]'>
                                <span className='text-[2.5vw]'>{each.name}</span>

                                <div className='flex items-center'>
                                    <FaStar className='text-[gold]' />
                                    <span>{each.rate}</span> </div>
                                <span>{each.price.toLocaleString()} تومان</span>

                                {/* <p className='text-[0.9rem] text-[gray]'>{each.description}</p> */}
                                <p className=' text-[0.9rem]'>{each.additional}</p>
                                <div className='flex flex-row gap-[0.5rem]'>
                                    <p className='text-[0.9rem]'>رنگ ها:</p>
                                    {
                                        each.colors.map(e => (
                                            <span className='cursor-pointer rounded-full w-[20px] h-[20px] border-2 border-solid border-[#000]'
                                                style={{ backgroundColor: `${e}` }}
                                                onClick={()=>setSelectedColor(e)
                                                }
                                            ></span>
                                        ))
                                    }
                                </div>
                                <div className='flex flex-row gap-[0.5rem]'>
                                    <p className='text-[0.9rem]'>سایز ها:</p>
                                    {
                                        each.size.map(e => (
                                            <span className='cursor-pointer rounded-full text-[0.6rem] flex items-center justify-center p-[0.6rem] w-[20px] h-[20px] border-2 border-solid border-[#a5528c]'
                                                onClick={()=>setSelectedSize(e)
                                                }
                                            >{e}</span>
                                        ))
                                    }
                                </div>
                                <div className='flex items-center gap-[1rem] text-[0.75rem]'>
                                    <span className='text-[0.75rem] cursor-pointer'><IoRemove /></span>
                                    <span className='text-[0.75rem]'>0</span>
                                    <span className='text-[0.75rem] cursor-pointer'><IoAdd /></span>
                                    <button
                                        className='bg-[#6c3a5d] px-[1rem] py-[0.5rem] text-[#ffff] text-[0.8rem] rounded duration-100 hover:bg-[#6c3a5da8]'
                                        onClick={() => dispatch(addItem({ each ,selectedColor,selectedSize,userId}))
                                        }
                                    >اضافه به سبد خرید</button>

                                    <span className=' w-[2rem] h-[2rem] text-[1.5rem] bg-[#d3d3d373] rounded cursor-pointer'><CiHeart className='flex m-auto leading-2 mt-[3px] hover:text-[red]' /></span>
                                </div>
                                <p className=''> دسته بندی: {each.category.map(e => (
                                    <span className='bg-[#6c3a5d] text-[#fff] mx-1 px-1 bg-[#6c3a5da8]'>{e}</span>
                                ))}
                                </p>

                                <div className='flex flex-col gap-[0.5rem] text-[0.9rem] font-bold'>
                                    <div className='cursor-pointer'><CiDeliveryTruck className='text-[1.5rem] inline leading-2 cursor-pointer ' />   <span className='duration-100 mr-[0.5rem] hover:text-[gray] '>ارسال و برگشت کالا</span></div>
                                    <div className='cursor-pointer'>  <FaRegQuestionCircle className='text-[1.4rem] inline leading-2 cursor-pointer' />   <span className='duration-100 mr-[0.5rem] hover:text-[gray] '>راهنمای سایز کالا</span></div>
                                    <div className='cursor-pointer'>  <SlCalender className='text-[1.4rem] inline leading-2 cursor-pointer' />   <span className='duration-100 mr-[0.5rem] hover:text-[gray] '>تخمین زمان ارسال</span></div>
                                </div>

                                <div className='text-[1rem] flex gap-[0.5rem]'>
                                    <span>اشتراک گذاری در</span>
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


                            </div >
                        </article>

                        <div className='flex justify-center items-center relative mt-[2rem] mb-[3rem]'>

                            <div className='h-[0.4rem] w-[90%] bg-[gray] absolute '></div>
                            <div className='h-[0.4rem] w-[20%] bg-[#6c3a5d] absolute '></div>

                        </div>


                        <div className='flex justify-center items-center font-bold '> <p className='mt-[2rem] mb-[2rem] '>پیشنهاد هایی فقط برای تو</p></div>
                        <div className='flex gap-[1rem] justify-center mb-[3rem] mx-[1rem]'>
                            <Suggest productId={each.id} category={each.category} />
                        </div>
                    </>


                ))
            }

        </div >
    )
}
