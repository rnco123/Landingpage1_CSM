import React from "react";
import { useTranslation } from "next-i18next";

type HeroProps = {
  heroText: string;
  location: string;
  heroTextConitnued: string;
};

const Hero = ({ heroText, location, heroTextConitnued }: HeroProps) => {
  const {t} = useTranslation();
  return (
    <div className="w-full h-[95vh] flex justify-center items-center bg-[#F9F8F6]">
      <div
        className="w-full h-full flex justify-center items-center"
        style={{
          background: "url('/sthetoscope.png') no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "10% 50%",
        }}
      >
        <div className="w-[95%] lg:w-[90%] max-w-[1600px] flex flex-col-reverse lg:flex-row py-20">
          <div className="relative flex-1 flex gap-8 flex-col">
            <h3 className="text-4xl font-bold text-[#333333] leading-snug lg:leading-normal">
              {heroText} <span className="text-[#D01717]">{location}</span>
              {heroTextConitnued}
            </h3>
            <p className="text-[#7C7C7C] text-lg leading-snug w-[90%] lg:w-[80%] tracking-wide mb-3">
             {t('discoverHaven')}
            </p>
            <div className="flex items-start gap-6">
              <a
                className="w-1/2 lg:w-[35%] bg-[#D01717] py-4 lg:py-5 text-white rounded-full text-xl font-medium flex justify-center items-center"
                href="https://www.clinicsanmiguel.com/registration?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHBpcmF0aW9uIjpudWxsLCJjb250ZXh0Ijp7ImFwcG9pbnRtZW50X2lkIjpudWxsLCJwYXRpZW50X2lkIjpudWxsLCJmb3JtX2lkIjoiNjViYjVjOWItZjY2Yi00MmExLTljYTQtMzM1ZWM3N2U4M2Y2IiwicGF0aWVudF90eXBlIjpudWxsfX0.10RNe40o0BrF1vftsK3Cq2bwt-X86P39nj4iXSGRiOk"
              >
               {t('makeAppointment')}
              </a>
              <button className="w-[40%] lg:w-[25%] border border-[#D01717] py-4 lg:py-5 rounded-full text-[#D01717] font-semibold text-xl flex justify-center items-center">
              {t('virtualVisit')}
              </button>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
