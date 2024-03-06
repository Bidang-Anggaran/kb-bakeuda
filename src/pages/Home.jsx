import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-xl px-8 rounded-lg py-16 bg-slate-100 shadow-lg flex flex-col justify-center items-center overflow-hidden ">
        <h1 className="text-slate-950 font-bold text-2xl pb-8">Rekening Pedia</h1>
        <Link to={'/rekening'} className="bg-slate-950 text-slate-100 font-bold text-center px-5 py-2 rounded-lg w-full mb-4">
          Kode Rekening
        </Link>
        <Link to={'/asset'} className="bg-slate-100 text-slate-950 border border-slate-950 font-bold text-center px-5 py-2 rounded-lg w-full mb-4">
          Kode Asset
        </Link>
        <Link to={'/faq'} className="bg-slate-950 text-slate-100 font-bold text-center px-5 py-2 rounded-lg w-full mb-4">
          FAQ
        </Link>
      </div>
    </main>
  );
};

export default Home;
