import React from "react";
import tunelendLogo from "../../../assets/image/tunelend.png";
import man from "../../../assets/image/man.png";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <section className="w-screen h-screen bg-white">
        <div className="font-inter flex w-full h-full">
          <div className="w-full h-full bg-[#165668] px-16 py-8">
            <img src={tunelendLogo} alt="" className="h-auto w-36" />
            <div className="flex justify-center mt-24">
              <img src={man} alt="" className="h-auto w-96" />
            </div>
            <p className="font-medium text-white text-lg mt-24">
              Lanjutkan hobi anda dengan solusi dari kami, sewa dan sewakan alat
              musik yang anda miliki.
            </p>
          </div>
          <div className="w-full h-full items-center content-center">
            <p className="font-bold text-black text-2xl text-center">
              Selamat Datang
            </p>
            <p className=" text-black text-md text-center">
              Silahkan login menggunakan email dan password anda
            </p>
            <form class="max-w-sm mx-auto mt-8">
              <div class="mb-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Masukkan email anda"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Masukkan password"
                  required
                />
              </div>
              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  class="items-center content-center text-white bg-[#165668] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </div>

              <p className="mt-4 text-black text-sm text-center">
                Lupa kata sandi?
              </p>

              <div className="flex w-full justify-center items-center mt-4">
                <p className=" text-black text-sm text-center font-semibold">
                  Belum punya akun?{" "}
                </p>
                <Link
                  to="/signup"
                  className="text-black text-sm text-center font-semibold underline ml-2"
                >
                  Daftar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
