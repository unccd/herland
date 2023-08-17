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
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Homepage() {
  const [isPortraitOverlayActive, setIsPortraitOverlayActive] = useState(false);
  const [overlayPortraitSrc, setOverlayPortraitSrc] = useState("");
  const [isVideoOverlayActive, setIsVideoOverlayActive] = useState(false);
  const [overlayVideoSrc, setOverlayVideoSrc] = useState("");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const [UNCCD_LOGO, SET_UNCCD_LOGO] = useState(UnccdLogoWhite);
  const changeLogoColor = (currentPanel) => {
    if (currentPanel.contains("unccd-logo-white")) {
      SET_UNCCD_LOGO(UnccdLogoWhite);
    } else if (currentPanel.contains("unccd-logo-black")) {
      SET_UNCCD_LOGO(UnccdLogoBlack);
    }
  };

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts

    // Set up vars
    let isPanelsTallerThanWindow = false;
    const _window = window;
    const initialPanels = document.querySelectorAll(".panel");
    const panels = Array.from(initialPanels).map((panel) => {
      if (panel.offsetHeight > window.innerHeight) {
        // panel.style.height = `${panel.offsetHeight}px`;
        panel.className = `${panel.classList} panel-taller`;
        isPanelsTallerThanWindow = true;
        // panel.style.position = "relative";
        return panel;
      }
      return panel;
    });
    const panelsY = Array.from(panels).map(
      (panel) => panel.offsetTop + panel.offsetHeight
    );
 

    // Bind our function to window scroll
    _window.addEventListener("scroll", updateWindow);

    if (isPanelsTallerThanWindow) {
      _window.removeEventListener("scroll", updateWindow);
      Array.from(document.querySelectorAll(".panel")).map((panel) => {
        const clearPanelClassList = panel.className.replace("panel-fixed", "").replace("panel-taller", "");
        panel.className = clearPanelClassList;
        return panel;
      });

    }
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
      // panels.forEach((panel, index) => {
      //   if (index === i) {
      //     changeLogoColor(panel.classList);

      //     panel.classList.add("panel-fixed");
      //   } else {
      //     panel.classList.remove("panel-fixed");
      //   }
      // });
      panels.forEach((panel, index) => {
        if (index === i) {
          changeLogoColor(panel.classList);
          if (panel.classList.contains("panel-taller")) {
            panel.classList.add("panel-fixed-tall");
          } else {
            panel.classList.add("panel-fixed");
          }
        } else {
          if (panel.classList.contains("panel-taller")) {
            panel.classList.remove("panel-fixed-tall");
          } else {
            panel.classList.remove("panel-fixed");
          }
        }
      });
    }
    // _window.removeEventListener("scroll", updateWindow);

    return () => {
      window.removeEventListener("resize", handleResize);
      _window.removeEventListener("scroll", updateWindow);
    };
    // // Cleanup event listener on component unmount
    // return () => {
    //   _window.removeEventListener("scroll", updateWindow);
    // };
  }, [viewportWidth]);

  return (
    <>
      <div className="panel unccd-logo-white">
        <LandingPanel />
      </div>
      <div className="panel unccd-logo-white">
        <CampaignVideo />
      </div>
      <div className="panel unccd-logo-black">
        <CampaignToolkit />
      </div>
      <div className="panel unccd-logo-white">
        <HerlandStories />
      </div>
      <div className="panel unccd-logo-black">
        <PortraitCarousel
          setIsOverlayActive={setIsPortraitOverlayActive}
          setPortraitSrc={setOverlayPortraitSrc}
        />
      </div>
      <div className="panel unccd-logo-white">
        <VideoExhibiton
          setIsOverlayActive={setIsVideoOverlayActive}
          setVideoSrc={setOverlayVideoSrc}
        />
      </div>
      <div className="panel unccd-logo-black">
        <VirtualExhibition />
      </div>
      <div className="panel unccd-logo-white">
        <Healverse />
      </div>
      <div className="panel unccd-logo-black">
        <Footer />
      </div>
      <section class="copywright bg-gray-950 text-white py-4">
        <p className="text-xs"> ©UNCCD 2023</p>
      </section>
      <img
        id="unccd-logo"
        src={UNCCD_LOGO}
        alt="UNCCD-logo"
        className="unccd-logo mt-6"
      />
      {isPortraitOverlayActive ? (
        <PortraitOverlay
          portraitSrc={overlayPortraitSrc}
          setIsOverlayActive={setIsPortraitOverlayActive}
        />
      ) : (
        ""
      )}
      {isVideoOverlayActive ? (
        <VideoOverlay
          setIsOverlayActive={setIsVideoOverlayActive}
          url={overlayVideoSrc}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Homepage;
