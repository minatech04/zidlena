'use client'
import React,{useEffect, useState,useRef} from 'react';
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faChevronDown,faChevronUp,faCircleCheck,faCircleXmark,faStar } from '@fortawesome/free-solid-svg-icons';
import lottie from 'lottie-web';
import animationData from '../img/Animation6.json';
/* import Pic1 from '/pic1.jpg'; */
import Image from 'next/image';
import Head from 'next/head';

const HomePage = ()=>{
    const router = useRouter()
    const collapse = () => {
        document.querySelector('#menu')?.classList.toggle('hidden');
        document.querySelector('#menu2')?.classList.toggle('hidden');
      };
    const animationContainer = useRef(null);
    
    useEffect(() => {
      if (animationContainer.current) {
        const anim = lottie.loadAnimation({
          container: animationContainer.current!,
          animationData: animationData,
          renderer: 'svg',
          loop: true,
          autoplay: true,
        });
    
        return () => {
          anim.destroy(); // Cleanup on unmount
        };
      }
    }, []);

    return(
        <header className="lg:h-screen md:bg-white text-teal-700 mb-10">
        <nav className="md:border-2 md:border-b-[#80959D] flex md:flex-row flex-col md:justify-around py-5 pl-3 lg:pl-0">
          <div className="flex flex-row justify-between mb-5 md:mb-0 pr-3">
            <div className="grid content-center">
              <div>ZIDLENA</div>
            </div>
            <div className="col-start-12 grid content-center">
              <button className="md:hidden" onClick={collapse}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
          <div id="menu" className="hidden md:grid content-center">
            <ul className="md:flex md:flex-row flex-col gap-7">
              <li className="mb-1 font-bold text-sm">
                <a>Home</a>
              </li>
              <li className="mb-1 font-bold text-sm">
                <a>About</a>
              </li>
              <li className="mb-1 font-bold text-sm">
                <a>Products</a>
              </li>
              <li className="mb-1 font-bold text-sm">
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex md:flex-row gap-2 mt-3 md:mt-0" id="menu2">
            <div className="">
              <span className="">Amharic</span> 
            </div>
            <div className="cursor-pointer">  
                <input type="checkbox" className="toggle toggle-secondary" />
            </div>
          </div>
        </nav>
        <div className="container mx-auto grid content-center h-full">
          <div className="md:grid md:grid-cols-2 md:content-center flex justify-center md:h-[400px] h-[250px]">
            <div className="md:grid content-center hidden">
              <div /* style={lottieBackground}*/ className='h-96'  ref={animationContainer}></div>
            </div>
            <div className="md:grid content-center w-4/5">
              <h1 className="font-bold lg:text-[32px] text-[26px] text-center animate-charcter">Welcome To Social Pilot</h1>
              <p className="lg:text-[20px] text-[18px] text-center">
                Harness the power of social media and Effortlessly Manage Multiple Platforms with Ease. Get ahead in the social media game!!!!
              </p>
              <button className="bg-[#012B3A] w-[200px] text-white rounded-lg py-2 mt-2 ml-5 text-center justify-center align-middle">GET IN TOUCH</button>
            </div>
          </div>
        </div>
      </header>


    )




}


export default HomePage