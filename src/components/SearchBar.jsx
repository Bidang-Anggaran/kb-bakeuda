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
        className="flex py-4 justify-between"
      >
        {/* <label htmlFor="searchbar">Cari</label> */}
        <input
          type="text"
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
      </form>
      <Dropdown />

    </>
  );
};

export default SearchBar;
