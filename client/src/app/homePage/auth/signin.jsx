import React, { useState } from "react";
import tunelendLogo from "../../../assets/image/tunelend.png";
import man from "../../../assets/image/man.png";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../../service/api";

const Signin = () => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const [isAlertError, setIsAlertError] = useState(false);
  const [messageError, setMessageError] = useState('');
  const navigate = useNavigate();

  const handleSignin = async () => {
    const response = await signin(signinEmail, signinPassword);
    if (response.success) {
      navigate("/beranda-user");
    } else {
      setIsAlertError(!isAlertError);
      setMessageError(response.message);
    }
  };

  return (
    <>
      <section className="font-inter w-screen h-screen bg-white">
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
                  value={signinEmail}
                  onChange={(e) => setSigninEmail(e.target.value)}
                  
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
                  value={signinPassword}
                  onChange={(e) => setSigninPassword(e.target.value)}
                  
                />
              </div>
              <div className="flex justify-center w-full">
                <button
                  onClick={handleSignin}
                  type="button"
                  class="items-center content-center text-white bg-[#165668] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                  Masuk
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
              <span className="font-medium"> Signin gagal!</span>
              <span> {messageError}</span>
            </div>
            <button
              type="button"
              onClick={() => setIsAlertError(false)}
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

export default Signin;
