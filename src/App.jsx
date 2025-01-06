import Accordion from "./components/accordion/Accordion";
import ImageSlider from "./components/image-slider/ImageSlider";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import LoadMore from "./components/load-more-data/LoadMore";
import QRCodeGenerator from "./components/qr-code-generator/QrCodeGenerator";
import RandomColor from "./components/random-color/RandomColor";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import StarRating from "./components/start-rating/StarRating";
import menus from "./components/tree-view/data";
import TreeView from "./components/tree-view/TreeView";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider page={10} /> */}
      {/* <LoadMore />  */}
      {/* <QRCodeGenerator /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <LightDarkMode /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
