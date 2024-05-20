//import Image from "next/image";

import About from "./about/page";
import Footer from "./components/footer";
import HomePage from "./home/page";
import Products from "./products/page";
import Contact from "./contactus/page";

export default function Home() {
 
  return (
    <div className="bg-white">
      <HomePage />
      <About />
	  <Products/>
	  <Contact/>
  
    </div>
   
  );
}
