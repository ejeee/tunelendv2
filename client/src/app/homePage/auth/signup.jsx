import React, { useState } from "react";
import tunelendLogo from "../../../assets/image/tunelend.png";
import man from "../../../assets/image/man.png";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../service/auth";

const Signup = () => {
  const [signupEmail, setsignupEmail] = useState('');
  const [signupPassword, setsignupPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const [isAlertSuccess, setIsAlertSuccess] = useState(false);
  const [isAlertError, setIsAlertError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await signup(signupEmail, signupPassword, confirmPassword);
    if(response.success){
      setIsAlertSuccess(!isAlertSuccess);
    } else {
      setIsAlertError(!isAlertError);
      setMessageError(response.message);
    }
  };


  return (
    <>
      <section className="font-inter w-screen h-screen bg-white font-inter">
        <div className="flex w-full h-full">
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
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="font-bold text-black text-2xl text-center">
              Selamat Datang
            </p>
            <p className=" text-black text-md text-center">
              Silahkan daftar menggunakan email dan password anda
            </p>
            <form className="max-w-sm mx-auto mt-8">
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Masukkan email anda"
                  value={signupEmail}
                  onChange={(e) => setsignupEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Masukkan password"
                  value={signupPassword}
                  onChange={(e) => setsignupPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Masukkan kembali password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-center w-full">
                <button
                  type="button"
                  onClick={handleSignup}
                  className="items-center content-center text-white bg-[#165668] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                  Daftar
                </button>
              </div>

              <p className="mt-4 text-black text-sm text-center">
                Dengan mendaftar, Anda menyetujui Persyaratan Layanan dan
                Kebijakan Privasi kami.
              </p>

              <div className="flex w-full justify-center items-center mt-4">
                <p className="text-black text-sm text-center font-semibold">
                  Sudah punya akun?{" "}
                </p>
                <Link
                  to="/signin"
                  className="text-black text-sm text-center font-semibold underline ml-2"
                >
                  Masuk
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      {isAlertSuccess && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className="flex items-center p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4 me-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Pendaftaran berhasil!</span> silahkan
              coba masuk.
            </div>
            <button
              type="button"
              onClick={()=>setIsAlertSuccess(false)}
              className="ml-3 text-gray-400 hover:text-gray-900 focus:outline-none"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 6.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {isAlertError && (
        <div className="fixed top-4 right-4 z-50">
          <div
            className="flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4 me-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium"> Pendaftaran gagal!</span>
              <span> {messageError}</span>
            </div>
            <button
              type="button"
              onClick={()=>setIsAlertError(false)}
              className="ml-3 text-gray-400 hover:text-gray-900 focus:outline-none"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 6.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
