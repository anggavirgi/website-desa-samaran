// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logodesaform } from "../assets/img/image";

export const PrintDomisili = () => {
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
      <div id="printable" className="flex items-center justify-center gap-6">
        <div>
          <img
            src={logodesaform}
            alt=""
            className="w-20 h-[5.5rem] object-cover"
          />
        </div>
        <div className="font-semibold text-center">
          <div>PEMERINTAH KABUPATEN SAMPANG</div>
          <div>KECAMATAN TAMBELANGAN</div>
          <div>KEPALA DESA SAMARAN</div>
          <hr className="border border-black" />
          <div className="text-sm font-normal">
            Alamat : Jl. Raya Bicabbi Desa Samaran - Tambelangan 695253
          </div>
        </div>
      </div>
      <hr className="border-2 border-black mt-2.5 w-full mx-auto" />
      <div className="mt-6 px-4">
        <div className="text-center">
          <div className="text-lg underline font-semibold">
            SURAT KETERANGAN DOMISILI
          </div>
          <div className="text-xs">
            Nomor: 470/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/434.508.06/2024
          </div>
        </div>
        <div className="indent-7 text-justify mt-2 text-sm">
          Yang bertanda tangan di bawah ini, pelaksana tugas Kepala Desa Samaran
          Kecamatan Tambelangan Kabupaten Sampang, menerangkan dengan sebenarnya
          bahwa :
        </div>
        <div className="text-sm mt-2">
          <div className="w-full flex items-center gap-2">
            <div className="w-1/5">Nama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.nama}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/5">Tempat, Tgl. Lahir</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.tempat}, {formatDate(state.data.lahir)}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/5">Jenis Kelamin</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.gender}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/5">Agama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.agama}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/5">Kewarganegaraan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> Indonesia
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/5">Pekerjaan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.pekerjaan}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/5">No. KK</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.kk}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/5">NIK</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.nik}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/5">Alamat</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.alamat}
            </div>
          </div>
        </div>
        <div className="indent-7 text-justify mt-2 text-sm">
          Bahwa orang tersebut diatas benar – benar penduduk Desa Samaran dan
          sampai saat ini masih menjadi penduduk Desa Samaran.
        </div>
        <div className="indent-7 text-justify mt-2 text-sm">
          Demikian Surat Keterangan ini dibuat dengan sebenarnya untuk dapatnya
          dipergunakan sebagaimana mestinya
        </div>
        <div className="flex justify-between text-sm mt-6">
          <div className="flex flex-col gap-1 text-center mt-6">
            <div>Yang Bersangkutan</div>
            <div className="mt-20">
              <hr className="border-black" />
            </div>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <div>
              Sampang,
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              2024
            </div>
            <div>PJ Kepala Desa Samaran</div>
            <div className="font-semibold mt-16 underline">
              SITI MASNUNAH S.ST
            </div>
            <div>NIP. 198311012006042014</div>
          </div>
        </div>
      </div>
    </div>
  );
};
