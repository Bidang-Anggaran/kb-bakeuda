import { useState } from "react";
import ItemsList from "./components/ItemsList";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const searchInputHandler = (input) => {
    setSearchInput(input);
    // console.log(input);
  };
  return (
    <>
      <main className="container lg:max-w-4xl mx-auto px-4 text-slate-800 ">
        <div className="mx-auto flex flex-col w-max">
          <h1 className="font-bold text-4xl mt-8 ubuntu- py-2">
            Rekening Pedia
          </h1>
          {/* <h2>Cari Kode Belanja</h2> */}
        </div>
        <SearchBar searchHandler={searchInputHandler} />
        <ItemsList searchRef={searchInput} />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
