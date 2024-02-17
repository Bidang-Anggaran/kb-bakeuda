import kodeBelanja from "../json/kodeBelanja.json";

const CodeList = () => {
  return (
    <>
      {kodeBelanja.map((e) => (
        <div key={e.Kode}>
          <h2>{e.Kode}</h2>
          <h3>{e["Rincian Akun"]}</h3>
          <p>{e.Deskripsi}</p>
        </div>
      ))}
    </>
  );
};

export default CodeList;
