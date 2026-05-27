import "./Newsletter.css"

export default function Newsletter() {
    return (
        <div className="newsletter-section">

            <div className="newsletter">

                <h1>Subscribe For Coffee Updates</h1>
                <p> Get fresh coffee offers and special updates directly to your inbox.</p>

                <div className="newsletter-input">

                    <input type="email"placeholder="Enter your email" />
                    <button>Subscribe</button>

                </div>
            </div>
        </div>
    );
}