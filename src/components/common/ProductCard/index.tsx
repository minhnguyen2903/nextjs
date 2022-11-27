import Image from "next/image";
import React from "react";
import styles from './productCard.module.scss'

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Image
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto/06b0a068db6646669a73ae89001812b9_9366/Giay_Stan_Smith_trang_GX4438_01_standard.jpg"
          width={250}
          height={250}
          alt="shoe"
        />
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_title}>
          <h4>Lorem, ipsum.</h4>
        </div>
        <div className={styles.card_description}>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
        </div>
        <div className={styles.card_price}>
          <div className={styles.card_price_price}>
            <h3>1.84 USD</h3>
          </div>
          <div className={styles.card_price_action}>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
