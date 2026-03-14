import { stack } from "../../constants"

const TechStack = () => {
  return (
    <section id="tech-stack"  className="relative z-[1] pt-[120px] sm:pt-[40px] 2xl:pt-[20px] px-7 ">
      <div className="max-w-[860px] mx-auto flex flex-col items-center justify-center">

        <div className="text-center mb-[60px]">
            <div className="inline-flex px-[14px] py-[4px] rounded-full bg-white/[0.035] border border-white/50 text-[13px]  mb-4">
                Tech Stack
            </div>

            <h2 className=" text-[clamp(30px,4vw,52px)] tracking-[-0.025em] leading-[1.1] mb-[14px]">
                Built on <span className="grad-text">battle-tested</span> tech
            </h2>

            <p className="leading-[1.7] font-light">
                MERN stack + industry-leading comms infrastructure
            </p>
        </div>

     
        <div className="grid xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {stack.map((s, i) => (
                <div key={i} className="stack-card xxs:w-[145px] xs:w-[180px] w-[180px] sm:max-w-none">

                <div
                    className="w-[60px] h-[60px] rounded-[14px] flex items-center justify-center text-[24px] xxs:text-[20px]"
                    style={{
                    background: `${s.color}16`,
                    border: `1px solid ${s.color}28`,
                    color: s.color
                    }}
                >
                    {s.abbr}
                </div>

                <div className=" text-[20px] xxs:text-[16px] font-bold">
                    {s.name}
                </div>

                <div className="text-[16px] xxs:text-[14px]">
                    {s.sub}
                </div>

                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack