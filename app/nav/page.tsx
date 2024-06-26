'use client'
import React,{useEffect, useState,useRef,useContext,createContext} from 'react';
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faChevronDown,faChevronUp,faCircleCheck,faCircleXmark,faStar } from '@fortawesome/free-solid-svg-icons';
import lottie from 'lottie-web';






  const Nav = ({ home, about, products, contact }:any) => {
    const router = useRouter()
    const [menu,setMenu] = useState(false)
   

  

   
    const collapse = () => {
        document.querySelector('#menu')?.classList.toggle('hidden');
        document.querySelector('#menu2')?.classList.toggle('hidden');
      };
      React.useEffect(()=>{
        document.addEventListener('click', function (event:any) {
            if(event.target !== null){
          if (event.target.matches('a[href^="#"]')) {
            event.preventDefault(); // Prevent default link behavior
        
            // Get the target section ID from the href attribute
            const targetId = event.target.getAttribute('href').slice(1);
        
            // Use the target section ID to find the corresponding section element
            const targetSection = document.getElementById(targetId);
        
            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }
        }
        });
      })
    return(
      
        <nav className="md:border-2 md:border-b-[#075985] flex md:flex-row flex-col md:justify-around py-5 pl-3 lg:pl-0">
        <div className="flex flex-row justify-between mb-5 md:mb-0 pr-3">
          <div className="grid content-center">
            <div className='flex flex-row gap-1'><img src='/logo.png' alt='logo' className='h-[42px]'/><h1 className='my-0 py-0 text-black'>ZIDLENA <span className='block'>MEJLIS</span></h1><img src='/logo.png' alt='logo' className='h-[42px]'/></div>
          </div>
          <div className="col-start-12 grid content-center pr-3">
            <button className="md:hidden" onClick={collapse}>
              <FontAwesomeIcon icon={faBars} className='text-black' />
            </button>
          </div>
        </div>
        <div id="menu" className="hidden md:grid content-center mt-2 md:mt-0">
          <ul className="md:flex md:flex-row flex-col gap-7">
            <li className="mb-1 font-bold text-sm text-cyan-700">
              <a href={home}>Home</a>
            </li>
            <li className="mb-1 font-bold text-sm text-cyan-700">
              <a href={about}>About</a>
            </li>
            <li className="mb-1 font-bold text-sm text-cyan-700">
              <a href={products}>Products</a>
            </li>
            <li className="mb-1 font-bold text-sm text-cyan-700">
              <a href={contact}>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:flex-row gap-2 mt-3 md:mt-0" id="menu2">
          <div className="">
            <span className="text-cyan-700">አማርኛ</span> 
          </div>
          <div className="cursor-pointer grid content-center">  
              <input type="checkbox" className="toggle toggle-warning" />
          </div>
          <div className="">
            <span className="text-cyan-700">English</span> 
          </div>
        </div>
      </nav>
 

    )
}


export default Nav;