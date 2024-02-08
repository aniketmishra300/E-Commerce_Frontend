// import SimpleImageSlider from "react-simple-image-slider";
import "./App.css"
import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// const images = [
//   { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20" },
//   { url: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/8cfc3355f9f3064d.jpg?q=50" },
//   { url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/08fe6e3ced211fe1.jpeg?q=20" },
//   { url: "https://rukminim2.flixcart.com/fk-p-flap/844/140/image/c7327d538fc90742.jpg?q=50" }

// ];

const Slider = () => {
  return (
    <div className="Slider">
        <Carousel  autoPlay={true}
        infiniteLoop = {true}>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20" alt="not found" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/8cfc3355f9f3064d.jpg?q=50" alt="not found" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/08fe6e3ced211fe1.jpeg?q=20" alt="not found" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/c7327d538fc90742.jpg?q=50" alt="not found" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}


export default Slider