import { useRef } from "react";
import Dropdown from "./Dropdown";

const SearchBar = ({ searchHandler }) => {
  const searchRef = useRef(null);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col py-4 justify-between sticky top-0 bg-slate-200"
      >
        <div className="w-full flex">
          <input
            type="search"
            ref={searchRef}
            id="searchbar"
            placeholder="Cari..."
            className="p-2 rounded-md w-full"
          />
          <button
            onClick={() => {
              // if (searchRef.current.value != "") {
              searchHandler(searchRef.current.value);
              // }
              // console.log(searchRef.current.value);
              // console.log(searchRef.current);
            }}
            className="px-6 py-2 bg-blue-500 text-slate-200 rounded-md ml-4 hover:bg-blue-600 transition-colors"
          >
            Cari
          </button>
        </div>

        <div className="py-2 flex">
          <p className="mr-2">Cari Berdasarkan : </p>
          <input
            type="radio"
            name="filterSearch"
            id="kode"
            className="border-indigo-600 bg-red-950 checked:border-slate-950 checked:bg-slate-950"
          />
          <label htmlFor="kode" className="mx-2">
            Kode
          </label>
          <input
            type="radio"
            name="filterSearch"
            id="nama"
            className="border-indigo-600 bg-red-950 checked:border-slate-950 checked:bg-slate-950"
          />
          <label htmlFor="nama" className="mx-2">
            Nama
          </label>
          <input
            type="radio"
            name="filterSearch"
            id="deskripsi"
            className="border-indigo-600 bg-red-950 checked:border-slate-950 checked:bg-slate-950"
          />
          <label htmlFor="deskripsi" className="mx-2">
            Deskripsi
          </label>
        </div>
      </form>
      {/* <Dropdown /> */}
    </>
  );
};

export default SearchBar;
