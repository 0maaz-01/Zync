import { useEffect, useState } from "react";
import { msgs } from "../../constants";

const ChatMockup = () => {

  const [shown, setShown] = useState(0);
  
  useEffect(() => {
    const t = setInterval(() => setShown(v => (v < msgs.length ? v + 1 : 1)), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#0b0b16] min-h-[450px] rounded-[20px] border border-white/[0.07] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)]">

    {/* Header */}
    <div className="px-4 py-3 border-b border-white/[0.06] bg-[#0e0e1c] flex items-center gap-[10px]">
        
        <div className="flex gap-[6px]">
        {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
            <div key={i} className="w-[10px] h-[10px] rounded-full" style={{ background: c }} />
        ))}
        </div>

        <div className="ml-2 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center text-[11px] font-bold">
            A
        </div>

        <span className="text-[13px] ">
            Alex Chen
        </span>

        <div className="w-[7px] h-[7px] rounded-full bg-green-400" />
        </div>
    </div>

    {/* Messages */}
    <div className="p-4 min-h-[185px] flex flex-col gap-[10px]">
        {msgs.slice(0, shown).map((m, i) => (
        <div
            key={i}
            className={`flex ${m.self ? "justify-end" : "justify-start"}`}
        >
            <div
            className={`max-w-[76%] px-[13px] py-[9px] text-[13px] leading-[1.5]
            ${
                m.self
                ? "rounded-[14px_14px_4px_14px] bg-gradient-to-br from-cyan-400/20 to-violet-400/20 border border-cyan-400/20 "
                : "rounded-[14px_14px_14px_4px] bg-white/[0.055] border border-white/[0.07] "
            }`}
            >
            {m.text}

            <div className="text-[10px] mt-[3px]">
                {m.time}
            </div>
            </div>
        </div>
        ))}

        {/* typing indicator */}
        {shown < msgs.length && (
        <div className="flex gap-[5px] px-[4px] py-[2px]">
            {[0, 1, 2].map((i) => (
            <div
                key={i}
                className="w-[6px] h-[6px] rounded-full bg-cyan-400/50"
                style={{
                animation: `bounce .9s ${i * 180}ms ease-in-out infinite`,
                }}
            />
            ))}
        </div>
        )}
    </div>

    {/* Input */}
    <div className="px-3 pb-3 absolute bottom-0 w-full">
        <div className="flex items-center gap-2 bg-white/[0.035] border border-white/[0.07] rounded-[12px] px-3 py-2">
        
        <span className="flex-1 text-[13px] ">
            Type a message...
        </span>

        <div className="w-[26px] h-[26px] rounded-[8px]  bg-orange-600  flex items-center justify-center">
            <svg width="11" height="11" viewBox="0 0 20 20" fill="white">
            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
            </svg>
        </div>

        </div>
    </div>

    </div>
  )
}

export default ChatMockup
