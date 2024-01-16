import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Pelayanan } from "./pages/Pelayanan";
import { FormDomisili } from "./pages/FormDomisili";
import { PrintDomisili } from "./pages/PrintDomisili";
import { FormTidakMampu } from "./pages/FormTidakMampu";
import { PrintTidakMampu } from "./pages/PrintTidakMampu";
import { FormUsaha } from "./pages/FormUsaha";
import { PrintUsaha } from "./pages/PrintUsaha";
import { FormSkck } from "./pages/FormSkck";
import { PrintSkck } from "./pages/PrintSkck";
import { FormNikah } from "./pages/FormNikah";
import { FormNikahPengantar } from "./pages/FormNikahPengantar";
import { FormNikahPermohonan } from "./pages/FormNikahPermohonan";
import { FormNikahPersetujuan } from "./pages/FormNikahPersetujuan";
import { FormNikahWali } from "./pages/FormNikahWali";
import { FormNikahIzin } from "./pages/FormNikahIzin";
import { FormNikahBelum } from "./pages/FormNikahBelum";
import { FormNikahKematian } from "./pages/FormNikahKematian";
import { PrintNikahPengantar } from "./pages/PrintNikahPengantar";
import { PrintNikahPermohonan } from "./pages/PrintNikahPermohonan";
import { PrintNikahPersetujuan } from "./pages/PrintNikahPersetujuan";
import { PrintNikahWali } from "./pages/PrintNikahWali";
import { PrintNikahBelum } from "./pages/PrintNikahBelum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/pelayanan" element={<Pelayanan />} />

        <Route path="/domisili" element={<FormDomisili />} />
        <Route path="/domisili/print" element={<PrintDomisili />} />

        <Route path="/tidakmampu" element={<FormTidakMampu />} />
        <Route path="/tidakmampu/print" element={<PrintTidakMampu />} />

        <Route path="/usaha" element={<FormUsaha />} />
        <Route path="/usaha/print" element={<PrintUsaha />} />

        <Route path="/skck" element={<FormSkck />} />
        <Route path="/skck/print" element={<PrintSkck />} />

        <Route path="/nikah" element={<FormNikah />} />
        <Route path="/nikah/pengantar" element={<FormNikahPengantar />} />
        <Route
          path="/nikah/pengantar/print"
          element={<PrintNikahPengantar />}
        />
        <Route path="/nikah/permohonan" element={<FormNikahPermohonan />} />
        <Route
          path="/nikah/permohonan/print"
          element={<PrintNikahPermohonan />}
        />
        <Route path="/nikah/persetujuan" element={<FormNikahPersetujuan />} />
        <Route
          path="/nikah/persetujuan/print"
          element={<PrintNikahPersetujuan />}
        />
        <Route path="/nikah/wali" element={<FormNikahWali />} />
        <Route path="/nikah/wali/print" element={<PrintNikahWali />} />
        <Route path="/nikah/izin" element={<FormNikahIzin />} />
        <Route path="/nikah/belumnikah" element={<FormNikahBelum />} />
        <Route path="/nikah/belumnikah/print" element={<PrintNikahBelum />} />
        <Route path="/nikah/kematian" element={<FormNikahKematian />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
