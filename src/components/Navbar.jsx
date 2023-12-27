import React from "react";
import Logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <div className="sticky top-0  z-50">
      <div className="font-ubuntu relative ">
        <div className="container-fluid flex h-20 bg-gray-800 w-full items-center px-2 justify-between ">
          <div className="row">
            <div className="flex basis-1/4 items-center px-4">
              <img
                src={Logo}
                alt=""
                className="w-40 h-[70px] rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="row items-center ">
            <div className="flex basis-2/4 items-center justify-center px-6">
              <ul className="flex flex-row gap-4 items-center justify-center text-yellow-50 font-bold tracking-wide text-lg">
                <a
                  href="#"
                  className=" hover:text-red-400  transition-all duration-500 ">
                  <li>Ana Səhifə</li>
                </a>
                <a
                  href="#"
                  className=" hover:text-red-400   transition-all duration-500 ">
                  <li>Haqqında</li>
                </a>
                <a
                  href="#"
                  className=" hover:text-red-400   transition-all duration-500 ">
                  <li>Xidmətlər</li>
                </a>
                <a
                  href="#"
                  className=" hover:text-red-400 transition-all duration-500 ">
                  <li>Layihələr </li>
                </a>
                <a
                  href="#"
                  className=" hover:text-red-400   transition-all duration-500 ">
                  <li>Əlaqə</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="flex basis-2/4 items-center justify-end px-20 space-x-6">
              <div className="flex gap-2 hover:text-red-500 transition all duration-500 cursor-pointer text-white font-bold py-2 px-4 rounded-lg">
                <span className="material-symbols-outlined ">
                  call
                </span>
                (012)610 48 88
              </div>
              <span className="font-bold text-white">|</span>
              <div className="flex gap-2 hover:text-red-500 transition all duration-500 cursor-pointer text-white font-bold py-2 px-4 rounded-lg">
                <span class="material-symbols-outlined">mail</span>
                gamma_net@mail.ru
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
