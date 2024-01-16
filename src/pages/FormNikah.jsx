// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { HiArrowLongLeft } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const FormNikah = () => {
  // DATA AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []);

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
          Surat Nikah
        </div>

        <div className="px-24 mt-6" data-aos="fade-up">
          <div className="font-bold">PERSYARATAN :</div>
          <div className="font-semibold">1. Fotocopy KK kedua calon</div>
          <div className="font-semibold">2. Fotocopy KTP kedua calon</div>
          <div className="font-semibold">3. Akte kelahiran</div>
          <div className="font-semibold">4. Ijazah</div>
          <div className="font-semibold">5. Foto 3x2 (background biru)</div>
          <div className="font-semibold">6. Materai 10.000 satu lembar</div>
          <div className="font-semibold">
            7. Jia sudah menikah, kemudian ingin menikah lagi maka dibutuhkan
            surat cerai.
          </div>
        </div>

        <div className="flex flex-col px-24 mt-10 w-4/5" data-aos="fade-up">
          <div>Beberapa form yang harus diisi :</div>
          <div className="flex items-center justify-between border border-earth px-4 py-2 rounded-t-lg mt-3">
            <div className="flex gap-3">
              <div>1.</div>
              <div>SURAT PENGANTAR NIKAH</div>
            </div>
            <Link
              to={"/nikah/pengantar"}
              className="flex gap-2 items-center text-blue-400 hover:text-blue-600"
            >
              Isi formulir <HiArrowLongRight />
            </Link>
          </div>
          <div className="flex items-center justify-between border-x border-earth px-4 py-2">
            <div className="flex gap-3">
              <div>2.</div>
              <div>FORMULIR PERMOHONAN KEHENDAK NIKAH</div>
            </div>
            <Link
              to={"/nikah/permohonan"}
              className="flex gap-2 items-center text-blue-400 hover:text-blue-600"
            >
              Isi formulir <HiArrowLongRight />
            </Link>
          </div>
          <div className="flex items-center justify-between border border-earth px-4 py-2">
            <div className="flex gap-3">
              <div>3.</div>
              <div>SURAT PERSETUJUAN MEMPELAI</div>
            </div>
            <Link
              to={"/nikah/persetujuan"}
              className="flex gap-2 items-center text-blue-400 hover:text-blue-600"
            >
              Isi formulir <HiArrowLongRight />
            </Link>
          </div>
          <div className="flex items-center justify-between border-x border-earth px-4 py-2">
            <div className="flex gap-3">
              <div>4.</div>
              <div>SURAT KETERANGAN WALI</div>
            </div>
            <Link
              to={"/nikah/wali"}
              className="flex gap-2 items-center text-blue-400 hover:text-blue-600"
            >
              Isi formulir <HiArrowLongRight />
            </Link>
          </div>
          <div className="flex items-center justify-between border border-earth px-4 py-2">
            <div className="flex gap-3">
              <div>5.</div>
              <div>SURAT IZIN ORANG TUA</div>
            </div>
            <Link
              to={"/nikah/izin"}
              className="flex gap-2 items-center text-blue-400 hover:text-blue-600"
            >
              Isi formulir <HiArrowLongRight />
            </Link>
          </div>
          <div className="flex items-center justify-between border-x border-earth px-4 py-2">
            <div className="flex gap-3">
              <div>6.</div>
              <div>SURAT PERNYATAAN BELUM PERNAH MENIKAH</div>
            </div>
            <Link
              to={"/nikah/belumnikah"}
              className="flex gap-2 items-center text-blue-400 hover:text-blue-600"
            >
              Isi formulir <HiArrowLongRight />
            </Link>
          </div>
          <div className="flex items-center justify-between border border-earth px-4 py-2 rounded-b-lg">
            <div className="flex gap-3">
              <div>7.</div>
              <div>
                FORMULIR SURAT KETERANGAN KEMATIAN{" "}
                <span className="text-yellow-600">(OPSIONAL)</span>
              </div>
            </div>
            <Link
              to={"/nikah/kematian"}
              className="flex gap-2 items-center text-blue-400 hover:text-blue-600"
            >
              Isi formulir <HiArrowLongRight />
            </Link>
          </div>
        </div>

        <div className="px-24 mt-4">
          <div className="font-semibold">
            NB: Harap diperhatikan bahwa semua persyaratan dan formulir harus
            terpenuhi.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
