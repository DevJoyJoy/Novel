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


export const Take31 = () => {
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
      <div className="h-[90%] w-[90%] bg-blue-950 flex flex-row justify-start items-center">
        <img className="h-[88%] self-end pl-4" src="/Kokichi/kokichi_wonder.webp" alt="" />
        <div className="bg-violet-300 h-[40%] w-[80%] rounded-2xl absolute bottom-15 left-1/2 -translate-x-1/2 p-3">
            <p className="text-3xl h-[20%] w-[30%] bg-violet-400 rounded-2xl align-middle self-center m-1.5 p-2">Kokichi Ouma</p>
            <TypewriterText className="p-5" text='Yes, but just until tomorrow.' speed={50}/>
            <button onClick={() => navigate('/Take32')} className="h-[15%] w-[10%] bg-violet-400 rounded-xl absolute bottom-4 right-4">Next</button>
        </div>
      </div>
    </div>
  );
};