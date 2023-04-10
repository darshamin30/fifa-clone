import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Listing.css";
import { Link } from "react-router-dom";

export default function Listings({ priceRange, selectedRarities }) {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://cors-anywhere.herokuapp.com/https://api.prod.rock-palisade-352518.com/marketplace/listings/search?language=en-UK&listingStatus=active&page=1&pageSize=100&priceHigh=10000000&priceLow=0&sortBy=latestCreatedAt&sortDirection=desc",
        };

        const response = await axios.request(config);

        setData(response.data.listings);

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(priceRange);

  const filterListings = () => {
    return data.filter((listing) => {
      return (
        listing.lowestPrice >= priceRange.min &&
        listing.lowestPrice <= priceRange.max &&
        selectedRarities.includes(listing.rarity.name)
      );
    });
  };

  useEffect(() => {
    showListings();
  }, [priceRange]);

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const showListings = () => {
    return (
      <div className="card-list">
        {data && data.length > 0 ? (
          filterListings()
            .slice(indexOfFirstListing, indexOfLastListing)
            .map((listing) => <Card listing={listing} />)
        ) : (
          <h2 className="latest-fetch-text">Fetching latest listing</h2>
        )}
        <Pagination
          listingsPerPage={listingsPerPage}
          totalListings={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    );
  };

  return showListings();
}

const Pagination = ({
  listingsPerPage,
  totalListings,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalListings / listingsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <Link
          key={number}
          className={`page-item ${currentPage === number ? "active" : ""}`}
          onClick={() => paginate(number)}
        >
          {number}
        </Link>
      ))}
    </div>
  );
};
