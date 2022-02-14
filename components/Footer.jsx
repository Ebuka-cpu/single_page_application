import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum . Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Cum .
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div>
        <input type="text" placeholder="Email" className={styles.input} />
        <input type="submit" value="subscribe" className={styles.inputSubmit} />
        </div>
          <div className={styles.contact}>
          <span>No. 9 Zaria Bye Pass, Jos, Nigeria</span>
          <span>0703 617 6131</span>
          </div>
      </div>
    </div>
  );
};

export default Footer;
