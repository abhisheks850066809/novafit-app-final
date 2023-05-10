import React from "react"
import './storetest.css'
import Bomg from "../assets/images/iconnova.png"

function shop() {
    return (

        <div>
            <header class="header" data-header>
                <div class="container">

                    <a href="#" class="logo">
                        <img src={Bomg} alt="BigCo Inc. logo" id="asasa" />

                        <span class="span">NovaFit</span>
                    </a>
                    <div className="search">
                        <a href><input type="text" placeholder="search products" id="input" />
                            <ion-icon className="s" name="search" />
                        </a>
                    </div>
                    <nav class="navbar" data-navbar>

                        <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
                            <ion-icon name="close-sharp" aria-hidden="true"></ion-icon>
                        </button>

                        <ul class="navbar-list">

                            <li>
                                <a href="#Men" class="navbar-link active" data-nav-link>Men</a>
                            </li>

                            <li>
                                <a href="#women" class="navbar-link" data-nav-link>Women</a>
                            </li>

                            <li>
                                <a href="#Food products" class="navbar-link" data-nav-link>Food products</a>
                            </li>

                            <li>
                                <a href="#wishlist" class="navbar-link" data-nav-link>Wishlist</a>
                            </li>



                            <li>
                                <a href="/shop" class="navbar-link" data-nav-link>Cart</a>
                            </li>


                        </ul>

                    </nav>




                    <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </button>

                </div>
            </header>

            <section>
                <div className="section">
                    <div className="section1">
                        <div className="img-slider">
                            <img src="./assests/images/product1.png" alt className="img" />
                            <img src="https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt className="img" />
                            <img src="https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt className="img" />
                            <img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt className="img" />
                            <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt className="img" />
                        </div>
                    </div>
                    <div className="section2">
                        <div className="container">
                            <div className="items">
                                <div className="img img1"><img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt /></div>
                                <div className="name">SHOES</div>
                                <div className="price">$5</div>
                                <div className="info">product description</div>
                            </div>
                            <div className="items">
                                <div className="img img2"><img src="https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt /></div>
                                <div className="name">MEN's T-SHIRT</div>
                                <div className="price">$6.34</div>
                                <div className="info">product description</div>
                            </div>
                            <div className="items">
                                <div className="img img1"><img src="https://media.istockphoto.com/photos/vintage-plates-with-silver-teaspoons-picture-id184363070" alt /></div>
                                <div className="name">DINNER SET</div>
                                <div className="price">$10</div>
                                <div className="info">product description</div>
                            </div>

                            <div className="items">
                                <div className="img img1"><img src="https://images.pexels.com/photos/6606354/pexels-photo-6606354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt /></div>
                                <div className="name">BED</div>
                                <div className="price">$100</div>
                                <div className="info">product description.</div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer">

                <div class="section footer-top bg-dark has-bg-image" style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}>
                    <div class="container">

                        <div class="footer-brand">

                            <a href="#" class="logo">


                                <span class="span">NovaFit</span>
                            </a>



                            <div class="wrapper">



                                <ul class="footer-brand-list">

                                    <li>
                                        <p class="footer-brand-title">Monday - Friday</p>

                                        <p>7:00Am - 10:00Pm</p>
                                    </li>

                                    <li>
                                        <p class="footer-brand-title">Saturday - Sunday</p>

                                        <p>7:00Am - 2:00Pm</p>
                                    </li>

                                </ul>

                            </div>

                        </div>

                        <ul class="footer-list">

                            <li>
                                <p class="footer-list-title has-before">Our Links</p>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Home</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">About Us</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Classes</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Blog</a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">Contact Us</a>
                            </li>
                            <li>
                                <a href="/FAQ" class="footer-link">FAQ</a>
                            </li>

                        </ul>

                        <ul class="footer-list">

                            <li>
                                <p class="footer-list-title has-before">Contact Us</p>
                            </li>

                            <li class="footer-list-item">


                                <address class="address footer-link">
                                    1247/Plot No. 39, 15th Phase, Colony, Jayanagar, Bangalore.
                                </address>
                            </li>

                            <li class="footer-list-item">


                                <div>
                                    <a href="tel:18001213637" class="footer-link">1800-121-3637</a>

                                    <a href="tel:+915552348765" class="footer-link">+91 555 234-8765</a>
                                </div>
                            </li>

                            <li class="footer-list-item">


                                <div>
                                    <a href="mailto:info@fitlife.com" class="footer-link">info@NovaFit.com</a>

                                    <a href="mailto:services@fitlife.com" class="footer-link">services@NovaFit.com</a>
                                </div>
                            </li>

                        </ul>

                        <ul class="footer-list">

                            <li>
                                <p class="footer-list-title has-before">Our Newsletter</p>
                            </li>

                            <li>
                                <form action="" class="footer-form">
                                    <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required
                                        class="input-field" />

                                    <button type="submit" class="btn btn-primary" aria-label="Submit">
                                        <ion-icon name="chevron-forward-sharp" aria-hidden="true"></ion-icon>
                                    </button>
                                </form>
                            </li>



                        </ul>

                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">

                        <p class="copyright">
                            &copy; 2023 NovaFit. All Rights Reserved By <a href="#" class="copyright-link">Team Mavericks.</a>
                        </p>

                        <ul class="footer-bottom-list">

                            <li>
                                <a href="#" class="footer-bottom-link has-before">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#" class="footer-bottom-link has-before">Terms & Condition</a>
                            </li>

                        </ul>

                    </div>
                </div>

            </footer>


        </div>
    );
}
export default shop;