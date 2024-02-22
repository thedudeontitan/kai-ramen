import React from "react";
import "./animate.css";

interface MarqueeProps {
  text: string;
}
const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="marquee text-[#E9DAC6] h-[200px]">
        <div className="track">
      <div className="content">
        {text}
      </div>
      </div>
    </div>
  );
};

export default Marquee;
