import React, { useState } from "react";
import styles from "../styles/Volunteer.module.css";

const Volunteer = () => {
  const [exploreMore, setExploreMore] = useState(false);
  return (
    <div id="volunteer" className={styles.container}>
      <div className={styles.left}>
        <img src="/img/6.jpeg" className={styles.img} />
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>BECOME A VOLUNTEER</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            quasi at possimus quae? Nostrum totam sit tenetur ipsam ea illo.
            Reprehenderit reiciendis nesciunt ex dolorum consectetur officia
            autem iusto. sit tenetur ipsam ea illo. Reprehenderit reiciendis
            nesciunt ex
          </p>
          {exploreMore && (
            <p className={styles.desc}>
              You are seeing this text because you clicked on explore more
            </p>
          )}
          {exploreMore ? (
            <button
              className={styles.button}
              onClick={() => setExploreMore(!exploreMore)}
            >
              Explore More...
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => setExploreMore(!exploreMore)}
            >
              Explore More...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
