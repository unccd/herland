import React from "react";
import ArrowRight from "../../static/icons/arrow-right.svg";
import {
  textH2,
  textBodyMedium,
  textBodyMediumBold,
} from "../../assets/css/fontSizes";
function Healverse() {
  return (
    <section className="full-height panel-inner flex flex-col  justify-content-center text-white  healverse-background">
      <div className="max-sm:mt-10 sm:mt-0">
        <h2 className={textH2}>Web3/Metaverse Experience (HEALV3RSE)</h2>
      </div>
      <div className="grid grid-cols-12 mt-10 gap-6">
        <div className="max-sm:col-span-12 sm:col-span-12 lg:col-span-6 flex panel-inner iframe-wrapper">
          <iframe
            src="https://www.youtube.com/embed/VbMddmxlApU?rel=0&modestbranding=1"
            title="YouTube Video"
            allowFullScreen
            height={"100%"}
            width={"100%"}
          />
        </div>
        <div className="max-sm:col-span-12 sm:col-span-12 lg:col-span-6 lg:ml-6 max-sm:ml-0 mb-6 font-light">
          <p className={`${textBodyMedium} pt-6`}>
            Embark on a journey unlike any other in the world of HEALV3RSE. We
            invite you to explore, learn, and contribute to the fight against
            desertification, land degradation, and drought in a cutting-edge
            Metaverse experience. Here's what awaits you:
            <a
              href="https://youtu.be/VbMddmxlApU"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://youtu.be/VbMddmxlApU
            </a>
          </p>
          <p className={`${textBodyMediumBold} pt-6`}>
            How to Access & Participate
          </p>
          <p className={`${textBodyMedium} pt-6`}>
            Joining HEALV3RSE is simple and open to all. Whether you're a
            seasoned gamer or new to virtual worlds, we provide an accessible
            platform that thrills, educates, and empowers. Set up your virtual
            avatar, and immerse yourself in engaging quests and missions. Your
            adventure begins now!
          </p>
          <p className={`${textBodyMedium} pt-6`}>
            The HEALV3RSE experience is a bold step towards reimagining how we
            connect, learn, and take action for a better world. Join us in this
            innovative space where technology, nature, and human ingenuity meet
            to inspire change and healing for our planet.
          </p>
          <a
            href="https://trello.com/b/AuQjCPfN/unccd-herland-campaign"
            target="_blank"
          >
            <div className="flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-4 cursor-pointer hover:underline">
              <img src={ArrowRight} className="icon icon-white scale-150" />
              <p className={`${textBodyMedium} m-0`}>Access the portal</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Healverse;
