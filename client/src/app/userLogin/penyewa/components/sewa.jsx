import React, { useState } from "react";
import { Pagination } from "flowbite-react";
import gitar from "../../../../assets/image/gitar.png";
import keyboard from "../../../../assets/image/keyboard.png";
import gitarElektrik from "../../../../assets/image/gitarElektrik.png";
import star from "../../../../assets/image/star.svg";
import { Link } from "react-router-dom";

const Sewa = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="font-inter flex pr-32 grid grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white w-full h-full shadow-2xl rounded-lg px-8 py-8 flex flex-col">
          <div className="w-full h-56 border-2 rounded-xl flex justify-center mb-4">
            <img src={gitar} alt="Yamaha Gitar Klasik C80" className="rounded-xl" />
          </div>
          <p className="font-medium text-lg mb-2">Yamaha Gitar Klasik C80</p>
          <div className="flex items-center mb-2">
            <img src={star} alt="Rating" className="w-4 h-4" />
            <p>4.8</p>
            <p className="mx-2">•</p>
            <p>Tersedia di daerah sekitar kampus UMM 3</p>
          </div>
          <div className="flex-grow">
            <p>
              Gitar Yamaha klasik tipe C80 dengan kondisi mulus, senar baru ganti. Gitar ini adalah teman setia saya dalam perjalanan musik saya, dan sekarang saya ingin memberi kesempatan kepada orang lain untuk keindahan suaranya.
            </p>
          </div>
          <Link
            to="/penyewa/detail-sewa"
            className="px-8 py-2 text-white rounded-2xl bg-[#165668]"
          >
            Selengkapnya
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white w-full h-full shadow-2xl rounded-lg px-8 py-8 flex flex-col">
          <div className="w-full h-56 border-2 rounded-xl flex justify-center mb-4">
            <img src={keyboard} alt="Yamaha PSR-EW425 76-Key Portable Keyboard" className="rounded-xl" />
          </div>
          <p className="font-medium text-lg mb-2">YAMAHA PSR-EW425 76-KEY PORTABLE KEYBOARD</p>
          <div className="flex items-center mb-2">
            <img src={star} alt="Rating" className="w-4 h-4" />
            <p>4.5</p>
            <p className="mx-2">•</p>
            <p>Tersedia di daerah sekitar kampus UMM 3</p>
          </div>
          <div className="flex-grow">
            <p>
              Portable Keyboard yang memiliki keyboard 76 tombol yang dimanfaatkan secara maksimal oleh pemain berpengalaman. PaSR-EW425 terbaru dilengkapi generator nada yang baru dikembangkan dan memberikan peningkatan yang menakjubkan dalam kualitas suara serta efek berkualitas tinggi.
            </p>
          </div>
          <Link
            to="/penyewa/detail-sewa"
            className="px-8 py-2 text-white rounded-2xl bg-[#165668]"
          >
            Selengkapnya
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white w-full h-full shadow-2xl rounded-lg px-8 py-8 flex flex-col">
          <div className="w-full h-56 border-2 rounded-xl flex justify-center mb-4">
            <img src={gitarElektrik} alt="Gitar Elektrik Gibson SG" className="rounded-xl" />
          </div>
          <p className="font-medium text-lg mb-2">Gitar Elektrik Gibson SG</p>
          <div className="flex items-center mb-2">
            <img src={star} alt="Rating" className="w-4 h-4" />
            <p>4.7</p>
            <p className="mx-2">•</p>
            <p>Tersedia di daerah sekitar kampus UMM 3</p>
          </div>
          <div className="flex-grow">
            <p>
              Gibson SG memiliki 2 buah humbucker pickups (beberapa model memiliki 3) dengan 2 buah tone control dan 2 buah volume control serta 1 buah 3 way pickup selector. Untuk sound, SG menghasilkan tone yang lebih menggigit daripada Les Paul Model, namun untuk tone Low-end nya masih kalah dengan Les Paul Model (LPM).
            </p>
          </div>
          <Link
            to="/penyewa/detail-sewa"
            className="px-8 py-2 text-white rounded-2xl bg-[#165668]"
          >
            Selengkapnya
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-8 overflow-x-auto">
        <Pagination
          currentPage={currentPage}
          totalPages={2}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default Sewa;
