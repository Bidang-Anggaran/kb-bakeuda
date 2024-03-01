import ItemsList from "./components/ItemsList";
import SearchBar from "./components/SearchBar";
import BelanjaProvider from "./context/BelanjaContext";
function App() {
  return (
    <>
      <BelanjaProvider>
        <main className="container lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl mx-auto text-slate-800 min-w-[768px] drop-shadow-lg">
          <div className="mx-auto flex flex-col w-max">
            <h1 className="font-bold text-4xl mt-8 ubuntu-bold drop-shadow-lg text-sky-900 py-2">
              REKENING PEDIA
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
