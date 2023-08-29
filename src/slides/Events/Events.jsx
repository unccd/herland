import React, { useRef } from 'react';
import {
  textH2,
  textBodyLarge,
  textBodyMedium,
  textBodyLargeBold,
} from '../../assets/css/fontSizes';
import events from './eventsData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselLeftArrow from '../../static/icons/CarouselLeftArrow';
import CarouselRightArrow from '../../static/icons/CarouselRightArrow';

const EventItem = ({ event }) => {
  return (
    <div className='grow select-none self-align-center justify-items-center max-sm:mx-0 sm:mx-2'>
      <a href={event.href} target='_blank' rel='noopener noreferrer'>
        <div className='relative overflow-hidden bg-cover bg-no-repeat bg-white'>
          <img
            src={event.imageSrc}
            alt='Event image'
            className='w-full transition duration-300 ease-in-out hover:scale-105'
          />
        </div>
        <div className='mt-2'>
          <h2 className={`${textBodyLargeBold} `}>{event.title}</h2>
          <p className={`${textBodyMedium} `}>{event.subtitle}</p>
        </div>
      </a>
    </div>
  );
};

function Events() {
  const eventsCarouselRef = useRef(null);
  const carouselResponsive = {
    xxl: {
      breakpoint: {
        max: 3000,
        min: 1536,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    xl: {
      breakpoint: {
        max: 1536,
        min: 1280,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    lg: {
      breakpoint: {
        max: 1280,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
    md: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 2,
      partialVisibilityGutter: 20,
    },
    sm: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <section className='full-height bg-stone-200 flex flex-col justify-around panel-inner'>
      <div className='text-black '>
        <h2 className={textH2}>Events </h2>
        <div className='flex justify-between max-md:flex-col md:flex-row'>
          <p className={`${textBodyLarge} mt-6`}>
            Here are some events where you can view the #HerLand Campaign:
          </p>
          <div className='flex self-end	'>
            <CarouselLeftArrow innerRef={eventsCarouselRef} />
            <CarouselRightArrow innerRef={eventsCarouselRef} />
          </div>
        </div>

        <Carousel
          draggable
          keyBoardControl
          responsive={carouselResponsive}
          slidesToSlide={1}
          swipeable
          ref={(el) => (eventsCarouselRef.current = el)}
          arrows={false}
          infinite
          partialVisbile={true}
        >
          {events.map((event, index) => (
            <EventItem event={event} key={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Events;
