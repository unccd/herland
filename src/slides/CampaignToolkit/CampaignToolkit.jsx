import React from "react";
import ArrowRight from "../../static/icons/arrow-right.svg";
function CampaignToolkit() {
  return (
    <section className="full-height footer-background grid grid-cols-12	 content-center panel-inner">
      <div className="max-sm:col-span-12 sm:col-span-12 lg:col-span-6 text-black">
        <h2 className="max-sm:text-2xl text-5xl font-light">
          Campaign Toolkit
        </h2>
        <p className="max-sm:text-xl text-2xl font-light mt-8">
          Help us spread the word about #HerLand campaign with our ready-to-use
          promotional materials. From posters and flyers to banners and
          infographics, these assets are designed to communicate the urgency and
          importance of our cause. Download and share them in your community,
          workplace, or social circles, and inspire others to join the movement.
        </p>
        <p className="max-sm:text-xl text-2xl font-light mt-4">
          Also find out how to utilize hashtags like #HerLandHerRights and
          #LandSHeroes, engage with influencers, and create a social media buzz
          that echoes our call for gender equality in land rights.
        </p>
        <a href="https://trello.com/b/AuQjCPfN/unccd-herland-campaign" target="_blank">
          <div className="flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-4 cursor-pointer">
            <img src={ArrowRight} className="icon scale-150" />
            <p className="sm:text-xl md:text-2xl m-0">
              Link to promotional materials
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default CampaignToolkit;
