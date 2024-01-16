// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { HiArrowLongLeft } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const FormNikahPermohonan = () => {
  const navigate = useNavigate();
  // DATA AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []);

  const [getSuami, setSuami] = useState("");
  const [getTanggal, setTanggal] = useState("");
  const [getIstri, setIstri] = useState("");
  const [getAlamat, setAlamat] = useState("");
  const [getDone, setDone] = useState("");

  const handleSubmit = () => {
    const data = {
      suami: getSuami,
      tanggal: getTanggal,
      istri: getIstri,
      alamat: getAlamat,
    };

    if (getDone === "done") {
      navigate("/nikah/permohonan/print", {
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
          Formulir Permohonan Kehendak Nikah
        </div>
        <div className="text-center mt-2 font-medium" data-aos="fade-up">
          Isi formulir dibawah ini dengan benar sesuai dengan data yang
          dibutuhkan.
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 px-16 mt-5 mx-10 bg-gray-100 py-14 rounded-md"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="suami" className="font-medium">
              Calon Suami
            </label>
            <input
              type="text"
              id="suami"
              value={getSuami}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setSuami(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="istri" className="font-medium">
              Calon Istri
            </label>
            <input
              type="text"
              id="istri"
              value={getIstri}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setIstri(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="ttl" className="font-medium">
              Tanggal & Jam Nikah
            </label>
            <input
              type="datetime-local"
              id="ttl"
              value={getTanggal}
              placeholder="ttl"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="alamat" className="font-medium">
              Tempat Akad Nikah
            </label>
            <input
              type="text"
              id="alamat"
              value={getAlamat}
              placeholder="Awali dengan huruf besar"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline focus:outline-blue-500"
              required
              onChange={(e) => setAlamat(e.target.value)}
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
