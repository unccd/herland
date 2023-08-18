import { useState } from "react";
import YuzenThumbnail from "../../static/video-thumbnails/1.png";
import SuhucamThumbnail from "../../static/video-thumbnails/2.png";
import AlvarezThumbnail from "../../static/video-thumbnails/3.png";
import PlayIcon from "../../static/icons/play-fill.svg";
import VideoOverlay from "../../overlays/VideoOverlay";

function VideoExhibition(props) {
  const { setIsOverlayActive, setVideoSrc } = props;
  const showVideoOverlay = (url) => {
    setVideoSrc(url);
    setIsOverlayActive(true);
  };

  const nameClassNames =
    "max-xs:text-2xl xs:text-xl md:text-3xl font-light mt-6";
  const descriptionClassNames =
    "max-xs:text-base xs:text-base md:text-lg font-light mt-2";

  return (
    <section className="full-height bg-gray-950 text-white flex flex-col panel-inner">
      <h2 className="max-sm:text-2xl sm:text-3xl lg:text-5xl pt-40 font-light  ">
        Video-Art Exhibition: "TransNature" #HerLand
      </h2>
      <p className="max-sm:text-base lg:text-base 2xl:text-2xl  pt-10 font-light  ">
        Discover a unique fusion of nature, technology, and art in the
        'TransNature' video-art exhibition. Five short loops invite you to
        reflect on our environment's transformation, interconnectedness, and the
        challenges of desertification. Experience the beauty and complexity of
        our evolving relationship with the planet.
      </p>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-6 md:gap-12 lg:gap-24 mt-16 col-span-10">
        <div className="my-6">
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
        <div className="my-6">
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
            Igniting Change in Bamunkumbit, Cameroon{" "}
          </p>
        </div>
        <div className="my-6">
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
