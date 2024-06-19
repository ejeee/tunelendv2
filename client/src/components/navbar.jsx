import React from "react";
import tunelendLogo from "../assets/image/tunelend.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="font-inter w-full h-fit bg-[#165668] flex justify-between py-3 px-32">
        <div>
          <img src={tunelendLogo} alt="" className="w-32 h-fit" />
        </div>
        <div className="text-white flex items-center">
          <Link to="/" className="mr-8">
            Beranda
          </Link>
          <Link to="/tentang-kami" className="mr-8">
            Tentang Kami
          </Link>
          <Link to="/faq" className="mr-12">
            Pertanyaan Umum
          </Link>
          <Link to="/signin">
            <div className="border-2 rounded-2xl px-8 py-1">
              <p>Masuk</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;