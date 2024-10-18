import React from 'react'
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

export default function BottomMenu() {
    return (
        <div className='bg-[red] grid grid-cols-5 items-center justify-content'>
            <div className='flex'>
                <MdOutlineArrowCircleLeft />
                <span>صفحه اصلی</span>
            </div>
            <div>
                <CiShop />
                <span>فروشگاه</span>
            </div>
            <div>
                <CiShoppingCart />
                <span>سبد خرید</span>
            </div>
            <div>
                <CiUser />
                <span>حساب کاربری</span>
            </div>
            <div>
                <CiSearch />
                <span>جست و جو</span>
            </div>
        </div>
    )
}
