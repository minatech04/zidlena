'use client'
import React,{useEffect, useState,useRef} from 'react';

const About = ()=>{

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

    return(
        <>
         <main className="container-fluid mt-10">

<section className='relative bg-[#ffffff] py-7 text-black'>
  <svg
    className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#A08E5A]"
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
          <h2 className="font-bold text-center lg:text-4xl text-2xl animate-charcter">About the App</h2>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-bold text-2xl"> Welcome to Social pilot!</p>
      </div>
      <div className="mt-3">
        <p className="">
        An all-in-one social media manager is a tool that combines analytics, post management, and scheduling features. It provides in-depth insights into social media performance, including follower growth, engagement rates, and demographics. Users can make data-driven decisions and optimize their strategies.
        </p>
        <p className=" md:flex mt-1 hidden">
        The post management functionality allows users to create, edit, and organize social media posts from a centralized dashboard. They can schedule posts in advance, preview how they will appear, and maintain a consistent brand presence across platforms.
        </p>
        <p className=" mt-1 hidden" id="readmore">
        Scheduling capabilities enable users to plan and automate the publishing of social media posts. It saves time, ensures a steady stream of content, and maximizes reach by targeting specific time zones or optimal posting times. Users can maintain an engaging social media presence without constant manual intervention.
        </p>
        <button className="text-primary hover:text-green btn-read" id="change" onClick={Readmore}>
        {buttonText}
        </button>
      </div>
    </div>
  </div>
</section>

</main>

        
        </>


    )



}

export default About;