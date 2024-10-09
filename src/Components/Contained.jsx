import React from "react";
import { Label } from "./label/Label";
import { GoArrowLeft } from "react-icons/go";
import { ProductDetail } from "./row/ProductDetail";
export const Contained = () => {
  return (
    <>
      <section className="h-[100vh] min-w-10 p-4 overflow-auto">
        <div className="grid grid-flow-col  justify-between">
          <div className="flex flex-row  items-center">
            <GoArrowLeft className="text-2xl" />
            <input
              type="text"
              className="text-2xl font-bold border-black mx-2 border-b-4 outline-none"
            ></input>
            <Label name="Primary Feed" />
          </div>
          <button className="p-4 font-semibold rounded-lg bg-green-500 text-white ">
            Publish Feed
          </button>
        </div>
        <hr className="my-4"></hr>
        <ProductDetail />
      </section>
    </>
  );
};
