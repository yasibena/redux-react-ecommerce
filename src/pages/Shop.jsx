import React, { useEffect, useState, useLayoutEffect } from 'react'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import EachFeatuerdItem from '../components/EachFeatuerdItem';
import { FaAngleLeft } from "react-icons/fa";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { TfiLayoutColumn4Alt } from "react-icons/tfi";
import { BsGrid1X2Fill, BsSearch } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { RxCross1 } from 'react-icons/rx';
import { openSearch } from '../Redux/feature/modalSlice'
import { getProductsStatus, deleteAllFilter, selectFilteredProducts, filterAndSortCombine } from '../Redux/feature/ProductSlice'
import { MdKeyboardArrowUp } from "react-icons/md";
import DualRangeSlider from '../components/DualRangeSlider'
import ShopLoader from '../components/ShopLoader'


export default function Shop() {
  const dispatch = useDispatch()
  const filteredProducts = useSelector(selectFilteredProducts)
  const productsStatus = useSelector(getProductsStatus)
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [customGridCols, setCustomGridCols] = useState(5)
  const [activeDivSize, setActiveDivSize] = useState(null);
  const [activeCrossColor, setActiveCrossColor] = useState(null);
  const sizeValueArr = ['XLL', 'XL', 'M', 'L']
  const categoryValuesArr = ['مردانه', 'زنانه', 'بچگانه', 'اسپرت']
  const colorsValueArr = ['سفید', 'مشکی', 'آبی', 'صورتی']
  const [tempColor, setTempColor] = useState('')
  const [checkExist, setCheckExist] = useState('')
  const [value, setValue] = useState({ min: null, max: null })
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });


  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)
    if (scrollPosition > 50) {
      return setShowGoToTop(true)
    }
    else if (scrollPosition < 50) {
      return setShowGoToTop(false)
    }
  }

  const funcFakeLoading = () => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton)
    funcFakeLoading()
  }, [])

  const handleCrossColorClick = (divId) => {
    setActiveCrossColor(divId)
  }

  const filterAndSortCombineّFuncColor = (input) => {
    let temp = ''
    if (input == 'سفید') {
      temp = 'white'
    }
    if (input == 'مشکی') {
      temp = 'black'
    }
    if (input == 'صورتی') {
      temp = 'pink'
    }
    if (input == 'آبی') {
      temp = 'blue'
    }

    setTempColor(temp)
    dispatch(filterAndSortCombine({
      type: 'FILTER_BY_COLOR',
      filterByColor: temp,
      removeColor: false
    }))

  }

  const deleteColorFilter = (input) => {
    let temp = ''
    if (input == 'سفید') {
      temp = 'white'
    }
    if (input == 'مشکی') {

      temp = 'black'
    }
    if (input == 'صورتی') {
      temp = 'pink'
    }
    if (input == 'آبی') {
      temp = 'blue'
    }
    if (input == '') {
      temp = null
    }
    dispatch(filterAndSortCombine({
      type: 'FILTER_BY_COLOR',
      unfilterByColor: temp,
      removeColor: true
    }))
  }

  const filterAndSortCombineّFuncCategory = (input, event) => {
    if (event.target.checked == true) {
      dispatch(filterAndSortCombine({
        type: 'FILTER_BY_CATEGORY',
        filterByCategory: input,
        removeCategory: false
      }))

    }

    if (event.target.checked == false) {
      dispatch(filterAndSortCombine({
        type: 'FILTER_BY_CATEGORY',
        unfilterByCategory: input,
        removeCategory: true
      }))
    }

  }

  const filterAndSortCombineّFuncSize = (input) => {
    dispatch(filterAndSortCombine({
      type: 'FILTER_BY_SIZE',
      filterBySize: input,
      removeSize: false
    }))
  }

  const deleteSizeFilter = (input) => {
    dispatch(filterAndSortCombine({
      type: 'FILTER_BY_SIZE',
      unFilterBySize: input,
      removeSize: true
    }))
  }

  const handleExisingFunc = (event) => {
    const { value } = event.target
    setCheckExist(value)
    if (value == 'exist') {
      dispatch(filterAndSortCombine({
        type: 'FILTER_BY_EXIST',
        isExist: 'exist'
      }))
    }
    if (value == 'notExist') {
      dispatch(filterAndSortCombine({
        type: 'FILTER_BY_EXIST',
        isExist: 'notExist'
      }))
    }
  }

  const handleGetMinMax = (data) => {
    setValue(data)
  }

  const filterByPrice = () => {
    dispatch(filterAndSortCombine({
      type: 'FILTER_BY_PRICE',
      minRange: value.min,
      maxRange: value.max
    }))
  }

  const closeFilterBox = () => {
    setShowFilterMenu(!showFilterMenu)
    setShowOptions(false)
  }

  return (
    <main className=''>
      <MdKeyboardArrowUp className={`${showGoToTop ? 'opacity-1' : 'opacity-0 '} bg-[#3b3b3be9]  fixed rounded duration-300  text-[#fff]  text-[2.5rem] bottom-[3%] cursor-pointer
       right-[3%] hover:bg-[var(--basecolor)`} onClick={scrollToTop} />
      <section>
        <Navbar />
      </section>

      <section>
        <div className=' bg-[#6c3a5d29] p-[1rem] my-[2rem]'>
          <div className='flex  justify-between items-center '>
            <div className=''>
              <span className='text-[2rem] '>
                فروشگاه
              </span>
            </div>
            <div className='flex'>
              <Link to='/'><span> صفحه اصلی </span></Link>
              <FaAngleLeft color='#6c3a5d' className='text-[1.5rem]' />
              <Link to='/shop'><span>فروشگاه </span></Link>
            </div>
          </div>

        </div>
        <section className='flex justify-between filter m-[2rem]'>
          <div className='left flex gap-[1rem]'>
            {/* grid-cols-4 */}
            <TfiLayoutColumn3Alt className='cursor-pointer' onClick={() => setCustomGridCols(4)} />
            {/* grid-cols-3 */}
            <TfiLayoutColumn2Alt className='cursor-pointer' onClick={() => setCustomGridCols(3)} />
            {/* grid-cols-5 */}
            <TfiLayoutColumn4Alt className='cursor-pointer' onClick={() => setCustomGridCols(5)} />
            {/* grid-cols-1 */}
            <BsGrid1X2Fill className='cursor-pointer' onClick={() => setCustomGridCols(2)} />
            <BsSearch className='cursor-pointer' onClick={() => { dispatch(openSearch()) }} />
            <div>
              <button className="flex text-[0.8rem] text-[#808080af] duration-300" type="button" onClick={() => setShowOptions(!showOptions)}>مرتب سازی بر اساس
                <svg className={showOptions ? "duration-200 rotate-180 w-2.5 h-2.5 ms-3 mt-1 text-[#8080807e]" : "w-2.5 h-2.5 ms-3 mt-1 text-[#8080807e]"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {/* <p>مرتب سازی بر اساس</p> */}
              <div className={showOptions ? ' opacity-1 text-[0.8rem] bg-[#fff] shadow-md block absolute mt-5 p-2 w-[8rem] z-20' : 'text-[0.8rem] hidden opacity-0 bg-[#fff] shadow-md absolute mt-5 p-2 w-[8rem]'}>
                <ul className >
                  <li className='hover:bg-[#a5528c] hover:text-[#fff] cursor-pointer p-2 m-auto duration-100'
                    onClick={() => dispatch(filterAndSortCombine({ type: 'SORT_BY_DATE' }))}
                  >
                    <a href="#" className=""

                    >جدیدترین</a>
                  </li>
                  <li className='hover:bg-[#a5528c] hover:text-[#fff] cursor-pointer p-2 m-auto'
                    onClick={() => dispatch(filterAndSortCombine({ type: 'SORT_BY_MAX_PRICE' }))}
                  >
                    <a href="#" className=""
                    >گرانترین</a>
                  </li>
                  <li className='hover:bg-[#a5528c] hover:text-[#fff] cursor-pointer p-2 m-auto'
                    onClick={() => dispatch(filterAndSortCombine({ type: 'SORT_BY_MIN_PRICE' }))}
                  >
                    <a href="#" className=""
                    >ارزانترین</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='flex gap-[0.2rem] duration-300' onClick={closeFilterBox}>
              {
                showFilterMenu ? <RxCross1 className='bg-[#8080802a] rounded-full w-[25px] h-[25px] p-[3px] duration-300 text-[0.8rem] cursor-pointer hover:-scale-x-100' onClick={() => setShowFilterMenu(false)} /> : <CiFilter className='text-[1.5rem] cursor-pointer duration-300' onClick={() => setShowFilterMenu(true)} />
              }
              <p className='cursor-pointer'>فیلتر</p>
            </div>
          </div>
          <div className='flex justify-center items-center '>
            {showFilterMenu && <button className='bg-[var(--basecolor)] text-[#fff] duration-200 px-2 py-1 mx-[1rem] rounded hover:bg-[#6c3a5dbd]' onClick={() => dispatch(deleteAllFilter())}>حذف فیلترها</button>}
            <p><span>{filteredProducts?.length}</span>مورد</p>
          </div>
        </section>
        <section className={showFilterMenu ? `grid-cols-5 duration-300 grid opacity-1 h-[1%]   gap-[1rem] mx-3` : ' -translate-y-[20%] opacity-0  duration-300  h-0 gap-[1rem] grid grid-cols-5 mx-3'}>
          <div className='duration-300 overflow-hidden ' >
            <h2 className='mb-2'>فیلتر بر اساس قیمت </h2>
            <DualRangeSlider getMinAndMax={handleGetMinMax} />
            <div className='flex justify-between text-[0.9rem]'>
              <div>
                <button className='bg-[var(--basecolor)] text-[#fff] px-2 py-1 rounded hover:bg-[#6c3a5dbd]' onClick={filterByPrice}>فیلتر</button>
              </div>
            </div>
          </div>


          <div className='flex flex-col gap-[0.5rem]' >
            <h2>فیلتر بر اساس رنگ</h2>
            {
              colorsValueArr.map(each => (
                <div className='flex  items-center gap-[0.2rem] text-[0.8rem]'>
                  <span className={`text-center flex opacity-1 items-center justify-center bg-[#00000027] w-[1.2rem] h-[1.2rem] 
                  rounded-full cursor-pointer`} onClick={() => deleteColorFilter(each)}><span className='text-[2rem]'>-</span></span>
                  <span></span>
                  <span className={`${each == 'سفید' && 'bg-[white]'} ${each == 'مشکی' && 'bg-[black]'} ${each == 'صورتی' && 'bg-[pink]'} ${each == 'آبی' && 'bg-[#3591ee]'}   
                  border-solid border-[1px] border-[#0000002a] cursor-pointer rounded-full w-[20px] h-[20px] flex`}
                    key={each}
                    onClick={() => filterAndSortCombineّFuncColor(each)}
                  ></span>
                  <span>{each}</span>
                </div>
              ))
            }

          </div>
          <div className='flex flex-col gap-[0.5rem]' >
            <h2>فیلتر بر اساس دسته بندی</h2>
            {
              categoryValuesArr.map(each => (
                <div className='flex gap-[0.2rem] text-[0.8rem]' key={each}>
                  <input type="checkbox" name="" id="" className='accent-[var(--basecolor)]'
                    onChange={() => filterAndSortCombineّFuncCategory(each, event)}
                  />
                  <h3 >{each}</h3>
                </div>
              ))
            }
          </div>

          <div>
            <h2>فیلتر بر اساس موجودی</h2>
            <div className='flex gap-[0.5rem] text-[0.8rem]'>
              <input type="checkbox" name="" id="" className='accent-[var(--basecolor)]'
                value='exist'
                checked={checkExist == 'exist'}
                onChange={handleExisingFunc}
              />
              <h3>موجود</h3>
            </div>
            <div className='flex gap-[0.2rem] text-[0.8rem]'>
              <input type="checkbox" name="" id="" className='accent-[var(--basecolor)]'
                value='notExist'
                checked={checkExist == 'notExist'}
                onChange={handleExisingFunc}
              />
              <h3>ناموجود</h3>
            </div>
          </div>

          <div className='flex flex-col gap-[0.5rem]' >
            <h2>فیلتر بر اساس سایز</h2>
            {
              sizeValueArr.map((each) => (
                <div className='flex items-center gap-1'>
                  <span className={`text-center flex opacity-1 items-center justify-center bg-[#00000027] w-[1.2rem] h-[1.2rem] 
                  rounded-full cursor-pointer`} onClick={() => deleteSizeFilter(each)}><span className='text-[2rem]'>-</span></span>
                  <div className={`flex justify-center rounded-full w-[20px] h-[20px] border-2 items-center p-[10px] border-solid  text-[0.6rem] cursor-pointer ${activeDivSize === each ? 'border-[var(--basecolor)]' : 'border-[gray]'}`}
                    key={each}
                    onClick={() => filterAndSortCombineّFuncSize(each)}
                  >{each}
                  </div>
                </div>
              ))
            }
          </div>
        </section>
        {
          (productsStatus == 'loading' || loading == true) && (
            <section className='my-[2rem] mr-[2rem]'>
              <ShopLoader items={filteredProducts} columns={5} rectWidth={180} rectHeight={120} spacing={15} />
            </section>
          )
        }

        {
          productsStatus == 'succeed' && loading == false && (
            <section className={`grid grid-cols-${customGridCols}  max-xl:grid-cols-3   max-lg:grid-cols-2 max-md:grid-cols-1 gap-[1rem] mx-[2rem] my-[2rem] duration-200`}>
              {
                filteredProducts.map(prod => (
                  <Link to={`/shop/${prod?.id}`}>
                    <EachFeatuerdItem prod={prod} />
                  </Link >
                ))
              }
            </section>
          )
        }
      </section>
      <section>
        <ContactUs />
      </section>
    </main>
  )
}
