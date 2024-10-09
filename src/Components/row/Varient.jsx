import React from "react";
import { IoIosAdd } from "react-icons/io";
export const Varient = (props) => {
  const varient_cards = props.varient.map((items, key) => {
    return (
      <div className=" border-r-2" key={key}>
        <div className=" border-dashed border-2 mx-4 w-[165px] h-[150px]  p-4 bg-white flex flex-row items-center justify-center">
          <button className="bg-gray-100 p-2 text-sm rounded-md flex flex-row  justify-center item-center">
            <IoIosAdd className="text-2xl" />
            Add Image
          </button>
        </div>
      </div>
    );
  });
  return <>{varient_cards}</>;
};
