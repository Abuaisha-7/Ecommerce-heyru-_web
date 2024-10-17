import React from "react";
import Logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import DarckMode from "./DarckMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdawnLinks = [
  {
    id: 1,
    name: "Treding Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-slate-900 dark:text-white">
      {/* upper nav bar with logo */}
      <div className="bg-primary/40 py-3 sm:py-0">
        <div className="container flex justify-between items-center">
          <div>
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="" className="w-10" />
                Shopsy
              </a>
            </div>
          </div>
          {/* search bar  */}
          <div className="flex items-center gap-3 py-2">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-1 focus:border-orange-400 dark:border-gray-500 dark:bg-gray-800"
              />
              <IoIosSearch className="text-gray-500 group-hover:text-primary absolute top-3 right-2" />
            </div>
            {/* order button will go here */}
            <button
              onClick={() => alert("Order not available yet!")}
              className="bg-primary text-white px-4 py-2 rounded-full font-bold hover:bg-secondary transition-all duration-300 flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-300">
                Order
              </span>
              <IoCartOutline className="text-2xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darck mode switcher will go here */}
            <div>
              <DarckMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower nav bar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-5">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="inline-block text-lg px-4 hover:text-primary transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* simple Dropdawn will go here */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 ">
              Trending Products
              <span>
                <IoMdArrowDropdown className="transition-all duration-300 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdawnLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 transition-all duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
