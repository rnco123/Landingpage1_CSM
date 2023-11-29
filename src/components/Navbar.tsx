import LocaleContext from "@/context/LocaleContext";
import i18n from "@/i18n";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { useTranslation } from "next-i18next";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useContext(LocaleContext);
  const { t } = useTranslation();


  function changeLocale(l:string) {
    if (locale !== l) {
      i18n.changeLanguage(l);
      setIsOpen(false);
    }
  }
  return (
    <div className="w-full h-20 flex items-center justify-between bg-white px-10">
    <div className="flex h-full items-center">
      <Image src="/logo.png" alt="logo" height={100} width={180} />
    </div>
    <ul className="h-full hidden lg:flex items-center gap-10 text-[#333333]">
      <a href="https://www.clinicsanmiguel.com/about">
        <li className="font-medium">{t('aboutUs')}</li>
      </a>
      <a href="https://www.clinicsanmiguel.com/blog">
        <li className="font-medium">{t('services')}</li>
      </a>
      <a href="https://www.clinicsanmiguel.com/services">
        <li className="font-medium">{t('blogs')}</li>
      </a>
    </ul>
   
    <div className="relative inline-block text-[#000000] flex gap-5 items-center">
      <button className="px-10 md:px-12 py-[10px] text-white bg-[#D01717] text-sm rounded-md">
        {t('contactUs')}
      </button>
      <div>{t('language')}: </div>
      <span
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Display the flag based on the selected language */}
        {locale === 'en' && <img src="/USA.png" className="h-6 w-6" alt="English" />}
        {locale === 'es' && <img src="/spain.png" className="h-6 w-6" alt="Spanish" />}
        <ChevronDown className="text-[#333333]" size={20} />
      </span>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute top-8 right-0 bg-white border border-gray-300 p-2">
          <div
            className="cursor-pointer"
            onClick={() => changeLocale('en')}
          >
            <img src="/USA.png" className="h-6 w-6 mr-2" alt="English" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => changeLocale('es')}
          >
            <img src="/spain.png" className="h-6 w-6 mr-2" alt="Spanish" />
          </div>
          {/* Add more languages as needed */}
        </div>
      )}
    </div>
  </div>
  );
};

export default Navbar;
