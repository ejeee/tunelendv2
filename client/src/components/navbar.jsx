import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import tunelendLogo from "../assets/image/tunelend.png";

const Navbar = () => {
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
    <>
    <nav
      className={`fixed top-0 left-0 w-full bg-[#165668] ${
        scrolled ? "shadow-md" : ""
      } z-50`}
    >
      <div className="font-inter flex justify-between items-center py-3 px-8 md:px-32">
        <div>
          <img src={tunelendLogo} alt="" className="w-32 h-fit" />
        </div>
        <div className="hidden md:flex items-center text-white">
          <Link to="/" className="mr-8">
            Beranda
          </Link>
          <Link to="/tentang-kami" className="mr-8">
            Tentang Kami
          </Link>
          <Link to="/faq" className="mr-12">
            Pertanyaan Umum
          </Link>
          <button
            onClick={() => navigate("/signin")}
            className="border-2 rounded-2xl px-8 py-1"
          >
            Masuk
          </button>
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
            </li>
          </ul>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
