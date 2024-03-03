import { Link } from "react-router-dom";

const Navbar = ({children}) => {
  return (
    <>
    <header className="bg-slate-900 backdrop-blur-sm w-full py-4 px-8 shadow-md flex justify-between">
      <div className="text-xl font-bold text-slate-200">LOGO</div>
      <div className="flex space-x-8 text-slate-200">
        <Link to={'/'} className="flex flex-col items-center cursor-pointer">
          <p>Home</p>
          <div className="bg-slate-200 w-4 h-1 rounded-lg"></div>
        </Link>
        <Link to={'/'}>Rekening</Link>
        <Link to={'/asset'}>Asset</Link>
        <p>FAQ</p>
      </div>

    </header>
    {children}
    <div className="h-12"></div>
    </>

  );
};

export default Navbar;
