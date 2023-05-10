import * as React from "react";
import styles from '../product/product.module.css';


export interface IProductProps {}

export default function Product(props: IProductProps) {
  return (
    <div className={styles.card}>
    <div className={styles.basicInfo}>
      <div className={styles.title}>
        <div className={styles.category}>Nike</div>
        <div className={styles.name}>Songoku Abc 2022</div>
        <div className={styles.info}>New products 2022</div>
      </div>
      <div className={styles.images}>
        <div className={styles.img}>
          <div className={styles.item}>
            <input type="radio" name="color" id="green" checked />
            <img
              src="../assets/images-removebg-preview.png"
            />
          </div>
          <div className={styles.item}>
            <input type="radio" name="color" id="black" />
            <img src="../assets/custom-nike-air-force-1-low-by-you-removebg-preview.png" />
          </div>
        </div>
      </div>
      <div className={styles.colors}>
        <label htmlFor={styles.green}>
          <div className={styles.name}>Green</div>
          <div className={styles.ellipse} ></div>
        </label>

        <label htmlFor={styles.black}>
          <div className={styles.name}>Black</div>
          <div className={styles.ellipse}></div>
        </label>
      </div>
      <div className={styles.addCard}>
        <i className="fa-solid fa-basket-shopping"></i>
      </div>
    </div>
    <div className={styles.mores}>
      <div className="stars">
        <i className="fa-regular fa-star text-yellow"></i>
        <i className="fa-regular fa-star text-yellow"></i>
        <i className="fa-regular fa-star text-yellow"></i>
        <i className="fa-regular fa-star text-yellow"></i>
        <i className="fa-regular fa-star"></i>
      </div>
      <div className={styles.price}>$23.09</div>
    </div>
  </div>
    
  );
}