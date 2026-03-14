import { startSteps } from "../../constants"

const HowItWorks = () => {
  return (
        <section id="how-it-works"  className="relative z-[1] py-[20px] sm:py-[120px] px-4 xs:px-5  sm:px-5 bg-[linear-gradient(180deg,transparent_0%,rgba(167,139,250,0.025)_50%,transparent_100%)]">
            <div className="max-w-[1000px] mx-auto">

                <div className="text-center mb-[68px]">
                    <div className="inline-flex px-[14px] py-[4px] rounded-full bg-white/[0.0305] border border-white/40 text-[13px] mb-4">
                        How It Works
                    </div>

                    <h2 className="text-[clamp(30px,4vw,52px)] tracking-[-0.025em] leading-[1.1]">
                        Zero to <span className="grad-text">connected</span><br />
                        in 3 steps
                    </h2>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-12 xs:gap-6 lg:gap-8 lx:gap-10">
                {startSteps.map((step, i) => (
                    <div key={i} className="step-card border border-white">

                    <div className=" text-[54px]  leading-none mb-[14px] text-orange-400  ">
                        {step.n}
                    </div>

                    <div className="w-full h-[3px] mb-[18px] bg-[linear-gradient(90deg,rgba(202,138,4,0.35),rgba(234,88,12,0.35))]" />

                    <h3 className=" text-[20px] mb-[10px] tracking-[-0.01em]">
                        {step.t}
                    </h3>

                    <p className="text-[14px] leading-[1.65] font-light">
                        {step.d}
                    </p>

                    </div>
                ))}
                </div>

            </div>
        </section>
  )
}

export default HowItWorks