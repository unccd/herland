import { useState } from 'react';
import episode1Thumbnail from '../../static/video-thumbnails/1.jpg';
import episode2Thumbnail from '../../static/video-thumbnails/2.jpg';
import episode3Thumbnail from '../../static/video-thumbnails/3.jpg';
import episode4Thumbnail from '../../static/video-thumbnails/4.jpg';
import episode5Thumbnail from '../../static/video-thumbnails/5.jpg';
import PlayIcon from '../../static/icons/play-fill.svg';
import {
  textH2,
  textBodyLarge,
  textBodyMedium,
  textBodyLargeBold,
} from '../../assets/css/fontSizes';

function VideoExhibition(props) {
  const { setIsOverlayActive, setVideoSrc } = props;
  const showVideoOverlay = (url) => {
    setVideoSrc(url);
    setIsOverlayActive(true);
  };

  const nameClassNames = `${textBodyLargeBold} mt-2`;
  const descriptionClassNames = `${textBodyMedium} mb-2`;

  return (
    <section className='full-height bg-gray-950 text-white flex flex-col justify-center	panel-inner'>
      <h2 className={`${textH2} mt-10`}>#HerLand Stories</h2>
      <p className={`${textBodyLarge} pt-10`}>
        Discover a unique fusion of nature, technology, and art in the #HerLand
        stories. We invite you to reflect on the transformation of our
        environment, its interconnectedness, and the challenges posed by
        desertification. Experience the beauty and complexity of our evolving
        relationship with the planet.
      </p>
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 md:gap-4 lg:gap-12 xl:gap-x-36 xl:gap-y-4 mt-8 col-span-10'>
        <div className='my-2'>
          <div
            className='video-thumbnail-wrapper flex justify-center'
            onClick={() => showVideoOverlay('dlbWSxvqq9I')}
          >
            <img
              src={episode1Thumbnail}
              alt='Yin Yuzhen - The Woman Who Turned Desert into Oasis'
              className='video-thumbnail'
            />
            <img src={PlayIcon} className='play-button' />
          </div>
          <h3 className={nameClassNames}>Yin Yuzhen</h3>
          <p className={descriptionClassNames}>
            The Woman Who Turned Desert into Oasis
          </p>
        </div>
        <div className='my-2'>
          <div
            className='video-thumbnail-wrapper'
            onClick={() => showVideoOverlay('NzAtPwMbGgw')}
          >
            <img
              src={episode2Thumbnail}
              alt='Suhucam - Igniting Change in Bamunkumbit, Cameroon'
              className='video-thumbnail'
            />
            <img src={PlayIcon} className='play-button' />
          </div>
          <h3 className={nameClassNames}>Suhucam</h3>
          <p className={descriptionClassNames}>
            Igniting Change in Bamunkumbit, Cameroon
          </p>
        </div>
        <div className='my-2'>
          <div
            className='video-thumbnail-wrapper flex justify-center'
            onClick={() => showVideoOverlay('WUJJDowTnAk')}
          >
            <img
              src={episode3Thumbnail}
              alt='Marite Alvarez - Embracing the Wisdom of Pastoral Life'
              className='video-thumbnail'
            />
            <img src={PlayIcon} className='play-button' />
          </div>
          <h3 className={nameClassNames}>Marite Alvarez</h3>
          <p className={descriptionClassNames}>
            Embracing the Wisdom of Pastoral Life
          </p>
        </div>
        <div className='mt-0 mb-2'>
          <div
            className='video-thumbnail-wrapper flex justify-center'
            onClick={() => showVideoOverlay('KQXegCdyWSY')}
          >
            <img
              src={episode4Thumbnail}
              alt='Rjim Maatoug - Women-led transformation'
              className='video-thumbnail'
            />
            <img src={PlayIcon} className='play-button' />
          </div>
          <h3 className={nameClassNames}>Rjim Maatoug</h3>
          <p className={descriptionClassNames}>
            Women-led transformation
          </p>
        </div>
        <div className='mt-0 mb-2'>
          <div
            className='video-thumbnail-wrapper flex justify-center'
            onClick={() => showVideoOverlay('wGgZq8xJa50')}
          >
            <img
              src={episode5Thumbnail}
              alt='Boglárka Amrein Tamásné Miskolczi - Ecological farm and bird-nest box station'
              className='video-thumbnail'
            />
            <img src={PlayIcon} className='play-button' />
          </div>
          <h3 className={nameClassNames}>Boglárka Amrein Tamásné Miskolczi</h3>
          <p className={descriptionClassNames}>
          Ecological farm and bird-nest box station
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoExhibition;
