import React from "react";

function CarouselRightArrow({ innerRef, disabled }) {
  let opacityClass = "";
  if (disabled) {
    opacityClass = "opacity-5 hover:opacity-5";
  } else {
    opacityClass = "opacity-30 hover:opacity-50";
  }
  return (
    <button
      className={`custom-arrow right ${opacityClass}`}
      onClick={() => innerRef.current.next()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"
        />
      </svg>{" "}
    </button>
  );
}

export default CarouselRightArrow;
