// import React from 'react';
import { useState } from "react";
import greyleftarrow from "../../assets/image/greyleft-arrow.png";
import greyrightarrow from "../../assets/image/greyright-arrow.png";
import { lotData } from "../../constants/constants";
import PieCard from "../pieCard/pieCard";
import { pieCardData } from "../../constants/constants";
import "./piechartSummaryComponent.scss";

const PieChartSummaryComponent = () => {
  const itemsPerPage = 3; // Set number of lots per page
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate total pages
  const totalPages = Math.ceil(lotData.length / itemsPerPage);

  // Get the data for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLots = pieCardData.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination Handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
    <div className="pie-chart-summary-container">
      {
        currentLots.map((lot) => (
          <PieCard key={lot.id} lot={lot} pieCardData={pieCardData} />
        ))
      }
    </div>
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          <img src={greyleftarrow} alt="leftarrow" />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          <img src={greyrightarrow} alt="rightarrow" />
        </button>
      </div>
      </>
  );
};
export default PieChartSummaryComponent;
