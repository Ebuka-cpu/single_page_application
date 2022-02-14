import React from "react";
import styles from "../styles/Testimony.module.css";

const Testimony = () => {
  return (
    <div className={styles.container} style={{scrollBehavior: 'smooth'}} id="testimony">
      <div className={styles.wrapper}>
        <div className={styles.card}>
            <img src="/img/writing.png" className={styles.cardImage} />
          <h5 className={styles.cardTitle}>SOCIAL INCLUSION</h5>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className={styles.card}>
        <img src="/img/writing.png" className={styles.cardImage} />
          <h5 className={styles.cardTitle}>YOUTH EMPOWERMENT</h5>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className={styles.card}>
        <img src="/img/writing.png" className={styles.cardImage} />
          <h5 className={styles.cardTitle}>EXPERIENTIAL LEARNING</h5>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
