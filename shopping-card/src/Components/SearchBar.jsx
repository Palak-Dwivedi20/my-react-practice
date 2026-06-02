import "./SearchBar.css"

export default function SearchBar({searchItem, setSearchItem, cartItems}) {
    return (
        <div>

            <div className="cart-info">
                 <h2>Cart Items: {cartItems.length}</h2>
            </div>
           
           <div className="search-box">
            <input type="text" 
            placeholder="Search Items"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            />
            </div>

        </div>
    );
}