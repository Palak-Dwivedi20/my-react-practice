import "./Hero4.css"
import hero4Img from "../../assets/hero4.jpg";

export default function Hero4() {
    return (
        <div className="container">
            <div className="travel">

                <div className="header">
                    <nav className="navbar">
                        
                        <div className="logo">
                            <h1>WonderNest</h1>
                        </div>

                        <div className="nav-list">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Destination</a></li>
                                <li><a href="#">Tour</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="btns">
                            <button>Book Trip</button>
                        </div>
                    </nav>
                </div>

                <div className="hero-section">
                    <div className="hero">

                        <div className="hero-content">
                            <h1>Explore The World, One Journey At A Time</h1>
                            <p>
                                Discover breathtaking destinations,
                                unforgettable experiences, and exciting adventures crafted just for you.
                            </p>

                            <div className="hero-buttons">
                                <button className="btn1">Explore Now </button>
                                <button className="btn2">Watch Video</button>
                            </div>
                        </div>

                        <div className="hero-image">
                            <img src={hero4Img} alt="Travel Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}