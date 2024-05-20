//import Image from "next/image";

import About from "./about/page";
import Footer from "./components/footer";
import Products from "./products/page";

export default function Home() {
 
  return (
    <div className="bg-white text-black">
      <About />
      <Products/>
      {/* <Footer /> */}
    </div>
   
  );
}
