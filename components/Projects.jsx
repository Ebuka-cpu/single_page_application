import React from 'react';
import styles from "../styles/Projects.module.css"

const Projects = () => {
  return (
  <div className={styles.container} id="projects">
      <h1 className={styles.mainTitle}>LATEST PROJECTS</h1>
      <div className={styles.wrapper}>
        <div className={styles.card}>
            <img src='/img/1.jpeg' className={styles.img} />
            <div className={styles.text}>
            <span className={styles.title}>DISCOVER YOUR CALLING</span>
            <span className={styles.subTitle}>This is The Right Time</span>
            <span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit natus amet fuga repudiandae esse accusamus quasi officia? Inventor</span><br/>
            <button className={styles.button}>Read More</button>
           </div>  
        </div>
        <div className={styles.card}>
            <img src='/img/2.jpeg' className={styles.img} />
            <div className={styles.text}>
            <span className={styles.title}>CREATIVE WRITTING 2ND EDITION</span>
            <span className={styles.subTitle}>Start Wring By Practicing</span>
            <span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit natus amet fuga repudiandae esse accusamus quasi officia? Inventor</span><br/>
            <button className={styles.button}>Read More</button>
           </div>  
        </div>
        <div className={styles.card}>
            <img src='/img/3.jpeg' className={styles.img} />
            <div className={styles.text}>
            <span className={styles.title}>ART LAB 2.0</span>
            <span className={styles.subTitle}>Consistency is The Key</span>
            <span className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit natus amet fuga repudiandae esse accusamus quasi officia? Inventor</span><br/>
            <button className={styles.button}>Read More</button>
           </div>  
        </div>
      </div>
  </div>
  );
};

export default Projects;
