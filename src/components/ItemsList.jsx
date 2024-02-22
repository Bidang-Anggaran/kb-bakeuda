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
      ? kodeBelanja.filter((e) =>
          `${e["deskripsi"]}`.toLowerCase().includes(searchRef.toLowerCase())
        )
      : kodeBelanja;
  // console.log(filteredKodeBelanja.length)

  const currentData = filteredKodeBelanja.slice(startIndex, endIndex);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const formatString = (input) => {
    // Split the string into an array of parts
    const strInput = `${input}`;
    const parts = [
      strInput.slice(0, 1),
      strInput.slice(1, 2),
      strInput.slice(2, 4),
      strInput.slice(4, 6),
      strInput.slice(6, 8),
      strInput.slice(8),
    ];

    // Join the parts with dots
    const formattedString = parts.join(".").replace(/\.*$/, "");
    return formattedString;
  };

  return (
    <>
      {/* <button
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
      </button> */}

      <div className="divide-y-2 divide-slate-300">
        <div className="flex py-4">
          <h2 className="mr-4 font-bold flex-[2] text-sm">Kode Rekening</h2>
          <div className="flex-[4]">
            <h3 className="font-bold text-sm">Penjelasan</h3>
          </div>
          <p className="ml-2 flex-[4]">Keterangan</p>
        </div>
        {currentData.map((e) => (
          <div key={e.kode} className="flex py-4">
            <h2 className="mr-4 font-bold flex-[2] text-sm">
              {formatString(e.kode)}
            </h2>
            <div className="flex-[4]">
              <h3 className="font-bold text-sm">{e.nama}</h3>
              {e.deskripsi == "" ? (
                <p className="text-sm">Deskripsi belum ditambah.</p>
              ) : (
                <ReadMore>{e.deskripsi}</ReadMore>
              )}
            </div>
            <p className="ml-2 flex-[4]">
              {e.keterangan == "" ? "Keterangan Belum Ditambah" : e.keterangan}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsList;
