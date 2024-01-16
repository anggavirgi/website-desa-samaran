// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { HiArrowLongLeft } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const FormNikahPersetujuan = () => {
  const navigate = useNavigate();
  // DATA AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []);

  const [getNamaSuami, setNamaSuami] = useState("");
  const [getBinSuami, setBinSuami] = useState("");
  const [getTempatSuami, setTempatSuami] = useState("");
  const [getTanggalSuami, setTanggalSuami] = useState("");
  const [getAgamaSuami, setAgamaSuami] = useState("");
  const [getPekerjaanSuami, setPekerjaanSuami] = useState("");
  const [getNIKSuami, setNIKSuami] = useState("");
  const [getAlamatSuami, setAlamatSuami] = useState("");

  const [getNamaIstri, setNamaIstri] = useState("");
  const [getBinIstri, setBinIstri] = useState("");
  const [getTempatIstri, setTempatIstri] = useState("");
  const [getTanggalIstri, setTanggalIstri] = useState("");
  const [getAgamaIstri, setAgamaIstri] = useState("");
  const [getPekerjaanIstri, setPekerjaanIstri] = useState("");
  const [getNIKIstri, setNIKIstri] = useState("");
  const [getAlamatIstri, setAlamatIstri] = useState("");

  const [getDone, setDone] = useState("");

  const handleSubmit = () => {
    const data = {
      namaSuami: getNamaSuami,
      tempatSuami: getTempatSuami,
      lahirSuami: getTanggalSuami,
      agamaSuami: getAgamaSuami,
      pekerjaanSuami: getPekerjaanSuami,
      nikSuami: getNIKSuami,
      alamatSuami: getAlamatSuami,
      binSuami: getBinSuami,

      namaIstri: getNamaIstri,
      tempatIstri: getTempatIstri,
      lahirIstri: getTanggalIstri,
      agamaIstri: getAgamaIstri,
      pekerjaanIstri: getPekerjaanIstri,
      nikIstri: getNIKIstri,
      alamatIstri: getAlamatIstri,
      binIstri: getBinIstri,
    };

    if (getDone === "done") {
      navigate("/nikah/persetujuan/print", {
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
          Surat Persetujuan Mempelai
        </div>
        <div className="text-center mt-2 font-medium" data-aos="fade-up">
          Isi formulir dibawah ini dengan benar sesuai dengan data yang
          dibutuhkan.
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 px-16 mt-5 mx-10 bg-gray-100 py-14 rounded-md"
        >
          <div className="font-semibold">DATA CALON SUAMI</div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nama" className="font-medium">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              value={getNamaSuami}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNamaSuami(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nama" className="font-medium">
              Nama Ayah
            </label>
            <input
              type="text"
              id="nama"
              value={getBinSuami}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setBinSuami(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nik" className="font-medium">
              NIK
            </label>
            <input
              type="number"
              id="nik"
              value={getNIKSuami}
              placeholder="nik"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNIKSuami(e.target.value)}
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
                value={getTempatSuami}
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTempatSuami(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="ttl" className="font-medium">
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="ttl"
                value={getTanggalSuami}
                placeholder="ttl"
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTanggalSuami(e.target.value)}
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
              value={getAgamaSuami}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAgamaSuami(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pekerjaan" className="font-medium">
              Pekerjaan Terakhir
            </label>
            <input
              type="text"
              id="pekerjaan"
              value={getPekerjaanSuami}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setPekerjaanSuami(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="alamat" className="font-medium">
              Tempat Tinggal Terakhir
            </label>
            <input
              type="text"
              id="alamat"
              value={getAlamatSuami}
              placeholder="alamat"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAlamatSuami(e.target.value)}
            />
          </div>

          <div className="font-semibold mt-10">DATA CALON ISTRI</div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nama" className="font-medium">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              value={getNamaIstri}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNamaIstri(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nama" className="font-medium">
              Nama Ayah
            </label>
            <input
              type="text"
              id="nama"
              value={getBinIstri}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setBinIstri(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="nik" className="font-medium">
              NIK
            </label>
            <input
              type="number"
              id="nik"
              value={getNIKIstri}
              placeholder="nik"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setNIKIstri(e.target.value)}
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
                value={getTempatIstri}
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTempatIstri(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="ttl" className="font-medium">
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="ttl"
                value={getTanggalIstri}
                placeholder="ttl"
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
                required
                onChange={(e) => setTanggalIstri(e.target.value)}
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
              value={getAgamaIstri}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAgamaIstri(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pekerjaan" className="font-medium">
              Pekerjaan Terakhir
            </label>
            <input
              type="text"
              id="pekerjaan"
              value={getPekerjaanIstri}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setPekerjaanIstri(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="alamat" className="font-medium">
              Tempat Tinggal Terakhir
            </label>
            <input
              type="text"
              id="alamat"
              value={getAlamatIstri}
              placeholder="alamat"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAlamatIstri(e.target.value)}
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
