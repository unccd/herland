function PortraitOverlay(props) {
  const { portraitSrc, setIsOverlayActive } = props;
  const closeOverlay = (event) => {
    if (!event.target.classList.contains("overlay-portrait-image")) {
      setIsOverlayActive(false);
    }
  };
  const portrait = portraitSrc.replace(/\/small-/g, "/");

  return (
    <section
      className="flex items-center justify-center overlay bg-black/75 "
      onClick={closeOverlay}
    >
      <div className="lg:m-10 sm:m-0 max-xs:m-0">
        <div className="relative p-1 bg-white shadow-lg ">
          <img src={portrait} alt="Overlay" className="w-full h-auto" />
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={closeOverlay}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortraitOverlay;
