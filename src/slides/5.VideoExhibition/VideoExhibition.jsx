import { useState } from "react";
import YuzenThumbnail from "../../static/video-thumbnails/1.png";
import SuhucamThumbnail from "../../static/video-thumbnails/2.png";
import AlvarezThumbnail from "../../static/video-thumbnails/3.png";
import PlayIcon from "../../static/icons/play-fill.svg";
import VideoOverlay from "./VideoOverlay";

function VideoExhibition() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const showVideoOverlay = (url) => {
    setVideoURL(url);
    setIsOverlayActive(true);
  };

  const nameClassNames = "xs:text-xl md:text-4xl font-light mt-6";
  const descriptionClassNames = "xs:text-l md:text-xl font-light";
  return (
    <section className="full-height bg-white flex flex-col panel-inner">
      <p className="xs:text-3xl md:text-4xl lg:text-5xl pt-40 font-light text-black">
        Join the brave women who saw the seed of change.
      </p>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-12 lg:gap-24 mt-16 col-span-10">
        <div className="text-black">
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
            In the vast deserts of Ordos City, inner Mongolia, China. A woman
            named Yin Yuzhen sows the seeds of change, braving sandstorm. She's
            turned the desert into an oasis controlling over 4000 hectares of
            shifting dunes.
          </p>
        </div>
        <div className="text-black">
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
            In Bamunkumbit, Cameroon, SUHUCAM sparks a transformation: 65
            Mbororo women educated in land restoration now tend their own earth.
            Through sustainable practices, they're breathing life into the
            environment, fighting climate change.
          </p>
        </div>
        <div className="text-black">
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
            Through sustainable practices, &apos;they're breathing life into the
            environment, fighting climate change, land degradation, and drought,
            reviving 15 hectares, generating 80 local jobs, and creating a
            booming agriculture.
          </p>
        </div>
      </div>
      {isOverlayActive ? (
        <VideoOverlay url={videoURL} setIsOverlayActive={setIsOverlayActive} />
      ) : (
        ""
      )}
    </section>
  );
}

export default VideoExhibition;
