//import Image from "next/image";

import About from "./about/page";
import Footer from "./components/footer";
import HomePage from "./home/page";
import Products from "./products/page";

export default function Home() {
 
  return (
    <div>
      <HomePage />
      <About />
  
    </div>
   
  );
}
