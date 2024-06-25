import React from "react";
import Navbar from "../navbar";
import Footer from "../../../components/footer";
import gitar from "../../../assets/image/gitar.png";
import star from "../../../assets/image/star.svg";
import avatar from "../../../assets/image/fikri.png";
import { Carousel } from "flowbite-react";
import caca from "../../../assets/image/caca.png";
import dinda from "../../../assets/image/dinda.png";
import unima from "../../../assets/image/unima.png";
import angel from "../../../assets/image/angel.png";
import khabil from "../../../assets/image/khabil.png";
import fikri from "../../../assets/image/fikri.png";

const DetailSewa = () => {
  return (
    <>
      <section className="font-inter w-screen h-full bg-white">
        <Navbar />
        <div className="px-32 py-14">
          <p className="text-4xl font-semibold">Detail Item</p>
          <div className="flex pr-32 mt-12">
            <div className="h-fit w-3/4 bg-white shadow-2xl px-8 py-8 rounded-lg mr-8 flex">
              <div className="w-full h-96 border-2 rounded-xl">
                <Carousel>
                  <img src={gitar} alt="Gitar" className="w-18" />
                  <img src={gitar} alt="Gitar" className="w-18" />
                  <img src={gitar} alt="Gitar" className="w-18" />
                  <img src={gitar} alt="Gitar" className="w-18" />
                  <img src={gitar} alt="Gitar" className="w-18" />
                </Carousel>
              </div>
              <div className="pl-12">
                <p className="font-medium text-lg mt-4">
                  Yamaha Gitar Klasik C80
                </p>
                <div className="flex my-2">
                  <img src={star} alt="Star" />
                  <p>4.8</p>
                  <p className="mx-2">•</p>
                  <p>Tersedia di daerah sekitar kampus UMM 3</p>
                </div>
                <div className="w-96 mb-8">
                  <p>
                    Gitar yamaha klasik tipe C80 dengan kondisi mulus, senar
                    baru ganti. Gitar ini adalah teman setia saya dalam
                    perjalanan musik saya, dan sekarang saya ingin memberi
                    kesempatan kepada orang lain untuk keindahan suaranya.
                  </p>
                </div>
                <p className="font-medium text-lg mt-4">Rp45.000,00/3 Hari</p>
                <hr />
                <p className="font-medium text-lg mt-4">Spesifikasi</p>
                <p>Senar : Nylon</p>
                <p>Material: Nato</p>
                <p>Skala Senar: 650 mm</p>
                <p>Atas: Spruce</p>
                <p>Belakang: Nato</p>
              </div>
            </div>
            <div className="w-1/4 px-16 py-4 bg-white rounded-xl shadow-2xl h-fit">
              <p className="font-medium text-lg">Owner</p>
              <div className="flex justify-center items-center">
                <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                <p className="font-medium text-md px-5">Bagus Prayoga</p>
              </div>
              <div className="border-2 border-[#165668] w-full h-fit rounded-xl text-[#165668] text-center font-medium mt-2 py-2">
                Tanya Pemilik
              </div>
              <div className="w-full h-fit rounded-xl bg-[#165668] text-center text-white font-medium mt-2 py-2">
                Ajukan Sewa
              </div>
            </div>
          </div>
          <p className="text-4xl font-semibold mt-12">Ulasan dan Rating</p>
          <div className="mt-8 flex overflow-x-auto space-x-4 pb-4">
            <div className="bg-white shadow-2xl w-fit h-fit py-8 px-8">
              <div className="flex items-center">
                <img src={caca} alt="Caca" className="w-24" />
                <p className="ml-4 text-md font-medium">Marchanda Balqis</p>
              </div>
              <div className="flex my-2">
                <img src={star} alt="Star" />
                <p>4.8</p>
                <p className="mx-2">•</p>
                <p>Cukup Baik</p>
              </div>
              <div className="w-96">
                <p>
                  Pemilik cukup ramah, pelayanan cepat dan barang yang disewakan
                  sangat bagus, mantab!
                </p>
              </div>
            </div>

            <div className="bg-white shadow-2xl w-fit h-fit py-8 px-8">
              <div className="flex items-center">
                <img src={dinda} alt="Dinda" className="w-24" />
                <p className="ml-4 text-md font-medium">Adinda Eka</p>
              </div>
              <div className="flex my-2">
                <img src={star} alt="Star" />
                <p>4.5</p>
                <p className="mx-2">•</p>
                <p>Baik</p>
              </div>
              <div className="w-96">
                <p>
                  Barang sesuai deskripsi, pelayanan bagus. Terima kasih banyak!
                </p>
              </div>
            </div>

            <div className="bg-white shadow-2xl w-fit h-fit py-8 px-8">
              <div className="flex items-center">
                <img src={unima} alt="Unima" className="w-24" />
                <p className="ml-4 text-md font-medium">Uni Mahia</p>
              </div>
              <div className="flex my-2">
                <img src={star} alt="Star" />
                <p>4.7</p>
                <p className="mx-2">•</p>
                <p>Sangat Baik</p>
              </div>
              <div className="w-96">
                <p>
                  Barangnya bagus banget, pelayanan juga memuaskan. Recommended!
                </p>
              </div>
            </div>

            <div className="bg-white shadow-2xl w-fit h-fit py-8 px-8">
              <div className="flex items-center">
                <img src={angel} alt="Angel" className="w-24" />
                <p className="ml-4 text-md font-medium">Angel Maria</p>
              </div>
              <div className="flex my-2">
                <img src={star} alt="Star" />
                <p>4.8</p>
                <p className="mx-2">•</p>
                <p>Cukup Baik</p>
              </div>
              <div className="w-96">
                <p>
                  Pemilik ramah, barang sesuai dengan deskripsi. Puas dengan pelayanan!
                </p>
              </div>
            </div>

            <div className="bg-white shadow-2xl w-fit h-fit py-8 px-8">
              <div className="flex items-center">
                <img src={khabil} alt="Khabil" className="w-24" />
                <p className="ml-4 text-md font-medium">Khabil Putra</p>
              </div>
              <div className="flex my-2">
                <img src={star} alt="Star" />
                <p>4.6</p>
                <p className="mx-2">•</p>
                <p>Baik</p>
              </div>
              <div className="w-96">
                <p>
                  Pelayanan bagus, barang juga sesuai dengan yang diharapkan. Terima kasih!
                </p>
              </div>
            </div>

            <div className="bg-white shadow-2xl w-fit h-fit py-8 px-8">
              <div className="flex items-center">
                <img src={fikri} alt="Fikri" className="w-24" />
                <p className="ml-4 text-md font-medium">Fikri Agus</p>
              </div>
              <div className="flex my-2">
                <img src={star} alt="Star" />
                <p>4.9</p>
                <p className="mx-2">•</p>
                <p>Sangat Baik</p>
              </div>
              <div className="w-96">
                <p>
                  Pelayanan dan barang sangat memuaskan. Recommended untuk disewakan!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default DetailSewa;
