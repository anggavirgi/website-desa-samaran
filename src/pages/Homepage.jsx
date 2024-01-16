// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import {
  domisili,
  hero,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  logoDesa,
  nikah,
  skck,
  tidakmampu,
  img1,
  peta,
} from "../assets/img/image";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa6";
import { Card, Carousel, Typography } from "@material-tailwind/react";
import { MdHolidayVillage } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { Footer } from "../components/Footer";

export const Homepage = () => {
  const [enableHeader, setEnableHeader] = useState(false);

  // UNTUK SCROLL NAVBAR
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 250) {
        setEnableHeader(true);
      } else {
        setEnableHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // DATA AOS
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []);

  const TABLE_HEAD = ["No", "Nama", "Jabatan"];

  const TABLE_ROWS = [
    {
      no: "1",
      nama: "Muh. Subhan As’ari",
      jabatan: "Sekretaris Desa",
    },
    {
      no: "2",
      nama: "Manah",
      jabatan: "KASI Pemerintahan",
    },
    {
      no: "3",
      nama: "Andi",
      jabatan: "KASI Kesejahteraan",
    },
    {
      no: "4",
      nama: "Roudatul Jannah",
      jabatan: "KASI Pelayanan",
    },
    {
      no: "5",
      nama: "Susilowati",
      jabatan: "Kaur Tata Usaha dan Umum",
    },
    {
      no: "6",
      nama: "Mohammad Sulton",
      jabatan: "Kaur Keuangan",
    },
    {
      no: "7",
      nama: "Mohammad Islah",
      jabatan: "Kaur Perencanaan",
    },
    {
      no: "8",
      nama: "Musyawarii",
      jabatan: "Kepala Dusun Sempangan",
    },
    {
      no: "9",
      nama: "Hoiruddin",
      jabatan: "Kepala Dusun Bicabbih",
    },
    {
      no: "10",
      nama: "As’adi",
      jabatan: "Kepala Dusun Prekedden",
    },
    {
      no: "11",
      nama: "Wahid",
      jabatan: "Kepala Dusun Samaran Barat",
    },
  ];

  const TABLE_HEAD_2 = ["No", "Letak", "Desa / Kecamatan"];

  const TABLE_ROWS_2 = [
    {
      no: "1",
      letak: "Sebelah Utara",
      desa: "Desa Tambelangan",
    },
    {
      no: "2",
      letak: "Sebelah Selatan",
      desa: "Desa Karanganyar",
    },
    {
      no: "3",
      letak: "Sebelah Barat",
      desa: "Desa Beringin",
    },
    {
      no: "4",
      letak: "Sebelah Timur",
      desa: "Kecamatan Kedungdung",
    },
  ];

  return (
    <div className="relative">
      <Header status={enableHeader} />

      <div className="w-full h-screen relative text-white">
        <div className="brightness-50">
          <img src={hero} alt="" className="w-full h-screen object-cover" />
        </div>

        <div id="homepage" className="absolute top-0 w-full">
          <div className="flex justify-between items-center ps-14 pe-28 pt-6 pb-8 text-white">
            <Link to={"/"}>
              <img src={logoDesa} alt="" className="w-44 object-cover" />
            </Link>
            <div className="flex items-center gap-10 font-semibold ">
              <ScrollLink
                to={"homepage"}
                smooth={true}
                duration={500}
                className="hover:text-beige cursor-pointer"
              >
                Beranda
              </ScrollLink>
              <ScrollLink
                to={"profil-desa"}
                smooth={true}
                duration={500}
                className="hover:text-beige cursor-pointer"
              >
                Profil Desa
              </ScrollLink>
              <ScrollLink
                to={"struktur"}
                smooth={true}
                duration={500}
                className="hover:text-beige cursor-pointer"
              >
                Struktur Desa
              </ScrollLink>
              <ScrollLink
                to={"geografis"}
                smooth={true}
                duration={500}
                className="hover:text-beige cursor-pointer"
              >
                Geografis Desa
              </ScrollLink>
              <Link
                to={"/pelayanan"}
                className="hover:text-beige cursor-pointer"
              >
                Pelayanan Desa
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="w-full ms-16 me-28 border-slate-50/40" />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 mt-32">
            <div className="tracking-wide mb-1">
              Selamat datang di website resmi
            </div>
            <div className="font-bold text-5xl tracking-wide text-grass backdrop-blur-xl">
              <TypeAnimation
                sequence={[
                  "Desa Samaran",
                  3000,
                  "D",
                  0,
                  "Desa Samaran",
                  3000,
                  "D",
                  0,
                ]}
                wrapper="div"
                speed={5}
                repeat={Infinity}
                cursor={false}
              />
            </div>
            <div className="tracking-wide font-medium">
              Kecamatan Tambelangan, Kabupaten Sampang
            </div>
            <ScrollLink
              to={"profil-desa"}
              smooth={true}
              duration={500}
              className="mt-8 bg-nature rounded-md px-6 py-3 hover:text-earth cursor-pointer"
            >
              Lihat Profil Desa
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* PELAYANAN */}
      <div className="pt-20 pb-16 px-14">
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
        </div>
        <Link
          to={"/pelayanan"}
          className="flex justify-center items-center gap-2.5 py-2.5 border-t  font-medium hover:text-nature cursor-pointer"
          data-aos="fade-up"
        >
          Lihat pelayanan lainnya <HiArrowLongRight />
        </Link>
      </div>

      {/* PROFIL DESA */}
      <div id="profil-desa" className="pt-7 pb-16 px-14 bg-gray-50">
        <div
          className="tracking-wide text-center text-4xl font-bold text-beige"
          data-aos="fade-up"
        >
          Profil Desa
        </div>
        <div className="text-center mt-2" data-aos="fade-up">
          Desa Samaran terletak di Kecamatan Tambelangan Kabupaten Sampang
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <div className="relative group" data-aos="fade-up-right">
            <img
              src={img3}
              alt=""
              className="h-[310px] w-full object-cover shadow"
            />
            <div className="absolute bottom-0 w-full h-[25%] pt-2 px-16 text-center text-white bg-white/20 text-xl font-medium backdrop-blur-sm transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
              Ikon Jembatan Kecamatan Tambelangan di Desa Samaran
            </div>
          </div>
          <div data-aos="fade-up-left">
            <div className="font-bold text-2xl">Sejarah Desa Samaran</div>
            <hr className="my-2.5 border-beige" />
            <div className="text-justify font-medium text-black/70">
              Menurut sejarah yang ada di masyarakat nama Samaran berasal dari
              kata samar (sesuatu yang menjadi kebaikan tidak terlihat jelas dan
              sesuatu yang buruk pun tidak terlihat jelas). Salah satu tokoh
              masyarakat mengatakan bahwa awal munculnya desa ini berasal dari
              tokoh dibalik makam bujuk samaran. Beliau menjadi tokoh yang
              dikagumi oleh masyarakat atas perjuangannnya dalam menyebarkan
              agama islam di tanah Tambelangan Kabupaten Sampang. Dalam
              bertindak di masyarakat khususnya menyebarkan syariat agamanya
              tidak terlihat secara jelas sehingga kebaikannnya tidak bisa
              dilihat oleh masyarakat setempat begitu juga dengan segala
              perbuatan buruknya tidak dapat dilihat secara jelas sehingga hal
              tersebutlah yang menjadi asal muasal nama Samaran.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <div data-aos="fade-up-right">
            <div className="font-bold text-2xl">Sekilas Desa Samaran</div>
            <hr className="my-2.5 border-beige" />
            <div className="text-justify font-medium text-black/70">
              Di Desa Samaran kita bisa menemukan pemandangan alam yang sangat
              indah berupa persawahan serta perbukitan. Bahkan bila dipandang
              dari jarak jauh Desa Samaran akan terlihat jelas keindahannya dan
              dapat menyejukkan mata setiap orang.
            </div>
          </div>
          <div className="flex gap-2" data-aos="fade-down">
            <div className="relative group flex-1 transition-all duration-500 hover:flex-none hover:w-4/5 cursor-pointer">
              <img
                src={img7}
                alt=""
                className="h-[310px] w-full object-cover shadow"
              />
              <div className="absolute bottom-0 w-full h-[10%] pt-1 px-16 text-center text-white bg-white/20 text-sm font-medium backdrop-blur-sm transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                Pemandangan sawah Desa Samaran
              </div>
            </div>
            <div className="relative group flex-1 transition-all duration-500 hover:flex-none hover:w-4/5 cursor-pointer">
              <img
                src={img4}
                alt=""
                className="h-[310px] w-full object-cover shadow"
              />
              <div className="absolute bottom-0 w-full h-[10%] pt-1 px-16 text-center text-white bg-white/20 text-sm font-medium backdrop-blur-sm transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                Pemandangan sawah dari depan SDN 1 Samaran
              </div>
            </div>
            <div className="relative group flex-1 transition-all duration-500 hover:flex-none hover:w-4/5 cursor-pointer">
              <img
                src={img5}
                alt=""
                className="h-[310px] w-full object-cover shadow"
              />
              <div className="absolute bottom-0 w-full h-[10%] pt-1 px-16 text-center text-white bg-white/20 text-sm font-medium backdrop-blur-sm transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                Pemandangan bukit dan sawah
              </div>
            </div>
            <div className="relative group flex-1 transition-all duration-500 hover:flex-none hover:w-4/5 cursor-pointer">
              <img
                src={img6}
                alt=""
                className="h-[310px] w-full object-cover shadow"
              />
              <div className="absolute bottom-0 w-full h-[10%] pt-1 px-16 text-center text-white bg-white/20 text-sm font-medium backdrop-blur-sm transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                Pemandangan sawah dan langit
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          <div className="flex gap-2" data-aos="fade-down">
            <div className="relative group flex-1 transition-all duration-500 hover:flex-none hover:w-4/5 cursor-pointer">
              <img
                src={img8}
                alt=""
                className="h-[310px] w-full object-cover shadow"
              />
              <div className="absolute bottom-0 w-full h-[10%] pt-1 px-16 text-center text-white bg-white/20 text-sm font-medium backdrop-blur-sm transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                Para petani di Desa Samaran
              </div>
            </div>
            <div className="relative group flex-1 transition-all duration-500 hover:flex-none hover:w-4/5 cursor-pointer">
              <img
                src={img9}
                alt=""
                className="h-[310px] w-full object-cover shadow"
              />
              <div className="absolute bottom-0 w-full h-[10%] pt-1 px-16 text-center text-white bg-white/20 text-sm font-medium backdrop-blur-sm transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                Bapak petani
              </div>
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="font-bold text-2xl">Para Petani Desa Samaran</div>
            <hr className="my-2.5 border-beige" />
            <div className="text-justify font-medium text-black/70">
              Mayoritas pekerjaan masyarakat desa Samaran yakni sebagai petani
              sehingga tidak nampak aneh selama perjalanan menuju desa Samaran
              melihat pemandangan terasering serta persawahan begitu indah.
              Pertanian di desa masil terbilang sederhana disebabkan oleh
              sebagian besar masyarakat masih memanfaatkan sapi atau kerbau
              dalam membajak sawah.
            </div>
          </div>
        </div>
      </div>

      {/* GALERI DESA */}
      <div className="pt-14 pb-16 px-14">
        <div
          className="tracking-wide text-center text-4xl font-bold text-beige"
          data-aos="fade-up"
        >
          Galeri Desa Samaran
        </div>
        <div className="text-center mt-2">
          Beberapa dokumentasi dari kehidupan masyarakat, tempat, dan
          pemandangan di Desa Samaran
        </div>
        <Carousel
          loop={true}
          autoplay={true}
          className="w-full h-[500px] rounded-xl mt-6"
          data-aos="fade-down"
        >
          <img
            src={img5}
            alt="image 1"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img6}
            alt="image 2"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img3}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img8}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img9}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img1}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img16}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img10}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img11}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img12}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img13}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img15}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img14}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img17}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
          <img
            src={img18}
            alt="image 3"
            className="h-full w-full object-cover object-center"
          />
        </Carousel>
      </div>

      {/* STRUKTUR DESA */}
      <div id="struktur" className="pt-8 pb-14 px-14 bg-gray-50">
        <div
          className="tracking-wide text-center text-4xl font-bold text-beige"
          data-aos="fade-up"
        >
          Struktur Pemerintahan Desa Samaran
        </div>
        <div className="text-center mt-2" data-aos="fade-up">
          Berikut struktur pemerintahan Desa Samaran mulai dari yang paling atas
          hingga bawah
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
                    className="border-b border-blue-gray-100 bg-blue-gray-50 py-2 px-4"
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
              {TABLE_ROWS.map(({ no, nama, jabatan }) => (
                <tr key={no} className="even:bg-blue-gray-50/50">
                  <td className="py-2 px-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {no}
                    </Typography>
                  </td>
                  <td className="py-2 px-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {nama}
                    </Typography>
                  </td>
                  <td className="py-2 px-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {jabatan}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      {/* GEOGRAFIS DESA */}
      <div id="geografis" className="pt-8 pb-10 px-24">
        <div
          className="tracking-wide text-center text-4xl font-bold text-beige"
          data-aos="fade-up"
        >
          Geografis Desa Samaran
        </div>
        <div className="text-center mt-2" data-aos="fade-up">
          Letak dan luas wilayah Desa Samaran beserta rincian lainnya.
        </div>
        <div className="grid grid-cols-2 mt-6">
          <div>
            <img
              src={peta}
              alt=""
              className="w-full h-full object-cover"
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <div className="flex flex-col gap-3" data-aos="fade-up">
              <div className="flex gap-2 items-center">
                <FaMap className="w-6 h-6 text-grass" />
                <span className="font-semibold">Luas wilayah</span>
                <span className="font-semibold">
                  : 10,47 km<sup>2</sup>
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <MdHolidayVillage className="w-6 h-6 text-grass" />
                <span className="font-semibold">Jumlah dusun</span>
                <span className="font-semibold">: 4 dusun</span>
              </div>
            </div>
            <div data-aos="fade-up">
              Adapun batas wilayah Desa Samaran sebagai berikut.
            </div>
            <Card className="h-fit w-3/4 overflow-hidden" data-aos="fade-up">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD_2.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 py-2 px-4"
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
                  {TABLE_ROWS_2.map(({ no, letak, desa }) => (
                    <tr key={no} className="even:bg-blue-gray-50/50">
                      <td className="py-2 px-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {no}
                        </Typography>
                      </td>
                      <td className="py-2 px-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {letak}
                        </Typography>
                      </td>
                      <td className="py-2 px-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {desa}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
      <hr className="w-4/5 mx-auto border-beige" />
      <div className="pt-10 pb-14 px-24">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col justify-center items-center px-10 w-full">
            <div className="text-earth font-semibold text-3xl">
              Eksplorasi daerah Desa Samaran melalui Google Maps
            </div>
            <hr className="flex me-auto border-2 border-beige w-1/2 mt-3" />
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28004.94042556465!2d113.1463753!3d-7.0723831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd825c34717714d%3A0xd1e128e0913380b0!2sSamaran%2C%20Kec.%20Tambelangan%2C%20Kabupaten%20Sampang%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1705005635907!5m2!1sid!2sid"
            width="600"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};
