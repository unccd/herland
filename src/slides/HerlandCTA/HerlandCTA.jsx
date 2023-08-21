import React from "react";
import {
  textH2,
  textBodyMedium,
  textBodyMediumBold,
} from "../../assets/css/fontSizes";
function HerlandCTA() {
  const pClassName = `${textBodyMedium} max-sm:mt-3 lg:mt-4 md:mt-4`;
  return (
    <section className="panel-inner grid grid-cols-12 items-center herland-cta">
      <div className="col-span-12 grid grid-cols-12 gap-4 text-white max-sm:my-10 sm:my-2 ">
        <div className="col-span-12">
          <h2 className={`${textH2} lg:mt-2`}>HerLand call to action</h2>
          <p className={`${textBodyMediumBold} max-sm:mt-4 sm:mt-4 lg:mt-4`}>
            Make women's land rights a reality
          </p>
        </div>
        <div className="col-span-4 xl:col-span-4 lg:col-span-6 md:col-span-10 sm:col-span-12 max-sm:col-span-12 ">
          <p className={`${pClassName}`}>
            Healthy land is vital for human survival, it is the largest source
            of income, jobs and livelihoods for poor, rural households. It is
            also crucial for climate and biodiversity action. Yet, we are losing
            productive land daily through desertification, poor land management
            and worsening droughts.
          </p>
          <p className={`${pClassName}`}>
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
        <div className="2xl:col-span-4 xl:col-span-4 lg:col-span-5 md:col-span-10 sm:col-span-12 max-sm:col-span-12">
          <p className={`${pClassName}  xl:mr-0 lg:mr-16 md:mr-0`}>
            Women also invest more in nutrition, health and education which
            benefits their families, and wider societies. That’s why we are
            calling for a step change in women’s role in managing our land.
          </p>
          <p className={`${pClassName}  xl:mr-0 lg:mr-16 md:mr-0`}>
            We call upon governments to eliminate legal barriers to women and
            girls’ landownership, ensure women can inherit land, and promote
            their participation in land management, conservation, and
            restoration.
          </p>
          <p className={`${pClassName} md:mr-0 sm:mr-48 max-sm:mr-0  `}>
            We call upon the private sector and financial institutions to
            unleash more access to finance so women can invest in the
            technological inputs they need to improve land.
          </p>
          <p className={`${pClassName} md:mr-0 sm:mr-52 max-sm:mr-40  `}>
            And we ask the public to join us by standing with women and girls
            around the world in their pursuit for equal and full rights to land.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default HerlandCTA;
