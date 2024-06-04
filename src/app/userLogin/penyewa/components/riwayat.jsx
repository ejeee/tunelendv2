import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

// import gitar from "../../../../assets/image/gitar.png";
// import star from "../../../../assets/image/star.svg";
// // import caca from "../../../assets/image/caca.png";
// // import { FaInstagram } from "react-icons/fa6";
// // import { FiLinkedin } from "react-icons/fi";
// // import { PiGithubLogo } from "react-icons/pi";
// // import tangan from "../../../assets/image/animasiTangan.png";
// import { Link } from "react-router-dom";

const Riwayat = () => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="w-full h-fit bg-white shadow-2xl rounded-lg px-12 py-8">
        <p className="font-medium text-lg">Riwayat Sewa</p>
        <p className=" text-md text-[#959595]">Riwayat penyewaan alat musik</p>
        <div className="mt-8">
          <p className="font-medium text-lg">Yamaha gitar klasik C80</p>
          <div className="flex w-full justify-between">
            <p className=" text-md text-[#959595]">
              I Gede Bagas Darma Prayogi • Tlogomas
            </p>
            <p className=" text-md text-[#959595]">2 minggu yang lalu</p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#165668] text-white rounded-xl px-20 py-2"
            >
              Detail Sewa
            </button>
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
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#165668] text-white rounded-xl px-20 py-2"
            >
              Detail Sewa
            </button>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-medium text-lg">Hexagonal cajon zebrano wood</p>
          <div className="flex w-full justify-between">
            <p className=" text-md text-[#959595]">
              Indra Wardana • Soekarno Hatta
            </p>
            <p className=" text-md text-[#959595]">3 bulan yang lalu</p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#165668] text-white rounded-xl px-20 py-2"
            >
              Detail Sewa
            </button>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 flex items-center justify-center"
          onClose={close}
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md"></div>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 transform scale-95"
            enterTo="opacity-100 transform scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-0 transform scale-95"
          >
            <DialogPanel className="relative z-30 w-full max-w-md p-6 bg-white rounded-xl backdrop-blur-2xl">
              <DialogTitle
                as="h3"
                className="text-lg font-medium text-[#165668]"
              >
                Detail Sewa
              </DialogTitle>
              <p className="mt-4">Pengambilan Barang</p>
              <div className="flex justify-between">
                <p className="text-slate-400">Tlogomas</p>
                <p className="text-slate-400">02/08/2024 • 13.15 WIB</p>
              </div>
              <p className="mt-4">Pengambilan Barang</p>
              <div className="flex justify-between">
                <p className="text-slate-400">Tlogomas</p>
                <p className="text-slate-400">05/08/2024 • 17.55 WIB</p>
              </div>
              <div className="flex justify-between mt-4">
                <p>Tarif Perhari </p>
                <p>Rp15.000,00</p>
              </div>
              <hr className="mt-4" />
              <div className="flex justify-between mt-4">
                <p className="text-slate-400">Jangka Waktu</p>
                <p>3 Hari</p>
              </div>
              <hr className="mt-4" />
              <div className="flex justify-between mt-4">
                <p className="font-medium">Total</p>
                <p>Rp45.000,00</p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-[#165668] w-fit h-fit text-white px-10 py-2 rounded-xl mt-4"
                >
                  Kembali
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default Riwayat;
