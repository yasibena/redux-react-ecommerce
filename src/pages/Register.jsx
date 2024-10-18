import React, { useRef, useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa6';
import { FaArrowCircleRight } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

export default function Register() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const username = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successToast, setSuccessToast] = useState(null);
  const [seePassword, setSeepassword] = useState(false);
  const notify = () => {
    if (successToast == true) {
      toast.success('اکانت شما ساخته شد'),
      {
        toastId: 'success',
      };
    }

    if (successToast == false) {
      toast.error(error),
      {
        toastId: 'error',
      };
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const signUp = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      options: {
        data: {
          name: username.current.value,
        },
      },
    });

    if (!signUp.error) {
      setSuccessToast(true);
      setLoading(true);
      navigate('/');
      location.reload()
    }
    setLoading(false);
    if (signUp.error && signUp.data.user == null) {
      setLoading(false);
      setError('مشکلی در ساخت اکانت پیش آمد!');
      setSuccessToast(false);
    }
    emailRef.current.value = '';
    passwordRef.current.value = '';
    username.current.value = '';
  };

  const seePasswordFunction = () => {
    setSeepassword(!seePassword);
  };

  return (
    <>
      <form
        className="flex mx-auto mt-[1rem] flex-col  w-[30rem] gap-[1rem] border-2 border-solid border-[#6c3a5d26] rounded-[10px] duration-200"
        onSubmit={handleSignIn}
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
          <Link to="/login">
            <div className="flex justify-center items-center cursor-pointer">
              <FaArrowCircleRight className="mx-[0.5rem] color-[var(--basecolor)]" />{' '}
              <h2>ورود</h2>
            </div>
          </Link>
          <div className="flex justify-center items-center cursor-pointer">
            {' '}
            <FaUser className="mx-[0.5rem] color-[var(--basecolor)] " />{' '}
            <h2>ثبت نام</h2>
          </div>
        </div>

        <div className="bg-[var(--basecolor)] h-[0.1rem] w-[80%] mx-auto "></div>

        <div className="flex flex-col gap-[2rem] w-[25rem]  mx-auto">
          <div className="flex flex-col gap-[1rem] ">
            <label htmlFor="">نام</label>
            <input
              type="text"
              name=""
              id=""
              ref={username}
              required
              className="leftToRight outline-none h-[3rem] border-2 border-solid border-[gray] p-2 rounded duration-100
                      focus:outline-none focus-border-3 focus:border-[var(--basecolor)] 
                    "
            />
          </div>
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
          <div className="flex flex-col  gap-[1rem]">
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
              ref={passwordRef}
              required
              className="leftToRight outline-none h-[3rem] border-2 border-solid border-[gray] p-2 rounded duration-100
                      focus:outline-none focus-border-3 focus:border-[var(--basecolor)] 
                    "
            />
          </div>
          <div>
            <button
              className="bg-[var(--basecolor)] hover:bg-[#6c3a5da3] py-2 px-4 text-[#fff] rounded w-full duration-200"
              onClick={notify}
            >
              {loading ? <div class="m-auto animate-spin h-6 w-6 border-4 border-dashed rounded-full border-white"></div> : <p> ثبت نام</p>}
            </button>
          </div>

          <div className="flex">
            {/* bg-[#6c3a5da3] */}
            <button className="flex w-full justify-center items-center bg-[red] duration-200 hover:bg-[#ff00009e] text-[#fff] py-2 px-4 rounded ">
              <BsGoogle className="mx-[0.2rem]" />
              ادامه دادن با گوگل
            </button>
          </div>
          <Link to='/'>
            <button className="flex w-full justify-center items-center bg-[var(--basecolor)] hover:bg-[#6c3a5da3] duration-200  text-[#fff] py-2 px-4 rounded mb-[2rem]">
              <RiArrowGoBackFill className="mx-[0.2rem]" />
              برگشت به صفحه اصلی{' '}
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
