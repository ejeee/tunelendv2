import React from "react";
import Navbar from "../navbar";
import Footer from "../../../components/footer";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import AlatMusik from "./components/alatMusik.jsx";

const Pemilik = () => {
  return (
    <>
      <section className="font-inter w-screen min-h-screen bg-white">
        <Navbar />
        <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-14">
          <p className="text-4xl font-semibold">Selamat Datang, Aca!</p>
          <div className="mt-8">
            <TabGroup>
              <TabList className="flex gap-4 overflow-x-auto">
                <div className="flex-shrink-0 bg-slate-300 py-1 px-1 rounded-lg whitespace-nowrap">
                  <Tab
                    key="alat"
                    className="rounded-xl py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-white data-[selected]:font-bold data-[hover]:bg-white data-[selected]:data-[hover]:bg-white data-[focus]:outline-none"
                  >
                    Alat Musik Anda
                  </Tab>
                  {/* <Tab
                    key="statistik"
                    className="rounded-xl py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-white data-[selected]:font-bold data-[hover]:bg-white data-[selected]:data-[hover]:bg-white data-[focus]:outline-none"
                  >
                    Statistik Website
                  </Tab>
                  <Tab
                    key="verif"
                    className="rounded-xl py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-white data-[selected]:font-bold data-[hover]:bg-white data-[selected]:data-[hover]:bg-white data-[focus]:outline-none"
                  >
                    Verifikasi Postingan
                  </Tab> */}
                </div>
              </TabList>
              <TabPanels className="mt-3">
                <TabPanel key="ringkasan" className="rounded-xl bg-white/5 p-3">
                  <AlatMusik />
                </TabPanel>
                {/* <TabPanel key="sewa" className="rounded-xl bg-white/5 p-3">
                  <Statistik />
                </TabPanel>
                <TabPanel key="riwayat" className="rounded-xl bg-white/5 p-3">
                  <AlatMusik />
                </TabPanel> */}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Pemilik;
