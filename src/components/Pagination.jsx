import React, { useState } from "react";
import { useBelanja } from "../context/BelanjaContext";

const Pagination = ({ totalItems }) => {
  const {
    itemsPerPage,
    handlePageNumber,
    currentPage,
    startIndex,
    endIndex,
    handleItemsPerPage,
  } = useBelanja();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    handlePageNumber(newPage);
  };

  const handleSelectChange = (event) => {
    handlePageNumber(1);
    handleItemsPerPage(event.target.value);
  };

  return (
    <div className="w-full py-4 flex justify-end items-center text-xs">
      <p>Data per halaman : </p>
      <div className="mx-2">
        <select
          name="dataPerPage"
          id="dataPerPageSelect"
          value={itemsPerPage}
          onChange={handleSelectChange}
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <p>
        {startIndex + 1} - {endIndex < totalItems ? endIndex : totalItems} dari{" "}
        {totalItems}
      </p>
      <button
        disabled={currentPage == 1}
        onClick={() => {
          handlePageChange(1);
        }}
        className={`border py-1 px-2 rounded-md mx-1 hover:bg-slate-300 disabled:bg-slate-300 transition-colors`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
      </button>
      <button
        disabled={currentPage == 1}
        onClick={() => {
          handlePageChange(currentPage - 1);
        }}
        className={`border py-1 px-2 rounded-md mx-1 hover:bg-slate-300 disabled:bg-slate-300 transition-colors`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        disabled={currentPage == totalPages || totalPages < 1}
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
        className={`border py-1 px-2 rounded-md mx-1 hover:bg-slate-300 disabled:bg-slate-300 transition-colors`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        disabled={currentPage == totalPages || totalPages < 1}
        onClick={() => {
          handlePageChange(totalPages);
        }}
        className={`border py-1 px-2 rounded-md mx-1 hover:bg-slate-300 disabled:bg-slate-300 transition-colors`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
