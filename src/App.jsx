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
import Renter from "./app/homePage/user/renter/renter";
import RentDetail from "./app/homePage/user/renter/rentDetail";
import Owner from "./app/homePage/user/owner/owner";

function App() {
  return (
    <>
      <BrowserRouter BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about-us" element={<TentangKami />} />
            <Route path="/faq" element={<PertanyaanUmum />} />
            <Route path="/rent" element={<Renter />} />
            <Route path="/rent/detail" element={<RentDetail />} />
            <Route path="/owner" element={<Owner />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
