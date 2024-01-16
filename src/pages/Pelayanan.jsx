// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { FaChevronRight } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
import { domisili, nikah, skck, tidakmampu } from "../assets/img/image";
import { Link as ScrollLink } from "react-scroll";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "../components/Footer";

export const Pelayanan = () => {
  // DATA AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []);

  const TABLE_HEAD = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

  const TABLE_ROWS = [
    {
      satu: "AS'ADI",
      dua: "SUSI",
      tiga: "MUSAWWERI",
      empat: "MUSAWWERI",
      lima: "AS'ADI",
    },
    {
      satu: "WAHID",
      dua: "BUNAMIN",
      tiga: "MANAH",
      empat: "MANAH",
      lima: "WAHID",
    },
    {
      satu: "",
      dua: "",
      tiga: "",
      empat: "SUSI",
      lima: "",
    },
  ];

  return (
    <div>
      <Header status={true} />

      <div className="pt-28 pb-5 px-14">
        <div
          className="tracking-wide text-4xl font-bold text-beige"
          data-aos="fade-up"
        >
          Pelayanan Desa
        </div>
        <div data-aos="fade-up" className="mt-2">
          Pelayanan desa adalah berbagai layanan yang disediakan oleh pemerintah
          desa kepada penduduk dan masyarakat di wilayah desa.
        </div>
        <ScrollLink
          to={"jadwal"}
          className="flex items-center gap-2 text-sm mt-2 text-blue-400 hover:underline cursor-pointer"
        >
          Lihat jadwal piket perangkat desa <HiArrowLongRight />
        </ScrollLink>
        <div className=" grid grid-cols-4 gap-6 mt-10 mb-12">
          <Link
            to={"/nikah"}
            className="h-[360px] text-center border border-nature rounded-md shadow-md cursor-pointer hover:shadow-2xl"
            data-aos="fade-up-right"
          >
            <div className="h-2/5">
              <img
                src={nikah}
                alt=""
                className="h-full w-full object-cover rounded-t-md"
              />
            </div>
            <div className="h-1/2 py-2 px-3">
              <div className="font-bold text-xl text-nature h-[60px]">
                Surat Nikah
              </div>
              <div className="text-sm mt-1 border-y border-nature/80 py-4">
                Surat nikah adalah salah satu persyaratan yang harus dipenuhi
                bagi yang ingin melangsungkan pernikahan
              </div>
              <div className="pt-2 flex justify-center items-center gap-1 hover:font-semibold text-grass">
                Buat surat <FaChevronRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
          <Link
            to={"/domisili"}
            className="h-[360px] text-center border border-nature rounded-md shadow-md cursor-pointer hover:shadow-2xl"
            data-aos="fade-up-right"
          >
            <div className="h-2/5">
              <img
                src={domisili}
                alt=""
                className="h-full w-full object-cover rounded-t-md"
              />
            </div>
            <div className="h-1/2 py-2 px-3">
              <div className="font-bold text-xl text-nature h-[60px]">
                Surat Domisili
              </div>
              <div className="text-sm mt-1 border-y border-nature/80 py-4">
                Surat domisili adalah surat untuk bukti bahwa pendatang telah
                melapor dan memiliki tempat tinggal tetap
              </div>
              <div className="pt-2 flex justify-center items-center gap-1 hover:font-semibold text-grass">
                Buat surat <FaChevronRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
          <Link
            to={"/tidakmampu"}
            className="h-[360px] text-center border border-nature rounded-md shadow-md cursor-pointer hover:shadow-2xl"
            data-aos="fade-up-left"
          >
            <div className="h-2/5">
              <img
                src={tidakmampu}
                alt=""
                className="h-full w-full object-cover rounded-t-md"
              />
            </div>
            <div className="h-1/2 py-2 px-3">
              <div className="font-bold text-xl text-nature h-[60px]">
                Surat Keterangan Tidak Mampu
              </div>
              <div className="text-sm mt-1 border-y border-nature/80 py-4">
                Surat yang digunakan untuk keperluan keringanan biaya sekolah,
                beasiswa dan lain - lain.
              </div>
              <div className="pt-2 flex justify-center items-center gap-1 hover:font-semibold text-grass">
                Buat surat <FaChevronRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
          <Link
            to={"/skck"}
            className="h-[360px] text-center border border-nature rounded-md shadow-md cursor-pointer hover:shadow-2xl"
            data-aos="fade-up-left"
          >
            <div className="h-2/5">
              <img
                src={skck}
                alt=""
                className="h-full w-full object-cover rounded-t-md"
              />
            </div>
            <div className="h-1/2 py-2 px-3">
              <div className="font-bold text-xl text-nature h-[60px]">
                Surat Keterangan Catatan Kepolisian (SKCK)
              </div>
              <div className="text-sm mt-1 border-y border-nature/80 py-4">
                SKCK adalah surat yang berisi catatan tentang ada atau tidaknya
                jejak kejahatan yang pernah dilakukan seseorang
              </div>
              <div className="pt-2 flex justify-center items-center gap-1 hover:font-semibold text-grass">
                Buat surat <FaChevronRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
          <Link
            to={"/usaha"}
            className="h-[360px] text-center border border-nature rounded-md shadow-md cursor-pointer hover:shadow-2xl"
            data-aos="fade-up-left"
          >
            <div className="h-2/5">
              <img
                src={skck}
                alt=""
                className="h-full w-full object-cover rounded-t-md"
              />
            </div>
            <div className="h-1/2 py-2 px-3">
              <div className="font-bold text-xl text-nature h-[60px]">
                Surat Keterangan Usaha
              </div>
              <div className="text-sm mt-1 border-y border-nature/80 py-4">
                Surat Keterangan Usaha adalah dokumen informatif yang memuat
                berbagai informasi penting terkait suatu usaha
              </div>
              <div className="pt-2 flex justify-center items-center gap-1 hover:font-semibold text-grass">
                Buat surat <FaChevronRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* JADWAL PIKET */}
      <div id="jadwal" className="pt-8 pb-20 px-14 bg-gray-50">
        <div
          className="tracking-wide text-center text-4xl font-bold text-beige"
          data-aos="fade-up"
        >
          Jadwal Piket Perangkat Desa
        </div>
        <Card
          className="h-full w-3/5 mx-auto overflow-hidden mt-6"
          data-aos="fade-up"
        >
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-semibold leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ satu, dua, tiga, empat, lima }) => (
                <tr key={satu} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {satu}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {dua}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {tiga}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {empat}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lima}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      <Footer />
    </div>
  );
};
