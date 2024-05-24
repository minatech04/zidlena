//import Image from "next/image";
'use client'
import dynamic from 'next/dynamic';
import React,{useEffect, useState,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faChevronDown,faChevronUp,faCircleCheck,faCircleXmark,faStar } from '@fortawesome/free-solid-svg-icons';
import lottie from 'lottie-web';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import "./customer.css"
import "./border.css"
import "./why.css";
import './footer.css'
import './color.css'
import {faInstagram,faTelegram,faYoutube,faFacebook} from '@fortawesome/free-brands-svg-icons'

import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { FormEvent } from 'react'
import { faLock,faUser } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent } from 'react';
import Head from 'next/head'

import About from "./about/page";
import Footer from "./components/footer";
import HomePage from "./home/page";
import Home2 from "./home2/page";
import Whyus from "./whyus/page";
import Products from "./products/page";
import Gallery from "./gallery/page";
import Contact from "./contactus/page";
import Nav from "./nav/page";

export default function Home() {
  const [language,setLanguage] = useState(true)
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

  //////////////////////////////////////////////////////////////////////

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

  //////////////////////////////////////////////////////////////////////////////////////////////
  const [buttonText, setButtonText] = useState("Read More..."); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState   
  const Readmore=()=>{
      const less ="Read Less...";
      const more ="Read More...";
       document.querySelector('#readmore')?.classList.toggle('hidden');
       
       if(buttonText===more){
         setButtonText(less);
       }
       else{
         setButtonText(more);
       }

      }

      /////////////////////////////////////////////////////////////////////////
      const [formData,setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
      
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message:''
      
      })
    
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));

        validateField(name,value)
   
      }
      const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLInputElement;
       
       validateField(name,value)
      }
      const validateField = (fieldName:any, value:any) => {
        let error = '';
     
        if (fieldName === 'name') {
            if (value.trim() === '') {
              error = 'Name is required';
            
            } else if (!/^[A-Za-z\s]+$/.test(value)) {
              error = 'Name can only contain alphabets and whitespace';
             
            }
          }
           if (fieldName === 'message') {
            if (value.trim() === '') {
              error = 'Message is required';
            } else if (!/^[A-Za-z\s0-9]+$/.test(value)) {
              error = 'Message can only contain alphabets, numbers, and whitespace';
            }
          }

          if (fieldName === 'email') {
            if (value.trim() === '') {
              error = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
              error = 'Email must be in a proper format';
            }
          }

          if (fieldName === 'phone') {
            if (value.trim() === '') {
              error = 'Phone is required';
            } else if (!/^\+\d+$/.test(value)) {
              error = 'Phone number must have correct format (+251..)';
            }
          }

         

         
    
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: error
        }));
      };
      const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const hasErrors = Object.values(errors).some((error) => error !== '');

      
        if (!hasErrors) {
            const formData = new FormData(event.currentTarget)
            const name = formData.get('name')
            const email = formData.get('email')
            const phone = formData.get('phone')
            const message = formData.get('message')
         
        //  console.log('Form submitted:', formData);

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name":name,
                "email":email,
                "phone":phone,
                "message":message
            
            }),
          })
       
          if (response.ok && response.status === 200) {
            const status = await response.json();
            console.log(status)
          
          //  router.push(``)
           // router.push('../signup')
           alert("message sent")
          } else {
            const message = await response.json();
           // setError(message.message)
            alert(message.message)
          }
        }
       
      }
 
  return (
    <>
     <Head>
        <title>zidlenaarabianmejlis</title>
        <meta name="description" content="Zidlena is a leading manufacturer of premium arabian mejlis in ethiopia" />
        <meta name="keywords" content="zidlenaarabianmejlis, zidlena, mejlis,arabian mejlis"> </meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "zidlen arabian mejlis",
                "url": "https://www.zidlenaarabianmejlis.com",
                
              }
            `,
          }}
        />
      </Head>
  

    <div className="bg-white">

    <section id="nav" className="fixed top-0 left-0 right-0 z-10">
      <nav className="md:border-2 md:border-b-[#075985] flex md:flex-row flex-col md:justify-around py-5 pl-3 lg:pl-0">
        <div className="flex flex-row justify-between mb-5 md:mb-0 pr-3">
          <div className="grid content-center">
            <div className='flex flex-row gap-1'><img src='/Logo.png' alt='zidlena arabian mejlis logo' className='h-[42px]'/><h1 className='my-0 py-0 text-black'>ZIDLENA <span className='block'>MEJLIS</span></h1><img src='/Logo.png' alt='zidlena arabian mejlis logo2' className='h-[42px]'/></div>
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
              <a href={"#home"}>
                {
                  language?"Home":"ቤት"
                }
              
                </a>
            </li>
            <li className="mb-1 font-bold text-sm text-cyan-700">
              <a href={"#about"}>  {
                  language?"About Us":"ስለ እኛ"
                }</a>
            </li>
            <li className="mb-1 font-bold text-sm text-cyan-700">
              <a href={"#products"}>
              {
                  language?"Products":"ምርቶች"
                }
                
              </a>
            </li>
            <li className="mb-1 font-bold text-sm text-cyan-700">
              <a href={"#contact"}>
              {
                  language?"Contact Us":"አግኙን"
                }

              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:flex-row gap-2 mt-3 md:mt-0" id="menu2">
          <div className="">
            <span className="text-cyan-700">English</span> 
          </div>
          <div className="cursor-pointer grid content-center">  
              <input type="checkbox" className="toggle toggle-primary" onChange={()=>setLanguage(!language)} />
          </div>
          <div className="">
            <span className="text-cyan-700">አማርኛ</span> 
          </div>
        </div>
      </nav>


      </section>

      <section id='home'>
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
                <div className="img relative bg-[url('/9.jpg')] bg-cover w-full lg:h-[500px] md:h-[400px] h-[200px]">
                  <div className="absolute h-full w-full bg-slate-800/90 bottom-0">
                    <div className="flex justify-center absolute z-1 md:top-1/2 top-1/3 w-full">
                      <div className="md:w-2/3 w-5/6">
                        <header>
                        <h1 className="text-center text-5xl mb-4 animate-charcter">Zidlena Arabian Mejlis</h1>

                        </header>
                 
                        <p className="text-center text-3xl text-cyan-600 mb-1">
                        {
                  language?" Crafting Timeless Elegance for Your Home":" ለቤትዎ ጊዜ የማይሽረው ውበትን መፍጠር"
                }
                        
                          </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
                
              
              </div>
              <div>
              <div className="img relative bg-[url('/13.jpg')] bg-cover w-full lg:h-[500px] md:h-[400px] h-[200px]">
                  <div className="absolute h-full w-full bg-slate-800/90 bottom-0">
                    <div className="flex justify-center absolute z-1 md:top-1/2 top-1/3 w-full">
                      <div className="md:w-2/3 w-5/6">
                        <p className="text-center">
                        {
                  language?" At Zidlena Arabian Majlis, we take pride in our 3-year journey as a quality furniture producer in Ethiopia. Inspired by the desire to create a household product that combines elegance and affordability, our founders have built a team of skilled artisans who meticulously craft each piece to the highest standards":" ለቤትዎ ጊዜ የማይሽረው ውበትን መፍጠርከሶስት አመታት በላይ ልምድ ባካበተው ድርጅታችን በጥራታቸው ልዪ የሆኑ፤ በምቾታቸው ወደር የማይገኝላቸው አረብያን መጅሊሶችን በማምረት በተመጣጣኝ ዋጋ ለደንበኞቻችን በማቅረብ ላይ እንገኛለን፡፡"
                }
                  
                         
                           </p>
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
                        <p className="text-center">
                        {
                  language?" Discover the essense of Arabian Majlis Elevate your living spaces with the timeless elegance of Zidlena's Arabian majlis collection. Crafted by our skilled artisans, each piece combines traditional Arab design aesthetics with uncompromising quality and comfort.":"የአረብ መጅሊስን ምንነት ይወቁ ጊዜ በማይሽረው የዚድሌና የአረብ መጅሊስ ስብስብ የመኖሪያ ቦታዎችዎን ከፍ ያድርጉ። በሰለጠኑ የዕደ-ጥበብ ባለሞያዎቻችን የተሰራው እያንዳንዱ ክፍል ባህላዊ የአረብ ዲዛይን ውበትን በማይጎዳ ጥራት እና ምቾት ያጣምራል።"
                }
                 
                         
 </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        </div>

      </section>


      <section id='about'>
      <main className="container-fluid mt-12">

<section className='relative bg-[#ffffff] py-7 text-black'>
  <svg
    className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#075985]"
    preserveAspectRatio="none"
    viewBox="0 0 1440 54">
    <path
    fill="currentColor"
    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
    />
  </svg>
  <div className="mt-2 flex md:justify-center px-3">
    <div className='md:w-2/3'>
      <div className="mt-3">
        <div className='md:text-center'>
          <h2 className="font-bold text-center lg:text-4xl text-2xl text-[#075985] ">
          {
                  language?"About Us":"ስለ እኛ"
                }
          </h2>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-bold text-2xl text-[#075985] ">
        {
                  language?"Welcome to Zidlena Arabian Mejlis":"እንኳን ወደ ዚድለና አረብያን መጅሊስ በድህና መጡ"
                }
        </p>
      </div>
      <div className="mt-3">
        <p className="">
        {
                  language?" At Zidlena Arabian Majlis, we take pride in our 3-year journey as a quality furniture producer in Ethiopia. Inspired by the desire to create a household product that combines elegance and affordability, our founders have built a team of skilled artisans who meticulously craft each piece to the highest standards":" ለቤትዎ ጊዜ የማይሽረው ውበትን መፍጠርከሶስት አመታት በላይ ልምድ ባካበተው ድርጅታችን በጥራታቸው ልዪ የሆኑ፤ በምቾታቸው ወደር የማይገኝላቸው አረብያን መጅሊሶችን በማምረት በተመጣጣኝ ዋጋ ለደንበኞቻችን በማቅረብ ላይ እንገኛለን፡፡ እርሶስ ለቤቶ፣ ለቤተሰቦ፣ ወይም ለወዳጅ ዘመዶ አረቢያን መጅሊሶችን ለመግዛት አስበዋል፤ እንግዲያውስ ወደ ዚድላና አረቢያን መጅሊስ ይምጡ ከጠበቁት በላይ አግኝተው ተደስተው ይመለሳሉ፤ እርሶ ያሰቡት የተለየ ዲዛይን ካለም የማክሩን ያሰቡትን ሰርተን እናስረክቦታለን፡፡"
                }
        </p>
      
        <p className=" mt-1 hidden" id="readmore">
        {
                  language?"Zidlena Arabian Majlis is the leading manufacturer of exquisite Arabian-inspired furniture in Ethiopia. With a commitment to quality and a passion for preserving traditional craftsmanship, we bring the rich cultural heritage of Arab design to your living spaces.":"በሀገራችን ከሚገኙ አረቢያን መጅሊስ አምራቾች ስመጥር በሆነው ፋብሪካችን ጥራትን ከምቾት ያጣመሩ አረብያን መጅሊሶችን አዘጋጅተን እንጠብቃችህዋለን፡፡ ቤቶን በአረቢያን መጅሊሶች ለማሳመር አስበዋል እንግዲያውስ ዚድላና አረቢያን መጅሊስን ሳይጎበኙ እንዳይወስኑ፡፡"
                }
        </p>
        <button className="text-[#075985] hover:text-green btn-read" id="change" onClick={Readmore}>
        {buttonText}
        </button>
      </div>
    </div>
  </div>
</section>

</main>

      </section>


      <section id='whyus'>
      <div className="md:text-center">
        <h2 className="font-bold text-center lg:text-4xl text-2xl text-[#075985] mt-5 mb-5">
        {
                  language?"  Why Choose Us?":"ለምን ምረጡን"
                }
        
        </h2>
      </div>

      <main className="container-fluid bg-white py-5 flex justify-center">
        <div className="md:flex justify-center lg:w-3/5 sm:w-5/6 w-96 relative mt-7">
          <div className="bg-[#082f49] grid content-center rounded-l-[15px] rounded-r-[15px] h-48 md:h-auto md:rounded-l-[40px] md:rounded-r-none px-3 p-5 mx-5 md:mx-0">
            <h2 className="font-bold text-white lg:text-3xl text-2xl">
            {
                  language?"  Why Us?":"ለምን እኛ"
                }
            </h2>
            <p className="text-white md:flex text-xs md:text-base mt-1">
            {
                  language?" As a leading manufacturer of premium Arabian mejlis, we take great pride in our commitment to quality, craftsmanship, and customer satisfaction.":"የፕሪሚየም አረብ መጅሊስ ግንባር ቀደም አምራች እንደመሆናችን ለጥራት፣ ለዕደ ጥበብ እና ለደንበኛ እርካታ ባለን ቁርጠኝነት ትልቅ ኩራት ይሰማናል።"
                }
           
            </p>
          </div>
          <div className="p-5 content-center rounded-r-[20px] md:rounded-r-[40px] flex justify-center">
            <div className="cards">
              <div className="card red md:w-[350px] w-full px-3 ">
                <p className="tip">
                {
                  language?"  Durability":"ዘላቂነት"
                }
                </p>
                <p className="second-text">
                {
                  language?" Our mejlis are built to last, withstanding the test of time and everyday use. We stand behind the quality of our craftsmanship with a comprehensive warranty, giving you the peace of mind that your investment will last for years to come.":"የእኛ መጅሊሶች የጊዜ እና የዕለት ተዕለት አጠቃቀምን ፈተና በመቋቋም ዘላቂነት ያላቸው ናቸው። ኢንቨስትመንትዎ ለሚቀጥሉት አመታት የሚቆይበትን የአእምሮ ሰላም በመስጠት ከዕደ ጥበብ ስራችን ጥራት በስተጀርባ ቆመናል።"
                }
                 
                </p>
              </div>
              <div className="card blue md:w-[350px] w-full px-3">
                <p className="tip">
                {
                  language?"Exceptional Customer Service":"ልዩ የደንበኞች አገልግሎት"
                }
                </p>
                <p className="second-text">
                {
                  language?"From the moment you inquire about our products to the day your mejlis is delivered, our dedicated team is here to assist you. We pride ourselves on our responsiveness, attention to detail, and commitment to ensuring your complete satisfaction.":"ስለ ምርቶቻችን ከጠየክበት ጊዜ ጀምሮ መጅሊስህ እስከሚደርስ ድረስ የኛ ቁርጠኛ ቡድን ሊረዳህ መጥቷል። በኛ ምላሽ ሰጪነት፣ ለዝርዝር ትኩረት እና ሙሉ እርካታዎን ለማረጋገጥ ባለው ቁርጠኝነት እንኮራለን።"
                }
                </p>
              </div>
              <div className="card green md:w-[350px] w-full px-3">
                <p className="tip">
                {
                  language?"Customizable Options":"ሊበጁ የሚችሉ አማራጮች"
                }
                </p>
                <p className="second-text">
                {
                  language?"We understand that every home and personal style is unique. That's why we offer a wide range of customization options, allowing you to tailor the size, color, and upholstery of your mejlis to perfectly suit your space and preferences.":"እያንዳንዱ ቤት እና የግል ዘይቤ ልዩ እንደሆነ እንረዳለን። ለዛም ነው የመጅሊስን መጠን፣ ቀለም እና ጨርቃጨርቅ ለቦታዎ እና ለምርጫዎ ተስማሚ በሆነ መልኩ እንዲመጥኑ የሚያስችልዎ ሰፊ የማበጀት አማራጮችን እናቀርባለን።"
                }
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      </section>

      <section id='products'>
      <section className='flex flex-col gap-7 py-7'>
         <div className='md:text-center'>
          <h2 className="font-bold text-center lg:text-4xl text-2xl text-[#075985] mb-5">
          {
                  language?"Products":"ምርቶች"
                }
          </h2>
        </div>
            <div className='flex justify-center'>
                <div className='flex md:flex-row flex-col gap-7'>
                    <div className="card lg:w-96 w-80 bg-base-100 shadow-xl text-white">
                        <figure><img src="9.jpg" alt="arabian mejlis photos" className='h-[230px]' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Furniture Mejlis</h2>
                            <p></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:w-96 w-80 bg-base-100 shadow-xl text-white">
                        <figure><img src="2.jpg" alt="arabian mejlis photos" className='h-[230px]'/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Bonded Mejlis</h2>
                            <p></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

      </section>


      <section id='contact'>

      <div className="py-7 lg:pb-0">
          <div className='md:text-center'>
          <h2 className="font-bold text-center lg:text-4xl text-2xl text-[#075985] mb-5  ">
          {
                  language?"Get in touch":"ከእኛ ጋር ይገናኙ"
                }
          </h2>
        </div>
        <section className="bg-[url('/5.jpg')] cover">
        <div className="bg-slate-900/70 grid content-center py-7 h-full cover">
            <div className="flex justify-center">
                <div className="border-1 bg-white lg:w-2/5 md:w-3/5 w-5/6 flex justify-center py-4">
                    <div className="w-4/5 flex flex-col gap-3">
                        <div>
                    {/*         <h2 className='text-center font-bold lg:text-[22px] text-[18px]  text-[#075985]'>  {
                  language?"Contact Us":"አግኙን"
                }</h2> */}
                        </div>
                        <div>
                            <p className='text-center lg:text-[14px] text-[12px]  text-[#075985]'>
                            {
                  language?"Feel Free to contact us about any questions you may have.":"ለሚኖሩዎት ማንኛውም ጥያቄዎች እኛን ለማነጋገር ነፃነት ይሰማዎ።"
                }
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                                <div className="flex justify-center">
                                  <div className='flex flex-col'>
                                    <div>
                                      <input type="text" onBlur={handleBlur} onChange={handleChange} name='name' placeholder={language?"Name":"ስም"} className="bg-slate-200 py-2 pl-2"/>
                                    </div>
                                    {errors.name && <div className=' text-rose-700 text-xs mt-1 ml-3'>{errors.name}</div>}
                                  </div>
                                     
                                </div>
                                <div className="flex justify-center">
                                  <div className='flex flex-col'>
                                    <div>
                                      <input type="email" onBlur={handleBlur} onChange={handleChange} placeholder={language?"Email":"ኢሜይል"} name='email' className="bg-slate-200 py-2 pl-2"/>
                                    </div>
                                    {errors.email && <div className=' text-rose-700 text-xs mt-1 ml-3'>{errors.email}</div>}
                                  </div>
                                    
                                </div>
                                <div className="flex justify-center">
                                  <div className='flex flex-col'>
                                    <div>
                                      <input type="tel" onBlur={handleBlur} onChange={handleChange} placeholder={language?"Phone number":"ስልክ ቁጥር"}  name='phone' className="bg-slate-200 py-2 pl-2"/>
                                    </div>
                                    {errors.phone && <div className=' text-rose-700 text-xs mt-1 ml-3'>{errors.phone}</div>}
                                  </div>
                                    
                                </div>
                                <div className="flex justify-center">
                                  <div className='flex flex-col'>
                                    <div>
                                      <input onBlur={handleBlur} onChange={handleChange} placeholder={language?"Message":"መልእክት"}  name='message' className="bg-slate-200 h-[80px] py-2 pl-2" />
                                    </div>
                                    {errors.message && <div className=' text-rose-700 text-xs mt-1 ml-3'>{errors.message}</div>}
                                  </div>
                                 
                                </div>
                                <div className="flex justify-center mt-2">
                                    <button className="bg-[#075985] p-1">
                                    {language?"Send":"መላክ"}
                                    </button>
                                </div>

                            </form>
                        </div>


                    </div>
                </div>

            </div>
        </div>

  
    </section>
    </div>



      </section>


      <section id='footer' className='mt-5'>
      <div className='container-fluid'>
      <div className="main w-full">
        <div className="footer w-full">
          {/* <div className="bubbles">
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
          </div> */}
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
                  <h2 className='font-bold text-lg'>
                    {
                      language?"Address":"አድራሻ"
                    }
                  </h2>
                  <a href="#">
                  {
                      language?"Addis Ababa City, Atena Tera ":"አዲስ አበባ ከተማ አቴና ተራ"
                    }

                  </a>
                  <a href="#">
                    {
                      language?"Efoyta Gebeya Meakel,":"እፎይታ ገበያ መአከል"
                    }
                  </a>
                  <a href="#">
                    {
                      language?"First Floor BA/GF007":"የመጀመሪያ ፎቅ BA/GF007"
                    }
                  </a>
                  <a href="#">0916800744/0923854774</a>
                  <a href="#">info@zidlenaarabianmejlis.com</a>
                
                </div>
                <div className='flex flex-col gap-5 lg:w-1/3'>
                  <div className='flex flex-col gap-1'>  
                    <h2 className='font-bold text-lg'>
                      {
                        language?"Links":"አገናኞች"
                      }
                    </h2>
                    <a href={"#home"}>
                    {
                  language?"Home":"ቤት"
                }
              
                    </a>
                    <a href={"#about"}>
                    {
                  language?"About Us":"ስለ እኛ"
                }
                    </a>
                    <a href={"#products"}>
                    {
                  language?"Products":"ምርቶች"
                }
                
                    </a>
                    <a href={"#contact"}>
                    {
                  language?"Contact Us":"አግኙን"
                }
                    </a>
                  </div>
              
                </div>
              </div>
            </div>
            
            <div className='bg-[#082f49] w-full bottom-0 py-2 flex justify-center'>
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

      </section>
     
  
    </div>
    </>
   
  );
}
