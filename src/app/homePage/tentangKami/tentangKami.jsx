import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import tunelend from "../../../assets/image/tunelend2.png";
import caca from "../../../assets/image/caca.png";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";
import tangan from "../../../assets/image/animasiTangan.png";
import { Link } from "react-router-dom";

const TentangKami = () => {
  return (
    <>
      <section className="w-screen h-full bg-white">
        <Navbar />
        <div className="px-32 py-24">
          <div className="w-full h-fit">
            <div className="w-full h-fit border-2 radius-lg flex items-center px-52 py-28">
              <div className="w-fit">
                <img src={tunelend} alt="" />
              </div>
              <div className="w-full ml-12">
                <p className="text-4xl font-bold">Tentang TuneLend</p>
                <div className="mr-28">
                  <p className="mt-4">
                    TuneLend merupakan website yang dibuat khusus untuk membantu
                    masyarakat kota Malang dengan latar belakang hobi bermusik.
                    Kami menyediakan platform untuk menghubungkan mereka yang
                    memiliki alat musik dengan mereka yang memiliki keterbatasan
                    untuk bermain alat musik. Dengan TuneLend pemilik alat musik
                    bisa mendapatkan penghasilan tambahan dengan menyewakan alat
                    musiknya, sementara para penyewa bisa menemukan alat musik
                    yang mereka butuhkan dengan mudah dan harga yang lebih
                    terjangkau.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-4xl font-semibold mt-32">Tim Kami</p>
            <div className="bg-white w-64 h-fit shadow-xl rounded-lg text-center py-12 px-8">
              <div className="flex justify-center">
                <img src={caca} alt="" className="w-40 h-fit" />
              </div>
              <p className="text-lg font-semibold mt-4">Marchanda Balqis</p>
              <p className="mt-1">Hustler</p>
              <p className="mt-2">Universitas Muhammadiyah Malang</p>
              <div className="grid grid-cols-3 px-12 justify-items-center mt-2">
                <FaInstagram />
                <FiLinkedin />
                <PiGithubLogo />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default TentangKami;
