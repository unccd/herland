function CampaignVideo() {
  return (
    <section className="full-height bg-emerald-950 text-white panel-inner grid content-center	">
       <div className="grid grid-cols-12 mt-6">
        <div
          className="max-sm:col-span-12 sm:col-span-12 lg:col-span-6 flex panel-inner relative h-3/6"
          style={{ position: "relative", height:'100%' }}
        >
          <iframe
            src="https://www.youtube.com/embed/b_0rx56VCak"
            title="YouTube Video"
            allowFullScreen
            height={'100%'}
            width={"100%"}
          />
        </div>
        <div className="max-sm:col-span-12 sm:col-span-12 lg:col-span-6 ml-6 font-light">
          <p>
            Together with partners, activists and influencers, UNCCD is
            spearheading the campaign #HerLand to promote inspiring examples of
            women and girls’ leadership in sustainable land management,
            mobilizing support to secure land rights for women and girls across
            the world.
          </p>
          <p className="mt-6">
            Every voice and every action counts, and you too can help by
            engaging your communities to advocate the key role of gender
            equality in empowering women and girls to take the lead on global
            land restoration and drought resilience efforts. We invite you to
            discover more and join!
          </p>
          <p className="mt-6">
            Every voice and every action counts, and you too can help by
            engaging your communities to advocate the key role of gender
            equality in empowering women and girls to take the lead on global
            land restoration and drought resilience efforts. We invite you to
            discover more and join! All of us can do our part:
          </p>
          <p className="mt-6">
            All of us can do our part:
          </p>
          <ul className="list-disc	ml-6">
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
              and join our call to action.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CampaignVideo;
