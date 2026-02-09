import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Finale = () => {
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
                        <p className="text-amber-50 text-6xl font-[Bungee]">Affection and</p>
                        <p className="text-amber-50 text-6xl font-[Bungee] self-center">bandages</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="hover:bg-violet-800 bg-violet-950 text-amber-50 h-[11%] w-[90%] rounded-2xl transition ml-auto text-center">Thank you! <br /> Written and made by: @pombodivoso_</div>
                    </div>
                    <img className="h-[95%] self-end " src="/Shuichi/shuichi_basic.webp" alt="" />
                </div>
            </div>
        </>
    )
}