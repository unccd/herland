import CloseIcon from "../../static/icons/x.svg";

function VideoOverlay(props) {
  const { url, setIsOverlayActive } = props;

  const closeOverlay = () => {
    setIsOverlayActive(false);
  };

  return (
    <div className="overlay grid grid-cols-12">
      <div></div>
       <div className="col-span-10 self-center relative h-full">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${url}`}
          allowFullScreen
        ></iframe>
      </div>
      <div className="justify-self-center	mt-4" onClick={closeOverlay}>
        <img src={CloseIcon} className="overlay-close-icon" />
      </div>
    </div>
  );
}

export default VideoOverlay;
