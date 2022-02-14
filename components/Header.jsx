import React from 'react';
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
  <div className={styles.container} id="header">
      <div className={styles.left}>
          <span className={styles.title}>TRAVEL, DISCOVER AND EVOLVE</span>
          <h1 className={styles.titleB}>DISCOVER INTERNATIONAL <br/> OPPORTUNITIES FOR YOU</h1>
          <button className={styles.button}>Explore More...</button>
      </div>
      <div className={styles.right}>
          <img src='/img/10.jpeg' className={styles.img} />
      </div>
  </div>
  );
};

export default Header;
