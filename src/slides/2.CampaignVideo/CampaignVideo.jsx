
function CampaignVideo() {
  return (
    <section className="full-height bg-emerald-950 text-white panel-inner">
      <p className="text-3xl pt-40">The earth needs her as she needs it</p>
      <div className="grid grid-cols-12 mt-6 ">
        <div className="max-sm:col-span-12 sm:col-span-12 lg:col-span-9 flex panel-inner relative h-3/6" style={{position: 'relative'}}>
          <iframe
            src="https://www.youtube.com/embed/b_0rx56VCak"
            title="YouTube Video"
            allowFullScreen
            style={{minHeight: '50vh'}}
            width={"100%"}
          />  
        </div>
        <div className="max-sm:col-span-12 sm:col-span-12 lg:col-span-3 ml-6">
          <p className="font-bold">
            Morbi mollis lectus nec ultricies tempor. Morbi a tempor turpis. Non
            fermentum leo.
          </p>
          <p className="mt-6">
            Sed imperdiet consectetur metus eget ullamcorper. Suspendisse
            maximus leo fermentum massa ornare, id feugiat felis auctor.
            Praesent mattis metus at velit pulvinar, eu consequat turpis rutrum.{" "}
          </p>
          <p className="mt-6">
            Donec maximus lectus a tortor lacinia lobortis. Etiam sit amet
            condimentum lacus. Etiam placerat velit vitae placerat laoreet. Ut
            accumsan libero sed odio semper accumsan. Donec interdum auctor
            felis, vitae gravida urna aliquet tempus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CampaignVideo;
