import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Pagination } from "flowbite-react";
import { useState } from "react";

// import gitar from "../../../../assets/image/gitar.png";
// import star from "../../../../assets/image/star.svg";
// import caca from "../../../assets/image/caca.png";
// import { FaInstagram } from "react-icons/fa6";
// import { FiLinkedin } from "react-icons/fi";
// import { PiGithubLogo } from "react-icons/pi";
// import tangan from "../../../assets/image/animasiTangan.png";
import { Checkbox, Table, Badge } from "flowbite-react";
import { Link } from "react-router-dom";

const AlatMusik = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <>
      <div className="w-full h-fit">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Nama Penyewa</Table.HeadCell>
            <Table.HeadCell>Tanggal Dan Waktu</Table.HeadCell>
            <Table.HeadCell>Total</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
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
                Marchanda Balqis
              </Table.Cell>
              <Table.Cell>Apr 23 ,2021</Table.Cell>
              <Table.Cell>
                <p className="font-medium">Rp 25.000</p>
              </Table.Cell>
              <Table.Cell>
                <Badge color="success" className="w-fit">
                  Completed
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <div className="bg-[#165668] w-fit h-fit px-4 py-2 rounded-xl text-white ">
                  Detail
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Adinda
              </Table.Cell>
              <Table.Cell>Apr 23, 2021</Table.Cell>
              <Table.Cell>
                <p className="font-medium">Rp 30.000</p>
              </Table.Cell>
              <Table.Cell>
                <Badge color="failure" className="w-fit">
                  Cancelled
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <div className="bg-[#165668] w-fit h-fit px-4 py-2 rounded-xl text-white ">
                  Detail
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Angel
              </Table.Cell>
              <Table.Cell>Apr 18, 2021</Table.Cell>
              <Table.Cell>
                <p className="font-medium">Rp 15.000</p>
              </Table.Cell>
              <Table.Cell>
                <Badge color="indigo" className="w-fit">
                  In Progress
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <div className="bg-[#165668] w-fit h-fit px-4 py-2 rounded-xl text-white ">
                  Detail
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div className="flex overflow-x-auto justify-between text-center">
          <p className="mt-2">Showing 1-10 of 1000</p>
          <Pagination
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </>
  );
};

export default AlatMusik;
