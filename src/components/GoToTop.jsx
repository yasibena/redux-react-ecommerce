import React from 'react'
import {  animateScroll as scroll } from 'react-scroll';



export default function GoToTop() {
    return (
        <>
            <MdKeyboardArrowUp className={`${showGoToTop ? 'opacity-1' : 'opacity-0 '} bg-[#3b3b3be9]  fixed rounded duration-300  text-[#fff]  text-[2.5rem] bottom-[3%] cursor-pointer
       right-[3%] hover:bg-[var(--basecolor)`} onClick={scrollToTop} />
        </>
    )
}
