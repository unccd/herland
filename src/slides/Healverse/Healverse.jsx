import React from "react";
import blocksPng from "../../static/images/healverse-vector.png";
import ArrowRight from "../../static/icons/arrow-right.svg";

function Healverse() {
  return (
    <section className="full-height panel-inner flex flex-col  justify-content-center text-white  healverse-background">
      <div>
        <h2 className="max-sm:text-xl sm:text-3xl mt-24">
          Web3/Metaverse Experience (HEALV3RSE)
        </h2>
      </div>
      <div className="grid grid-cols-12 mt-10">
        <div
          className="max-sm:col-span-12 sm:col-span-12 lg:col-span-6 flex panel-inner relative h-3/6"
          style={{ position: "relative", height: "100%" }}
        >
          <iframe
            src="https://www.youtube.com/embed/VbMddmxlApU?rel=0&modestbranding=1&fs=0"
            title="YouTube Video"
            allowFullScreen
            height={"100%"}
            width={"100%"}
            style={{ position: "relative", height: "100%" }}
          />
        </div>
        <div className="max-sm:col-span-12 sm:col-span-12 lg:col-span-6 lg:ml-6 max-sm:ml- mt-6 mb-6 font-light">
          <p>
            Embark on a journey unlike any other in the world of HEALV3RSE. We
            invite you to explore, learn, and contribute to the fight against
            desertification, land degradation, and drought in a cutting-edge
            Metaverse experience. Here's what awaits you:{" "}
            <a
              href="https://youtu.be/VbMddmxlApU"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://youtu.be/VbMddmxlApU
            </a>
          </p>
          <h3 className="max-sm:text-base mt-6 text-lg font-bold">
            How to Access & Participate
          </h3>
          <p className="mt-6 max-sm:text-sm sm:text-base">
            Joining HEALV3RSE is simple and open to all. Whether you're a
            seasoned gamer or new to virtual worlds, we provide an accessible
            platform that thrills, educates, and empowers. Set up your virtual
            avatar, and immerse yourself in engaging quests and missions. Your
            adventure begins now!
          </p>
          <p className="mt-6 max-sm:text-sm sm:text-base">
            The HEALV3RSE experience is a bold step towards reimagining how we
            connect, learn, and take action for a better world. Join us in this
            innovative space where technology, nature, and human ingenuity meet
            to inspire change and healing for our planet.{" "}
          </p>
          <a
            href="https://trello.com/b/AuQjCPfN/unccd-herland-campaign flex"
            target="_blank"
          >
            <div className="flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-4 cursor-pointer">
              <img src={ArrowRight} className="icon icon-white scale-150" />
              <p className="font-bold m-0">Access the portal</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Healverse;
