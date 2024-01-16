// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";

export const PrintNikahPengantar = () => {
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
        <div className="text-xs font-semibold">
          *Jika window print tidak muncul secara otomatis, klik tombol berikut :
        </div>
        <button
          onClick={() => handlePrint("btnPrint")}
          className="border border-black bg-gray-200 rounded px-3 "
        >
          Print
        </button>
      </div>
      <div className="text-xs">
        <div>Lampiran V</div>
        <div>Keputusan Derjen Bimas Islam No 473 Tahun 2020</div>
        <div className="telative flex justify-center items-center mt-2.5">
          <div className="font-medium">FORMULIR SURAT PENGANTAR NIKAH</div>
          <div className="font-semibold absolute right-2">Model N1</div>
        </div>
        <div className="mt-2.5 flex w-full items-center">
          <div className="w-2/5">KANTOR DESA / KELURAHAN</div>
          <div className="">: SAMARAN</div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-2/5">KECAMATAN</div>
          <div className="">: TAMBELANGAN</div>
        </div>
        <div className="flex w-full items-center">
          <div className="w-2/5">KABUPATEN / KOTA</div>
          <div className="">: SAMPANG</div>
        </div>
        <div className="text-center mt-2">
          <div className="text-lg underline font-semibold">
            SURAT PENGANTAR NIKAH
          </div>
          <div className="text-xs">Nomor: 470/09&nbsp;/434.508.06/2024</div>
        </div>
        <div className="text-justify mt-2 text-xs">
          Yang bertanda tangan di bawah ini menerangkan dengan sesungguhnya
          bahwa :
        </div>
        <div className="mt-3 text-xs">
          <div className="w-full flex items-center">
            <div className="w-2/5">1.Nama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.nama}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">2.NIK</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.nik}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">3.Jenis Kelamin</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.gender}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">4.Tempat dan tanggal lahir</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.tempat}, {formatDate(state.data.lahir)}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">5.Kewarganegaraan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> Indonesia
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">6.Agama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.agama}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">7.Pekerjaan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.pekerjaan}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">8.Alamat</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.alamat}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">9.Status Perkawinan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.alamat}
            </div>
          </div>
          <div className="indent-3">
            <div className="w-full flex items-center">
              <div className="w-1/2">
                a. &nbsp; Laki-laki :Jejaka, Duda Atau beristri ke-
              </div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.status}
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-1/2">b. &nbsp; Perempuan :Perawan, Janda</div>
              <div className="w-1/2 flex">
                <div>:</div> {state.data.status}
              </div>
            </div>
          </div>

          <div className="mt-7">
            Adalah benar-benar anak dari perkawinan seorang pria :
          </div>

          <div className="w-full flex items-center">
            <div className="w-2/5">1.Nama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.namaAyah}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">2.NIK</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.nikAyah}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">4.Tempat dan tanggal lahir</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.tempatAyah},{" "}
              {formatDate(state.data.lahirAyah)}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">5.Kewarganegaraan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> Indonesia
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">6.Agama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.agamaAyah}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">7.Pekerjaan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.pekerjaanAyah}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">8.Alamat</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.alamatAyah}
            </div>
          </div>

          <div className="mt-7">Dengan seorang wanita :</div>

          <div className="w-full flex items-center">
            <div className="w-2/5">1.Nama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.namaIbu}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">2.NIK</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.nikIbu}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">4.Tempat dan tanggal lahir</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.tempatIbu},{" "}
              {formatDate(state.data.lahirIbu)}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">5.Kewarganegaraan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> Indonesia
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">6.Agama</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.agamaIbu}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">7.Pekerjaan</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.pekerjaanIbu}
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="w-2/5">8.Alamat</div>
            <div className="w-1/2 flex gap-3">
              <div>:</div> {state.data.alamatIbu}
            </div>
          </div>
        </div>
        <div className="indent-7 text-justify mt-5 text-xs">
          Demikianlah surat keterangan ini dibuat dengan mengingat sumpah
          jabatan dan untuk dipergunakan sebagaimana mestinya.
        </div>
        <div className="flex justify-between text-xs mt-6">
          <div></div>
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
