function CampaignVideo() {
  return (
    <section className="full-height bg-zinc-950 text-white panel-inner grid content-center	">
      <div className="grid grid-cols-12 mt-24 gap-6 ">
        <div
          className="max-sm:col-span-12 sm:col-span-12 lg:col-span-6 flex panel-inner relative "
          style={{ position: "relative", height: "100%" }}
        >
          <iframe
            src="https://www.youtube.com/embed/b_0rx56VCak?rel=0&modestbranding=1"
            title="YouTube Video"
            allowFullScreen
            height={"100%"}
            width={"100%"}
          />
        </div>
        <div className="max-sm:col-span-12 sm:col-span-12 lg:col-span-6 lg:ml-6 max-xs:ml-6 mb-10 font-light">
          <p>
            Together with partners, activists and influencers,
            <a
              href="https://www.unccd.int/convention/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              UNCCD
            </a>
            is spearheading the campaign
            <a
              href="https://trello.com/b/AuQjCPfN/unccd-herland-campaign"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              #HerLand
            </a>
            to promote inspiring examples of women and girls’ leadership in
            sustainable land management, mobilizing support to secure land
            rights for women and girls across the world.
          </p>
          <p className="mt-6 text-sm">
            Every voice and every action counts, and you too can help by
            engaging your communities to advocate the key role of gender
            equality in empowering women and girls to take the lead on global
            land restoration and drought resilience efforts. We invite you to
            discover more and join! All of us can do our part:
          </p>
          <p className="mt-6">All of us can do our part:</p>
          <ul className="list-disc mb-10 ml-6 text-sm">
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
              and
              <a
                href="https://www.unccd.int/convention/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                &nbsp; join our call to action
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
