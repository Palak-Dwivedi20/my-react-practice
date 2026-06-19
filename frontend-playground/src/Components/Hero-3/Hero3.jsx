import "./Hero.css";
import hero3Img from "../../assets/hero3.jpg";

export default function Hero3() {
    return (
        <div className="container">
            <div className="fashion-hub">

                <header className="header">
                    <nav className="navbar">

                        <h1 className="logo">FashionHub</h1>

                        <div className="nav-list">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Collection</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="btns">
                            <button className="btn1">Login</button>
                            <button className="btn2">Shop Now</button>
                        </div>

                    </nav>
                </header>

                <section className="hero-section">

                    <div className="hero">

                        <div className="hero-info">

                            <h1>Discover Your Perfect Style</h1>

                            <p>
                                Explore the latest fashion trends and
                                upgrade your wardrobe with premium collections.
                            </p>

                            <div className="hero-buttons">
                                <button className="btn1">Shop Now</button>
                                <button className="btn2">View Collection</button>
                            </div>

                        </div>

                        <div className="hero-image">
                            <img src={hero3Img} alt="Fashion Model" />
                        </div>

                    </div>

                </section>

            </div>
        </div>
    );
}