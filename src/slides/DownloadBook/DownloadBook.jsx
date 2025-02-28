import React from 'react';
import ArrowRight from '../../static/icons/arrow-right.svg';
import bookCover from '../../static/images/download-book.png';
import bookCoverBlurred1 from '../../static/images/download-book-blured-1.png';
import bookCoverBlurred2 from '../../static/images/download-book-blured-2.png';
import {
  textH2,
  textBodyLarge,
  textBodyRegular,
} from '../../assets/css/fontSizes';

const DownloadBook = () => (
  <section className='max-sm:py-10 sm:py-10 md:py-10 lg:py-0 xl:py-0 panel-inner full-height download-book-background grid grid-cols-12 items-center'>
      <div className='max-sm:col-span-12 sm:col-span-12 lg:col-span-7 text-black content-center'>
        <h2 className={`${textH2} campaign-toolkit-h2`}>Download the e-book</h2>
        <div className='mt-10 d-flex max-sm:flex-col sm:flex-col md:flex-col lg:flex-row gap-10'>
          <img src={bookCover} />
          <div >
            <p className='max-sm:text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl leading-5	font-light '>Gender equality remains unfinished business in every part of the world. In the vast majority of countries, women have unequal and limited access and control to land. In many regions, they remain subject to discriminatory laws and practices that impede their right to inherit, as well as their access to services and resources. </p>
            <p className='max-sm:text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl leading-5	font-light max-sm:mt-3 lg:mt-4 md:mt-4'>#HerLand campaign highlights women and girls’ vital role in global land restoration and in achieving environmental sustainability, mobilizing support to secure land rights for women and girls and to create a better and equal future for all.</p>
            <a
          href='https://www.unccd.int/sites/default/files/2025-02/Her%20Land-Final%20singles%20version.pdf'
          target='_blank'
        >
          <div className='flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-10 cursor-pointer hover:underline campaign-toolkit-link'>
            <img src={ArrowRight} className='icon scale-150' />
            <p className={`${textBodyLarge} campaign-toolkit-link`}>
              Download in PDF format
            </p>
          </div>
        </a>
          </div>
        </div>
      </div>
      <div className='col-span-1'></div>
      <div className='max-sm:hidden sm:hidden md:hidden lg:flex col-span-4 overflow-hidden relative image-margin'>
        <img className='max-h-screen object-cover w-100' src={bookCoverBlurred1} />
        <img className='max-h-screen object-cover w-100' src={bookCoverBlurred2} />
      </div>
  </section>
);

export default DownloadBook;