import React, { useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa6';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { supabase } from '../supabase/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';

export default function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const navigate = useNavigate();
  const [seePassword, setSeepassword] = useState(false);

  const loginUser = async (e) => {
    setLoading(true)
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    if (data.session) {
      setLoading(false);
      toast.success('با موفقیت وارد شدید');
      navigate('/');
      location.reload()
    }
    else {
      setErrorMsg(true);
      setLoading(false)
      toast.error('نام کاربری یا رمزعبور اشتباه است');
    }
  };

  const seePasswordFunction = () => {
    setSeepassword(!seePassword);
  };

  return (
    <form
      className="flex mx-auto mt-[2rem] flex-col  w-[30rem] 
        gap-[2rem] border-2 border-solid duration-200 border-[#6c3a5d26] rounded-[10px] focus:outline-none focus:border-[var(--basecolor)]"
      onSubmit={loginUser}
    >
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
      <div className="flex justify-around mt-[2rem]">
        <div className="flex justify-center items-center cursor-pointer">
          <FaArrowCircleRight className="mx-[0.5rem] color-[var(--basecolor)]" />{' '}
          <h2>ورود</h2>
        </div>

        <Link to="/register">
          <div className="flex justify-center items-center cursor-pointer">
            {' '}
            <FaUser className="mx-[0.5rem] color-[var(--basecolor)]" />{' '}
            <h2>ثبت نام</h2>
          </div>
        </Link>
      </div>

      <div className="bg-[var(--basecolor)] h-[0.1rem] w-[80%] mx-auto "></div>

      <div className="flex flex-col gap-[2rem] w-[25rem]  mx-auto">
        <div className="flex flex-col gap-[1rem] ">
          <label htmlFor="">ایمیل</label>
          <input
            type="email"
            name=""
            id=""
            ref={emailRef}
            required
            className="leftToRight outline-none h-[3rem] border-2 border-solid border-[gray] p-2 rounded duration-100
                        focus:outline-none focus-border-3 focus:border-[var(--basecolor)] 
                      "
          />
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex justify-between">
            <label htmlFor="">پسورد</label>
            {seePassword == true ? (
              <FaEye
                className="leading-3 cursor-pointer"
                onClick={seePasswordFunction}
              />
            ) : (
              <FaEyeSlash
                className="leading-3 cursor-pointer"
                onClick={seePasswordFunction}
              />
            )}
          </div>
          <input
            type={seePassword ? 'text' : 'password'}
            name=""
            id=""
            className="leftToRight outline-none h-[3rem] border-2 border-solid border-[gray] p-2 rounded duration-100
                      focus:outline-none focus-border-3 focus:border-[var(--basecolor)] 
                    "
            ref={passwordRef}
          />
        </div>
        <div>
          <button className="bg-[var(--basecolor)] hover:bg-[#6c3a5da3] py-2 px-4 text-[#fff] rounded w-full duration-400">
            {loading ? <div class="m-auto animate-spin h-6 w-6 border-4 border-dashed rounded-full border-white"></div> : <p>ورود</p>}
          </button>
        </div>
        <div>
          <a href="" className="hover:underline hover:text-[var(--colorbase)]">
            پسورد خود را فراموش کرده اید؟
          </a>
        </div>

        <div className="flex">
          {/* bg-[#6c3a5da3] */}
          <button
            className="flex w-full justify-center items-center duration-200 bg-[red] hover:bg-[#ff00009e] text-[#fff] py-2 px-4 rounded "
            type="submit"
          >
            <BsGoogle className="mx-[0.2rem]" />
            ادامه دادن با گوگل
          </button>
        </div>
        <Link to="/">
          <button className="flex w-full justify-center items-center bg-[var(--basecolor)] hover:bg-[#6c3a5da3] duration-200  text-[#fff] py-2 px-4 rounded mb-[2rem]">
            <RiArrowGoBackFill className="mx-[0.2rem]" />
            برگشت به صفحه اصلی{' '}
          </button>
        </Link>
      </div>
    </form>
  );
}
