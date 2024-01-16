// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { logodesaform } from "../assets/img/image";

export const PrintUsaha = () => {
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
            SURAT KETERANGAN USAHA
          </div>
          <div className="text-xs">
            Nomor: 503/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/434.508.06/2024
          </div>
        </div>
        <div className="text-sm mt-4">
          <div>Yang bertanda tangan di bawah ini:</div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Nama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> SITI MASNUNAH S.ST
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">PJ Kepala Desa</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> Samaran
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Kecamatan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> Tambelangan
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Kabupaten</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> Sampang
            </div>
          </div>

          <div className="w-full flex gap-2 mt-3">
            <div className="w-1/3">Dengan ini menerangkan bahwa</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div>
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Nama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.nama}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Tempat, Tgl. Lahir</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.tempat}, {formatDate(state.data.lahir)}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">NIK</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.nik}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Jenis Kelamin</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.gender}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Warga Negara</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> Indonesia
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Agama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.agama}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Pekerjaan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.pekerjaan}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Alamat</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.alamat}
            </div>
          </div>

          <div className="w-full flex gap-2 mt-3">
            <div className="w-full">
              Adalah benar-benar penduduk Desa Samaran yang memiliki usaha
              sebagai berikut :
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Usaha Pokok</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.pokok}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Usaha Sampingan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.sampingan}
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="w-1/3">Lokasi Usaha</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.lokasi}
            </div>
          </div>
        </div>
        <div className="indent-7 text-justify mt-2 text-sm">
          Usaha tersebut telah dilakukan sejak tahun {state.data.berdiri} dan
          sampai sekarang masih dilakukan dan masih berjalan lancar.
        </div>
        <div className="indent-7 text-justify mt-2 text-sm">
          Demikian surat keterangan ini dibuat dengan sebenarnya untuk dapat
          dipergunakan seperlunya.
        </div>
        <div className="flex justify-end text-sm mt-6">
          <div className="flex flex-col gap-1 text-center">
            <div>
              Sampang,
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              2024
            </div>
            <div>PJ DESA SAMARAN</div>
            <div className="mt-16 underline font-semibold">
              SITI MASNUNAH S.ST
            </div>
          </div>
        </div>
        <div className="mt-10 text-sm">
          <div>Catatan (diperiksa petugas) pada saat daftar ulang :</div>
          <div>1. Usaha …………………………. Tanggal ………………….. ttd. …………….</div>
          <div>2. Usaha …………………………. Tanggal ………………….. ttd. …………….</div>
          <div>3. Usaha …………………………. Tanggal ………………….. ttd. …………….</div>
        </div>
      </div>
    </div>
  );
};
