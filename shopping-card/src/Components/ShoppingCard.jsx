import { useState } from "react";


import leatherImg from "../assets/leather-bag.jpg"
import topImg from "../assets/top.jpg"
import denimImg from "../assets/denim.jpg";

import "./ShoppingCard.css";
import ProductCard from "./ProductCard";


export default function ShoppingCard() {

    let products = [
    {
        id: 1,
        title: "Classic Leather Bag",
        description: "Stylish and durable leather bag perfect for everyday use.",
        price: 120,
        image: leatherImg
    },

    {
        id: 2,
        title: "Casual White Top",
        description: "Comfortable and stylish white top for casual wear.",
        price: 90,
        image: topImg
    },

    {
        id: 3,
        title: "Denim Jeans",
        description: "Stylish high-waist denim jeans designed for casual outings.",
        price: 150,
        image: denimImg
    }
];

let[qty, setQty] = useState(1);

    let increaseQty = () => {
        setQty((prev) => prev + 1);
    }

    let decreaseQty = () => {
        if(qty > 1) {
            setQty((prev) => prev - 1);
        }
    }

    return (
        <div className="card-container">

            {products.map((p) => (
               <ProductCard 
               key={p.id}
               image={p.image}
               title={p.title}
               description={p.description}
               price={p.price}
               qty={qty}
               increaseQty={increaseQty}
               decreaseQty={decreaseQty}
               />
            ))}    
  </div>
  
);

}