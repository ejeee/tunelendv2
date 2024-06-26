import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import faq from "../../../assets/image/FAQ.png";
import { Accordion } from "flowbite-react";

const PertanyaanUmum = () => {
  return (
    <>
      <section className="font-inter w-screen h-full bg-white">
        <Navbar />
        <div className="px-10 sm:px-20 md:px-32 py-24 flex flex-col md:flex-row">
          <div className="w-full">
            <p className="text-4xl font-semibold mb-8">Pertanyaan Umum</p>
            {/* accordion */}
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>
                  Bagaimana cara pemilik alat musik untuk menyewakan alat musik
                  mereka?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Pemilik alat musik dapat mendaftar ke TuneLend secara gratis
                    serta menambahkan daftar alat musik yang mereka miliki, dan
                    menetapkan harga sewa. Setelah diverifikasi, alat musik
                    mereka akan tersedia untuk disewakan.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Apa manfaat bagi penyewa alat musik yang menggunakan TuneLend?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Penyewa dapat dengan mudah menemukan berbagai alat musik
                    yang mereka butuhkan dengan harga yang lebih terjangkau.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  Bagaimana TuneLend menjaga keamanan dan privasi informasi
                  pengguna?
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    TuneLend mengutamakan keamanan dan privasi informasi
                    pengguna dengan menerapkan berbagai langkah perlindungan,
                    termasuk enkripsi data, verifikasi pengguna, dan pemantauan
                    aktivitas. Selain itu, TuneLend tidak akan membagikan
                    informasi pribadi pengguna kepada pihak ketiga tanpa
                    persetujuan mereka, sesuai dengan kebijakan privasi yang
                    ketat.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <div className="hidden w-full md:flex justify-center">
            <img src={faq} alt=""/>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default PertanyaanUmum;
