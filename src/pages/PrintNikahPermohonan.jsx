// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";

export const PrintNikahPermohonan = () => {
  const { state } = useLocation();

  // FORMAT DATE
  const formatDate = (inputDate) => {
    const dateObj = new Date(inputDate);

    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const dayName = days[dateObj.getDay()];

    const day = dateObj.getDate().toString().padStart(2, "0");
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const monthName = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");

    return `${dayName} / ${day} ${monthName} ${year} / ${hours}.${minutes}`;
  };

  // DATE NOW
  const formatDateDDMMYY = () => {
    const today = new Date();

    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear().toString().slice(-2);

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
        <div>Lampiran VI</div>
        <div>Keputusan Derjen Bimas Islam No 473 Tahun 2020</div>
        <div className="telative flex justify-center items-center mt-2.5">
          <div className="font-semibold text-base">
            FORMULIR PERMOHONAN KEHENDAK NIKAH
          </div>
          <div className="font-semibold absolute right-2">Model N2</div>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <div>Perihal : Permohonan Kehendak Perkawinan</div>
          <div>Sampang : {formatDateDDMMYY()} </div>
        </div>
        <div className="mt-8">
          <div>Kepada Yth.</div>
          <div>Kepala KBRI/KJRI/KUA Kecamatan Tambelangan</div>
          <div>Di Sampang</div>
        </div>
        <div className="text-justify indent-7 mt-8 ">
          Dengan hormat, kami mengajukan permohonan kehendak nikah untuk atas
          nama
        </div>
        <div className="mt-3 ">
          <div className="w-full flex items-center">
            <div className="w-1/4">Calon Suami</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.suami}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/4">Calon Istri</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.istri}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/4">Hari / Tanggal / Jam</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {formatDate(state.data.tanggal)} WIB
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/4">Tempat akad nikah</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.alamat}
            </div>
          </div>
        </div>
        <div className="indent-7 text-justify mt-2 ">
          Bersama ini kami sampaikan surat-surat yang diperlukan untuk diperiksa
          sebagai berikut :
        </div>
        <ol className="list-decimal list-inside mt-1.5 indent-3">
          <li className="mb-2">
            Surat Pengantar Nikah dari Desa/Kelurahan (N1)
          </li>
          <li className="mb-2">Persetujuan Calon Mempelai (N4)</li>
          <li className="mb-2">
            Foto Kopi KTP Calon Mempelai, Wali, dan Saksi
          </li>
          <li className="mb-2">Foto Kopi Akte Kelahiran / Ijazah</li>
          <li className="mb-2">Foto Kopi Kartu Keluarga</li>
          <li className="mb-2">
            Pas Foto ukuran 2x3 cm (5 lembar), 3x4 cm (2 lembar), 4x6 cm (1
            lembar), berlatar belakang biru
          </li>
          <li className="mb-2">……………………………………………….</li>
          <li className="mb-2">……………………………………………….</li>
          <li className="mb-2">……………………………………………….</li>
        </ol>
        <div className="text-justify indent-7 mt-5">
          Demikian permohonan ini kami sampaikan, kiranya dapat diperiksa,
          dihadiri dan dicatat Sesuai dengan ketentuan peraturan
          perundang-undangan.
        </div>
        <div className="flex justify-between  mt-6">
          <div className="flex flex-col gap-1">
            <div>Diterima tanggal ……………………</div>
            <div>Yang menerima, </div>
            <div>Kepala KUA/Penghulu/PPN LN</div>
          </div>
          <div className="flex flex-col gap-1 w-1/5 text-left">
            <div>Wassalam,</div>
            <div>Pemohon,</div>
          </div>
        </div>
      </div>
    </div>
  );
};
