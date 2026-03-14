
import CTA from "./Landing/CTA";
import Footer from "./Landing/Footer";
import HowItWorks from "./Landing/HowItWorks";
import TechStack from "./Landing/TechStack";
import Features from "./Landing/Features";
import Hero from "./Landing/Hero";
import Navbar from "./Landing/Navbar";


export default function LandingPage() {

  return (
    <div className="playfair-font  min-h-screen bg-[#060610] text-white overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Features/>
      <div className=" sm:hidden flex justify-center mb-28">
          <img className="rounded-[36px] w-64" src = "Mobile.jpg"/>
      </div>
      <div className="hidden sm:block rounded-xl px-12 ml:px-12 lg:px-24 xl:px-36 w-[100dvw] flex justify-center">
          <img className="hidden sm:block rounded-2xl" src='Desktop.png'></img>
      </div>
      <HowItWorks/>
      <TechStack/>
      <CTA/>
      <Footer/>
    </div>
  );
}