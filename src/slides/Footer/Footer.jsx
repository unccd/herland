import React from 'react';
import { textBodyMedium } from '../../assets/css/fontSizes';

function Footer() {
  return (
    <div className='copywright panel bg-gray-950 py-4 grid lg:grid-cols-3 md:grid-col-3'>
      <div className='lg:col-span-2 flex justify-center flex-start gap-10 flex-column'>
        <p className={`${textBodyMedium} md:mt-6 max-sm:m-0 sm:m-0`}>
          <span className='footer-text'>Contact & Support:</span>
          <a className='footer-link' href='mailto:herland@unccd.int'>
            &nbsp;herland@unccd.int
          </a>
        </p>
        <p className='max-sm:text-sm sm:text-base md:text-base lg:text-sm xl:text-xl 2xl:text-xl leading-5 footer-text'>
          The HerLand campaign is co-funded by the European Union, the
          Government of Canada, and the Changwon Initiative. Its contents are
          the sole responsibility of the UNCCD and do not necessarily reflect
          the views of the European Union, the Government of Canada, or the
          Changwon Initiative.
        </p>
      </div>
      <div className='flex lg:justify-end md:justify-between sm:justify-between max-sm:justify-between items-end grid-cols-3 gap-4'>
        <div className='logo-1'>
          <a href='https://ec.europa.eu/'></a>
        </div>
        <div className='logo-2'>
          <a href='https://www.international.gc.ca/'></a>
        </div>
        <div className='logo-3'>
          <a href='https://www.unccd.int/our-work/flagship-initiatives/changwon-initiative'></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
