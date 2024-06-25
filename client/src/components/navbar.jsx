import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import tunelendLogo from "../assets/image/tunelend.png";
import profil from "../assets/image/angel.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#165668] ${
        scrolled ? "shadow-md" : ""
      } z-50`}
    >
      <div className="flex justify-between items-center py-3 px-8 md:px-32">
        <div>
          <img src={tunelendLogo} alt="" className="w-32 h-fit" />
        </div>
        <div className="hidden md:flex items-center text-white">
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
        <div
          onClick={handleMenu}
          className="md:hidden cursor-pointer text-white"
        >
          {menu ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      {menu && (
        <div className="md:hidden bg-[#165668] text-white">
          <ul className="py-5 text-lg space-y-3 px-10">
            <li>
              <Link to="/beranda-user" onClick={handleMenu}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/tentang-kami-user" onClick={handleMenu}>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/faq-user" onClick={handleMenu}>
                Pertanyaan Umum
              </Link>
            </li>
            <li>
              <Link to="/penyewa" onClick={handleMenu}>
                Penyewa
              </Link>
            </li>
            <li>
              <Link to="/pemilik" onClick={handleMenu}>
                Pemilik
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  handleMenu();
                  navigate("/penyewa");
                }}
                className="border-2 rounded-2xl px-8 py-1 text-left"
              >
                Masuk
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
