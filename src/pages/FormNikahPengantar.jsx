// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { HiArrowLongLeft } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const FormNikahPengantar = () => {
  const navigate = useNavigate();
  // DATA AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []);

  const [getNama, setNama] = useState("");
  const [getTempat, setTempat] = useState("");
  const [getTanggal, setTanggal] = useState("");
  const [getGender, setGender] = useState("");
  const [getAgama, setAgama] = useState("");
  const [getPekerjaan, setPekerjaan] = useState("");
  const [getNIK, setNIK] = useState("");
  const [getAlamat, setAlamat] = useState("");
  const [getStatus, setStatus] = useState("");

  const [getNamaAyah, setNamaAyah] = useState("");
  const [getTempatAyah, setTempatAyah] = useState("");
  const [getTanggalAyah, setTanggalAyah] = useState("");
  const [getAgamaAyah, setAgamaAyah] = useState("");
  const [getPekerjaanAyah, setPekerjaanAyah] = useState("");
  const [getNIKAyah, setNIKAyah] = useState("");
  const [getAlamatAyah, setAlamatAyah] = useState("");

  const [getNamaIbu, setNamaIbu] = useState("");
  const [getTempatIbu, setTempatIbu] = useState("");
  const [getTanggalIbu, setTanggalIbu] = useState("");
  const [getAgamaIbu, setAgamaIbu] = useState("");
  const [getPekerjaanIbu, setPekerjaanIbu] = useState("");
  const [getNIKIbu, setNIKIbu] = useState("");
  const [getAlamatIbu, setAlamatIbu] = useState("");

  const [getDone, setDone] = useState("");

  const handleSubmit = () => {
    const data = {
      nama: getNama,
      tempat: getTempat,
      lahir: getTanggal,
      gender: getGender,
      agama: getAgama,
      pekerjaan: getPekerjaan,
      nik: getNIK,
      alamat: getAlamat,
      status: getStatus,

      namaAyah: getNamaAyah,
      tempatAyah: getTempatAyah,
      lahirAyah: getTanggalAyah,
      agamaAyah: getAgamaAyah,
      pekerjaanAyah: getPekerjaanAyah,
      nikAyah: getNIKAyah,
      alamatAyah: getAlamatAyah,

      namaIbu: getNamaIbu,
      tempatIbu: getTempatIbu,
      lahirIbu: getTanggalIbu,
      agamaIbu: getAgamaIbu,
      pekerjaanIbu: getPekerjaanIbu,
      nikIbu: getNIKIbu,
      alamatIbu: getAlamatIbu,
    };

    if (getDone === "done") {
      navigate("/nikah/pengantar/print", {
        state: {
          data: data,
        },
      });
    }
  };

  return (
    <div>
      <Header status={true} />

      <div className="pt-28 pb-16 px-14">
        <Link
          to={"/nikah"}
          className="flex gap-2 px-24 items-center cursor-pointer hover:text-gray-800"
        >
          <HiArrowLongLeft />
          Kembali
        </Link>
        <div
          className="tracking-wide text-center text-3xl font-bold text-beige mt-2"
          data-aos="fade-up"
        >
          Surat Pengantar Nikah
        </div>
        <div className="text-center mt-2 font-medium" data-aos="fade-up">
          Isi formulir dibawah ini dengan benar sesuai dengan data yang
          dibutuhkan.
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 px-16 mt-5 mx-10 bg-gray-100 py-14 rounded-md"
        >
          <div className="font-semibold">DATA PRIBADI</div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nama" className="font-medium">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              value={getNama}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nik" className="font-medium">
              NIK
            </label>
            <input
              type="number"
              id="nik"
              value={getNIK}
              placeholder="nik"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNIK(e.target.value)}
            />
          </div>
          <div className="w-full flex gap-3">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lahir" className="font-medium">
                Tempat Lahir
              </label>
              <input
                type="text"
                placeholder="Awali dengan huruf besar"
                id="lahir"
                value={getTempat}
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTempat(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="ttl" className="font-medium">
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="ttl"
                value={getTanggal}
                placeholder="ttl"
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTanggal(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="gender" className="font-medium">
              Jenis Kelamin
            </label>
            <select
              name="gender"
              id="gender"
              value={getGender}
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">=== Pilih Jenis Kelamin ===</option>
              <option value="Laki - Laki">Laki - Laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="agama" className="font-medium">
              Agama
            </label>
            <input
              type="text"
              id="agama"
              value={getAgama}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAgama(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pekerjaan" className="font-medium">
              Pekerjaan
            </label>
            <input
              type="text"
              id="pekerjaan"
              value={getPekerjaan}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setPekerjaan(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="alamat" className="font-medium">
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              value={getAlamat}
              placeholder="alamat"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status" className="font-medium">
              Status Perkawinan
            </label>
            <select
              name="status"
              id="status"
              value={getStatus}
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">=== Pilih Status Perkawinan ===</option>
              <option value="Jejaka">Laki - Laki : Jejaka</option>
              <option value="Duda">Laki - Laki : Duda</option>
              <option value="1">Laki - Laki : Beristri ke-1</option>
              <option value="2">Laki - Laki : Beristri ke-2</option>
              <option value="3">Laki - Laki : Beristri ke-3</option>
              <option value="4">Laki - Laki : Beristri ke-4</option>
              <option value="5">Laki - Laki : Beristri ke-5</option>
              <option value="Perawan">Perempuan : Perawan</option>
              <option value="Janda">Perempuan : Janda</option>
            </select>
          </div>

          <hr className="border-beige my-3" />

          {/* AYAH */}
          <div className="font-semibold">DATA AYAH</div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nama" className="font-medium">
              Nama Lengkap Ayah
            </label>
            <input
              type="text"
              id="nama"
              value={getNamaAyah}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNamaAyah(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nik" className="font-medium">
              NIK
            </label>
            <input
              type="number"
              id="nik"
              value={getNIKAyah}
              placeholder="nik"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNIKAyah(e.target.value)}
            />
          </div>
          <div className="w-full flex gap-3">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lahir" className="font-medium">
                Tempat Lahir
              </label>
              <input
                type="text"
                placeholder="Awali dengan huruf besar"
                id="lahir"
                value={getTempatAyah}
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTempatAyah(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="ttl" className="font-medium">
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="ttl"
                value={getTanggalAyah}
                placeholder="ttl"
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTanggalAyah(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="agama" className="font-medium">
              Agama
            </label>
            <input
              type="text"
              id="agama"
              value={getAgamaAyah}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAgamaAyah(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pekerjaan" className="font-medium">
              Pekerjaan
            </label>
            <input
              type="text"
              id="pekerjaan"
              value={getPekerjaanAyah}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setPekerjaanAyah(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="alamat" className="font-medium">
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              value={getAlamatAyah}
              placeholder="alamat"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAlamatAyah(e.target.value)}
            />
          </div>

          <hr className="border-beige my-3" />

          {/* IBU */}
          <div className="font-semibold">DATA IBU</div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nama" className="font-medium">
              Nama Lengkap Ibu
            </label>
            <input
              type="text"
              id="nama"
              value={getNamaIbu}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNamaIbu(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nik" className="font-medium">
              NIK
            </label>
            <input
              type="number"
              id="nik"
              value={getNIKIbu}
              placeholder="nik"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNIKIbu(e.target.value)}
            />
          </div>
          <div className="w-full flex gap-3">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lahir" className="font-medium">
                Tempat Lahir
              </label>
              <input
                type="text"
                placeholder="Awali dengan huruf besar"
                id="lahir"
                value={getTempatIbu}
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTempatIbu(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="ttl" className="font-medium">
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="ttl"
                value={getTanggalIbu}
                placeholder="ttl"
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTanggalIbu(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="agama" className="font-medium">
              Agama
            </label>
            <input
              type="text"
              id="agama"
              value={getAgamaIbu}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAgamaIbu(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pekerjaan" className="font-medium">
              Pekerjaan
            </label>
            <input
              type="text"
              id="pekerjaan"
              value={getPekerjaanIbu}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setPekerjaanIbu(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="alamat" className="font-medium">
              Alamat
            </label>
            <input
              type="text"
              id="alamat"
              value={getAlamatIbu}
              placeholder="alamat"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAlamatIbu(e.target.value)}
            />
          </div>

          <div>
            <input
              type="checkbox"
              name="agree"
              id="agree"
              value="done"
              required
              onChange={(e) => setDone(e.target.value)}
              className="mr-2"
            />{" "}
            <label htmlFor="agree">Apakah data anda sudah benar?</label>
          </div>
          <div>
            <button
              type="submit"
              className="py-2 bg-blue-600 text-white rounded-md w-full mt-3 hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};
