import { useEffect, useState } from "react";
import axios from "axios";


import "./ShoppingCard.css";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategorySelect from "./CategorySelect";


export default function ShoppingCard() {


let [products, setProducts] = useState([]);
let [loading, setLoading] = useState(false);
let [error, setError] = useState("");
let [searchItem, setSearchItem] = useState("");
let [category, setCategory] = useState("all");
let [cartItems, setCartItems] = useState([]);

async function getProducts() {
    try {
        setLoading(true);
        setError("");
        let res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data)
        setProducts(res.data);
    } catch (err) {
        setError("Something Went wrong"); 
        console.log(err);
    } finally {
        setLoading(false);
    }
}

useEffect(() => {
    getProducts();
}, []);


    if(loading) {
        return <p>Loading...</p>
    }  

    if(error) {
        return <p>{error}</p>
    }

    let searchItems = products.filter((product) => (
        product.title.toLowerCase().includes(searchItem.toLowerCase())
    ))

    let filterProducts = searchItems.filter((product) => {

        if(category === "all") {
            return true;
        }

        return product.category === category;
    });

    let addToCart = (product) => {
          console.log("Clicked", product);
          
        setCartItems((prev) => [...prev, product]);
    }

    return (
        <div className="card-container">

            <SearchBar 
            searchItem={searchItem}
            setSearchItem={setSearchItem}
            cartItems={cartItems}
            />

            <CategorySelect 
            category={category}
            setCategory={setCategory}
            />

            {filterProducts.map((p) => (
               <ProductCard 
               key={p.id}
               image={p.image}
               title={p.title}
               description={p.description}
               price={p.price}
               addToCart={() => addToCart(p)}
               />
            ))}  


            </div>
);

}