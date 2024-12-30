import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/load-more-data/LoadMore";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/start-rating/StarRating";

function App() {
  return (
    <>
      <Accordion />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider page={10} />
      <LoadMore />
    </>
  );
}

export default App;
