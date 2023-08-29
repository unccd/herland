import React, { useRef } from 'react';
import {
  textH2,
  textBodyLarge,
  textBodyMedium,
  textBodyLargeBold,
} from '../../assets/css/fontSizes';
import news from './newsData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselLeftArrow from '../../static/icons/CarouselLeftArrow';
import CarouselRightArrow from '../../static/icons/CarouselRightArrow';

const NewsItem = ({news}) => {
  return (
    <div className='grow select-none self-align-center justify-items-center max-sm:mx-0 sm:mx-2'>
      <a href={news.href} target='_blank' rel='noopener noreferrer'>
        <div className='relative overflow-hidden bg-cover bg-no-repeat bg-white'>
          <img
            src={news.imageSrc}
            alt='Event image'
            className='w-full transition duration-300 ease-in-out hover:scale-105'
          />
        </div>
        <div className='mt-2'>
          <h2 className={`${textBodyLargeBold} `}>{news.title}</h2>
          <p className={`${textBodyMedium} `}>{news.date}</p>
        </div>
      </a>
    </div>
  );
}

function News() {
  const newsCarouselRef = useRef(null);
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
      partialVisibilityGutter: 30,
    },
    sm: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <section className='full-height flex flex-col justify-around panel-inner' style={{background: '#4d4399'}}>
      <div className='text-white '>
        <h2 className={textH2}>News </h2>
        <div className='flex justify-between max-md:flex-col md:flex-row'>
          <p className={`${textBodyLarge} mt-6`}>
            Here are some news related to the #HerLand Campaign:
          </p>
          <div className='flex self-end	'>
            <CarouselLeftArrow innerRef={newsCarouselRef} />
            <CarouselRightArrow innerRef={newsCarouselRef} />
          </div>
        </div>

        <Carousel
          draggable
          keyBoardControl
          responsive={carouselResponsive}
          slidesToSlide={1}
          swipeable
          ref={(el) => (newsCarouselRef.current = el)}
          arrows={false}
          infinite
        >
          {news.map((newsItem, index) => (
            <NewsItem news={newsItem} key={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default News;
