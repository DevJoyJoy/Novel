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


export const Take21 = () => {
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
      className={`flex bg-indigo-900 h-screen w-screen items-center justify-center relative
      transition-opacity duration-700
      ${entering ? "opacity-0" : "opacity-100"}`}
    >
      <div className="h-[70%] w-[60%] bg-blue-950 flex flex-row justify-end items-center">
        <div className="bg-blue-300 h-[30%] w-[50%] rounded-2xl absolute bottom-30 left-1/2 -translate-x-1/2 p-3">
            <p className="text-2xl h-[25%] w-[30%] bg-blue-400 rounded-2xl align-middle self-center m-1.5 p-2">Shuichi Saihara</p>
            <TypewriterText className="p-4" text='I knocked on the door multiple times, but received no answer.' speed={50}/>
            <button onClick={() => navigate('/')} className="h-[15%] w-[10%] bg-blue-400 rounded-xl absolute bottom-4 right-4">Next</button>
        </div>
      </div>
    </div>
  );
};