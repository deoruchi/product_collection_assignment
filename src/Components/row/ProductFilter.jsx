import React from "react";
import { Filter_Label } from "../label/Filter_Label";
export const ProductFilter = (props) => {
  return (
    <div className="border-r-2">
      <div className=" bg-white mx-3 border-dashed border-2 flex flex-row justify-center items-center h-[150px] w-[400px]">
        {props.filter.labels.map((names) => {
          return <Filter_Label name={names} />;
        })}
      </div>
    </div>
  );
};
