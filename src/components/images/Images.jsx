import { useState } from "react";
import { LuPi } from "react-icons/lu";
import styles from "./images.module.css";

function Images() {
  const [numberOfImages] = useState(Array(10).fill(null));

  return (
    <div className={styles.images_container}>
      {numberOfImages.map((_, index) => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;

        const style = {
          position: "absolute",
          left: `${randomX}px`,
          top: `${randomY}px`,
        };

        return (
          <LuPi
            key={index}
            className={`${styles.fade_in_3d} ${styles.image_container}`}
            style={style}
          />
        );
      })}
    </div>
  );
}

export default Images;