
import * as React from "react";
import styles from '../product-demo/productDemo.module.css';

export interface listProduct {}

export default function ProductDemo(props: listProduct){
    return(
        <div className={styles.mainProduct}>
            <div className={styles.content}>
                <h2>Our Product</h2>
                <p>Add our products to weekly line up</p>
            </div>
            <div className={styles.kindProduct}>
                <button className={styles.button}>Women Shoes</button>
                <button className={styles.button}>Men Shoes</button>
                <button className={styles.button}>Causual Shoes</button>
            </div>
            <div className={styles.listProduct}>
                <div className={styles.product}>
                <img src="" alt="" />
                <p className="productDetail">Nike</p>
                <p className="rate">5star</p>
                <p className="price">100$</p>
                <p className="addToCart">i</p>
                </div>
            </div>
        </div>
    )
}