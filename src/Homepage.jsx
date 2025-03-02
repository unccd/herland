import { useEffect, useState } from 'react';
import './assets/css/Homepage.css';
import LandingPanel from './slides/Landing/LandingPanel';
import CampaignVideo from './slides/CampaignVideo/CampaignVideo';
import PhotoExhibition from './slides/PhotoExhibition/PhotoExhibition';
import HerlandStories from './slides/HerlandStories/HerlandStories';
import VideoExhibiton from './slides/VideoExhibition/VideoExhibition';
import Events from './slides/Events/Events';
import CampaignToolkit from './slides/CampaignToolkit/CampaignToolkit';
import VirtualExhibition from './slides/VirtualExhibition/VirtualExhibition';
import PortraitOverlay from './overlays/PortraitOverlay';
import VideoOverlay from './overlays/VideoOverlay';
import Healverse from './slides/Healverse/Healverse';
import Footer from './slides/Footer/Footer';
import HerlandCTA from './slides/HerlandCTA/HerlandCTA';
import Pledges from './slides/Plegdes/Pledges';
import News from './slides/News/News';
import DownloadBook from './slides/DownloadBook/DownloadBook';

function Homepage() {
  const [isPortraitOverlayActive, setIsPortraitOverlayActive] = useState(false);
  const [overlayPortraitSrc, setOverlayPortraitSrc] = useState('');
  const [isVideoOverlayActive, setIsVideoOverlayActive] = useState(false);
  const [overlayVideoSrc, setOverlayVideoSrc] = useState('');
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    let isPanelsTallerThanWindow = false;
    const _window = window;
    const initialPanels = document.querySelectorAll('.panel');
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
    _window.addEventListener('scroll', updateWindow);

    if (isPanelsTallerThanWindow) {
      _window.removeEventListener('scroll', updateWindow);
      Array.from(document.querySelectorAll('.panel')).map((panel) => {
        const clearPanelClassList = panel.className
          .replace('panel-fixed', '')
          .replace('panel-taller', '');
        panel.className = clearPanelClassList;
        return panel;
      });
      isPanelsTallerThanWindow = false;
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

      panels.forEach((panel, index) => {
        if (index === i) {
          if (panel.classList.contains('panel-taller')) {
            panel.classList.add('panel-fixed-tall');
          } else {
            panel.classList.add('panel-fixed');
          }
        } else {
          if (panel.classList.contains('panel-taller')) {
            panel.classList.remove('panel-fixed-tall');
          } else {
            panel.classList.remove('panel-fixed');
          }
        }
      });
    }

    function handleScrollToPanel(event) {
      event.preventDefault();
      const targetPanel = document.querySelector(
        event.target.getAttribute('href')
      );

      if (targetPanel) {
        const targetOffsetTop = targetPanel.offsetTop;

        // Smoothly scroll to the target panel
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth',
        });
      }
    }

    // Attach the click event handler to the a tag
    const scrollLinks = document.querySelectorAll('a[href="#herland-cta"]');
    scrollLinks.forEach((link) => {
      link.addEventListener('click', handleScrollToPanel);
    });
    // _window.removeEventListener("scroll", updateWindow);

    // // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      _window.removeEventListener('scroll', updateWindow);
    };
  }, [viewportWidth]);

  return (
    <>
      <div className='panel'>
        <LandingPanel />
      </div>
      <div className='panel'>
        <CampaignVideo />
      </div>
      <div className='panel'>
        <DownloadBook />
      </div>
      <div className='panel' id='herland-cta'>
        <HerlandCTA />
      </div>
      {/* <div className="panel">
        <Pledges />
      </div> */}
      <div className='panel'>
        <CampaignToolkit />
      </div>
      <div className='panel'>
        <HerlandStories />
      </div>
      <div className='panel'>
        <PhotoExhibition
          setIsOverlayActive={setIsPortraitOverlayActive}
          setPortraitSrc={setOverlayPortraitSrc}
        />
      </div>
      <div className='panel'>
        <VideoExhibiton
          setIsOverlayActive={setIsVideoOverlayActive}
          setVideoSrc={setOverlayVideoSrc}
        />
      </div>
      {/* <div className="panel">
        <VirtualExhibition />
      </div>
      <div className="panel">
        <Healverse />
      </div> */}
      <div className='panel'>
        <Events />
      </div>
      <div className='panel'>
        <News />
      </div>
      <Footer />
      {isPortraitOverlayActive ? (
        <PortraitOverlay
          portraitSrc={overlayPortraitSrc}
          setIsOverlayActive={setIsPortraitOverlayActive}
        />
      ) : (
        ''
      )}
      {isVideoOverlayActive ? (
        <VideoOverlay
          setIsOverlayActive={setIsVideoOverlayActive}
          url={overlayVideoSrc}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default Homepage;
