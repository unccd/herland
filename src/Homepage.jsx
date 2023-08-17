import { useEffect, useState, useRef } from "react";
import "./assets/css/Homepage.css";
import LandingPanel from "./slides/Landing/LandingPanel";
import CampaignVideo from "./slides/CampaignVideo/CampaignVideo";
import PortraitCarousel from "./slides/PortraitCarousel/PortraitCarousel";
import HerlandStories from "./slides/HerlandStories/HerlandStories";
import VideoExhibiton from "./slides/VideoExhibition/VideoExhibition";
import Footer from "./slides/Footer/Footer";
import UnccdLogoBlack from "./static/logos/unccd-black.svg";
import UnccdLogoWhite from "./static/logos/unccd-white.svg";
import CampaignToolkit from "./slides/CampaignToolkit/CampaignToolkit";
import VirtualExhibition from "./slides/VirtualExhibition/VirtualExhibition";
import PortraitOverlay from "./overlays/PortraitOverlay";
import VideoOverlay from "./overlays/VideoOverlay";
import Healverse from "./slides/Healverse/Healverse";

function Homepage() {
  const [isPortraitOverlayActive, setIsPortraitOverlayActive] = useState(false);
  const [overlayPortraitSrc, setOverlayPortraitSrc] = useState("");
  const [isVideoOverlayActive, setIsVideoOverlayActive] = useState(false);
  const [overlayVideoSrc, setOverlayVideoSrc] = useState("");

  const [UNCCD_LOGO, SET_UNCCD_LOGO] = useState(UnccdLogoWhite);
  const changeLogoColor = (currentPanel) => {
    if (currentPanel.contains("unccd-logo-white")) {
      SET_UNCCD_LOGO(UnccdLogoWhite);
    } else if (currentPanel.contains("unccd-logo-black")) {
      SET_UNCCD_LOGO(UnccdLogoBlack);
    }
  };
  useEffect(() => {
    // Set up vars
    const _window = window;
    const initialPanels = document.querySelectorAll(".panel");
    const panels = Array.from(initialPanels).map((panel) => {
      if (panel.offsetHeight > window.innerHeight) {
        panel.style.height = `${panel.offsetHeight}px`;
        panel.className = `${panel.classList} panel-taller`;
        panel.style.position = "relative";
        return panel;
      }
      return panel;
    });
    const panelsY = Array.from(panels).map(
      (panel) => panel.offsetTop + panel.offsetHeight
    );
    // console.log(panelsH);
    // console.log(panelsY)

    // Bind our function to window scroll
    _window.addEventListener("scroll", updateWindow);

    // Update the window
    function updateWindow() {
      const y = _window.scrollY + _window.innerHeight;
      // Loop through our panel positions
      let i;
      for (i = 0; i < panels.length; i++) {
        /* 
            Firstly, we break if we're checking our last panel,
            otherwise we compare if the y position is in between
            two panels
          */
        if (
          i === panels.length - 1 ||
          (y >= panelsY[i] && y <= panelsY[i + 1])
        ) {
          break;
        }
      }

      // Update classes
      panels.forEach((panel, index) => {
        if (index === i) {
          changeLogoColor(panel.classList)

          panel.classList.add("panel-fixed");
        } else {
          panel.classList.remove("panel-fixed");
        }
      });
    }

    // Cleanup event listener on component unmount
    return () => {
      _window.removeEventListener("scroll", updateWindow);
    };
  }, []);

  // useEffect(() => {
  //   // Set up vars
  //   const _window = window;
  //   const panels = document.querySelectorAll(".panel");
  //   const panelsY = Array.from(panels).map(
  //     (panel) => panel.offsetTop + panel.offsetHeight
  //   );

  //   // Bind our function to window scroll
  //   _window.addEventListener("scroll", updateWindow);

  //   // Update the window
  //   function updateWindow() {
  //     const y = _window.scrollY + _window.innerHeight;
  //     // Loop through our panel positions
  //     let i;
  //     for (i = 0; i < panels.length; i++) {
  //       /* 
  //           Firstly, we break if we're checking our last panel,
  //           otherwise we compare if the y position is in between
  //           two panels
  //         */
  //       if (
  //         i === panels.length - 1 ||
  //         (y >= panelsY[i] && y <= panelsY[i + 1])
  //       ) {
  //         break;
  //       }
  //     }

  //     // Update classes
  //     panels.forEach((panel, index) => {
  //       if (index === i) {
  //         changeLogoColor(panel.classList)
  //         panel.classList.add("panel-fixed");
  //       } else {
  //         panel.classList.remove("panel-fixed");
  //       }
  //     });
  //   }

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     _window.removeEventListener("scroll", updateWindow);
  //   };
  // }, []);

  return (
    <>
      <div className="panel unccd-logo-white">
        <LandingPanel />
      </div>
      <div className="panel unccd-logo-white">
        <CampaignVideo />
      </div>
      <div className="panel unccd-logo-white">
        <CampaignToolkit />
      </div>
      <div className="panel unccd-logo-white">
        <HerlandStories />
      </div>
      <div className="panel unccd-logo-black">
        <PortraitCarousel setIsOverlayActive={setIsPortraitOverlayActive} setPortraitSrc={setOverlayPortraitSrc}/>
      </div>
      <div className="panel unccd-logo-white">
        <VideoExhibiton setIsOverlayActive={setIsVideoOverlayActive} setVideoSrc={setOverlayVideoSrc}/>
      </div>
      <div className="panel unccd-logo-black">
        <VirtualExhibition />
      </div>
      <div className="panel unccd-logo-white">
        <Healverse />
      </div>
      <div className="panel unccd-logo-white">
        <Footer />
      </div>
      <img
        id="unccd-logo"
        src={UNCCD_LOGO}
        alt="UNCCD-logo"
        className="unccd-logo mt-6"
      />
      {isPortraitOverlayActive ? 
        <PortraitOverlay
          portraitSrc={overlayPortraitSrc}
          setIsOverlayActive={setIsPortraitOverlayActive}
        />
       : 
        ""
      }
      {isVideoOverlayActive ? <VideoOverlay setIsOverlayActive={setIsVideoOverlayActive} url={overlayVideoSrc} />  : ''}
    </>
  );
}

export default Homepage;
