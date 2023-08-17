import React from "react";
import videoExhibitionImg from "../../static/images/virtual-exhibition.png";
import ArrowRight from "../../static/icons/arrow-right.svg";

function VirtualExhibition() {
  return (
    <section className="bg-white panel-inner grid grid-cols-2 h-full">
      <div className="lg:col-span-1  flex items-center p-8 sm:col-span-2 max-sm:col-span-2">
        <div className="font-light">
          <h2 className="xs:text-3xl md:text-4xl lg:text-5xl pt-40 font-light  ">
            Interactive virtual exhibition
          </h2>
          <p className="text-gray-700 xs:text-xl md:text-xl lg:text-2xl">
            You are also invited to access UNCCD's interactive virtual
            exhibition for Desertification & Drought Day on spatial.io. You will
            be able to create a free account, then choose or create an avatar
            and visit the virtual space.
          </p>
          <a
            href="https://www.spatial.io/s/UNCCD-desertification-and-drought-day-647fac7fd64fd8e8d68f2e98?share=3481878158271637714"
            target="_blank"
          >
            <div className="flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-4 cursor-pointer">
              <img src={ArrowRight} className="icon scale-150" />
              <p className="sm:text-xl md:text-2xl m-0">
                Enter the exhibition
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="lg:col-span-1  flex items-center p-8 sm:col-span-2 max-sm:col-span-2 ">
        <img
          src={videoExhibitionImg}
          alt="Video Exhibition"
          className="max-h-full max-w-full m-1"
        />
      </div>
    </section>
  );
}

export default VirtualExhibition;
