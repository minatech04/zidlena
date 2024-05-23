//import Image from "next/image";

import About from "./about/page";
import Footer from "./components/footer";
import HomePage from "./home/page";
import Home2 from "./home2/page";
import Whyus from "./whyus/page";
import Products from "./products/page";
import Gallery from "./gallery/page";
import Contact from "./contactus/page";
import Nav from "./nav/page";

export default function Home() {
 
  return (
    <div className="bg-white">
      <Nav home={'#home'} about={"#about"} products={"#product"} contact={"#gallery"} />
      <section id="home">
      <Home2 />

      </section>

      <section id="about">
      <About />

      </section>
   
    
      <Whyus />
      <section id="gallery">
      <Gallery/>
      </section>
  
      <section id="product">
      <Products/>

      </section>

      <section id="contact">
      <Contact/>
      </section>

    <Footer home={'#home'} about={"#about"} products={"#product"} contact={"#contact"}/>
  
    </div>
   
  );
}
