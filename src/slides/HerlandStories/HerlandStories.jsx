import ArrowRight from "../../static/icons/arrow-right.svg";

function HerlandStories() {
  return (
    <section className="full-height text-white desert-logo panel-inner grid grid-cols-12">
      <div className="max-sm:col-span-12 sm:col-span-12 md:col-span-6">
        <p className="max-sm:text-2xl text-3xl sm:pt-40 max-sm:pt-32 ">
          #HerLand Stories
        </p>
        <p className="max-sm:text-xl text-2xl pt-10 font-light">
          Do you know an inspiring story about women, girls and land? We
          celebrate and showcase the voices, experiences, and creativity that
          shape the #HerLand campaign. Explore the various elements that
          together create a tapestry of inspiration and awareness.
        </p>
        <div className="flex max-sm:gap-2 sm:gap-2 md:gap-5 mt-4 cursor-pointer sm:pt-20 max-sm:pt-10">
          <img src={ArrowRight} className="icon icon-white scale-150" />
          <p className="sm:text-xl md:text-2xl m-0">Submit your story here</p>
        </div>
      </div>
    </section>
  );
}

export default HerlandStories;
