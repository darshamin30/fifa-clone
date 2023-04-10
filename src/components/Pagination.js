import React, { useState } from "react";

const PAGE_SIZE = 10;

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listings, setListings] = useState([]); // your list of items
  const totalItems = listings.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginatedListings = () => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return listings.slice(startIndex, endIndex);
  };

  return (
    <div>
      {/* Render your listings using the paginated list */}
      {getPaginatedListings().map((listing) => (
        <div key={listing.id}>{listing.name}</div>
      ))}

      {/* Render pagination controls */}
      <ul>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}
