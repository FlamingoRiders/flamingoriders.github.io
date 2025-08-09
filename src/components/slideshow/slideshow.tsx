import React, { useCallback, useState } from "react";
import Picture from "./picture";

interface SlideshowProps {
  picturesUrl: string;
  pictureIds: Array<string>;
}
const Slideshow: React.FC<SlideshowProps> = ({ picturesUrl, pictureIds }) => {
  const nbPictures = pictureIds.length;

  const [slideIndex, setSlideIndex] = useState<number>(0);

  // Next/previous controls
  const plusSlides = useCallback(
    (step: number) => {
      if (step === 1 && slideIndex === nbPictures - 1) {
        setSlideIndex(0);
      } else if (step === -1 && slideIndex === 0) {
        setSlideIndex(nbPictures - 1);
      } else {
        setSlideIndex(slideIndex + step);
      }
    },
    [slideIndex, setSlideIndex, nbPictures],
  );

  // Thumbnail image controls
  const goToSlide = useCallback(
    (n: number) => {
      setSlideIndex(n);
    },
    [setSlideIndex],
  );

  return <div className="slideshow-container">
    {pictureIds.map((pictureId, index) => {
      return (
        <div
          className="mySlides fade"
          key={`picture-${index}-${pictureId}`}
          style={{ display: index === slideIndex ? "block" : "none" }}
        >
          <Picture imgSrc={`${picturesUrl}${pictureId}`} />
        </div>
      );
    })}
    {pictureIds.length > 1 && (
      <>
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
        <div className="dots pt-2">
          {pictureIds.map((pictureId, index) => (
            <span
              key={`picture-dot-${index}`}
              className={`dot ${index === slideIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </>
    )}
  </div>;
};

export default Slideshow;
