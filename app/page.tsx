//import Image from "next/image";

import About from "./about/page";
import Footer from "./components/footer";
import HomePage from "./home/page";
import Whyus from "./whyus/page";
import Products from "./products/page";
import Gallery from "./gallery/page";
import Contact from "./contactus/page";
import Nav from "./nav/page";

export default function Home() {
 
  return (
    <div className="bg-white">
      <Nav home={'#home'} about={"#about"} products={"#product"} contact={"#contact"} />
      <section id="home">
      <HomePage />

      </section>

      <section id="about">
      <About />

      </section>
   
    
      <Whyus />
      <Gallery/>
      <section id="product">
      <Products/>

      </section>

      <section id="contact">
      <Contact/>
      </section>

    <Footer/>
  
    </div>
   
  );
}
