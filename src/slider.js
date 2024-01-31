import SimpleImageSlider from "react-simple-image-slider";
import "./App.css"

const images = [
  { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20"},
  { url: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/8cfc3355f9f3064d.jpg?q=50" },
  { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/08fe6e3ced211fe1.jpeg?q=20" },
  { url: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/c7327d538fc90742.jpg?q=50" }
 
];

const Slider = () => {
  return (
    <div className="Slider">
      <SimpleImageSlider
        width={1460}
        height={404}
        images={images}
        // showBullets={true}
        showNavs={true}
        autoPlayDelay={true}
        autoPlay={true}
      />
    </div>
  );
}
 

export default Slider