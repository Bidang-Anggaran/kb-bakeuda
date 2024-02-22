import { useState } from "react";
import kodeBelanja from "../json/kodeBelanja.json";
import ReadMore from "./ReadMore";
const itemsPerPage = 20;

const ItemsList = ({ searchRef }) => {
  useState();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredKodeBelanja =
    searchRef != ""
      ? kodeBelanja.filter((e) => `${e['deskripsi']}`.toLowerCase().includes(searchRef.toLowerCase()))
      : kodeBelanja;
  // console.log(filteredKodeBelanja.length)


  const currentData = filteredKodeBelanja.slice(startIndex, endIndex);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <button
        onClick={() => {
          handleNextPage();
        }}
      >
        Next Page
      </button>
      <button
        onClick={() => {
          handlePreviousPage();
        }}
      >
        Previous Page
      </button>

      <div className="divide-y-2 divide-slate-300">
        {currentData.map((e) => (
          <div key={e.kode} className="flex py-4">
            <h2 className="mr-4 font-bold text-lg flex-1">{e.kode}</h2>
            <div className="flex-[5]">
              <h3 className="font-bold">{e.nama}</h3>
              {e.deskripsi == "" ? (
                <p>Deskripsi belum ditambah.</p>
              ) : (
                <ReadMore>{e.deskripsi}</ReadMore>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsList;
