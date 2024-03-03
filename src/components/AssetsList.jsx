import assets from "../json/kodeAsset.json";
import ReadMore from "./ReadMore";
import { useBelanja } from "../context/BelanjaContext";
import Pagination from "./Pagination";

const AssetsList = () => {
  const { startIndex, endIndex } = useBelanja();

  const { searchInput } = useBelanja();

  const filteredKodeBelanja =
    searchInput !== ""
      ? assets.filter((item) =>
          Object.values(item).some((value) =>
            `${value}`.toLowerCase().includes(searchInput.toLowerCase())
          )
        )
      : assets;

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
      <div className="divide-y-2 flex flex-col justify-between divide-slate-300 min-w-[768px] bg-slate-200  rounded-lg">
        <div className="w-full"></div>
        {filteredKodeBelanja.length < 1 ? (
          <div className="text-center py-8 text-xl font-bold">
            Tidak ada data yang ditemukan.
          </div>
        ) : null}
        {currentData.map((e) => (
          <div key={e.kode} className="flex">
            <div className="min-w-36 flex-[1] border-x-2 border-slate-300">
              <h2 className="font-bold  text-sm p-2">{formatString(e.kode)}</h2>
            </div>
            <div className="p-2 flex-[2] min-w-40 border-r-2 border-slate-300">
              <h3 className="font-bold text-sm ">{e.uraian}</h3>
              {/* {e.deskripsi == "" ? (
                <p className="text-sm">Deskripsi belum ditambah.</p>
              ) : (
                <ReadMore>{e.deskripsi}</ReadMore>
              )} */}
            </div>
            <p className="p-2 flex-[5] text-sm min-w-40 border-r-2 border-slate-300">
              {e.deskripsi == "" ? "Deskripsi Belum Ditambah" : e.deskripsi}
            </p>
            <div className="p-2 flex-[2] text-sm min-w-40 border-r-2 border-slate-300">
              <p>
                {e.ketentuan == "" ? "Ketentuan Belum Ditambah" : e.ketentuan}
              </p>
            </div>
          </div>
        ))}

        <Pagination totalItems={filteredKodeBelanja.length} />
      </div>
    </>
  );
};

export default AssetsList;
