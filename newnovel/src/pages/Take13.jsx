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


export const Take13 = () => {
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
      <div className="h-[90%] w-[90%] bg-blue-950 flex flex-row justify-end items-center">
        <div className="bg-blue-300 h-[40%] w-[80%] rounded-2xl absolute bottom-15 left-1/2 -translate-x-1/2 p-3">
            <p className="text-3xl h-[20%] w-[30%] bg-blue-400 rounded-2xl absolute top-2 right-2 m-1.5 p-1">Shuichi Saihara</p>
            <br />
            <br />
            <TypewriterText className="p-5" text="I brought him closer and hugged him, and immediately felt him bursting into tears while squeezing the fabric of my pants with the hand he was holding the razor before." speed={50}/>
            <button onClick={() => navigate('/Take14')} className="h-[15%] w-[10%] bg-blue-400 rounded-xl absolute bottom-4 right-4">Next</button>
        </div>
      </div>
    </div>
  );
};