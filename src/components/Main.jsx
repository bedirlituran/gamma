import React from "react";
import sekil from "../assets/main1.png";

const Main = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="flex flex-col items-center justify-center h-screen w-full relative z-0">
            {/* z-0 stilini ekleyerek, Main bileşenini diğer z-index değerlerinin altına yerleştiriyoruz */}
            <img src={sekil} alt="" className="object-cover h-full w-full z-10 opacity-50" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <h1 className="text-5xl font-bold text-black mb-3">
                Gamma Netə xoş gəlmisiniz!!!
              </h1>
              <p className="text-xl font-bold text-black mb-4">
                Xidmətlərimizdən yararlana bilərsiniz
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
                Daxil ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
