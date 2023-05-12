import * as React from "react";
import styles from '../product-demo/productDemo.module.css';
import anhgiay from "../../assets/custom-nike-air-force-1-low-by-you-removebg-preview.png"
import { Button } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface listProduct {}

export default function ProductDemo(props: listProduct){
    return(
        <div className={styles.mainProduct}>
            <div className={styles.content}>
                <h2>Our Product</h2>
                <p>Add our products to weekly line up</p>
            </div>
            <div className={styles.kindProduct}>
                <Button variant="outlined">Women Shoes</Button>
                <Button variant="outlined">Men Shoes</Button>
                <Button variant="outlined">Casual Shoes</Button>
                {/* <button className={styles.button}>Women Shoes</button>
                <button className={styles.button}>Men Shoes</button>
                <button className={styles.button}>Causual Shoes</button> */}
            </div>
            <div className={styles.listProduct}>
                <div className={styles.product}>
                    <img className="" src={anhgiay} alt="giay1" />
                    <p className="productDetail">Water And Wind Resistant Insulated Jacket</p>
                    <p className="rate">
                    {/* <FontAwesomeIcon icon="far fa-star" /> */}
                        <i className="fa-regular fa-star text-yellow"></i>
                        <i className="fa-regular fa-star text-yellow"></i>
                        <i className="fa-regular fa-star text-yellow"></i>
                        <i className="fa-regular fa-star"></i>
                    </p>
                    <p className="price">100$</p>
                    <p className="addToCart">i</p>
                </div>

                <div className={styles.product}>
                    <img src={anhgiay} alt="" />
                    <p className="productDetail">Nike</p>
                    <p className="rate">5star</p>
                    <p className="price">100$</p>
                    <p className="addToCart">i</p>
                </div>

                <div className={styles.product}>
                <img src={anhgiay} alt="" />
                <p className="productDetail">Nike</p>
                <p className="rate">5star</p>
                <p className="price">100$</p>
                <p className="addToCart">i</p>
                </div>
                
                <div className={styles.product}>
                <img src={anhgiay} alt="" />
                <p className="productDetail">Nike</p>
                <p className="rate">5star</p>
                <p className="price">100$</p>
                <p className="addToCart">i</p>
                </div>

                <div className={styles.product}>
                <img src={anhgiay} alt="" />
                <p className="productDetail">Nike</p>
                <p className="rate">5star</p>
                <p className="price">100$</p>
                <p className="addToCart">i</p>
                </div>

                <div className={styles.product}>
                <img src={anhgiay} alt="" />
                <p className="productDetail">Nike</p>
                <p className="rate">5star</p>
                <p className="price">100$</p>
                <p className="addToCart">i</p>
                </div>

                <div className={styles.product}>
                <img src={anhgiay} alt="" />
                <p className="productDetail">Nike</p>
                <p className="rate">5star</p>
                <p className="price">100$</p>
                <p className="addToCart">i</p>
                </div>

                <div className={styles.product}>
                <img src={anhgiay} alt="" />
                <p className="productDetail">Nike</p>
                <p className="rate">5star</p>
                <p className="price">100$</p>
                <p className="addToCart">i</p>
                </div>

                <div className={styles.product}>
                <img src={anhgiay} alt="" />
                <p className="productDetail">Nike</p>
                <p className="rate">5star</p>
                <p className="price">100$</p>
                <p className="addToCart">i</p>
                </div>

                <div className={styles.product}>
                <img src={anhgiay} alt="" />
                <p className="productDetail">Nike</p>
                <p className="rate">5star</p>
                <p className="price">100$</p>
                <p className="addToCart">i</p>
                </div>

            </div>
        </div>
    )
}