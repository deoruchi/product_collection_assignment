import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { ProductLabel } from "./ProductLabel";
import { RowCollection } from "./RowCollection.jsx";

export const ProductDetail = () => {
  const [productArr, setProduct] = useState([
    "Product Filter",
    "Primary Varient",
  ]);

  // Update: Label of Table
  const addLabel = function () {
    const l = productArr.length;
    if (l > 5) {
      alert("Limit");
    }
    const new_arr = [...productArr];
    new_arr.push(`Varient ${l - 1}`);
    setProduct(new_arr);
  };

  // Updated: The product Arr
  const handleUpdate = (data) => {
    setProduct(data);
  };

  return (
    <section className=" bg-gray-100 rounded-lg p-5 border-2 overflow-y-auto  ">
      {/* Product label  */}
      <div className="relative left-[20%]">
        <ProductLabel data={productArr} handleUpdate={handleUpdate} />
      </div>
      <section className="flex flex-row justify-between">
        {/* Row: Collection Items */}
        <RowCollection data={productArr} handleAdd={addLabel} />

        {/* Add: Columns */}
      </section>
    </section>
  );
};
