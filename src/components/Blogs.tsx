import React from "react";
import { useTranslation } from "next-i18next";

const Blogs = () => {
  const {t} = useTranslation();
  const topBlogs = [
    {
      date: "24 Oct, 2022",
      title: 'title1',
      image: "/image 2.png",
    },
    {
      date: "24 Oct, 2022",
      title:'title2',
      image: "/image 3.png",
    },
    {
      date: "24 Oct, 2022",
      title:'title3',
      image: "/image 4.png",
    },
  ];
  return (
    <div className="w-full flex justify-center min-h-[50vh] py-20 bg-[#F9F8F6]">
      <div className="w-[90%] max-w-[1500px] flex flex-col gap-5 justify-center items-center\">
        <h2 className="uppercase text-5xl text-[#D01717] font-bold text-center">
          {t('blogsUpper')}
        </h2>
        <h3 className="text-[#525252] text-4xl font-semibold text-center mb-5">
          {t('discoverArticles')}
        </h3>
        <div className="w-full flex-col md:flex-row items-center flex justify-between mt-6 gap-3 flex-wrap">
          {topBlogs.map((blog, index) => (
            <div key={index} className="w-[350px] flex flex-col gap-4">
              <img
                src={blog.image}
                className="w-full h-[250px] rounded-xl mb-2"
              ></img>
              <h5 className="text-[#AAAAAA] font-semibold">{blog.date}</h5>
              <h4 className="text-black text-xl font-semibold w-[90%]">
                {t(blog.title)}
              </h4>
            </div>
          ))}
        </div>
        <button className="py-3 px-16 bg-none font-bold text-sm border border-[#D01717] text-[#D01717] rounded-lg self-center my-10">
          {t('viewAll')}
        </button>
      </div>
    </div>
  );
};

export default Blogs;
