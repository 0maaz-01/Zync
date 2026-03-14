import { features } from '../../constants'

const Features = () => {
  return (
    <section  id="features"  className="relative z-[1] py-[120px] px-3 xxs:px-4  xs:px-7">
        <div className="max-w-[1180px] mx-auto">

                <div className="text-center mb-[68px]">
                    <div className="inline-flex px-[14px] py-[4px] rounded-full bg-white/[0.0305] border border-white/40 text-[13px] mb-4">
                        Features
                    </div>

                    <h2 className="text-[clamp(30px,4vw,52px)] tracking-[-0.025em] leading-[1.1]">
                        Everything you need to <span className="grad-text">communicate</span><br />
                        at scale
                    </h2>
                </div>

            <div className="grid  grid-cols-[repeat(auto-fill,minmax(260px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            {features.map((feature, index) => (
                <div key={index} className="feat-card mb-4 xxs:mb-6">
                 
                    <div
                        className="w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-[13px] flex items-center justify-center mb-5"
                        style={{
                        background: `${feature.color}13`,
                        border: `1px solid ${feature.color}26`
                        }}
                    >
                        <svg
                            className='w-[22px] h-[22px] lg:w-[35px] lg:h-[35px] '
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={feature.color}
                            strokeWidth="1.5"
                            dangerouslySetInnerHTML={{ __html: feature.icon }}
                        />
                    </div>

                    <h3 className=" text-[17px] lg:text-xl  font-bold mb-2 tracking-[-0.01em]">
                        {feature.title}
                    </h3>
                

                <p className="text-[14px] lg:text-base  leading-[1.65] font-light">
                    {feature.desc}
                </p>

                </div>
            ))}
            </div>

        </div>
    </section>
  )
}

export default Features