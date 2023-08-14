import { useState } from "react";
import BrochureImg from "../../static/images/brochure-mockup.png";
import ArrowRight from "../../static/icons/arrow-right.svg";
import ImageOverlay from "./ImageOverlay";

function Brochure() {
  const [isOverlayActive, setIsOverlayActive] = useState(false)
  const showImageOverlay = () => {
    setIsOverlayActive(true)
  };
  return (
    <section className="bg-neutral-900 full-height text-white panel-inner">
      <p className="text-3xl pt-40">Explore the digital brochure</p>
      <div>
        <img
          src={BrochureImg}
          alt="brochure"
          className="brochure cursor-pointer	"
          onClick={() => showImageOverlay(0)}
        />
      </div>
      <div className="flex align-center mt-4 gap-1 cursor-pointer	" onClick={() => showImageOverlay(0)}>
        <img
          src={ArrowRight}
          alt="Right arrow"
          className="scale-150 icon-white"
        />
        <p className="m-0">Open flipbook</p>
      </div>

    {isOverlayActive ? <ImageOverlay setIsOverlayActive={setIsOverlayActive}/> : ''}
    </section>
  );
}

export default Brochure;
