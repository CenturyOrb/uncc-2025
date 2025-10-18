import { useEffect, useRef, useState } from "react";
import ReactImage from '../../assets/react.svg'
import ProfileImage from '../../assets/Bob-Ross.jpg'
import styles from './content.module.css';

function Content() {

    const [numberOfImages, setNumberOfImages] = useState(Array(10).fill(null));


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

                return <img key={index} className={`${styles.fade_in_3d} ${styles.image_container}`} src={ProfileImage} style={style} alt="react logo" />;
            })}
        </div>
    );
}
export default Content;