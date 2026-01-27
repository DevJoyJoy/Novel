import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const TypewriterText = ({ text = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let i = 0;

    if (!text) return;

    const timer = setInterval(() => {
      if (i >= text.length) {
        clearInterval(timer);
        return;
      }

      const char = text.charAt(i);
      setDisplayedText((prev) => prev + char);
      i++;
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <p className="text-amber-50 text-2xl">{displayedText}</p>;
};


export const FirstTake = () => {
  const [entering, setEntering] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntering(false);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex bg-indigo-900 h-screen w-screen items-center justify-center
      transition-opacity duration-700
      ${entering ? "opacity-0" : "opacity-100"}`}
    >
      <div className="h-[70%] w-[60%] bg-blue-950 flex flex-row justify-between">
        <img className="h-[85%] w-[27%] self-end" src="/Kokichi/kokichi_basic.webp" />
        <div className="bg-violet-300 h-[30%] w-[40%] rounded-2xl justify-center self-end mb-5">
            <p className="text-2xl h-[30%] w-[55%] bg-violet-400 rounded-2xl align-middle self-center m-1.5 p-1.0">Kokichi Ouma</p>
            <TypewriterText className="m-2" text='pipipipipopopo' speed={80}/>
            <button onClick={() => navigate('/SecondTake')} className="h">*</button>
        </div>
        <img className="h-[95%] w-[28%] self-end" src="/Shuichi/shuichi_basic.webp" />
      </div>
    </div>
  );
};