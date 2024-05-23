'use client'
import React,{useEffect, useState,useRef} from 'react';
import '../footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faTelegram,faYoutube,faFacebook} from '@fortawesome/free-brands-svg-icons'


const Footer = ({ home, about, products, contact }:any)=> {
  return (
    <div className='container-fluid'>
      <div className="main w-full h-screen min-h-screen">
        <div className="footer w-full min-h-48">
          <div className="bubbles">
          {Array.from({ length: 128 }).map((_, i) => (
  <div
    key={i}
    className="bubble h-32"
    style={{
      width: `${2 + Math.random() * 4}rem`,
      height: `${2 + Math.random() * 4}rem`,
      bottom: `${-6 - Math.random() * 4}rem`,
      left: `${-5 + Math.random() * 110}%`,
      animationDuration: `${2 + Math.random() * 2}s`,
      animationDelay: `${-1 * (2 + Math.random() * 2)}s`,
    }}
  />
))}
          </div>
          <div className="content flex flex-col mt-10 gap-10 w-full">
            <div className='flex justify-center lg:justify-normal w-full'>
              <div className='lg:flex lg:justify-between lg:w-full w-4/5 grid gap-5 lg:gap-0 lg:px-5'>
                <div className='flex flex-col gap-1 lg:w-1/3'>
                      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
                frameBorder="0"
                style={{ border: 0 }}
                
                aria-hidden="false"
                title="Humanity First Indonesia"
              />
                </div>
                <div className='flex flex-col gap-1 lg:w-1/3'>
                  <h2 className='font-bold text-lg'>Address</h2>
                  <a href="#">Addis Ababa City, Zip code 00251,</a>
                  <a href="#">Kolfe Keraniyo Sub City,</a>
                  <a href="#">Wereda 6, Around Bethel</a>
                  <a href="#">+251-912-028-737</a>
                  <a href="#">bluebesttrading@gmail.com</a>
                  <a href="#">https://www.bluebesttrading.com</a>
                </div>
                <div className='flex flex-col gap-5 lg:w-1/3'>
                  <div className='flex flex-col gap-1'>  
                    <h2 className='font-bold text-lg'>Links</h2>
                    <a href={home}>Home</a>
                    <a href={about}>About us</a>
                    <a href={products}>Products</a>
                    <a href={contact}>Contact</a>
                  </div>
              
                </div>
              </div>
            </div>
            
            <div className='bg-[#5c5130] w-full bottom-0 py-2 flex justify-center'>
              <div className='w-4/5 md:w-full flex lg:flex-row flex-col gap-3'>
                <div className='flex lg:justify-end justify-center lg:w-2/3'>
                  <div>
                  <p>©2024. | Designed By: <a className='text-red-600 text-[16px]' href='#'>MINA Tech</a> | All rights reserved.</p>
                  </div>
                  
                </div>
                <div className='flex lg:justify-end justify-center lg:w-1/3 lg:pr-5'>
                  <div>
                    <ul className='flex flex-row gap-4'>
                      <li><a href='#'><FontAwesomeIcon icon={faInstagram} size='xl'/></a></li>
                      <li><a href='#'><FontAwesomeIcon icon={faTelegram} size='xl'/></a></li>
                      <li><a href='#'><FontAwesomeIcon icon={faYoutube} size='xl'/></a></li>
                      <li><a href='#'><FontAwesomeIcon icon={faFacebook} size='xl'/></a></li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <svg className='w-1/2' style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Footer
