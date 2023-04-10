import React from "react";
import "./Card.css";

const cardColor = {
  Common: "#2386A8",
  Rare: "#F635F7",
  Epic: "#7751EC",
  Iconic: "#AB9656",
  Commemorative: "#9C6706",
};

function Card({ listing }) {
  return (
    <div className="card-tile">
      <img className="card-image" src={listing.image}></img>
      <h2 className="card-title">{listing.title.toUpperCase()}</h2>
      <p className="card-subtitle">
        {listing.subtitle.split("**").map((s, i) => (
          <React.Fragment key={i}>
            {s}
            <br />
          </React.Fragment>
        ))}
      </p>
      <p
        className="card-rarity"
        style={{ color: cardColor[listing.rarity.name] }}
      >
        {listing.rarity.name}
      </p>
      <p className="card-collection-details">
        {listing.collection?.name}, {listing.rarity.name}
      </p>
      <div class="card-line"></div>
      <p className="card-price">Starting at: ${listing.lowestPrice}</p>
    </div>
  );
}

export default Card;
