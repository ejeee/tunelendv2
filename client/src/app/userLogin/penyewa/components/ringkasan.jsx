import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import gitar from "../../../../assets/image/gitar.png";
import star from "../../../../assets/image/star.svg";
// import caca from "../../../assets/image/caca.png";
// import { FaInstagram } from "react-icons/fa6";
// import { FiLinkedin } from "react-icons/fi";
// import { PiGithubLogo } from "react-icons/pi";
// import tangan from "../../../assets/image/animasiTangan.png";
import { Link } from "react-router-dom";

const Ringkasan = () => {
  return (
    <>
      <div className="font-inter flex pr-32">
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
            to="/penyewa/detail-sewa"
            className="px-8 py-2 text-white rounded-2xl bg-[#165668]"
          >
            Selengkapnya
          </Link>
        </div>
        <div className="w-full h-fit bg-white shadow-2xl rounded-lg px-12 py-8">
          <p className="font-medium text-lg">Riwayat Sewa</p>
          <p className=" text-md text-[#959595]">
            Riwayat penyewaan alat musik
          </p>
          <div className="mt-8">
            <p className="font-medium text-lg">Yamaha gitar klasik C80</p>
            <div className="flex w-full justify-between">
              <p className=" text-md text-[#959595]">
                I Gede Bagas Darma Prayogi • Tlogomas
              </p>
              <p className=" text-md text-[#959595]">2 minggu yang lalu</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-medium text-lg">
              Ibanez GRX120SP-PBL Electric Guitar, Phantom Blue
            </p>
            <div className="flex w-full justify-between">
              <p className=" text-md text-[#959595]">
                Fahreza Al-Amoudi • Saxophone
              </p>
              <p className=" text-md text-[#959595]">1 bulan yang lalu</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-medium text-lg">Hexagonal cajon zebrano wood</p>
            <div className="flex w-full justify-between">
              <p className=" text-md text-[#959595]">
                Indra Wardana • Soekarno Hatta
              </p>
              <p className=" text-md text-[#959595]">3 bulan yang lalu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ringkasan;
