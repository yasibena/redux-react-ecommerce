import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import NewArrival from '../components/NewArrival'
import FeaturedItems from '../components/FeaturedItems'
import ContactUs from '../components/ContactUs'
import { useDispatch, useSelector } from 'react-redux'
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll';
import { selectAllProducts, getProductsStatus } from '../Redux/feature/ProductSlice'
import { selectIsLoggedIn } from '../Redux/feature/authSlice'
import FeaturedItemsLoader from '../components/FeaturedItemsLoader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const { isSearchOpen, isFavoriteOpen, isWalletOpen, isCardOpen } = useSelector((store) => store.modal)
    const [scrollPosition, setScrollPosition] = useState()
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [showSideMenu, setShowSideMenu] = useState(false)
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)
    const productsStatus = useSelector(getProductsStatus)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleVisibleButton = () => {
        const position = window.pageYOffset;

        setScrollPosition(position)

        if (scrollPosition > 80) {
            return setShowGoToTop(true)
        }
        else if (scrollPosition < 80) {
            return setShowGoToTop(false)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton)
    }, [])

    return (
        <main className='duration-300'>
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
            <Navbar />
            <MdKeyboardArrowUp className={`${showGoToTop ? 'opacity-1' : 'opacity-0 '} bg-[#3b3b3be9]  fixed rounded duration-300  text-[#fff]  text-[2.5rem] bottom-[3%] cursor-pointer
       right-[3%] hover:bg-[var(--basecolor)`} onClick={scrollToTop} />
            <section className='relative'>
                <img src="../../public/images/slide1.png" alt="" className=' h-auto ' ></img>
                <div className=' text-on-img absolute calc-bottom'>
                    <h1 className=' p-2  text-[2.2vw] mr-[4rem] font-bold' >لباس و اکسسوری <br />
                        برای همه ی سلیقه ها</h1>
                    <p className=' p-2 mr-[4rem] text-[1.2vw] w-[50%]'> ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه . <br />
                        و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد <br />
                        .</p>
                    <Link to='/shop'>
                        <button className='absolute  text-[#ffff] font-bold px-[1.3rem] py-[1rem]  text-[1.2vw]
                     bg-[#6c3a5d] p-2 mr-[4rem] rounded 
                     hover:-translate-y-1 hover:scale-110 '>همین الان بخرید</button>
                    </Link>
                </div>
                <img />
            </section>
            <section className="category  ">
                <Category />
            </section>

            <section className='flex justify-center items-center relative mt-[2rem] mb-[3rem]'>
                <div className='h-[0.4rem] w-[90%] bg-[gray] absolute '></div>
                <div className='h-[0.4rem] w-[20%] bg-[#6c3a5d] absolute '></div>

            </section>

            <section>
                <NewArrival />
            </section>

            <section className=' flex mx-[1rem] my-[1rem]   '>
                {
                    productsStatus == 'loading' && (
                        <FeaturedItemsLoader />

                    )
                }
                {
                    productsStatus == 'succeed' && (
                        <FeaturedItems />
                    )
                }
            </section>

            <section>
                <ContactUs />
            </section>
        </main>
    )
}
