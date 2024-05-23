"use client"
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import "../customer.css"
const Home2 = ()=>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentActive, setCurrentActive] = useState(0);
  
    useEffect(() => {
      let touchStartPos = 0;
      let touchEndPos = 0;
      let touchPosDiff = 0;
  
      const playSlide = (slide:any) => {
        const numSlides = testimContent.length;
  
        if (slide < 0) {
          slide = numSlides - 1;
        }
  
        if (slide >= numSlides) {
          slide = 0;
        }
  
        setCurrentSlide(slide);
        setCurrentActive(slide);
  
        for (let k = 0; k < numSlides; k++) {
          testimContent[k].classList.remove("active");
          testimContent[k].classList.remove("inactive");
          testimDots[k].classList.remove("active");
        }
  
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");
      };
  
      const handleLeftArrowClick = () => {
        playSlide(currentSlide - 1);
      };
  
      const handleRightArrowClick = () => {
        playSlide(currentSlide + 1);
      };
  
      const handleDotClick = (index:any) => {
        playSlide(index);
      };
  
      const handleKeyUp = (e:any) => {
        switch (e.keyCode) {
          case 37:
            handleLeftArrowClick();
            break;
          case 39:
            handleRightArrowClick();
            break;
          default:
            break;
        }
      };
  
      const handleTouchStart = (e:any) => {
        touchStartPos = e.changedTouches[0].clientX;
      };
  
      const handleTouchEnd = (e:any) => {
        touchEndPos = e.changedTouches[0].clientX;
  
        touchPosDiff = touchStartPos - touchEndPos;
  
        if (touchPosDiff > 0 ) {
          handleLeftArrowClick();
        } else if (touchPosDiff < 0 ) {
          handleRightArrowClick();
        } else {
          return;
        }
      };
  
      let testimContent: any = null;
      let testimDots: any = null;
      
      const testimContentElement = document.getElementById("testim-content");
      const testimDotsElement = document.getElementById("testim-dots");
      
      if (testimContentElement) {
        testimContent = Array.from(testimContentElement.children);
      }
      
      if (testimDotsElement) {
        testimDots = Array.from(testimDotsElement.children);
      }
      const testimLeftArrow:any = document.getElementById("left-arrow");
      const testimRightArrow:any = document.getElementById("right-arrow");
  
      testimLeftArrow.addEventListener("click", handleLeftArrowClick);
      testimRightArrow.addEventListener("click", handleRightArrowClick);
  
      for (let l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", () => handleDotClick(l));
      }
  
      document.addEventListener("keyup", handleKeyUp);
      const testimElement = document.getElementById("testim");

      if (testimElement) {
        testimElement.addEventListener("touchstart", handleTouchStart);
        testimElement.addEventListener("touchend", handleTouchEnd);
      }
  
      playSlide(currentSlide);
  
      return () => {
        const testimLeftArrowElement = document.getElementById("testim-left-arrow");
        const testimRightArrowElement = document.getElementById("testim-right-arrow");
        const testimElement = document.getElementById("testim");
      
        if (testimLeftArrowElement) {
          testimLeftArrowElement.removeEventListener("click", handleLeftArrowClick);
        }
      
        if (testimRightArrowElement) {
          testimRightArrowElement.removeEventListener("click", handleRightArrowClick);
        }
      
        document.removeEventListener("keyup", handleKeyUp);
      
        if (testimElement) {
          testimElement.removeEventListener("touchstart", handleTouchStart);
          testimElement.removeEventListener("touchend", handleTouchEnd);
        }
      };
    }, );

    return(
        <>
        <div className='container-fluid w-full'>
        <section className="bg-white testim w-full" id="testim">
          <div className="wrap">
            <span className="arrow left" id="left-arrow">
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>
            <span className="arrow right" id="right-arrow">
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </span>
            <ul id="testim-dots" className="dots bottom-2.5">
              <li className="dot active"></li>
              <li className="dot"></li>
              <li className="dot"></li>
              
            </ul>
            <div id="testim-content" className="cont">
              
            
              <div>
                <div className="img relative bg-[url('/3.jpg')] bg-cover w-full lg:h-[500px] md:h-[400px] h-[200px]">
                  <div className="absolute h-full w-full bg-slate-800/90 bottom-0">
                    <div className="flex justify-center absolute z-1 md:top-1/2 top-1/3 w-full">
                      <div className="md:w-2/3 w-5/6">
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odit obcaecati quos nihil voluptates nesciunt quam, </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              
              </div>
              <div>
              <div className="img relative bg-[url('/5.jpg')] bg-cover w-full lg:h-[500px] md:h-[400px] h-[200px]">
                  <div className="absolute h-full w-full bg-slate-800/90 bottom-0">
                    <div className="flex justify-center absolute z-1 md:top-1/2 top-1/3 w-full">
                      <div className="md:w-2/3 w-5/6">
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odit obcaecati quos nihil voluptates nesciunt quam, </p>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
              <div>
              <div className="img relative bg-[url('/7.jpg')] bg-cover w-full lg:h-[500px] md:h-[400px] h-[200px]">
                  <div className="absolute h-full w-full bg-slate-800/90 bottom-0">
                    <div className="flex justify-center absolute z-1 md:top-1/2 top-1/3 w-full">
                      <div className="md:w-2/3 w-5/6">
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odit obcaecati quos nihil voluptates nesciunt quam, </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        </div>
        </>
    )


}


export default Home2