// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { HiArrowLongLeft } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const FormSkck = () => {
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
    };

    if (getDone === "done") {
      navigate("/skck/print", {
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
          to={"/pelayanan"}
          className="flex gap-2 px-24 items-center cursor-pointer hover:text-gray-800"
        >
          <HiArrowLongLeft />
          Kembali
        </Link>
        <div
          className="tracking-wide text-center text-3xl font-bold text-beige mt-2"
          data-aos="fade-up"
        >
          Surat Keterangan Catatan Kepolisian (SKCK)
        </div>
        <div className="text-center mt-2 font-medium" data-aos="fade-up">
          Isi formulir dibawah ini dengan benar sesuai dengan data yang
          dibutuhkan.
        </div>

        <div className="text-center mt-6">
          <div className="font-bold">PERSYARATAN :</div>
          <div className="font-semibold">1. Fotocopy KTP</div>
          <div className="font-semibold">2. Fotocopy KK</div>
          <div className="font-semibold">3. Foto 4x6</div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 px-16 mt-5 mx-10 bg-gray-100 py-14 rounded-md"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="nama" className="font-medium">
              Nama Lengkap
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
              Status Perkwinan
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
              <option value="Belum Kawin">Belum Kawin</option>
              <option value="Kawin">Kawin</option>
              <option value="Cerai Hidup">Cerai Hidup</option>
              <option value="Cerai Mati">Cerai Mati</option>
            </select>
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
