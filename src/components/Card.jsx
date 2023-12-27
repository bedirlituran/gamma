import React from "react";

const Card = () => {
  return (
    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 cursor-pointer ">
    <div className="group rounded-2xl bg-gray-300 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 hover:bg-blue-500 hover:text-slate-100 transition-all duration-500">
      <div className="mx-auto max-w-xs px-8">
        <p className="text-base font-semibold text-gray-600 group-hover:text-white duration-500">Pay once, own it forever</p>
        <p className="mt-6 flex items-baseline justify-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-gray-900"><span className="material-symbols-outlined  text-9xl   group-hover:bg-white group-hover:text-blue-500 group-hover:rounded-full transition-all duration-500">
multicooker
</span></span>
          
        </p>
        <a href="#" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get access</a>
        <p className="mt-6 text-xs leading-5 text-gray-600  group-hover:text-white duration-500">Invoices and receipts available for easy company reimbursement</p>
      </div>
    </div>
  </div>
  );
};

export default Card;
