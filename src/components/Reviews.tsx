import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useTransition } from "react";
import ReviewMain from "./ReviewMain";
import ReviewSide from "./ReviewSide";
import BgWhiteMain from "@/assets/BgWhiteMain";
import BgRedMain from "@/assets/BgRedMain";
import BgRedLeft from "@/assets/BgRedLeft";
import BgWhiteLeft from "@/assets/BgWhiteLeft";
import BgWhiteRight from "@/assets/BgWhiteRight";
import BgRedRight from "@/assets/BgRedRight";
import { useTranslation } from "next-i18next";


const Reviews = () => {
  const {t} = useTranslation();
  const reviewList = [
    {
      nameKey: "reviewName1",
      dateKey: "reviewDate1",
      descKey: "reviewDesc1",
      image: "/Ellipse 16.png",
    },
    {
      nameKey: "reviewName2",
      dateKey: "reviewDate2",
      descKey: "reviewDesc2",
      image: "/Ellipse 16.png",
    },
    {
      nameKey: "reviewName3",
      dateKey: "reviewDate3",
      descKey: "reviewDesc3",
      image: "/Ellipse 16.png",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center py-20 pt-48 bg-[#F9F8F6]">
      <div className="w-full max-w-[1400px] flex flex-col gap-10 items-center">
        <div className="flex max-w-[800px] w-full justify-between items-start mb-16">
          <ChevronLeft className="text-[#525252]" size={50} />
          <div className="flex flex-col items-center gap-8">
            <span className="text-2xl font-semibold text-[#000000]">
              {t('happyHealthyPatients')}
            </span>
            <div className="w-24 flex justify-between items-center">
              <div className="h-4 w-4 bg-[#D01717] rounded-full" />
              <div className="h-2 w-2 bg-[#525252] rounded-full" />
              <div className="h-2 w-2 bg-[#525252] rounded-full" />
              <div className="h-2 w-2 bg-[#525252] rounded-full" />
              <div className="h-2 w-2 bg-[#525252] rounded-full" />
            </div>
          </div>
          <ChevronRight className="text-[#525252]" size={50} />
        </div>

        <div className="flex flex-col gap-10 lg:gap-5 lg:flex-row items-center w-full h-[450px] lg:justify-between">
          {/* {reviewList?.slice(0, 3)?.map((review, index) => {
            return index % 2 === 0 ? (
              <ReviewSide key={index} review={review} />
            ) : (
              <ReviewMain key={index} review={review} />
            );
          })} */}
          <div className="relative w-[90%] lg:w-[303px] h-full ">
            <div className="absolute top-0 h-full w-full z-10">
              <BgRedLeft />
            </div>
            <div className="absolute top-[-4.3%] left-[-9.5%] h-full w-full">
              <BgWhiteLeft />
            </div>
            <div className="w-full h-full items-center z-20 relative flex flex-col justify-center pl-5">
              <img
                src="/Ellipse 16.png"
                className="h-20 w-20 z-10 absolute -top-4"
              />
              <h4 className="text-xl text-[#525252]">{t(reviewList[0].nameKey)}</h4>
              <span className="text-[#525252] text-xs">
                {t(reviewList[0].dateKey)}
              </span>
              <span className="text-[#D01717] text-5xl">❝</span>
              <p className="w-[80%] text-[#525252] text-sm pb-20">
                {t(reviewList[0].descKey)}
              </p>
            </div>
          </div>
          <div className="relative w-[90%] lg:w-[420px] h-full ">
            <div className="absolute top-0 h-full w-full z-10">
              <BgWhiteMain />
            </div>
            <div className="absolute top-0 left-[13%] h-full w-full">
              <BgRedMain />
            </div>
            <div className="w-full h-full items-center z-20 relative flex flex-col justify-center pl-5">
              <img
                src="/Ellipse 16.png"
                className="h-20 w-20 z-10 absolute -top-5"
              />
              <h4 className="text-xl text-[#525252]">{t(reviewList[1].nameKey)}</h4>
              <span className="text-[#525252] text-xs">
                {t(reviewList[1].dateKey)}
              </span>
              <span className="text-[#D01717] text-5xl">❝</span>
              <p className="w-[80%] text-[#525252]">{t(reviewList[1].descKey)}</p>
            </div>
          </div>
          <div className="relative w-[90%] lg:w-[303px] h-full ">
            <div className="absolute top-0 h-full w-full z-10">
              <BgWhiteRight />
            </div>
            <div className="absolute top-[-4.3%] right-2 h-full w-full">
              <BgRedRight />
            </div>
            <div className="w-full h-full items-center z-20 relative flex flex-col justify-center pl-5">
              <img
                src="/Ellipse 16.png"
                className="h-20 w-20 z-10 absolute -top-5"
              />
              <h4 className="text-xl text-[#525252]">{t(reviewList[2].nameKey)}</h4>
              <span className="text-[#525252] text-xs">
                {t(reviewList[2].dateKey)}
              </span>
              <span className="text-[#D01717] text-5xl">❝</span>
              <p className="w-[80%] text-[#525252] text-sm pb-20">
                {t(reviewList[2].descKey)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
