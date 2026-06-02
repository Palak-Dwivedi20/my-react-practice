import { FaStar } from "react-icons/fa";

import "./ProductCard.css";

export default function ProductCard({image, title, description, price, addToCart}) {
    return (
         <div className="card">

                    <div className="card-image">
                    <img src={image} alt="Handbag" />
                </div>

                <div className="info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p className="price">${price}</p>
                </div>

                <div className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                </div>

                <div className="add-to-cart">
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
                </div>
    );
}