import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import gitar from "../../../../../assets/image/gitar.png";
import star from "../../../../../assets/image/star.svg";
// import caca from "../../../assets/image/caca.png";
// import { FaInstagram } from "react-icons/fa6";
// import { FiLinkedin } from "react-icons/fi";
// import { PiGithubLogo } from "react-icons/pi";
// import tangan from "../../../assets/image/animasiTangan.png";
import { Link } from "react-router-dom";

const Sewa = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <>
      <div className="flex pr-32">
        <div className="h-fit w-fit bg-white shadow-2xl px-8 py-8 rounded-lg mr-8">
          <div className="w-full h-fit border-2 rounded-xl flex justify-center">
            <img src={gitar} alt="" className="rounded-xl" />
          </div>
          <p className="font-medium text-lg mt-4">Yamaha Gitar Klasik C80</p>
          <div className="flex my-2">
            <img src={star} alt="" />
            <p>4.8</p>
            <p className="mx-2">•</p>
            <p>Tersedia di daerah sekitar kampus UMM 3</p>
          </div>
          <div className="w-96 mb-8">
            <p>
              Gitar yamaha klasik tipe C80 dengan kondisi mulus, senar baru
              ganti. Gitar ini adalah teman setia saya dalam perjalanan musik
              saya, dan sekarang saya ingin memberi kesempatan kepada orang lain
              untuk keindahan suaranya.
            </p>
          </div>
          <Link
            to="/rent/detail"
            className="px-8 py-2 text-white rounded-2xl bg-[#165668]"
          >
            Selengkapnya
          </Link>
        </div>
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default Sewa;
