import kodeBelanja from "../json/kodeBelanja.json";
import ReadMore from "./ReadMore";
import { useBelanja } from "../context/BelanjaContext";
import Pagination from "./Pagination";

const ItemsList = () => {
  const { startIndex, endIndex } = useBelanja();

  const { searchInput } = useBelanja();

  const filteredKodeBelanja =
    searchInput !== ""
      ? kodeBelanja.filter((item) =>
          Object.values(item).some((value) =>
            `${value}`.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : kodeBelanja;

  const currentData = filteredKodeBelanja.slice(startIndex, endIndex);

  const formatString = (input) => {
    const strInput = `${input}`;
    const parts = [
      strInput.slice(0, 1),
      strInput.slice(1, 2),
      strInput.slice(2, 4),
      strInput.slice(4, 6),
      strInput.slice(6, 8),
      strInput.slice(8),
    ];
    const formattedString = parts.join(".").replace(/\.*$/, "");
    return formattedString;
  };

  return (
    <>
      <div className="divide-y-2 flex flex-col justify-between divide-slate-300  bg-slate-200 min-w-[412px] rounded-lg">
        <div className="w-full"></div>
        {filteredKodeBelanja.length < 1 ? (
          <div className="text-center py-8 text-xl font-bold">
            Tidak ada data yang ditemukan.
          </div>
        ) : null}
        {currentData.map((e) => (
          <div key={e.kode} className="flex">
            <div className="flex-[1] min-w-32 sm:min-w-[8.5rem] border-x-2 border-slate-300">
              <h2 className="font-bold text-xs sm:text-sm p-2">
                {e["Kode Akun"]}
              </h2>
            </div>
            <div className="p-2 flex-[3] border-r-2 border-slate-300">
              <h3 className="font-bold text-xs sm:text-sm ">{e.nama}</h3>
              {e["Uraian Akun"] == "" ? (
                <p className="text-xs sm:text-sm">Deskripsi belum ditambah.</p>
              ) : (
                <ReadMore>{e["Uraian Akun"]}</ReadMore>
              )}
            </div>
            <p className="p-2 flex-[6] text-xs sm:text-sm border-r-2 border-slate-300">
              {e.Deskripsi == "" ? "-" : e.Deskripsi}
            </p>
            <div className="p-2 flex-[3] text-xs sm:text-sm border-r-2 border-slate-300">
              <p>
                {e["Contoh / Ketentuan"] == "" ? "-" : e["Contoh / Ketentuan"]}
              </p>
            </div>
          </div>
        ))}

        <Pagination totalItems={filteredKodeBelanja.length} />
      </div>
    </>
  );
};

export default ItemsList;
