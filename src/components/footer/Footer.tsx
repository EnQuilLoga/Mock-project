import * as React from "react";
import payment from "../../assets/payment-image.png";
import logo from "../../assets/junno-logo.jpg";
import appStore from "../../assets/app_store.png";
import googlePlay from "../../assets/google_play.png";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <footer className="bg-gray-300">
      <div className="footer-top">
        <div className="container mx-auto">
          <div className="">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <p>
                We are a team of designers and developers that create high quality Magento,
                Prestashop, Opencart.
              </p>
            </div>
            <div>
              <div>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <p>NEED HELP?</p>
                <a href="tel:(+123)456789">(+123)456789</a>
              </div>
            </div>
            <div className="social">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram-square"></i>
            </div>
          </div>
          <div className="">
            <ul>
              INFORMATION
              <li>Delivery</li>
              <li>About Us</li>
              <li>Secure Payment</li>
              <li>Contact Us</li>
              <li>Sitemap</li>
              <li>Stores</li>
            </ul>
          </div>
          <div className="">
            <ul>
              CUSTOM LINKS
              <li>Legal Notice</li>
              <li>Price Drop</li>
              <li>New Products</li>
              <li>Best Sales</li>
              <li>Login</li>
              <li>My Account</li>
            </ul>
          </div>
          <div className="">
            <ul>
              NEWSLETTER
              <p>
                You may unsubscribe at any moment. For that purpose, please find our contact info in
                the legal notice.
              </p>
              <div>
                <input type="text" />
                <button>Sign Up</button>
              </div>
              <div>
                <div>
                  <img src={appStore} alt="App Store" />
                </div>
                <div>
                  <img src={googlePlay} alt="Google Play" />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container mx-auto">
          <div className="">
            <p>Copyright &copy; Rau Câu Team 😎. All Rights Reserved</p>
          </div>
          <div className="cursor-pointer">
            <img src={payment} alt="payments" />
          </div>
        </div>
      </div>
    </footer>
  );
}
