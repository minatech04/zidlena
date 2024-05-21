'use client'
import React,{useEffect, useState,useRef} from 'react';



const Gallery=()=>{
    const [img,setImg]=useState<string>("/2.jpg");

    const imgs: string[] =[
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg"
];
/* const change=(list:string)=>{
    setImg(list);
} */
const change = (list: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    // Handle the event and the parameter
    setImg(list);
  };
    return(
        <>
            <section className="flex flex-col gap-4 py-7">
                <div>
                    <h2 className='text-center font-bold lg:text-[22px] text-[18px]'>Gallery</h2>
                </div>
                <div className='grid justify-items-center'>
                    <div className='px-3 md:w-1/2 w-5/6'>
                        <img className="w-full md:h-64 h-48 rounded-lg object-cover object-center"
                        src={img}
                        alt="" />
                    </div>
                    
                </div>
                <div className="flex justify-center">
                    <div className="flex md:flex-row flex-col w-4/5 gap-4 relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                        {imgs.map((list)=>
                            <div className='relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'>
                                <button onClick={change(list)}>
                                    <img
                                    src={list}
                                    className="object-cover object-center h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                                </button>
                            </div>
                        )}
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Gallery