import React from "react";
import videoExhibitionImg from "../../static/images/virtual-exhibition.png";
import ArrowRight from "../../static/icons/arrow-right.svg";
import { textH2, textBodyLarge } from "../../assets/css/fontSizes";

function VirtualExhibition() {
  return (
    <section className="bg-white panel-inner grid grid-cols-2 gap- h-full">
      <div className="lg:col-span-1 flex items-center sm:col-span-2 max-sm:col-span-2 md:mt-10 sm:mt-10 lg:mt-0 max-sm:mt-10">
        <div className="font-light  md:mr-16 sm:mr-4 max-sm:mr-0">
          <h2 className={`${textH2}`}>Interactive virtual exhibition</h2>
          <p className={`${textBodyLarge} mt-8`}>
            You are also invited to access UNCCD's interactive virtual
            exhibition for Desertification & Drought Day on spatial.io. You will
            be able to create a free account, then choose or create an avatar
            and visit the virtual space.
          </p>
          <a
            href="https://www.spatial.io/s/UNCCD-desertification-and-drought-day-647fac7fd64fd8e8d68f2e98?share=3481878158271637714"
            target="_blank"
          >
            <div className="flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-4 cursor-pointer text-violet-700 hover:underline">
              <img src={ArrowRight} className="icon scale-150" />
              <p className={textBodyLarge}>Enter the exhibition</p>
            </div>
          </a>
        </div>
      </div>

      <div className="lg:col-span-1  flex items-center p-8 sm:col-span-2 max-sm:col-span-2 ">
        <img
          src={videoExhibitionImg}
          alt="Video Exhibition"
          className="max-h-full max-w-full m-1 video-thumbnail"
        />
      </div>
    </section>
  );
}

export default VirtualExhibition;
