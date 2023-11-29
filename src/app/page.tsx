"use client"
import Blogs from "@/components/Blogs";
import BookAppointment from "@/components/BookAppointment";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import WhyUs from "@/components/WhyUs";
import LocaleContext from "@/context/LocaleContext";
import i18n from "@/i18n";
import React, { Suspense, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const SecondMainPage = () => {
  const [locale, setLocale] = useState(i18n.language);
  
  useEffect(() => {
    const handleLanguageChange = (lng: string) => setLocale(lng);
    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup on component unmount
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);
  const {t} = useTranslation();
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>

    <Suspense >  <div className="w-full min-h-[200vh] flex flex-col items-center">
            
            <Navbar />
            <Hero
              heroText={`${t('wellnessInYourNeighborhood')}-`}
              location={t('clinicaSanMiguel')}
              heroTextConitnued={`, ${t('riverOaksBlvd')}`}
            />
            <WhyUs name={t('clinicaSanMiguel')} location={t('riverOaksBlvd')} />
            <BookAppointment bgUrl="/Rectangle 13.png" />
            <Reviews />
            <Blogs />
            <Footer />
      
          </div></Suspense>
    </LocaleContext.Provider>

  );
};

export default SecondMainPage;
