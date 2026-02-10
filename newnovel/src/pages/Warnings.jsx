import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Warnings = () => {
    const navigate = useNavigate();
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        if (leaving) {
            const timer = setTimeout(() => {
                navigate("/Take1");
            }, 700);

            return () => clearTimeout(timer);
        }
    }, [leaving]);

    return (
        <>
            <div
                className={`flex bg-indigo-900 h-screen w-screen items-center justify-center transition-opacity duration-700 ${leaving ? "opacity-0" : "opacity-100"}`}>
                <div className="h-[90%] w-[90%] bg-blue-950 flex flex-row justify-between">
                    <img className="h-[85%] self-end" src="/Kokichi/kokichi_basic.webp" alt="" />
                    <div className="flex flex-col">
                        <p className="text-amber-50  text-2xl font-[Bungee]">Read before starting:</p>
                        <p className="text-amber-50 font-[Bungee] self-center">- Pregame Saiouma <br /> - NOT TOXIC  <br /> - Possible trigger: self-harm <br /> <br /> If you have triggers  or you are unconfrotable with the mentioned topics, DO NOT READ! <br /> NOT ROMANTICIZED! The story depicts self-harm without any intention of romanticizing the issue in any way. If you are going throught something similar, know thta I am available to talk whenever necessary to help or just distract you. My DM's are open on my istagram, @pombodivoso_, just call me and I will do my best to help in any way I can.</p>
                        <br />
                        <p className="text-amber-50 text-2xl font-[Bungee]">Have a good one!</p>
                        
                        <button onClick={() => setLeaving(true)} className="hover:bg-violet-800  bg-violet-950 h-[10%] w-[85%] rounded-2xl transition ml-auto">Start</button>
                    </div>
                    <img className="h-[95%] self-end " src="/Shuichi/shuichi_basic.webp" alt="" />
                </div>
            </div>
        </>
    )
}