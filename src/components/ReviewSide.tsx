import BgRedMain from "@/assets/BgRedMain";
import BgWhiteMain from "@/assets/BgWhiteMain";
import { ReviewCardProps } from "@/utils/types";
import React from "react";

const ReviewSide = ({ review }: ReviewCardProps) => {
  return (
    <div className="relative w-[90%] lg:w-[420px] h-full ">
      <div className="absolute top-0 h-full w-full z-10">
        <BgWhiteMain />
      </div>
      <div className="absolute top-0 left-[13%] h-full w-full">
        <BgRedMain />
      </div>
      <div className="w-full h-full items-center z-20 relative flex flex-col justify-center pl-5">
        <img src="/Ellipse 16.png" className="h-20 w-20 z-10 absolute -top-5" />
        <h4 className="text-xl text-[#525252]">{review.name}</h4>
        <span className="text-[#525252] text-xs">{review.date}</span>
        <span className="text-[#D01717] text-5xl">❝</span>
        <p className="w-[80%] text-[#525252]">{review.desc}</p>
      </div>
    </div>
  );
};

export default ReviewSide;
