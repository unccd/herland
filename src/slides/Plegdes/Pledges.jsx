import React from "react";
import ArrowRight from "../../static/icons/arrow-right.svg";
import Carousel from "react-multi-carousel";
import pledgeData from "./pledgeData";
import "react-multi-carousel/lib/styles.css";
import {
  textH2,
  textBodyLarge,
  textBodyMedium,
} from "../../assets/css/fontSizes";

function Pledge(props) {
  const { author, authorOccupation, paragraphs } = props;
  return (
    <div className="pledge-card bg-violet-800 text-white grid content-between sm:p-4 md:p-8 max-sm:p-4 m-2">
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="max-sm:text-sm md:text-sm mb-2 2xl:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="text-right">
        <h3 className="xl:text-2xl g:text- xl sm:text-xl md:text-base max-sm:text-xl">
          {author}
        </h3>
        <h4 className="xl:text-xl lg:text-base sm:text-base md:text-small font-light">
          {authorOccupation}
        </h4>
      </div>
    </div>
  );
}
function Pledges() {
  const carouselResponsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <section className="panel-inner grid grid-cols-12 items-center  bg-white">
      <div className="col-span-12 grid grid-cols-12 gap-4  ">
        <div className="col-span-12">
          <h2 className={`${textH2} lg:mt-16 md:mt-32`}>
            Global leaders call to action on women’s land rights{" "}
          </h2>
          <p className={`${textBodyMedium} mt-6`}>
            United Nations General Assembly event to mark Desertification and
            Drought Day brings together leaders to advance gender equality and
            land restoration goals.
          </p>
          <a href="mailto:herland@unccd.int" target="_blank">
            <div className="flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-4 cursor-pointer text-violet-700">
              <img src={ArrowRight} className="icon scale-150" />
              <p className="font-bold m-0">Add your pledge</p>
            </div>
          </a>
        </div>
        <div className="col-span-12">
          <Carousel
            arrows
            draggable
            infinite
            keyBoardControl
            responsive={carouselResponsive}
            slidesToSlide={1}
            swipeable
          >
            {pledgeData.map((pledge, index) => (
              <Pledge
                key={index}
                author={pledge.author}
                authorOccupation={pledge.authorOccupation}
                paragraphs={pledge.paragraphs}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Pledges;
