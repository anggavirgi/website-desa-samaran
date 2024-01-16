// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";

export const PrintNikahPersetujuan = () => {
  const { state } = useLocation();

  // FORMAT DATE
  const formatDate = (inputDate) => {
    const dateParts = inputDate.split("-");
    const formattedDate = new Date(
      `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`
    );

    const day = formattedDate.getDate().toString().padStart(2, "0");
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = formattedDate.getFullYear();

    return `${day} - ${month} - ${year}`;
  };

  const handlePrint = (divId) => {
    const contentToPrint = document.getElementById(divId);
    if (contentToPrint) {
      contentToPrint.classList.add("hidden");
      window.print({
        size: [210, 297],
        headers: false, // Menonaktifkan header
        footers: false, // Menonaktifkan footer
      });
      contentToPrint.classList.remove("hidden");
    }
  };

  return (
    <div className="py-6 px-5">
      <div id="btnPrint" className="flex items-center gap-2 mb-5">
        <div className="text-sm font-semibold">
          *Jika window print tidak muncul secara otomatis, klik tombol berikut :
        </div>
        <button
          onClick={() => handlePrint("btnPrint")}
          className="border border-black bg-gray-200 rounded px-3 "
        >
          Print
        </button>
      </div>
      <div className="text-sm">
        <div>Lampiran VII</div>
        <div>Keputusan Derjen Bimas Islam No 473 Tahun 2020</div>
        <div className="telative flex justify-center items-center mt-2.5">
          <div className="font-semibold text-base underline">
            SURAT PERSETUJUAN MEMPELAI
          </div>
          <div className="font-semibold absolute right-2">Model N4</div>
        </div>
        <div className="text-justify mt-8 ">
          Yang bertanda tangan di bawah ini :
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <div>A. Calon Suami</div>
          <div className="indent-7">
            <div className="w-full flex items-center">
              <div className="w-1/3">1.Nama Lengkap</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.namaSuami}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">2.Bin</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.binSuami}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">3.NIK</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.nikSuami}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">4.Tempat dan tanggal lahir</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.tempatSuami},{" "}
                {formatDate(state.data.lahirSuami)}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">5.Kewarganegaraan</div>
              <div className="w-1/2 flex">
                <div>:</div> Indonesia
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">6.Agama</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.agamaSuami}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">7.Pekerjaan terakhir</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.pekerjaanSuami}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">8.Tempat tinggal terakhir</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.alamatSuami}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <div>B. Calon Istri</div>
          <div className="indent-7">
            <div className="w-full flex items-center">
              <div className="w-1/3">1.Nama Lengkap</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.namaIstri}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">2.Binti</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.binIstri}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">3.NIK</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.nikIstri}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">4.Tempat dan tanggal lahir</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.tempatIstri},{" "}
                {formatDate(state.data.lahirIstri)}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">5.Kewarganegaraan</div>
              <div className="w-1/2 flex">
                <div>:</div> Indonesia
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">6.Agama</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.agamaIstri}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">7.Pekerjaan terakhir</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.pekerjaanIstri}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/3">8.Tempat tinggal terakhir</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.alamatIstri}
              </div>
            </div>
          </div>
        </div>
        <div className="text-justify mt-5">
          Menyatakan dengan sesungguhnya bahwa atas dasar suka rela, dengan
          kesadara sendiri, tanpa paksaan dari siapapun juga, setuju untuk
          melangsungkan pernikahan.
        </div>
        <div className="text-justify indent-7 mt-2">
          Demikianlah surat persetujuan ini di buat untuk digunakan seperlunya..
        </div>
        <div className="flex justify-between  mt-6">
          <div className="flex flex-col justify-center text-center gap-20 ps-16">
            <div></div>
            <div>I. Calon Suami</div>
          </div>
          <div className="flex flex-col justify-center text-center gap-20">
            <div>Sampang, ……………… 2024</div>
            <div>II. Calon Istri</div>
          </div>
        </div>
      </div>
    </div>
  );
};
