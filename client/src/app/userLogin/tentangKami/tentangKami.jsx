import React from "react";
import Navbar from "../navbar";
import Footer from "../../../components/footer";
import tunelend from "../../../assets/image/tunelend2.png";
import caca from "../../../assets/image/caca.png";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { PiGithubLogo } from "react-icons/pi";

const TentangKamiUser = () => {
  const handleClick = (platform) => {
    console.log(`${platform} icon clicked`);
  };

  return (
    <>
      <section className="font-inter w-screen h-full bg-white">
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
            <div className="grid grid-cols-3 mx-52">
              <div className="bg-white w-64 h-128 shadow-xl rounded-lg text-center py-12 px-8">
                <div className="flex justify-center">
                  <img src={caca} alt="" className="w-40 h-fit" />
                </div>
                <p className="text-lg font-semibold mt-4">Marchanda Balqis</p>
                <p className="mt-1">Hustler</p>
                <p className="mt-2">Universitas Muhammadiyah Malang</p>
                <div className="grid grid-cols-3 px-12 justify-items-center mt-2">
                  <a href="https://www.instagram.com/mrch.ej" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/marchandabalqis" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                  <a href="https://github.com/ejeee" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogo />
                  </a>
                </div>
              </div>
              <div className="bg-white w-64 h-128 shadow-xl rounded-lg text-center py-12 px-8">
                <div className="flex justify-center">
                  <img src={dinda} alt="" className="w-40 h-fit" />
                </div>
                <p className="text-lg font-semibold mt-4">Adinda Eka M.W</p>
                <p className="mt-1">Hipster</p>
                <p className="mt-2">Politeknik Negeri Jember</p>
                <div className="grid grid-cols-3 px-12 justify-items-center mt-2">
                  <a href="https://www.instagram.com/adndam_03" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/adindamayang" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                  <a href="https://github.com/dinda008" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogo />
                  </a>
                </div>
              </div>
              <div className="bg-white w-64 h-128 shadow-xl rounded-lg text-center py-12 px-8">
                <div className="flex justify-center">
                  <img src={unima} alt="" className="w-40 h-fit" />
                </div>
                <p className="text-lg font-semibold mt-4">Uni Mahia</p>
                <p className="mt-1">Hipster</p>
                <p className="mt-2">Politeknik Negeri Batam</p>
                <div className="grid grid-cols-3 px-12 justify-items-center mt-2">
                  <a href="https://www.instagram.com/unima_02" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/unima-uni-539992236/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BQZxtag%2BiS2KkW9vZAK7rfw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                  <a href="https://github.com/unimahia" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogo />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 mx-52 mt-8">
              <div className="bg-white w-64 h-128 shadow-xl rounded-lg text-center py-12 px-8">
                <div className="flex justify-center">
                  <img src={angel} alt="" className="w-40 h-fit" />
                </div>
                <p className="text-lg font-semibold mt-4">Angel Maria</p>
                <p className="mt-1">Hacker</p>
                <p className="mt-2">Politeknik Negeri Batam</p>
                <div className="grid grid-cols-3 px-12 justify-items-center mt-2">
                  <a href="https://www.instagram.com/njell_maria" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/angel-maria-b792aa23a" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                  <a href="https://github.com/njellMaria" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogo />
                  </a>
                </div>
              </div>
              <div className="bg-white w-64 h-128 shadow-xl rounded-lg text-center py-12 px-8">
                <div className="flex justify-center">
                  <img src={khabil} alt="" className="w-40 h-fit" />
                </div>
                <p className="text-lg font-semibold mt-4">Khabil Putra P</p>
                <p className="mt-1">Hacker</p>
                <p className="mt-2">Universitas Jenderal Achmad Yani Yogyakarta</p>
                <div className="grid grid-cols-3 px-12 justify-items-center mt-2">
                  <a href="https://www.instagram.com/khabilputraa_" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/khabilputraa_" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                  <a href="https://github.com/khabilputraa" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogo />
                  </a>
                </div>
              </div>
              <div className="bg-white w-64 h-128 shadow-xl rounded-lg text-center py-12 px-8">
                <div className="flex justify-center">
                  <img src={fikri} alt="" className="w-40 h-fit" />
                </div>
                <p className="text-lg font-semibold mt-4">Fikri Agus T</p>
                <p className="mt-1">Hacker</p>
                <p className="mt-2">Universitas Negeri Surabaya</p>
                <div className="grid grid-cols-3 px-12 justify-items-center mt-2">
                  <a href="https://www.instagram.com/fikri.a.t" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/fikri-agus-tiyanto" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                  <a href="https://github.com/fikriagus" target="_blank" rel="noopener noreferrer">
                    <PiGithubLogo />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default TentangKamiUser;
