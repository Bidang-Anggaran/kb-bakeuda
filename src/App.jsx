import { Routes } from "react-router-dom";
import BelanjaProvider from "./context/BelanjaContext";
import CariKodeBelanja from "./pages/CariKodeBelanja";
import { Route } from "react-router-dom";
import CariKodeAsset from "./pages/CariKodeAsset";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BelanjaProvider>
      <Navbar>
        <Routes>
          <Route path="/" element={<CariKodeBelanja />} />
          <Route path="/asset" element={<CariKodeAsset />} />
          {/* <div className="h-24"></div> */}
        </Routes>
      </Navbar>
    </BelanjaProvider>
  );
}

export default App;
