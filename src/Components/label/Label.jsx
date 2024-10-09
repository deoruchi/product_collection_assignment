import React from "react";

export const Label = (props) => {
  return (
    <div className=" text-sm wx-3 text-center font-semibold rounded-2xl bg-blue-100 text-blue-500 border-blue-500 border-solid border-2 px-2">
      {props.name}
    </div>
  );
};
