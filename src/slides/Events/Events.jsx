import React from "react";
import {
  textH2,
  textBodyLarge,
  textBodyMedium,
} from "../../assets/css/fontSizes";

function Events() {
  return (
    <section className="full-height bg-stone-200 flex flex-col justify-around panel-inner">
      <div className="text-black ">
        <h2 className={textH2}>Events </h2>
        <p className={`${textBodyLarge} mt-6`}>
          Here are some events where you can view the HerLand Campaign:
        </p>
        <div className="grid 2xl:grid-cols-12 sm:grid-cols-1 max-sm:grid-cols-1">
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 max-sm:grid-cols-1 gap-6 mt-10 footer-events col-span-10">
            <div className="event-wrapper event-1 max-sm:h-24 sm:h-32 flex flex-col justify-center pl-2">
              <a
                href="https://www.unccd.int/events/desertification-drought-day/2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h2 className="text-2xl text-white font-bold">
                    Desertification and
                  </h2>
                  <h2 className="text-2xl text-white font-bold">
                    Drought Day 2023
                  </h2>
                </div>
              </a>
            </div>
            <div className="event-wrapper event-2 max-sm:h-24 sm:h-32 flex flex-col justify-center pl-2">
              <a
                href="https://www.unccd.int/cric21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h2 className="text-2xl text-white font-bold">CRIC21</h2>
                  <p className="text-base text-white m-0">Samarkand, </p>
                  <p className="text-base text-white m-0">Uzbekistan, 2023</p>
                </div>
              </a>
            </div>
            <div className="event-wrapper event-3 max-sm:h-24 sm:h-32 flex flex-col justify-center pl-2">
              <a
                href="https://unfccc.int/cop28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h2 className="text-2xl text-white font-bold">UNFCCC</h2>
                  <h2 className="text-2xl text-white font-bold">COP28</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black justify-self-end	">
        <h2 className={textH2}>Contact & Support</h2>

        <p className={`${textBodyMedium} mt-6 max-sm:mb-6 sm:mb-0`}>
          Contact Information:
          <a className="text-blue-700" href="mailto:herland@unccd.int">
            &nbsp;herland@unccd.int
          </a>
        </p>
      </div>
    </section>
  );
}

export default Events;
