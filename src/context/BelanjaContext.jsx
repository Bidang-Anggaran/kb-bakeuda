import React, { createContext, useContext, useState } from "react";

const BelanjaContext = createContext({
  pageNumber: 1,
  pageNumberHandler: () => {},
  searchInput: "",
  searchInputHandler: () => {},
  startIndex: 0,
  endIndex: 20,
  handleNextPage: () => {},
  handlePreviousPage: () => {},
});

const itemsPerPage = 20;

const BelanjaProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const searchInputHandler = (input) => {
    setSearchInput(input);
    // setCurrentPage(() => 1);
  };

  const pageNumberHandler = (e) => {
    setPageNumber(() => e);
  };

  return (
    <BelanjaContext.Provider
      value={{
        pageNumber,
        pageNumberHandler,
        searchInput,
        searchInputHandler,
        startIndex,
        endIndex,
        handleNextPage,
        handlePreviousPage,
      }}
    >
      {children}
    </BelanjaContext.Provider>
  );
};

export const useBelanja = () => {
  const context = useContext(BelanjaContext);
  if (!context) {
    throw new Error("useBelanja must be used within a BelanjaProvider");
  }
  return context;
};

export default BelanjaProvider;
