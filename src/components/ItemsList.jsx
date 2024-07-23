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

  const highlightText = (text) => {
    return text.replace(
      new RegExp(searchInput, "gi"),
      (match) => `<span class="highlight">${match}</span>`
    );
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
        {currentData.map((e, i) => (
          <div key={e["Kode Akun"] + i} className="flex">
            <div className="flex-[1] min-w-32 sm:min-w-[8.5rem] border-x-2 border-slate-300">
              <h2
                dangerouslySetInnerHTML={{
                  __html: highlightText(`${e["Kode Akun"]}`),
                }}
                className="font-bold text-xs sm:text-sm p-2"
              />
            </div>
            <div className="p-2 flex-[3] border-r-2 border-slate-300">
              <h3
                dangerouslySetInnerHTML={{
                  __html: highlightText(e["Uraian Akun"]),
                }}
                className="font-bold text-xs sm:text-sm"
              />
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: highlightText(e.Deskripsi),
              }}
              className="p-2 flex-[6] text-xs sm:text-sm border-r-2 border-slate-300"
            />

            <div className="p-2 flex-[3] text-xs sm:text-sm border-r-2 border-slate-300">
              <p
                dangerouslySetInnerHTML={{
                  __html: highlightText(e["Contoh / Ketentuan"]),
                }}
              ></p>
            </div>
          </div>
        ))}

        <Pagination totalItems={filteredKodeBelanja.length} />
      </div>
    </>
  );
};

export default ItemsList;
