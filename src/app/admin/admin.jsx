import React from "react";
import Navbar from "./components/navbar";
import Footer from "../../components/footer";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Statistik from "./components/statistik";
import Verifikasi from "./components/verifikasi";

// import tunelend from "../../../assets/image/tunelend2.png";
// import caca from "../../../assets/image/caca.png";
// import { FaInstagram } from "react-icons/fa6";
// import { FiLinkedin } from "react-icons/fi";
// import { PiGithubLogo } from "react-icons/pi";
// import tangan from "../../../assets/image/animasiTangan.png";
// import { Link } from "react-router-dom";


const Admin = () => {
  return (
    <>
      <section className="w-screen h-full bg-white">
        <Navbar />
        <div className="px-32 py-14">
          <p className="text-4xl font-semibold">Selamat Datang, Admin!</p>
          <div className="mt-8">
            <TabGroup>
              <TabList className="flex gap-4">
                <div className="w-fit h-fit bg-slate-300 py-1 px-1 rounded-lg">
                  <Tab
                    key="statistik"
                    className="rounded-xl py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-white data-[selected]:font-bold data-[hover]:bg-white data-[selected]:data-[hover]:bg-white data-[focus]:outline-none data-[focus]:outline-none"
                  >
                    Statistik Website
                  </Tab>
                  <Tab
                    key="verifikasi"
                    className="rounded-xl py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-white data-[selected]:font-bold data-[hover]:bg-white data-[selected]:data-[hover]:bg-white data-[focus]:outline-none data-[focus]:outline-none"
                  >
                    Verifikasi Postingan
                  </Tab>
                </div>
              </TabList>
              <TabPanels className="mt-3">
                <TabPanel key="statistik" className="rounded-xl bg-white/5 p-3">
                  <Statistik />
                </TabPanel>
                <TabPanel key="verifikasi" className="rounded-xl bg-white/5 p-3">
                  <Verifikasi />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Admin;
