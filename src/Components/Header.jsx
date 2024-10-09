import React from "react";
import Icon from "../images/Icon.png";
import { FaBolt } from "react-icons/fa";

import { CiImageOn } from "react-icons/ci";
import { FaMeta } from "react-icons/fa6";
import { LuShirt } from "react-icons/lu";
import { MdOutlineTableRows } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { ProductDetail } from "./row/ProductDetail";
export const Header = () => {
  return (
    <section>
      <header className="bg-black h-[100vh] w-[60px] flex flex-col justify-start items-center py-[50px] text-white ">
        <img src={Icon} alt="comapany logo" className="w-8 h-8"></img>
        <br />
        <button>
          <FaBolt />
        </button>

        <br></br>
        <button>
          <CiImageOn />
        </button>

        <br></br>
        <button>
          {" "}
          <FaMeta />
        </button>

        <br></br>
        <button>
          <LuShirt />
        </button>

        <br></br>
        <div className=" relative bottom-[-300.78px]">
          <button>
            <MdOutlineTableRows />
          </button>

          <br></br>
          <button>
            <IoSettingsOutline />
          </button>
        </div>
      </header>
    </section>
  );
};
