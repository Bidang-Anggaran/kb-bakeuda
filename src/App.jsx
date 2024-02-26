import { useState } from "react";
import ItemsList from "./components/ItemsList";
import SearchBar from "./components/SearchBar";
const itemsPerPage = 20;
function App() {
  const [searchInput, setSearchInput] = useState("");
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
    setCurrentPage(() => 1);

    // console.log(input);
  };
  return (
    <>
      <main className="container lg:max-w-4xl mx-auto px-4 text-slate-800 min-w-[640px]">
        <div className="mx-auto flex flex-col w-max">
          <h1 className="font-bold text-4xl mt-8 ubuntu- py-2">
            Rekening Pedia
          </h1>
          {/* <h2>Cari Kode Belanja</h2> */}
        </div>
        <SearchBar searchHandler={searchInputHandler} />
        <ItemsList
          searchRef={searchInput}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      </main>
      {/* <Footer /> */}
      <div className="h-24"></div>
    </>
  );
}

export default App;
