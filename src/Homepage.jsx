import { useEffect, useState, useRef } from "react";
import "./assets/css/Homepage.css";
import LandingPanel from "./slides/1.Landing/LandingPanel";
import CampaignVideo from "./slides/2.CampaignVideo/CampaignVideo";
import PortraitCarousel from "./slides/3.PortraitCarousel/PortraitCarousel";
import Desert from "./slides/4.Desert/Desert";
import VideoExhibiton from "./slides/5.VideoExhibition/VideoExhibition";
import Brochure from "./slides/6.Brochure/Brochure";
import Footer from "./slides/7.Footer/Footer";
import UnccdLogoBlack from "./static/logos/unccd-black.svg";
import UnccdLogoWhite from "./static/logos/unccd-white.svg";

function Homepage() {
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
    const panels = document.querySelectorAll(".panel");
    const panelsY = Array.from(panels).map((panel) => panel.offsetTop);

    // Bind our function to window scroll
    _window.addEventListener("scroll", updateWindow);

    // Update the window
    function updateWindow() {
      const y = _window.scrollY;

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
          changeLogoColor(panel.classList);
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

  return (
    <>
      <div className="panel unccd-logo-white">
        <LandingPanel />
      </div>
      <div className="panel unccd-logo-white">
        <CampaignVideo />
      </div>
      <div className="panel unccd-logo-black">
        <PortraitCarousel />
      </div>
      <div className="panel unccd-logo-white">
        <Desert />
      </div>
      <div className="panel unccd-logo-black">
        <VideoExhibiton />
      </div>
      <div className="panel unccd-logo-white">
        <Brochure />
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
    </>
  );
}

export default Homepage;
