import { Navigation } from "lucide-react";

const CTA = () => {
    return (
        <section className="relative z-[1] py-[140px] px-7">
            <div className="absolute top-1/2 left-1/2 w-[720px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[radial-gradient(ellipse,rgba(34,211,238,0.065)_0%,rgba(167,139,250,0.045)_40%,transparent_70%)]" />

            <div className="relative max-w-[660px] mx-auto text-center">
                
                <div className="w-[72px] h-[72px] rounded-[20px] bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center mx-auto mb-8 shadow-[0_0_64px_rgba(34,211,238,0.22),0_24px_64px_rgba(0,0,0,0.5)]">
                    <Navigation className="size-[36px]"/>
                </div>

                <h2 className="text-[clamp(36px,5vw,64px)] tracking-[-0.03em] leading-[1.04] mb-[18px]">
                    Start connecting <br />
                <span className="grad-text">with Zync today</span>
                </h2>

                <p className="text-[18px]  leading-[1.7] mx-auto mb-[44px] max-w-[480px] font-light">
                    No friction. No compromise. Real-time infrastructure ready to go from minute one.
                </p>

                <div className="flex gap-3 xxs:gap-[14px] justify-center flex-wrap">
                    <a href="/signup" className="btn-primary  px-[12px] xs:px-[36px] py-[14px] rounded-[14px]  text-[13px] xxs:text-[17px]">
                        Create Account 
                    </a>

                    <a target="_blank" href="https://github.com/0maaz-01/Zync" className="btn-ghost px-[12px] xs:px-[30px] py-[14px] rounded-[14px] text-[13px] xxs:text-[16px]">
                        View on GitHub
                    </a>
                </div>

                <p className="text-[12px] mt-[18px]">
                    Free forever | No credit card required
                </p>

            </div>
        </section>
  )
}

export default CTA