import React, { useEffect, useState } from "react";
import { TbDotsVertical } from "react-icons/tb";

export const ProductLabel = (props) => {
  if (!props.data) {
    throw new Error("No data Found!!");
  }

  // States: index(choosen) and labels(update)
  const [optionIndex, setOptionIndex] = useState(null);
  const [labels, setLabels] = useState(props.data);

  useEffect(() => {
    setLabels(props.data);
  }, [props.data]);

  // Delete: Col and Label
  const removeLabel = (index) => {
    const updatedLabels = labels.filter((_, i) => i !== index);
    setLabels(updatedLabels);
    props.handleUpdate(updatedLabels);
    setOptionIndex(null);
  };

  return (
    <>
      <div className="flex flex-row">
        {labels.map((item, key) => (
          <div
            className={`relative flex flex-row justify-between items-center text-gray-600 text-lg font-semibold border-r-2 border-gray-300 px-4 ${
              key === 0
                ? `text-start min-w-[300px] `
                : `text-center  min-w-[200px]`
            }`}
            key={key}
          >
            <p>{item}</p>

            <button
              className={`bg-none ${
                key === 0 && key == 1 ? `hidden` : `block`
              }`}
              onClick={() => setOptionIndex(key === optionIndex ? null : key)}
            >
              <TbDotsVertical />
            </button>

            {/* Delete option menu */}
            {optionIndex === key && (
              <div className="absolute right-0 top-8 bg-white p-2 border rounded shadow-md">
                <button
                  className="text-red-600"
                  onClick={() => removeLabel(key)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
