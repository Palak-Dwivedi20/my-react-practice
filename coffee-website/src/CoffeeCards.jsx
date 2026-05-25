import "./CoffeeCards.css";

import creamyImg from "./assets/creamy-latte.jpg";
import expressoImg from "./assets/expresso-beans.jpg";
import smokeImg from "./assets/smoke-swirl.jpg";
import coldImg from  "./assets/cold-coffee.jpg";


export default function CoffeeCards() {
    return (
        <div className="cards-section">
            <h1>Our Popular Coffee</h1>

            <div className="cards-container">

                <div className="card">
                    <div className="card-image">
                        <img src={creamyImg} alt="creamy-latte-coffee"/>
                    </div>

                    <div className="card-info">
                        <h2>Creamy Latte</h2>
                        <p>Freshly brewed latte topped with creamy milk foam art.</p>
                         <button>Order Now</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src={expressoImg} alt="expresso-beans"/>
                    </div>

                    <div className="card-info">
                        <h2>Espresso Beans</h2>
                        <p>Premium roasted coffee beans with an intense aroma and taste.</p>
                        <button>Order Now</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src={coldImg} alt="cold-coffe-img"/>
                    </div>

                    <div className="card-info">
                        <h2>Cold Brew Coffee</h2>
                        <p>Smooth and refreshing cold coffee with a rich bold flavor.</p>
                        <button>Order Now</button>
                    </div>
                </div>


                 <div className="card">
                    <div className="card-image">
                        <img src={smokeImg} alt="smoke-swirl-coffee"/>
                    </div>

                    <div className="card-info">
                        <h2>Iced Coffee</h2>
                        <p>Chilled coffee blended perfectly for a refreshing coffee experience.</p>
                        <button>Order Now</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}