import React, { useEffect, useState } from "react";
import "./RarityFilter.css";

const RarityFilter = ({ handleRarityChange }) => {
  const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
  const [selectedRarities, changeSelectedRarities] = useState([
    "Common",
    "Uncommon",
    "Rare",
    "Epic",
    "Legendary",
  ]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (!selectedRarities.includes(value)) {
      changeSelectedRarities([...selectedRarities, value]);
    } else {
      changeSelectedRarities(
        selectedRarities.filter((rarity) => rarity !== value)
      );
    }
  };

  const clearCheckbox = (event) => {
    changeSelectedRarities([]);
  };

  useEffect(() => {
    handleRarityChange(selectedRarities);
    applyFilters();
  }, [selectedRarities]);

  const applyFilters = () => {
    return (
      <div className="rarity-filter-container">
        <h3 className="rarity-filter-heading">Filter by Rarity</h3>
        {rarities.map((rarity) => (
          <label key={rarity} className="rarity-filter-label">
            <input
              type="checkbox"
              value={rarity}
              checked={selectedRarities.includes(rarity)}
              onChange={handleCheckboxChange}
              className="rarity-filter-checkbox"
            />
            <span className={`rarity-filter-box ${rarity.toLowerCase()}`}>
              {rarity}
            </span>
          </label>
        ))}
        <button className="clear-filters" onClick={clearCheckbox}>
          Clear All
        </button>
      </div>
    );
  };

  return applyFilters();
};

export default RarityFilter;
