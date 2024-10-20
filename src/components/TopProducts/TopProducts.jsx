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

const handleOrderPopup = () => {
  alert("Order Placed Successfully")
}

  return (
    <div className="mt-8 mb-12">
      <div className="container">
        {/* Header section  */}
        <div className="text-left mb-24">
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
                    <div 
                    data-aos= "zoom-in"
                    className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                        {/* image section  */}
                        <div className="h-[100px]">
                          <img src={items.img} alt="" className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 transition-all duration-300 drop-shadow-md"/>
                        </div>
                        {/* detail section  */}
                        <div className="p-4 text-center">
                          {/* star rating  */}
                          <div className="w-full flex items-center justify-center gap-1">
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                          </div>
                          <h1 className="text-xl font-bold">{items.title}</h1>
                          <p className="text-gray-500 text-sm group-hover:text-white duration-300 line-clamp-2">{items.description}</p>
                          <button className='bg-primary hover:scale-105 text-white px-4 py-1 mt-4 rounded-full group-hover:text-primary group-hover:bg-white duration-300' onClick={handleOrderPopup}>Order Now</button>
                        </div>

                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
