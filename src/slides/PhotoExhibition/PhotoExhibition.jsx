import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import importAllSmallPortraits from "./importPortraits";
import PortraitOverlay from "../../overlays/PortraitOverlay";
import { useState } from "react";

function PhotoExhibition(props) {
  const { setIsOverlayActive, setPortraitSrc } = props;
  const openOverlay = (portraitSrc) => {
    setIsOverlayActive(true);
    setPortraitSrc(portraitSrc);
  };
  const portraits = importAllSmallPortraits(
    import.meta.globEager("../../static/small-portraits/*.jpg")
  );
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
    <section className="full-height bg-white flex flex-column justify-around panel-inner">
      <div className="font-light">
        <h2 className="max-sm:text-base sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-light text-black pt-32">
          #HerLand Photo Exhibition
        </h2>
        <div className="grid grid-cols-12 text-black">
          <p className="max-sm:text-base lg:text-base 2xl:text-2xl  font-light mt-8 md:col-span-8 sm:col-span-12 max-sm:col-span-12" >
            Experience the strength and beauty of women across continents in our
            exclusive 'Women & Land' photo exhibition. Curated by
            <a
              href="https://www.unccd.int/convention/land-ambassadors/inna-modja"
              target="_blank"
              className="underline"
            >
              Inna Modja, UNCCD Goodwil Ambassador
            </a>
            and Marco Conti Sikic, these portraits portray the essence of
            women's relationship with the land.
          </p>
        </div>
      </div>

      <Carousel
        arrows
        draggable
        infinite
        keyBoardControl
        responsive={carouselResponsive}
        slidesToSlide={1}
        swipeable
      >
        {portraits.map((portraitSrc, index) => (
          <div
            key={index}
            className="carousel-image-wrapper cursor-pointer"
            onClick={() => {
              openOverlay(portraitSrc);
            }}
          >
            <img
              src={portraitSrc}
              alt={`Portrait ${index}`}
              className="carousel-image "
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default PhotoExhibition;
