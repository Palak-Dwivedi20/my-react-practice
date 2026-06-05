import "./Hero2.css";

import hero2Img from "../../assets/hero2.jpg";

export default function Hero2() {
    return (
        <div className="website-container">
            <div className="website">
                <header className="header">
                <nav className="navbar">
                    <h1 className="logo">SkillBoost</h1>

                    <div className="nav-links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                   

                    <div className="btns">
                        <button className="btn1">Login</button>
                        <button className="btn2">Signup</button>
                    </div>
                </nav>
                 </header>
           
            <section className="hero-section">
                <div className="hero">

                    <div className="hero-content">
                        <h1>
                            Learn new Skills and build your future
                        </h1>

                        <p>
                            Master modern technologies with practical projects,
                            expert guidance, and hands-on learning.
                        </p>

                        <div className="hero-buttons">

                            <button className="btn1">Get Started</button>
                            <button className="btn2">Learn More</button>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src={hero2Img} alt="Learning" />
                    </div>
                </div>
            </section>
            </div>

        </div>
    );
}