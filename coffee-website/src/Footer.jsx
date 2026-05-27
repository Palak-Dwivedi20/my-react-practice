import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer-section">

            <div className="footer">

                <div className="footer-logo">
                    <h2>☕ Brew Haven</h2>

                    <p>
                        Fresh coffee made with love and premium ingredients.
                    </p>
                </div>


                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>


                <div className="footer-socials">
                    <h3>Follow Us</h3>

                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>

            </div>

        </div>
    );
}