import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.png";
import Img3 from "../../assets/women/women3.png";
import Img4 from "../../assets/women/women4.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-8 mb-12">
      <div className="container">
        {/* header section  */}
        <div className="text-center mb-8 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className=" text-primary">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            beatae corporis pariatur.
          </p>
        </div>
        {/* card section  */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((items) => (
              <div 
              data-aos-delay={items.aosDelay} 
              data-aos="fade-up"
              key={items.id} 
              className="space-y-3">
                <img
                  src={items.img}
                  alt=""
                  className="w-[150px] h-[220px] object-cover rounded-md"
                />
                <div>
                  <h3 className="text-xl font-bold">{items.title}</h3>
                  <p className="text-sm text-gray-600">{items.color}</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400"/>
                  <span className="text-sm">{items.rating}</span>
                </div>
              </div>
            ))}
          </div>
          {/* veiw all Button  */}
          <div className="flex justify-center">
            <button className="bg-primary text-white px-4 py-1 rounded-md font-bold cursor-pointer text-center mt-10">veiw all Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
