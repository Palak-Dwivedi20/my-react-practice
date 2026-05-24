import "./Hero.css"

import coffeeImg from "./assets/coffee.jpg";

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="hero">

                <div className="hero-text">
                    <h1>Start Your Day With Fresh Coffee</h1>
                    <p>
                        Enjoy the rich aroma and smooth taste of freshly brewed coffee made with love.
                    </p>

                     <div className="hero-buttons">
                    <button>Order</button>
                    <button>Explore</button>
                    </div>
                </div>

                <div className="hero-img">
                    <img src={coffeeImg} alt="coffee" />
                </div>
            </div>
        </div>
    );
}