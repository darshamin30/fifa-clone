import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./Slider.css";

function Slider({
  min = 0,
  max = 1000,
  step = 10,
  value = 1000,
  handlePriceChange,
}) {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (value) => {
    handlePriceChange(value);
    setSliderValue(value);
  };

  return (
    <div className="slider-input">
      <div className="price-range-label">
        <p>Price Range</p>
      </div>
      <InputRange
        minValue={min}
        maxValue={max}
        step={step}
        value={sliderValue}
        onChange={handleChange}
        formatLabel={(value) => `$${value}`}
        draggableTrack
      />
    </div>
  );
}

export default Slider;
