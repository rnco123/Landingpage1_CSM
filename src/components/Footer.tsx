"use client";

import { FaFacebook, FaYoutube } from "react-icons/fa";
import React from "react";
import { IconContext } from "react-icons";
import { useTranslation } from "next-i18next";


const Footer = () => {
  const {t} = useTranslation(); 
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-start w-full justify-center bg-[#434343]">
        <div className="w-full lg:w-1/2 flex py-10 px-10 flex-col justify-center text-[#000000] lg:rounded-br-[60px] lg:rounded-tr-[60px] bg-white gap-5">
          <img src="/footerLogo.png" alt="footer-logo" className="w-24" />
          <p className="text-[#181818] font-semibold">
          {t('infoText')}
          </p>
          <div className="flex flex-col w-full font-bold py-1">
            <p className="pb-[3px]">{t('helplineLabel')}</p>
            <p>
            {t('phone')}{" "}
              <span className="text-[#C1001F] font-medium">: 682-267-8369</span>
            </p>
          </div>
          <div className="flex flex-col w-full font-bold py-1">
            <p className="pb-[3px]">{t('openingHoursLabel')}</p>
            <p>
              {t('weekdayHours')}{" "}
              <span className="text-[#C1001F] font-semibold">10am - 7pm</span>
            </p>
            <p>
            {t('weekendHours')}{" "}
              <span className="text-[#C1001F] font-semibold">10am - 5pm</span>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex py-10 pt-16 px-10 lg:px-20 justify-between items-start">
          <div className="">
            <h4 className="text-white font-bold pb-5 tracking-wide">
              {t('informationTitle')}
            </h4>
            <ul className="flex flex-col gap-2 font-light text-[17px] tracking-wide text-[#DAD3D3]">
            <li>{t('aboutUs')}</li>
              <li>{t('services')}</li>
              <li>{t('additionalServices')}</li>
              <li>{t('special')}</li>
              <li>{t('contactUs')}</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-white font-bold pb-5 tracking-wide">
            {t('informationTitle')}
            </h4>
            <ul className="flex flex-col gap-2 font-light text-[17px] tracking-wide text-[#DAD3D3]">
              <li>{t('aboutUs')}</li>
              <li>{t('services')}</li>
              <li>{t('additionalServices')}</li>
              <li>{t('special')}</li>
              <li>{t('contactUs')}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold pb-5 tracking-wide">
              {t('followUsTitle')}
            </h4>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/ClinicaHispanaSanMiguel/">
                <IconContext.Provider
                  value={{ color: "#fff", className: "text-2xl" }}
                >
                  <FaFacebook />
                </IconContext.Provider>
              </a>
              <a href="https://www.youtube.com/channel/UC-89xwmnpU6ZEPSawRZKNIw">
                <IconContext.Provider
                  value={{ color: "#fff", className: "text-2xl" }}
                >
                  <FaYoutube />
                </IconContext.Provider>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-[#D01717] h-8 text-white flex justify-center items-center">
        <span className="text-sm text-center">
          {t('allRightsReserved')}
        </span>
      </div>
    </div>
  );
};

export default Footer;
