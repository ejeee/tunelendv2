import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Signin from "./app/homePage/auth/signin";
import Signup from "./app/homePage/auth/signup";
import Beranda from "./app/homePage/beranda/beranda";
import TentangKami from "./app/homePage/tentangKami/tentangKami";
import PertanyaanUmum from "./app/homePage/pertanyaanUmum/pertanyaanUmum";
import BerandaUser from "./app/userLogin/beranda/beranda";
import TentangKamiUser from "./app/userLogin/tentangKami/tentangKami";
import PertanyaanUmumUser from "./app/userLogin/pertanyaanUmum/pertanyaanUmum";
import Penyewa from "./app/userLogin/penyewa/penyewa";
import DetailSewa from "./app/userLogin/penyewa/detailSewa";
import Pemilik from "./app/userLogin/pemilik/pemilik";
import Admin from "./app/admin/admin";

function App() {
  return (
    <>
      <BrowserRouter BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/faq" element={<PertanyaanUmum />} />
            <Route path="/beranda-user" element={<BerandaUser />} />
            <Route path="/tentang-kami-user" element={<TentangKamiUser />} />
            <Route path="/faq-user" element={<PertanyaanUmumUser />} />
            <Route path="/penyewa" element={<Penyewa />} />
            <Route path="/penyewa/detail-sewa" element={<DetailSewa />} />
            <Route path="/pemilik" element={<Pemilik />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
