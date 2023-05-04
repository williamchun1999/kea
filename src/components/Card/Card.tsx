import { useState, useEffect, CSSProperties } from "react";

import styles from "./Card.module.css";

export const Card = (props) => {
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("");
        const data = await res.json();
        //probably need to do calculations with the data fetched from db, then setstate to that %
        setProgress(data);
      } catch (err) {
        console.log(err);
      }
    }

    getData();

    return () => {
      // setProgress(0)
    };
  }, [progress]);

  return (
    <div>
      <div className={`card w-96 bg-primary text-primary-content w-screen ${styles.card}`}>
        <div className={styles.body}>
          <img src={props.image} className={styles.mascot}></img>
          <div>
            <div
              className={`radial-progress text-base-500 ${styles.progress}`}
              style={{ "--value": progress } as CSSProperties}
            >
              {progress}%
            </div>
            <h2 className="card-title">Today's Goal</h2>
            <p className="text-base-500"> 3 of 5 completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
