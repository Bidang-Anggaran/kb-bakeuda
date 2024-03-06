import { useLocation } from "react-router-dom";
import { useBelanja } from "../context/BelanjaContext";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const { searchInputHandler } = useBelanja();
  const { pathname } = useLocation();
  return (
    <>
      <header
        className={`bg-slate-900 backdrop-blur-sm w-full py-2 px-8 shadow-md flex justify-center min-w-[412px] ${
          pathname == "/" ? "hidden" : "block"
        }`}
      >
        <div className="flex text-slate-200 ">
          {/* <NavLink
            to={"/"}
            onClick={() => {
              searchInputHandler("");
            }}
            className={({ isActive }) =>
              `font-bold text-lg px-4 py-2 ${
                isActive ? "bg-yellow-200 rounded-lg text-slate-900 " : ""
              }`
            }
          >
            Home
          </NavLink> */}
          <NavLink
            to={"/rekening"}
            onClick={() => {
              searchInputHandler("");
            }}
            className={({ isActive }) =>
              `font-bold text-lg px-4 py-2 ${
                isActive ? "bg-yellow-200 rounded-lg text-slate-900 " : ""
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
                isActive ? "bg-yellow-200 rounded-lg text-slate-900 " : ""
              }`
            }
          >
            Asset
          </NavLink>
          {/* <NavLink
            to={"/faq"}
            onClick={() => {
              searchInputHandler("");
            }}
            className={({ isActive }) =>
              `font-bold text-lg px-4 py-2 ${
                isActive ? "bg-yellow-200 rounded-lg text-slate-900 " : ""
              }`
            }
          >
            FAQ
          </NavLink> */}
        </div>
      </header>
      {children}
      <div className="h-12"></div>
    </>
  );
};

export default Navbar;
