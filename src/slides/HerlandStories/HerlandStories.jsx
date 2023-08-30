import ArrowRight from '../../static/icons/arrow-right.svg';
import { textH2, textBodyLarge } from '../../assets/css/fontSizes';

function HerlandStories() {
  return (
    <section className='full-height text-white desert-logo panel-inner grid grid-cols-12'>
      <div className='max-sm:col-span-12 sm:col-span-12 md:col-span-6'>
        <h2 className={`${textH2} sm:pt-40 max-sm:pt-32`}>#HerLand Stories</h2>
        <p className={`${textBodyLarge} my-10`}>
          Do you know an inspiring story about women, girls and land? We
          celebrate and showcase the voices, experiences, and creativity that
          shape the #HerLand campaign. Explore the various elements that
          together create a tapestry of inspiration and awareness.
        </p>
        <a
          href='https://www.unccd.int/land-and-life/gender/herland/share-your-story'
          target='_blank'
        >
          <div className='flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-4 cursor-pointer hover:underline'>
            <img src={ArrowRight} className='icon icon-white scale-150' />
            <p className={textBodyLarge}>Submit your story here</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default HerlandStories;
