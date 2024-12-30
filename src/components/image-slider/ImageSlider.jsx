import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ page }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImages() {
    try {
      const link = `https://api.unsplash.com/photos?client_id=${
        import.meta.env.VITE_API_KEY
      }&per_page=${page}`;
      const response = await fetch(link);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      setImages(data);
      setIsLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setIsLoading(false);
    }
  }

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    fetchImages();
  }, [page]);

  if (isLoading) {
    return <div>Loading Data...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occurred: {errorMsg}</div>;
  }
  return (
    <div className="wrapper">
      {/* <h2>Image Slider</h2>
      {images.length > 0 ? (
        <div className="grid grid-cols-4 ">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.urls.small_s3}
              alt={image.slug}
              className="w-[200px] h-[150px] object-cover m-2"
            />
          ))}
        </div>
      ) : (
        <div>No images found</div>
      )} */}
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="absolute w-8 h-8 text-black left-4"
      />
      {images && images.length > 0
        ? images.map((image, index) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.description}
              className={currentSlide === index ? "block" : "hidden"}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute w-8 h-8 text-black right-4"
      />
      <span className="flex gap-4">
        {images && images.length > 0 ? (
          images.map((_, index) => (
            <button
              onClick={() => setCurrentSlide(index)}
              key={index}
              className={`w-4 h-4 border-none outline-none rounded-xl ${
                currentSlide === index ? "bg-gray-500" : "bg-gray-300"
              }`}
            ></button>
          ))
        ) : (
          <div></div>
        )}
      </span>
    </div>
  );
};

export default ImageSlider;
