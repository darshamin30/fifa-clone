import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/homepage";
import Listings from "./components/Listings";
import Slider from "./components/Slider";
import React, { useEffect, useState } from "react";
import RarityFilter from "./components/RarityFilter";
import { Pagination } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const handlePriceChange = (value) => {
    setPriceRange({ min: 0, max: value });
  };

  const [selectedRarities, setSelectedRarities] = useState([
    "Common",
    "Uncommon",
    "Rare",
    "Epic",
    "Legendary",
  ]);

  const handleRarityChange = (rarities) => {
    setSelectedRarities(rarities);
    console.log(rarities);
  };

  console.log(selectedRarities);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="homepage">
        <div className="filters-container">
          <div className="slider-filter">
            <Slider
              onChange={handlePriceChange}
              handlePriceChange={handlePriceChange}
            />
          </div>
          <div className="rarity-filter">
            <RarityFilter handleRarityChange={handleRarityChange} />
          </div>
        </div>
        <div className="listing-container">
          <Listings
            priceRange={priceRange}
            selectedRarities={selectedRarities}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
