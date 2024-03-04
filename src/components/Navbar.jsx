
import { useBelanja } from "../context/BelanjaContext";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const { searchInputHandler } = useBelanja();
  return (
    <>
      <header className="bg-slate-900 backdrop-blur-sm w-full py-4 px-8 shadow-md flex justify-center">
        {/* <div className="text-xl font-bold text-slate-200">LOGO</div> */}
        <div className="flex space-x-8 text-slate-200">
          <NavLink
            to={"/home"}
            onClick={() => {
              searchInputHandler("");
            }}
            className={({ isActive }) =>
              `font-bold text-lg px-4 py-2 ${
                isActive
                  ? "underline bg-yellow-200 rounded-lg text-slate-900 "
                  : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/"}
            onClick={() => {
              searchInputHandler("");
            }}
            className={({ isActive }) =>
              `font-bold text-lg px-4 py-2 ${
                isActive
                  ? "underline bg-yellow-200 rounded-lg text-slate-900 "
                  : ""
              }`
            }
          >
            Rekening
          </NavLink>
          <NavLink
            to={"/asset"}
            onClick={() => {
              searchInputHandler("");
            }}
            className={({ isActive }) =>
              `font-bold text-lg px-4 py-2 ${
                isActive
                  ? "underline bg-yellow-200 rounded-lg text-slate-900 "
                  : ""
              }`
            }
          >
            Asset
          </NavLink>
          <NavLink
            to={"/faq"}
            onClick={() => {
              searchInputHandler("");
            }}
            className={({ isActive }) =>
              `font-bold text-lg px-4 py-2 ${
                isActive
                  ? "underline bg-yellow-200 rounded-lg text-slate-900 "
                  : ""
              }`
            }
          >
            FAQ
          </NavLink>
        </div>
      </header>
      {children}
      <div className="h-12"></div>
    </>
  );
};

export default Navbar;
