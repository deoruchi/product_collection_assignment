import React from "react";

export const Filter_Label = (props) => {
  const label_name = props.name;
  return (
    <div
      className={`border-2 rounded-md text-center text-sm p-1 font-semibold m-2 ${
        label_name === "contains"
          ? "bg-green-200 text-green-700 border-green-700"
          : "bg-grey-200"
      }`}
    >
      {label_name}
    </div>
  );
};
