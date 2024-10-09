import React, { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { ProductFilter } from "./ProductFilter.jsx";
import { Varient } from "./Varient";

export const RowCollection = (props) => {
  const [items_Collection, setItemCollection] = useState([
    {
      id: uuidv4(),
      "product-filter": {
        labels: ["product collection", "contains", "Anarkali Kurtas"],
      },
      varients: [...Array(props.data.slice(1).length)].fill({
        image: {
          url: "",
          name: "",
        },
      }),
    },
  ]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Update the varients whenever props.data changes
  useEffect(() => {
    const updatedVarients = createVarients();
    updateVarients(updatedVarients);
  }, [props.data]);

  // Create varients based on the length of props.data
  const createVarients = () => {
    return [...Array(props.data.slice(1).length)].fill({
      image: {
        url: "",
        name: "",
      },
    });
  };

  // Update varients in the existing items_Collection
  const updateVarients = (varient) => {
    const updatedCollection = items_Collection.map((item) => ({
      ...item,
      varients: varient,
    }));
    setItemCollection(updatedCollection);
  };

  // Add a new row
  const addRow = () => {
    const newRow = {
      id: uuidv4(),
      "product-filter": {
        labels: ["product collection", "contains", "Anarkali Kurtas"],
      },
      varients: createVarients(),
    };
    setItemCollection((prevCollection) => [...prevCollection, newRow]);
  };

  // Delete a specific row by ID
  const deleteRow = (id) => {
    const filteredCollection = items_Collection.filter(
      (item) => item.id !== id
    );
    setItemCollection(filteredCollection);
  };

  return (
    <section className="flex flex-row justify-between">
      <section className="flex flex-col items-start justify-start h-fit w-full  ">
        <Reorder.Group
          axis="y"
          values={items_Collection}
          onReorder={(newItems) => setItemCollection([...newItems])}
        >
          {items_Collection?.map((item, index) => (
            <Reorder.Item key={item.id} value={item}>
              <div
                className="my-10 grid grid-flow-col items-center justify-start "
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="border-r-2 mx-4 h-[150px] flex flex-col justify-center px-4">
                  <RiDeleteBinLine
                    className={`text-red-600 text-2xl cursor-pointer z-20 ${
                      hoveredIndex === index ? `block` : `hidden`
                    }`}
                    onClick={() => deleteRow(item.id)}
                  />
                  <div className="flex flex-row items-center justify-center">
                    <p className="text-2xl font-bold">{index + 1}</p>
                    <TbGridDots className="text-2xl" />
                  </div>
                </div>

                {/* Displaying product-filter labels */}
                <ProductFilter filter={item["product-filter"]} />
                <Varient
                  varient={item["varients"]}
                  maindata={items_Collection}
                  handleUpdateVarient={setItemCollection}
                  className="z-10"
                />
                <button
                  className="bg-white p-4 shadow-md rounded-lg m-4 "
                  onClick={() => props.handleAdd()}
                >
                  <IoAdd className="text-2xl" />
                </button>
              </div>
            </Reorder.Item>
          ))}
          <div>
            <button
              className="bg-gray-200 p-4 shadow-md rounded-lg mt-4"
              onClick={addRow}
            >
              <IoAdd className="text-2xl" />
            </button>
          </div>
        </Reorder.Group>
      </section>
    </section>
  );
};
