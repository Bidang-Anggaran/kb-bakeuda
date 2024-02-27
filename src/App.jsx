import ItemsList from "./components/ItemsList";
import SearchBar from "./components/SearchBar";
import BelanjaProvider from "./context/BelanjaContext";
function App() {
  return (
    <>
      <BelanjaProvider>
        <main className="container lg:max-w-4xl mx-auto px-4 text-slate-800 min-w-[640px]">
          <div className="mx-auto flex flex-col w-max">
            <h1 className="font-bold text-4xl mt-8 ubuntu- py-2">
              Rekening Pedia
            </h1>
          </div>
          <SearchBar />
          <ItemsList />
        </main>
        <div className="h-24"></div>
      </BelanjaProvider>
    </>
  );
}

export default App;
