import React from "react";

function CarouselLeftArrow({innerRef}) {
  return (
    <button
        className="custom-arrow left opacity-30 hover:opacity-50"
        onClick={() => innerRef.current.previous()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55L10 18Z"
          />
        </svg>
      </button>
  );
}

export default CarouselLeftArrow;