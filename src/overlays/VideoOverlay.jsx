function VideoOverlay(props) {
  const { url, setIsOverlayActive } = props;

  const closeOverlay = () => {
    setIsOverlayActive(false);
  };
  return (
    <section
      className=" flex items-center justify-center overlay bg-black/90 "
      onClick={closeOverlay}
    >
      <div>
        <div className="relative" style={{ width: "90vw", height: "90vh" }}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${url}?rel=0&modestbranding=1`}
            allowFullScreen
            modestbranding={1}
          ></iframe>
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

export default VideoOverlay;
