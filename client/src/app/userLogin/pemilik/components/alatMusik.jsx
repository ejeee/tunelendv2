import React, { useState } from "react";
import { Pagination, Checkbox, Table, Badge, Carousel } from "flowbite-react";
import {
  Button,
  Dialog,
  DialogTitle,
  Transition,
} from "@headlessui/react";

import gitar from "../../../../assets/image/gitar.png";
import star from "../../../../assets/image/star.svg";

const AlatMusik = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="font-inter w-full h-fit">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Nama Alat Musik</Table.HeadCell>
            <Table.HeadCell>Deskripsi</Table.HeadCell>
            <Table.HeadCell>Lokasi</Table.HeadCell>
            <Table.HeadCell>Spesifikasi</Table.HeadCell>
            <Table.HeadCell>Status Sewa</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Detail</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Yamaha Gitar Klasik C80
              </Table.Cell>
              <Table.Cell>
                <p>
                  Gitar Yamaha klasik tipe C80 dengan kondisi mulus, senar baru
                  ganti. Gitar ini adalah teman setia saya dalam perjalanan
                  musik saya, dan sekarang saya ingin memberi kesempatan kepada
                  orang lain untuk keindahan suaranya.
                </p>
              </Table.Cell>
              <Table.Cell>
                <p>Tersedia di daerah sekitar kampus UMM 3</p>
              </Table.Cell>
              <Table.Cell>
                <p>Senar : Nylon</p>
                <p>Material: Nato</p>
                <p>Skala Senar: 650 mm</p>
                <p>Atas: Spruce</p>
                <p>Belakang: Nato</p>
              </Table.Cell>
              <Table.Cell>
                <Badge color="success" className="w-fit">
                  Selesai
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <button
                  onClick={openModal}
                  className="bg-[#165668] w-fit h-fit px-4 py-2 rounded-xl text-white"
                >
                  Detail
                </button>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                YAMAHA PSR-EW425 76-KEY PORTABLE KEYBOARD
              </Table.Cell>
              <Table.Cell>
                <p>
                  Portable Keyboard yang memiliki keyboard 76 tombol yang
                  dimanfaatkan secara maksimal oleh pemain berpengalaman.
                  PaSR-EW425 terbaru dilengkapi generator nada yang baru
                  dikembangkan dan memberikan peningkatan yang menakjubkan
                  dalam kualitas suara serta efek berkualitas tinggi.
                </p>
              </Table.Cell>
              <Table.Cell>
                <p>Tersedia di daerah sekitar kampus UMM 3</p>
              </Table.Cell>
              <Table.Cell>
                <p>Type: PSR-EW425 76-KEY PORTABLE</p>
                <p>Material: Nato</p>
                <p>Keunggulan: Memiliki keyboard 76 tombol</p>
              </Table.Cell>
              <Table.Cell>
                <Badge color="failure" className="w-fit">
                  Dibatalkan
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <div className="bg-[#165668] w-fit h-fit px-4 py-2 rounded-xl text-white">
                  Detail
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Gitar Elektrik Gibson SG
              </Table.Cell>
              <Table.Cell>
                <p>
                  Gibson SG memiliki 2 buah humbucker pickups (beberapa model
                  memiliki 3) dengan 2 buah tone control dan 2 buah volume
                  control serta 1 buah 3 way pickup selector. Untuk sound, SG
                  menghasilkan tone yang lebih menggigit daripada Les Paul
                  Model, namun untuk tone Low-end nya masih kalah dengan Les
                  Paul Model (LPM).
                </p>
              </Table.Cell>
              <Table.Cell>
                <p>Tersedia di daerah sekitar kampus UMM 3</p>
              </Table.Cell>
              <Table.Cell>
                <p>Senar : Nylon</p>
                <p>Material: Nato</p>
                <p>Skala Senar: 650 mm</p>
                <p>Atas: Spruce</p>
                <p>Belakang: Nato</p>
              </Table.Cell>
              <Table.Cell>
                <Badge color="indigo" className="w-fit">
                  Dalam Proses
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <div className="bg-[#165668] w-fit h-fit px-4 py-2 rounded-xl text-white">
                  Detail
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div className="flex overflow-x-auto justify-between text-center">
          <p className="mt-2">Showing 1-10 of 10</p>
          <Pagination
            currentPage={currentPage}
            totalPages={2}
            onPageChange={onPageChange}
          />
        </div>
      </div>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 flex items-center justify-center"
          onClose={closeModal}
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md"></div>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative z-30 h-fit w-3/4 bg-white shadow-2xl px-8 py-8 rounded-lg flex mr-8">
              <div className="w-full h-96 border-2 rounded-xl">
                <Carousel>
                  <img src={gitar} alt="Gitar" className="w-18" />
                  <img src={gitar} alt="Gitar" className="w-18" />
                  <img src={gitar} alt="Gitar" className="w-18" />
                  <img src={gitar} alt="Gitar" className="w-18" />
                  <img src={gitar} alt="Gitar" className="w-18" />
                </Carousel>
              </div>
              <div className="pl-12">
                <p className="font-medium text-lg mt-4">
                  Yamaha Gitar Klasik C80
                </p>
                <div className="flex my-2">
                  <img src={star} alt="Star" />
                  <p>4.8</p>
                  <p className="mx-2">•</p>
                  <p>Tersedia di daerah sekitar kampus UMM 3</p>
                </div>
                <div className="w-96 mb-8">
                  <p>
                    Gitar yamaha klasik tipe C80 dengan kondisi mulus, senar
                    baru ganti. Gitar ini adalah teman setia saya dalam
                    perjalanan musik saya, dan sekarang saya ingin memberi
                    kesempatan kepada orang lain untuk keindahan suaranya.
                  </p>
                </div>
                <p className="font-medium text-lg mt-4">Rp45.000,00/3 Hari</p>
                <hr />
                <p className="font-medium text-lg mt-4">Spesifikasi</p>
                <p>Senar : Nylon</p>
                <p>Material: Nato</p>
                <p>Skala Senar: 650 mm</p>
                <p>Atas: Spruce</p>
                <p>Belakang: Nato</p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={closeModal}
                  className="bg-[#165668] w-fit h-fit text-white px-10 py-2 rounded-xl mt-4"
                >
                  Kembali
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default AlatMusik;
