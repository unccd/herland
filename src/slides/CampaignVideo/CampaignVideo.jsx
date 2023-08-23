import { textBodyMedium, textBodyLarge } from '../../assets/css/fontSizes';

function CampaignVideo() {
  return (
    <section className='campaign-video-bg full-height text-white panel-inner grid content-center	'>
      <div className='grid grid-cols-12 gap-6 md:mt-10 sm:mt-10 lg:mt-0 max-sm:mt-10'>
        <div
          className='max-sm:col-span-12 sm:col-span-12 xl:col-span-5 lg:col-span-4 flex panel-inner relative '
          style={{ position: 'relative' }}
        >
          <iframe
            src='https://www.youtube.com/embed/b_0rx56VCak?rel=0&modestbranding=1'
            title='YouTube Video'
            allowFullScreen
            height={'100%'}
            width={'100%'}
          />
        </div>
        <div className='max-sm:col-span-12 sm:col-span-12 xl:col-span-7 lg:col-span-8 lg:ml-6 max-xs:ml-6  font-light'>
          <p className={`${textBodyLarge}`}>
            Together with partners, activists and influencers,&nbsp;
            <a
              href='https://www.unccd.int/convention/overview'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              UNCCD
            </a>
            &nbsp; is spearheading the campaign&nbsp;
            <a
              href='https://trello.com/b/AuQjCPfN/unccd-herland-campaign'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              #HerLand
            </a>
            &nbsp; to promote inspiring examples of women and girls’ leadership
            in sustainable land management, mobilizing support to secure land
            rights for women and girls across the world.
          </p>
          <p className={`${textBodyMedium} mt-6`}>
            Every voice and every action counts, and you too can help by
            engaging your communities to advocate the key role of gender
            equality in empowering women and girls to take the lead on global
            land restoration and drought resilience efforts. We invite you to
            discover more and join! All of us can do our part:
          </p>
          <p className={`${textBodyMedium} mt-6`}>All of us can do our part:</p>
          <ul className={`${textBodyMedium} list-disc ml-6`}>
            <li>
              Governments can promote laws, policies and practices that end
              discrimination and secure women’s rights to land and resources.
            </li>
            <li>
              Businesses can prioritize gender equality and women's empowerment
              in their investments, facilitating access to resources and
              technology.
            </li>
            <li>
              Civil Society Organizations can advocate for gender equality and
              women's land rights.
            </li>
            <li>
              Academic Institutions can drive research and education to support
              gender equality in land management.
            </li>
            <li>
              All of us can support women-led initiatives in land restoration
              and&nbsp;
              <a
                href='#herland-cta'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                join our call to action
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CampaignVideo;
