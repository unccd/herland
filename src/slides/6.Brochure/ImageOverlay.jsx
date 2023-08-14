import { useState } from "react";
import CloseIcon from "../../static/icons/x.svg";
import img0 from "../../static/portraits/Aiyana-USA-(Alaska).jpg"
import img1 from "../../static/portraits/Habiba-Niger.jpg"
import img2 from "../../static/portraits/Iris-Arctic.jpg"
import LeftArrow from '../../static/icons/arrow-left.svg'
import RightArrow from '../../static/icons/arrow-right.svg'

const brochureData = [
  {
    id: 0,
    name: "Aiyana",
    location: "Alaska, USA",
    title: "For her land she provides, and in return, she's provided for.",
    description:
      "They are both nourished, intertwined, a tapestry old as time. Her land is her right, because her land is her life. Aiyana",
    imgPath: img0
  },
  {
    id:1,
    name: "Habiba",
    location: "Niger",
    title: "For her land she provides, and in return, she's provided for.",
    description:
      "They are both nourished, intertwined, a tapestry old as time. Her land is her right, because her land is her life. Habiba",
    imgPath: img1
  },
  {
    id: 2,
    name: "Iris",
    location: "Artctic",
    title: "For her land she provides, and in return, she's provided for.",
    description:
      "They are both nourished, intertwined, a tapestry old as time. Her land is her right, because her land is her life. Iris",
    imgPath: img2
  },
];


function ImageOverlay(props) {
  const [imageIndex, setImageIndex] = useState(0)
  const { setIsOverlayActive } = props;
  const closeOverlay = () => {
    setIsOverlayActive(false);
    document.body.style.overflow = "scroll"
  };
  const handlePrevSlide = () => {
    if(imageIndex === 0) return
    setImageIndex(imageIndex -1)
  }
  const handleNextSlide = () => {
    if(imageIndex === brochureData.length -1 ) return
    setImageIndex(imageIndex +1)
  }
  
  return (
    <section className="overlay slide-content flex flex-col justify-between">
      <div className="flex justify-between mt-10">
        <h2 className="text-4xl mb-10">
          {brochureData[imageIndex].name} <span className="text-gray-500">({brochureData[imageIndex].location})</span>
        </h2>
        <div className="align-self-center	mt-4">
          <img
            src={CloseIcon}
            className="overlay-close-icon"
            onClick={closeOverlay}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 content-start  gap-12 mb-20">
        <div className="xl:col-span-8 lg:col-span-12 sm:col-span-12 min-[640]:col-span-12">
          <img src={brochureData[imageIndex].imgPath} alt="" />
        </div>
        <div className="xl:col-span-2 lg:col-span-12 sm:col-span-12 flex flex-col justify-between">
          <div>
            <p className="font-bold mb-8">
              {brochureData[imageIndex].title}
            </p>
            <p>
             {brochureData[imageIndex].description}
            </p>
          </div>
          <div className="flex gap-10">
            <button id="prevBtn" onClick={handlePrevSlide}>
              <img src={LeftArrow} className="overlay-arrow icon icon-white" />
            </button>
            <button id="nextBtn" onClick={handleNextSlide}>
              <img
                src={RightArrow}
                className="overlay-arrow icon icon-white"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageOverlay;
