import footerlogo from "../../assets/footer-logo.webp";
export default function Footer(){
    return (
        <footer>
           <div className="container mx-auto">
                <div className="footer-content d-flex justify-between align-stretch">
                    <div>
                       <img src={footerlogo} alt="footer logo" />
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservations">Reservations</a></li>
                            <li><a href="/order-online">Order Online</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Social Links</h4>
                        <ul>
                            <li><a href="https://www.facebook.com/littlelemon.human/" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com/addalittlelemon?lang=en" target="_blank" rel="noreferrer">Twitter</a></li>
                            <li><a href="https://www.instagram.com/littlelemonfood/" target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href="https://www.youtube.com/watch?v=6JSc0Ng1pdE" target="_blank" rel="noreferrer">Youtube</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact Us</h4>
                        <p>Address: 2395 Maldove Way, Chicago, Illinois</p>
                        <p>Email: info@littlelemon.com</p>
                        <p>Phone: +1 209-299-7584</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2023 Little Lemon</p>
            </div>
        </footer>
    )
}