import ChatMockup from "./ChatMockup";


const Hero = () => {

  return (
    <section className=" relative z-[1] xxs:px-3 xs:px-7 pt-24 pb-0">

        <div className="flex flex-col ml:flex-row flex-wrap items-center  max-w-[1180px] mx-auto">

            {/* Copy */}
            <div className="flex-[1_1_400px] pl-4 pr-4  justify-center items-center flex  flex-col ml:items-start">

                <div className="inline-flex items-center gap-2 py-[5px] px-[14px] rounded-full mb-7 bg-cyan-400/10 border border-cyan-400/20">
                    <div className="w-[7px] h-[7px] rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[13px] font-normal">
                        Real-time · Production-ready
                    </span>
                </div>

                <h1 className="text-center flex xs:max-w-[400px]  sm:max-w-none flex-wrap gap-1 xxs:gap-1.5 xs:gap-2.5 sm:gap-1.5 ml:gap-2.5 lg:p-3  text-[clamp(46px,6vw,78px)]  leading-[1] tracking-[-0.035em] mb-[22px]">
                    <p>Connect</p> <br />
                    <p className="grad-text">Instantly</p> <br />
                    <p>with</p>
                    <p>Zync</p>
                </h1>

                <p className="text-[18px] leading-[1.72] max-w-[430px] mb-10 font-light">
                    One platform for chat, HD video calls, and screen sharing. MERN stack —
                    fast by design, secure by default.
                </p>

                <div className="flex flex-wrap gap-2 xs:gap-[14px] mb-[52px]">
                    <a href="/signup" className="btn-primary px-[15px] xs:px-[30px] py-2 rounded-[10px] text-[16px] flex items-center gap-2">
                        Get Started
                    </a>

                    <a target="_blank" href="https://youtu.be/A03jpxuAouA?si=275YevpY_5eoLB9s" className="btn-ghost  px-[8px] xs:px-8 py-0.5 rounded-[10px] text-[16px] flex items-center xs:gap-2">
                        Watch Demo                         
                        <svg width="40" height="40" viewBox="0 0 20 20" fill="#ff5900">
                            <path
                              fillRule="evenodd"
                              d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                              clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Preview */}
            <div className="min-w-[280px] xxs:min-w-[330px] xs:min-w-[400px] sm:min-w-[420px] ml:min-w-0 flex-[1_1_320px] max-w-[440px] relative">
                <ChatMockup /> 
            </div>
        </div>
      
    </section>
  )
}

export default Hero