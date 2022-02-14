import React from 'react';
import styles from "../styles/ScocialMedia.module.css"
import {Facebook, Instagram, YouTube} from "@material-ui/icons"

const SocialMedia = () => {
  return (
  <div className={styles.container}>
      <div className={styles.left}>
          <div>
              <span className={styles.text}>Follow us:</span><br/>
            <Facebook className={styles.icon}/><YouTube className={styles.icon}/><Instagram className={styles.icon}/>
          </div>
      </div>
      <div className={styles.right}>
          <div className={styles.project}>
          <span className={styles.amount}>200+</span>
          <span className={styles.desc}>Projects</span>
          </div>
          <div className={styles.project}>
          <span className={styles.amount}>20+</span>
          <span className={styles.desc}>Members</span>
          </div>
          <div className={styles.project}>
          <span className={styles.amount}>100+</span>
          <span className={styles.desc}>Opportunities</span>
          </div>
      </div>
  </div>
  );
};

export default SocialMedia;
