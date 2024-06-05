import React, { useState } from "react";
import tunelendLogo from "../../assets/image/tunelend.png";
import profil from "../../assets/image/angel.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="font-inter w-full h-fit bg-[#165668] flex justify-between py-3 px-32">
        <div>
          <img src={tunelendLogo} alt="" className="w-32 h-fit" />
        </div>
        <div className="text-white flex items-center">
          <Link to="/beranda-user" className="mr-8">
            Beranda
          </Link>
          <Link to="/tentang-kami-user" className="mr-8">
            Tentang Kami
          </Link>
          <Link to="/faq-user" className="mr-12">
            Pertanyaan Umum
          </Link>
          <Link to="/penyewa" className="mr-12">
            Penyewa
          </Link>
          <Link to="/pemilik" className="mr-12">
            Pemilik
          </Link>
          <div className="relative mr-12">
            <button
              id="dropdownUserAvatarButton"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex text-sm bg-gray-800 rounded-full md:me-0"
              type="button"
            >
              <img src={profil} alt="user photo" className="w-10 h-10 rounded-full" />
              <span className="sr-only">Open user menu</span>
            </button>
            {dropdownOpen && (
              <div
                id="dropdownAvatar"
                className="absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <div className="py-2">
                  <a
                    onClick={() => navigate("/")}
                    className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                  >
                    Keluar
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
