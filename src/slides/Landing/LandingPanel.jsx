import introVideo from "../../static/videos/intro.mp4";
import DownArrow from "../../static/icons/arrow-down.svg";

function LandingPanel() {
  return (
    <section className="full-height text-white video-wrapper panel-inner landing-background">
      <div className="slide-content full-height flex flex-col content-end justify-end">
        <div className="flex flex-col">
          <h2 className="max-sm:text-7xl text-9xl font-bold mb-32  landing-text ">
            HER <br></br>
            LAND
          </h2>
          <div className="md:text-2xl lg:text-3xl mb-32 landing-text-hidden">
            <p>For the land she provides, and in return, she's provided for.</p>
            <p>They are both nourished, intertwined, a tapestry old as time.</p>
            <p className="font-bold mt-10">
              Her land is her right, because her land is her life.
            </p>
          </div>
          <div className="flex flex-row content-center gap-1 mb-4 landing-text">
            <img
              src={DownArrow}
              alt="arrow-down"
              className="icon-white icon scale-125 landing-down-arrow-mobile"
            />
            <p className="text-xs m-0">SCROLL DOWN</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPanel;
