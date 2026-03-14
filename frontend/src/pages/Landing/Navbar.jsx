import { Menu, Navigation, X } from "lucide-react";
import { useState, useEffect } from "react";


const GetStartedButton = () => (
    <a href="/signup" className="btn-primary px-[22px] py-[10px] rounded-[10px] text-[14px]">
        Get Started
    </a>
)

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 


  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300
        ${scrolled 
            ? "bg-[#060610]/85 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-white/10" 
            : "bg-transparent border-b border-transparent"
        }`}
    >
        <div className="max-w-[1180px] mx-auto px-7 h-[68px] flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-[10px]">
                <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center shadow-[0_0_22px_rgba(34,211,238,0.28)]">
                    <Navigation className = "m-2"/>
                </div>

                <span className=" text-[22px] tracking-[-0.03em]">
                    Zync
                </span>
            </div>

            {/* Links */}
            <div className="hidden sm:block sm:flex items-center gap-[34px]">
                <a href="#features" className="nav-link">Features</a>
                <a href="#how-it-works" className="nav-link">How It Works</a>
                <a href="#tech-stack" className="nav-link">Tech Stack</a>
            </div>

            <div className="hidden sm:block flex gap-[10px]">
                <GetStartedButton/>
            </div>

            <button 
                className="p-2 sm:hidden rounded-lg border border-white/20 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

        </div>


        {mobileMenuOpen && (
          <div className="md:hidden  backdrop-blur-xl border border-white/10">
            <div className="px-4 text-lg py-6 space-y-2 flex flex-col">
                <a href="#features" className="nav-link">Features</a>
                <a href="#how-it-works" className="nav-link">How It Works</a>
                <a href="#tech-stack" className="nav-link">Tech Stack</a>
              
                <div className='pt-4'>
                    <GetStartedButton/>
                </div>
            </div>
          </div>
        )}

    </nav>
  )
}

export default Navbar