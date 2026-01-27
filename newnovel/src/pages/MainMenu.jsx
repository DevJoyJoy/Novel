import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const MainMenu = () => {
    const navigate = useNavigate();
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        if (leaving) {
            const timer = setTimeout(() => {
                navigate("/FirstTake");
            }, 700);

            return () => clearTimeout(timer);
        }
    }, [leaving]);

    return (
        <>
            <div
                className={`flex bg-indigo-900 h-screen w-screen items-center justify-center transition-opacity duration-700 ${leaving ? "opacity-0" : "opacity-100"}`}>
                <div className="h-[70%] w-[60%] bg-blue-950 flex flex-row justify-between">
                    <img className="h-[85%] w-[27%] self-end" src="/Kokichi/kokichi_basic.webp" alt="" />
                    <div className="flex flex-col">
                        <p className="text-amber-50 text-6xl font-[Bungee]">Novel</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <button onClick={() => setLeaving(true)} className="hover:bg-violet-800  bg-violet-950 h-[10%] w-[85%] rounded-2xl transition ml-auto">Start</button>
                    </div>
                    <img className="h-[95%] w-[28%] self-end " src="/Shuichi/shuichi_basic.webp" alt="" />
                </div>
            </div>
        </>
    )
}