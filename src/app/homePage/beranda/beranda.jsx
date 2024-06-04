import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import nada from "../../../assets/image/nada.png";
import person from "../../../assets/image/man2.png";
import tangan from "../../../assets/image/animasiTangan.png";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <>
      <section className="w-screen h-full bg-white overflow-x-hidden">
        <Navbar />
        <div className="w-full h-fit bg-[#165668] flex justify-between items-center text-white px-32">
          <div>
            <p className="text-7xl font-semibold">TuneLend</p>
            <p className="text-3xl font-light">
              Sewa dan sewakan alat musik dengan mudah
            </p>
            <Link to="/signin">
              <div className="border-2 text-center w-fit h-fit px-10 py-3 rounded-xl mt-8">
                <p>Mulai Telusuri</p>
              </div>
            </Link>
          </div>
          <img src={nada} alt="" className="w-[540px] h-fit" />
        </div>
        <div className="px-32 w-full h-fit py-12">
          <div className="w-full h-fit border-2 radius-lg flex items-center px-32">
            <div className="w-full">
              <img src={person} alt="" />
            </div>
            <div className="w-full">
              <p className="text-3xl font-semibold">
                Sewakan alat musik yang Anda miliki
              </p>
              <p>
                Dirancang agar Anda dapat menyewakan alat musik Anda yang tidak
                digunakan menjadi sumber pendapatan tambahan. Apapun alat musik
                yang Anda miliki, mulai dari gitar, drum, piano, hingga alat
                musik eksotis lainnya. Anda dapat dengan mudah mengelola daftar
                alat musik yang tersedia untuk disewakan, menetapkan harga, dan
                berkomunikasi dengan penyewa.
              </p>
            </div>
          </div>
          <div className="w-full h-fit border-2 radius-lg flex items-center px-32 mt-12">
            <div className="w-full">
              <p className="text-3xl font-semibold">
                Sewakan alat musik yang Anda inginkan
              </p>
              <p>
                Dirancang agar Anda dapat menyewa alat musik yang Anda butuhkan,
                mulai dari gitar, drum, piano, hingga alat musik eksotis lainnya
                dengan harga yang lebih terjangkau. Platform kami menyediakan
                pengalaman sewa yang aman dan nyaman, dengan berbagai pilihan
                alat musik dari penyewa yang diverifikasi.
              </p>
            </div>
            <div className="w-full flex justify-end">
              <img src={tangan} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Beranda;
