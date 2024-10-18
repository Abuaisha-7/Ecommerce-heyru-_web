import React from "react";
import Img1 from "../../assets/shirts/shirt.png";
import Img2 from "../../assets/shirts/shirt2.png";
import Img3 from "../../assets/shirts/shirt3.png";
import { FaStar } from "react-icons/fa6";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    
  },
  {
    id: 2,
    img: Img2,
    title: "Printed T-Shirt",
    description: "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  
];

const TopProducts = () => {
  return (
    <div className="mt-8 mb-12">
      <div className="container">
        {/* Header section  */}
        <div className="text-left mb-10">
          <p data-aos="fade-up" className=" text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            beatae corporis pariatur.
          </p>
        </div>
        {/* body section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
            {
                ProductsData.map((items) => (
                    <div>
                        {/* image section  */}
                        <div>
                          <img src={items.img} alt="" />
                        </div>
                        {/* detail section  */}

                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
