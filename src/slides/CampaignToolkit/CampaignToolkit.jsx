import React from 'react';
import ArrowRight from '../../static/icons/arrow-right.svg';
import {
  textH2,
  textBodyLarge,
  textBodyRegular,
} from '../../assets/css/fontSizes';

function CampaignToolkit() {
  return (
    <section className='full-height campaign-toolkit-background grid grid-cols-12	 content-center panel-inner'>
      <div className='max-sm:col-span-10 sm:col-span-12 lg:col-span-6 text-black'>
        <h2 className={`${textH2} campaign-toolkit-h2`}>Campaign Toolkit</h2>
        <p className={`${textBodyRegular} mt-10 campaign-toolkit-text`}>
          Help us spread the word about{' '}
          <span className='font-bold'>#HerLand</span> campaign with our
          ready-to-use promotional materials. From posters and flyers to banners
          and infographics, these assets are designed to communicate the urgency
          and importance of our cause. Download and share them in your
          community, workplace, or social circles, and inspire others to join
          the movement.
        </p>
        <p className={`${textBodyRegular} mt-6 campaign-toolkit-text`}>
          Also find out how to utilize hashtags like{' '}
          <span className='font-bold'>#HerLandHerRights</span> and&nbsp;
          <span className='font-bold'>#LandHeroes</span>, engage with
          influencers, and create a social media buzz that echoes our call for
          gender equality in land rights.
        </p>
        <a
          href='https://trello.com/b/AuQjCPfN/unccd-herland-campaign'
          target='_blank'
        >
          <div className='flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-4 cursor-pointer hover:underline campaign-toolkit-link'>
            <img src={ArrowRight} className='icon scale-150' />
            <p className={`${textBodyLarge} campaign-toolkit-link`}>
              Link to promotional materials
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default CampaignToolkit;
