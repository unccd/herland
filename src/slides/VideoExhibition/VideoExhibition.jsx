import { useState } from "react";
import YuzenThumbnail from "../../static/video-thumbnails/1.png";
import SuhucamThumbnail from "../../static/video-thumbnails/2.png";
import AlvarezThumbnail from "../../static/video-thumbnails/3.png";
import PlayIcon from "../../static/icons/play-fill.svg";
import VideoOverlay from "../../overlays/VideoOverlay";

function VideoExhibition(props) {
  const {setIsOverlayActive, setVideoSrc} = props
  const showVideoOverlay = (url) => {
    setVideoSrc(url);
    setIsOverlayActive(true);
  };
  
  const nameClassNames = "xs:text-xl md:text-3xl font-light mt-6";
  const descriptionClassNames = "xs:text-md md:text-lg font-light mt-6";
  return (
    <section className="full-height bg-gray-950 text-white flex flex-col panel-inner mb-20">
      <h2 className="xs:text-3xl md:text-4xl lg:text-5xl pt-40 font-light  ">
        Video-Art Exhibition: "TransNature" #HerLand{" "}
      </h2>
      <p className="xs:text-lg md:text-xl lg:text-2xl pt-10 font-light  ">
        Discover a unique fusion of nature, technology, and art in the
        'TransNature' video-art exhibition. Five short loops invite you to
        reflect on our environment's transformation, interconnectedness, and the
        challenges of desertification. Experience the beauty and complexity of
        our evolving relationship with the planet.
      </p>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-12 lg:gap-24 mt-16 col-span-10">
        <div className="">
          <div
            className="video-thumbnail-wrapper flex justify-center"
            onClick={() => showVideoOverlay("dlbWSxvqq9I")}
          >
            <img
              src={YuzenThumbnail}
              alt="Yin Yuzhen"
              className="video-thumbnail"
            />
            <img src={PlayIcon} className="play-button" />
          </div>
          <h3 className={nameClassNames}>Yin Yuzhen</h3>
          <p className={descriptionClassNames}>
            The Woman Who Turned Desert into Oasis 
          </p>
        </div>
        <div className=" ">
          <div
            className="video-thumbnail-wrapper"
            onClick={() => showVideoOverlay("NzAtPwMbGgw")}
          >
            <img
              src={SuhucamThumbnail}
              alt="Suhucam"
              className="video-thumbnail"
            />
            <img src={PlayIcon} className="play-button" />
          </div>
          <h3 className={nameClassNames}>Suhucam</h3>
          <p className={descriptionClassNames}>
          Igniting Change in Bamunkumbit, Cameroon          </p>
        </div>
        <div className=" ">
          <div
            className="video-thumbnail-wrapper flex justify-center"
            onClick={() => showVideoOverlay("WUJJDowTnAk")}
          >
            <img
              src={AlvarezThumbnail}
              alt="Marite Alvarez"
              className="video-thumbnail"
            />
            <img src={PlayIcon} className="play-button" />
          </div>
          <h3 className={nameClassNames}>Marite Alvarez</h3>
          <p className={descriptionClassNames}>
          Embracing the Wisdom of Pastoral Life   
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default VideoExhibition;
