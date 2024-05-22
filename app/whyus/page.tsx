import Why from '../img/why.svg';
import "../why.css";

function Whyus() {
  return (
    <>
      <div className="md:text-center">
        <h2 className="font-bold text-center lg:text-4xl text-2xl text-[#A08E5A] mt-5 mb-5">
          Why Choose Us?
        </h2>
      </div>

      <main className="container-fluid bg-white py-5 flex justify-center">
        <div className="md:flex justify-center lg:w-3/5 sm:w-5/6 w-96 relative mt-7">
          <div className="bg-[#5c5130] grid content-center rounded-l-[15px] rounded-r-[15px] h-48 md:h-auto md:rounded-l-[40px] md:rounded-r-none px-3 p-5 mx-5 md:mx-0">
            <h2 className="font-bold text-black lg:text-3xl text-2xl">Why US?</h2>
            <p className="text-black md:flex text-xs md:text-base mt-1">
              We deliver web app development services for our clients
              with predictable outcomes. For this, we hire brilliant web
              and mobile app developers to deliver projects on time and
              maintain top-notch code standards.
            </p>
          </div>
          <div className="p-5 content-center rounded-r-[20px] md:rounded-r-[40px] flex justify-center">
            <div className="cards">
              <div className="card red md:w-[350px] w-full px-3">
                <p className="tip">Mission</p>
                <p className="second-text">
                  Our mission is to empower businesses and individuals by providing them with cutting-edge software solutions that enhance their digital presence, streamline their operations, and drive their success. We strive to deliver exceptional value through innovative technologies, superior craftsmanship, and a client-centric approach.
                </p>
              </div>
              <div className="card blue md:w-[350px] w-full px-3">
                <p className="tip">Vision</p>
                <p className="second-text">
                  Our vision is to become a globally recognized software company known for its excellence in delivering transformative digital solutions. We aim to be the preferred partner for businesses seeking reliable and innovative software services, setting new industry standards and inspiring positive change through technology.
                </p>
              </div>
              <div className="card green md:w-[350px] w-full px-3">
                <p className="tip">Ethics</p>
                <p className="second-text">
                  At our software company, we prioritize our clients' needs and goals, going above and beyond to deliver high-quality software solutions that address their specific requirements. We conduct our business with integrity, maintaining the highest ethical standards in all our interactions while respecting confidentiality and protecting our clients' intellectual property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Whyus;