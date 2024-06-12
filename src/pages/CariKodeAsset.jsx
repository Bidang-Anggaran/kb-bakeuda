import AssetsList from "../components/AssetsList";
import SearchBar from "../components/SearchBar";

const CariKodeAsset = () => {
  return (
    <main className="container lg:max-w-4xl xl:max-w-6xl 2xl:max-w-screen-2xl mx-auto text-slate-800 min-w-[768px] ">
      <div className="mx-auto flex flex-col w-max">
        <h1 className="font-bold text-4xl mt-8 ubuntu-bold drop-shadow-lg text-sky-900 py-2">
          REKENING PEDIA
        </h1>
      </div>
      <section className="shadow-xl">
        {/* <Link to={'/'}>
            Ke Home
          </Link> */}
        <SearchBar
          kodeMinW={"sm:min-w-36"}
          flexSize={[1, 2, 5, 2]}
          tabTitle={[
            "Kode Rekening",
            "Penjelasan",
            "Keterangan",
            "Ketentuan Lain-Lain",
          ]}
        />
        <AssetsList />
      </section>
    </main>
  );
};

export default CariKodeAsset;
