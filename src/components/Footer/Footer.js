import React from "react";
import "./Footer.scss";
const Footer = () => {
    return (
        <footer class="footer-distributed">
            <div class="footer-right">
                <a href="#">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                    <i class="fab fa-github"></i>
                </a>
            </div>

            <div class="footer-left">
                <p class="footer-links">
                    <a class="link-1" href="#">
                        Home
                    </a>

                    <a href="#">Blog</a>

                    <a href="#">Pricing</a>

                    <a href="#">About</a>

                    <a href="#">Faq</a>

                    <a href="#">Contact</a>
                </p>

                <p>Movie App &copy; 2021</p>
            </div>
        </footer>
    );
};

export default Footer;
