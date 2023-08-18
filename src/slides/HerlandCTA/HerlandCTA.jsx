import React from "react";

function HerlandCTA() {
  const pClassName = "mt-6";
  return (
    <section className="panel-inner grid grid-cols-12 items-center   herland-cta">
      <div className="col-span-12 grid grid-cols-12 gap-4 text-white mt-10 max-sm:mt-32 mb-32 max-sm:mb-50">
        <div className="col-span-12">
          <h2 className="max-sm:text-base sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl lg:my-16 md:mt-32">
            HerLand call to action
          </h2>
          <h3 className="max-sm:text-base sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold md:mt-10 lg:m-0">
              Make women's land rights a reality
          </h3>
        </div>
        <div className="max-sm:text-xs sm:text-base 2xl:col-span-4 lg:col-span-6 md:col-span-12 sm:col-span-12 max-sm:col-span-12 md:mr-32">
          <p className={`${pClassName} md:mr-16 lg:mr-0`}>
            Healthy land is vital for human survival, it is the largest source
            of income, jobs and livelihoods for poor, rural households. It is
            also crucial for climate and biodiversity action. Yet, we are losing
            productive land daily through desertification, poor land management
            and worsening droughts.
          </p>
          <p className={`${pClassName} md:mr-16 lg:mr-0`}>
            As the main producers of food, when land is degraded women and girls
            are impacted first and most. They are disproportionately affected by
            poverty, hunger, displacement, and violence.
          </p>
          <p className={pClassName}>
            And yet they are known to be the best to protect and restore the
            land. They cannot do so though, given they have minimal control over
            land itself or decisions about how to manage it. Less than one-fifth
            of landholders worldwide are women.
          </p>
          <p className={pClassName}>
            But it doesn’t have to be this way. When land rights are secured, we
            have seen women and girls increase yields, restore land, and build
            resilience to drought.{" "}
          </p>
        </div>
        <div className="max-sm:text-xs sm:text-base 2xl:col-span-4 lg:col-span-6 md:col-span-12 sm:col-span-12 max-sm:col-span-12 md:mr-32">
          <p className={`${pClassName} xl:mr-0 lg:mr-16 md:mr-0`}>
            Women also invest more in nutrition, health and education which
            benefits their families, and wider societies. That’s why we are
            calling for a step change in women’s role in managing our land.
          </p>
          <p className={pClassName}>
            We call upon governments to eliminate legal barriers to women and
            girls’ landownership, ensure women can inherit land, and promote
            their participation in land management, conservation, and
            restoration.
          </p>
          <p className={`${pClassName} md:mr-0 sm:mr-32 max-sm:mr-0  `}>
            We call upon the private sector and financial institutions to
            unleash more access to finance so women can invest in the
            technological inputs they need to improve land.
          </p>
          <p className={`${pClassName} md:mr-0 sm:mr-50 max-sm:mr-40  `}>
            And we ask the public to join us by standing with women and girls
            around the world in their pursuit for equal and full rights to land.
          </p>
        </div>
        <div  >
         </div>
      </div>
    </section>
  );
}

export default HerlandCTA;
