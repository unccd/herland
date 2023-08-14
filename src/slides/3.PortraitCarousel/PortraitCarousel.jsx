import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import importAllSmallPortraits from "./importPortraits";

function PortraitCarousel() {
  const portraits = importAllSmallPortraits(
    import.meta.globEager("../../static/small-portraits/*.jpg")
  );
  const carouselResponsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
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
      <div>
        <p className="lg:text-3xl md:text-2xl text-black pt-36">
          And yet, thread by thread it unwinds. Her land falls behind,<br/>tired, scarce, degraded, vulnerable.
        </p>
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
          <div key={index} className="carousel-image-wrapper">
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

export default PortraitCarousel;
