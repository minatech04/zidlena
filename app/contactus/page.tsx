//import Image from "next/image";

export default function Contact() {
 
  return (
    <div className="py-7">
        <section className="bg-[url('/5.jpg')] cover">
        <div className="bg-slate-900/70 grid content-center py-7 h-full cover">
            <div className="flex justify-center">
                <div className="border-1 bg-white lg:w-2/5 md:w-3/5 w-5/6 flex justify-center py-4">
                    <div className="w-4/5 flex flex-col gap-3">
                        <div>
                            <h2 className='text-center font-bold lg:text-[22px] text-[18px] text-black'>Contact Us</h2>
                        </div>
                        <div>
                            <p className='text-center lg:text-[14px] text-[12px] text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="flex justify-center">
                            <form className="flex flex-col gap-2">
                                <div className="flex justify-center">
                                    <input type="text" placeholder="Full Name" className="bg-slate-200 py-2 pl-2"/>
                                </div>
                                <div className="flex justify-center">
                                    <input type="email" placeholder="Email" className="bg-slate-200 py-2 pl-2"/>
                                </div>
                                <div className="flex justify-center">
                                    <input type="tel" placeholder="Phone Number" className="bg-slate-200 py-2 pl-2"/>
                                </div>
                                <div className="flex justify-center">
                                    <textarea placeholder="Message..." className="bg-slate-200 p-2 text-black w-full"> </textarea>
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
