import "./Hero1.css";

import heroImg from "../../assets/hero-fashion.jpg";

export default function Hero1() {
    return (
        <div className="hero-section">
            <div className="hero">

                <div className="hero-info">
                    <h1>Discover Your Style</h1>

                    <p>
                        Fashion That Speaks Confidence
                        
                        Explore the latest trends and timeless
                        essentials for every occasion.

                    </p>

                    <div className="hero-buttons">

                        <button className="btn1">Shop Now</button>
                        <button className="btn2">Explore</button>

                    </div>
                </div>

                <div className="hero-image">
                    <img src={heroImg} alt="Fashion" />
                </div>
            </div>
        </div>
    );
}