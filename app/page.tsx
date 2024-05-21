//import Image from "next/image";

import About from "./about/page";
import Footer from "./components/footer";
import HomePage from "./home/page";
import Whyus from "./whyus/page";
import Products from "./products/page";
import Gallery from "./gallery/page";

export default function Home() {
 
  return (
    <div>
      <HomePage />
      <About />
      <Whyus />
      <Gallery/>
  
    </div>
   
  );
}
