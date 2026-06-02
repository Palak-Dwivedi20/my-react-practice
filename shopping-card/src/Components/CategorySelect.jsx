export default function CategorySelect({category, setCategory}) {
    return (
        <div>
            <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)} 
            >
                <option value="all">All</option>
                <option value="men's clothing">Men</option>
                <option value="women's clothing">Women</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">Electronics</option>
            </select>
        </div>
    );
}