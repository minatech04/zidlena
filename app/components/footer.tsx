'use client'
import React,{useEffect, useState,useRef} from 'react';
import '../footer.css'


export default function Footer() {
  return (
    <div className='container-fluid'>
      <div className="main w-full">
        <div className="footer w-full">
          <div className="bubbles">
          {Array.from({ length: 128 }).map((_, i) => (
  <div
    key={i}
    className="bubble"
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
          <div className="content flex justify-center my-12 w-full">
            <div className='flex flex-row justify-around md:w-4/5 w-96'>
              <div className='flex flex-col gap-1'>
                <b>Eldew</b>
                <a href="#">Secuce</a>
                <a href="#">Drupand</a>
                <a href="#">Oceash</a>
                <a href="#">Ugefe</a>
                <a href="#">Babed</a>
              </div>
              <div className='flex flex-col gap-1'>
                <b>Chashakib</b>
                <a href="#">Chogauw</a>
                <a href="#">Phachuled</a>
                <a href="#">Tiebeft</a>
                <a href="#">Ocid</a>
                <a href="#">Izom</a>
                <a href="#">Ort</a>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>  
                  <b>Athod</b>
                  <a href="#">Pamuz</a>
                  <a href="#">Vapert</a>
                  <a href="#">Neesk</a>
                  <a href="#">Omemanen</a>
                </div>
             
                <div className='flex justify-center'>
                  <a
                    className="image"
                    href="https://codepen.io/z-"
                    target="_blank"
                    style={{
                      backgroundImage:
                        'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")',
                    }}
                  />
                  <p>©2019 Not Really</p>
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
