import { React, useState } from "react";
import styles from "../styles/About.module.css";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className={styles.container} id="about">
      <div className={styles.left}>
        <img src="/img/7.jpeg" className={styles.img} />
      </div>
      <div className={styles.right}>
        <h1>ABOUT US</h1>
        <div className={styles.about}>
          <div className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iure
            vel, animi, obcaecati modi doloremque doloribus suscipit explicabo
            corrupti repudiandae nihil ducimus deserunt amet dignissimos.
            Quaerat, excepturi. Quam, possimus
          </div>
          <div className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iure
            vel, animi, obcaecati modi doloremque doloribus suscipit explicabo
            corrupti repudiandae nihil ducimus deserunt amet dignissimos.
            Quaerat, excepturi. Quam, possimus
          </div>
          {readMore && (
            <div className={styles.desc}>
              This paragraph poped up because you clicked on the read more
              button. click on read less to make it go away..
            </div>
          )}
          {readMore ? (
            <button className={styles.readlessButton} onClick={() => setReadMore(!readMore)}>Read Less</button>
          ) : (
            <button className={styles.readmoreButton} onClick={() => setReadMore(!readMore)}>Read More</button>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default About;
