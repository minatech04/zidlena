//import Image from "next/image";
'use client'
import React,{useEffect,useState,createContext,useContext} from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser } from '@fortawesome/free-solid-svg-icons'
import { ChangeEvent } from 'react';




export default function Contact() {
    const router = useRouter()
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
    <div className="py-7">
          <div className='md:text-center'>
          <h2 className="font-bold text-center lg:text-4xl text-2xl text-[#A08E5A] mb-5  ">Get In Touch</h2>
        </div>
        <section className="bg-[url('/5.jpg')] cover">
        <div className="bg-slate-900/70 grid content-center py-7 h-full cover">
            <div className="flex justify-center">
                <div className="border-1 bg-white lg:w-2/5 md:w-3/5 w-5/6 flex justify-center py-4">
                    <div className="w-4/5 flex flex-col gap-3">
                        <div>
                            <h2 className='text-center font-bold lg:text-[22px] text-[18px]  text-[#A08E5A]'>Contact Us</h2>
                        </div>
                        <div>
                            <p className='text-center lg:text-[14px] text-[12px]  text-[#A08E5A]'>Feel Free to contact us about any questions you may have.</p>
                        </div>
                        <div className="flex justify-center">
                            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                                <div className="flex justify-center">
                                    <input type="text" onBlur={handleBlur} onChange={handleChange} name='name' placeholder="Full Name" className="bg-slate-200 py-2 pl-2"/> {errors.name && <div className=' text-rose-700 text-xs mt-1 ml-3'>{errors.name}</div>}
                                </div>
                                <div className="flex justify-center">
                                    <input type="email" onBlur={handleBlur} onChange={handleChange} placeholder="Email" name='email' className="bg-slate-200 py-2 pl-2"/>{errors.email && <div className=' text-rose-700 text-xs mt-1 ml-3'>{errors.email}</div>}
                                </div>
                                <div className="flex justify-center">
                                    <input type="tel" onBlur={handleBlur} onChange={handleChange} placeholder="Phone Number" name='phone' className="bg-slate-200 py-2 pl-2"/>{errors.phone && <div className=' text-rose-700 text-xs mt-1 ml-3'>{errors.phone}</div>}
                                </div>
                                <div className="flex justify-center">
                                 <input onBlur={handleBlur} onChange={handleChange} placeholder="Message..." name='message' className="bg-slate-200 p-2 text-black w-full"></input>{errors.message && <div className=' text-rose-700 text-xs mt-1 ml-3'>{errors.message}</div>}
                                </div>
                                <div className="flex justify-center mt-2">
                                    <button className="bg-[#A08E5A] p-1">Send</button>
                                </div>

                            </form>
                        </div>


                    </div>
                </div>

            </div>
        </div>

  
    </section>
    </div>
   
  );
}
