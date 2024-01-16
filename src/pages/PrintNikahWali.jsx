// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";

export const PrintNikahWali = () => {
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
        <div className="w-full flex items-center">
          <div className="w-1/6">Kantor Desa</div>
          <div className="w-1/2 flex">
            <div>:</div> Samaran
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="w-1/6">Kecamatan</div>
          <div className="w-1/2 flex">
            <div>:</div> Tambelangan
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="w-1/6">Kabupaten</div>
          <div className="w-1/2 flex">
            <div>:</div> Sampang
          </div>
        </div>
        <div className="telative flex justify-center items-center mt-8">
          <div className="text-center">
            <div className="text-lg underline font-semibold">
              SURAT KETERANGAN WALI
            </div>
            <div className="text-xs">
              Nomor: 470/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/434.508.06/2024
            </div>
          </div>
        </div>
        <div className="text-justify indent-7 mt-8 ">
          Yang bertanda tangan di bawah ini Kepala Desa Samaran Kecamatan
          Tambelangan Kab. Sampang, menerangkan dengan sebenarnya bahwa :
        </div>

        <div className="flex flex-col gap-1.5 indent-7 mt-5">
          <div className="w-full flex items-center">
            <div className="w-1/3">1.Nama</div>
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
            <div className="w-1/3">3.Tempat dan tanggal lahir</div>
            <div className="w-1/2 flex">
              <div>:</div> {state.data.tempatSuami},{" "}
              {formatDate(state.data.lahirSuami)}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/3">4.Kewarganegaraan</div>
            <div className="w-1/2 flex">
              <div>:</div> Indonesia
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/3">5.Agama</div>
            <div className="w-1/2 flex">
              <div>:</div> {state.data.agamaSuami}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/3">6.Pekerjaan</div>
            <div className="w-1/2 flex">
              <div>:</div> {state.data.pekerjaanSuami}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/3">7.Tempat Tinggal</div>
            <div className="w-1/2 flex">
              <div>:</div> {state.data.alamatSuami}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/3">8.Status Wali</div>
            <div className="w-1/2 flex">
              <div>:</div> {state.data.statusWali}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/3">9.Hubungan Wali</div>
            <div className="w-1/2 flex">
              <div>:</div> {state.data.hubunganWali}
            </div>
          </div>
        </div>

        <div className="text-justify indent-7 my-4">
          Orang tersebutbenar-benarwaliNasab / Hakim dari seorang perempuan :
        </div>

        <div className="flex flex-col gap-1.5 indent-7">
          <div className="w-full flex items-center">
            <div className="w-1/3">1.Nama</div>
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
            <div className="w-1/3">3.Mas Kawin</div>
            <div className="w-1/2 flex">
              <div>:</div> {state.data.masKawin},{" "}
              {formatDate(state.data.lahirSuami)}
            </div>
          </div>
        </div>

        <div className="text-justify indent-7 mt-5">
          Demikian surat keterangan ini dibuat dengan mengingat sumpah jabatan
          dan untuk di gunakan semestinya.
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex flex-col text-center gap-3 ps-16">
            <div></div>
            <div>Wali</div>
          </div>
          <div className="flex flex-col justify-center text-center gap-20">
            <div className="flex flex-col gap-1">
              <div>Sampang, ……………… 2024</div>
              <div>PJ DESA SAMARAN</div>
            </div>
            <div className="underline">SITI MASNUNAH S.ST</div>
          </div>
        </div>
      </div>
    </div>
  );
};
