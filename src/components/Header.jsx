// eslint-disable-next-line no-unused-vars
import React from "react";
import { logoDesa } from "../assets/img/image";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Header = ({ status }) => {
  return (
    <div
      className={`w-full transition-opacity duration-700 ease-in-out fixed ${
        status ? "opacity-100 z-50" : "opacity-0 -z-10"
      } top-0 flex justify-between ps-14 pe-28 py-6 items-center bg-[#285430]/80 backdrop-blur-sm shadow text-white`}
    >
      <Link to={"/"}>
        <img src={logoDesa} alt="" className="w-40 object-cover" />
      </Link>
      <div className="flex items-center gap-10 font-semibold text-white">
        <HashLink
          to={"/#homepage"}
          smooth={true}
          duration={500}
          className="hover:text-beige cursor-pointer"
        >
          Beranda
        </HashLink>
        <HashLink
          to={"/#profil-desa"}
          smooth={true}
          duration={500}
          className="hover:text-beige cursor-pointer"
        >
          Profil Desa
        </HashLink>
        <HashLink
          to={"/#struktur"}
          smooth={true}
          duration={500}
          className="hover:text-beige cursor-pointer"
        >
          Struktur Desa
        </HashLink>
        <HashLink
          to={"/#geografis"}
          smooth={true}
          duration={500}
          className="hover:text-beige cursor-pointer"
        >
          Geografis Desa
        </HashLink>
        <Link to={"/pelayanan"} className="hover:text-beige cursor-pointer">
          Pelayanan Desa
        </Link>
      </div>
    </div>
  );
};
