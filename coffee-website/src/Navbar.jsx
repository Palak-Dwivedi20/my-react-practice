import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="container">
            <div className="navbar">

                <h1>Coffee House</h1>

                <div className="ul-list">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>

                <div className="btns">
                    <button>Sign In</button>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    )
}