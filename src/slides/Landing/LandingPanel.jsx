import DownArrow from '../../static/icons/arrow-down.svg';
import UnccdLogoWhite from '../../static/logos/unccd-white.svg';
import {
  landingHeader,
  landingHeaderDescription,
} from '../../assets/css/fontSizes';

function LandingPanel() {
  return (
    <section className='full-height text-white video-wrapper panel-inner landing-background'>
      <div className='slide-content full-height flex flex-col content-end justify-between'>
        <div className='mt-8'>
          <img src={UnccdLogoWhite} alt='Unccd logo' />
        </div>
        <div className='flex flex-col'>
          <h2 className={landingHeader}>HER LAND</h2>
          <div className={landingHeaderDescription}>
            <p>For the land she provides, and in return, she's provided for.</p>
            <p>They are both nourished, intertwined, a tapestry old as time.</p>
            <p className='font-bold mt-10'>
              Her land is her right, because her land is her life.
            </p>
          </div>
          <div className='flex flex-row content-center gap-1 mb-4 landing-text'>
            <img
              src={DownArrow}
              alt='arrow-down'
              className='icon-white icon scale-125 landing-down-arrow-mobile'
            />
            <p className='text-xs m-0'>SCROLL DOWN</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPanel;
