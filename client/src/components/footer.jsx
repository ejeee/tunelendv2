import React from "react";
import tunelendLogo from "../assets/image/tunelend.png";
import kampusMerdeka from "../assets/image/kampusMerdeka.png";
import infinite from "../assets/image/infinite.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="font-inter w-full h-auto px-48 bg-[#165668] py-12 text-white">
        <img src={tunelendLogo} className="w-18 h-auto" alt="TuneLend Logo" />
        <div className="flex mt-2 justify-between">
          <div className="w-fit">
            <div className="w-96">
              <p>
                TuneLend merupakan website yang membantu masyarakat kota Malang
                untuk melanjutkan hobi bermusik dengan solusi dari kami, sewa
                dan sewakan alat musik yang anda miliki.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <p className="font-bold mb-4">NAVIGASI</p>
              <div className="grid grid-rows-4 gap-4">
                <Link to="/">Beranda</Link>
                <Link to="/about-us">Tentang Kami</Link>
                <Link to="/faq">Pertanyaan Umum</Link>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4">IKUTI KAMI</p>
              <div className="grid grid-rows-3 gap-4">
                <p>Instagram</p>
                <p>Tiktok</p>
                <p>X</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-4">HUBUNGI KAMI</p>
              <div className="grid grid-rows-2 gap-4">
                <p>+62 8212-3476-131 (Admin)</p>
                <p>tunelend@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center space-x-4 mt-4">
          <img src={kampusMerdeka} alt="Kampus Merdeka" className="w-22 h-auto" />
          <img src={infinite} alt="Infinite" className="w-24 h-auto" />
        </div> */}
        <hr className="mt-6" />
        <p className="text-center font-semi mt-6">
          © 2024 Semar(T). All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
