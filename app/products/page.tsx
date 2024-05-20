'use client'
import React,{useEffect, useState,useRef} from 'react';



const Products = ()=>{
    return(

        <>
         <section className='flex flex-col gap-7 py-7'>
            <div>
                <h2 className='text-center font-bold lg:text-[22px] text-[18px] text-black'>Products</h2>
            </div>
            <div className='flex justify-center'>
                <div className='flex md:flex-row flex-col gap-7'>
                    <div className="card lg:w-96 w-80 bg-base-100 shadow-xl text-white">
                        <figure><img src="2.jpg" alt="Shoes" className='h-[230px]' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:w-96 w-80 bg-base-100 shadow-xl text-white">
                        <figure><img src="3.jpg" alt="Shoes" className='h-[230px]'/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        
        </>


    )


}


export default Products