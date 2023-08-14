import React from "react";
import ArrowRight from "../../static/icons/arrow-right.svg";
function Footer() {
  return (
    <section className="full-height footer-background flex flex-col justify-center panel-inner">
      <div className="text-black">
        <p className="max-sm:text-2xl text-4xl font-light">
          Lasting change comes with the help of many:
       you too can help from within your community..
        </p>
        <div className="flex  flex-row sm:gap-2 md:gap-10 mt-20 items-center contact-flex">
          <div className="flex sm:gap-2 md:gap-5">
            <img src={ArrowRight} className="icon scale-150" />
            <p className="sm:text-xl md:text-2xl m-0">
              Lend your <br /> support
            </p>
          </div>
          <div className="flex sm:gap-2 md:gap-5">
            <img src={ArrowRight} className="icon scale-150" />
            <p className="sm:text-xl md:text-2xl m-0">
              More about <br /> the initiative
            </p>
          </div>
          <div className="flex sm:gap-2 md:gap-5">
            <img src={ArrowRight} className="icon scale-150" />
            <p className="sm:text-xl md:text-2xl m-0">Contact</p>
          </div>
        </div>
        {/* <div className="flex max-sm:flex-column md:flex-row gap-20 mt-20 items-start">
          <div className="flex gap-10">
            <img src={ArrowRight} className="icon scale-150" />
            <p className="text-2xl">
              Lend your <br /> support
            </p>
          </div>
          <div className="flex gap-10">
            <img src={ArrowRight} className="icon scale-150" />
            <p className="text-2xl">
              More about <br /> the initiative
            </p>
          </div>
          <div className="flex gap-10">
            <img src={ArrowRight} className="icon scale-150" />
            <p className="text-2xl">Contact</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Footer;
