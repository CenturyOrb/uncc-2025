import React, { useEffect, useMemo, useRef, useState } from "react";
// Import your icon components
import { LuPi } from "react-icons/lu";
import { MdFunctions } from "react-icons/md";
import { SiWolframmathematica } from "react-icons/si";
import { FaJava, FaPython, FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaRaspberryPi } from "react-icons/lia";
import { GiChemicalDrop } from "react-icons/gi";
import styles from "./images.module.css";

export default function ImageCloud() {
  const NUMBER_OF_IMAGES = 15; // 🔹 always 10

  const [imageNames] = useState(
    [
      "LuPi", 
      "MdFunctions", 
      "SiWolframmathematica", 
      "FaJava", 
      "IoLogoJavascript",
      "FaPython",
      "LiaRaspberryPi",
      "FaLinux",
      "GiChemicalDrop"
    ]
  );
  const [imageArray, setImageArray] = useState(Array(NUMBER_OF_IMAGES).fill(null));
  const [positions, setPositions] = useState(Array(NUMBER_OF_IMAGES).fill(null));
  const containerRef = useRef(null);

  // Map of component names to actual imports
  const componentMap = useMemo(
    () => ({
      LuPi,
      MdFunctions,
      SiWolframmathematica,
      FaJava,
      IoLogoJavascript,
      FaPython,
      LiaRaspberryPi,
      FaLinux,
      GiChemicalDrop
    }),
    []
  );

  // 🔹 Step 1: fill imageArray to length 10, cycling through imageNames if needed
  useEffect(() => {
    const filled = Array.from({ length: NUMBER_OF_IMAGES }, (_, i) => {
      const name = imageNames[i % imageNames.length]; // loop through
      return componentMap[name] || null;
    });
    setImageArray(filled);
  }, [imageNames, componentMap]);

  // 🔹 Step 2: generate random positions once
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const { width, height } = el.getBoundingClientRect();
    const margin = 50; // keep away from edges

    const randomPositions = Array.from({ length: NUMBER_OF_IMAGES }, () => ({
      left: Math.random() * (width - margin * 2) + margin,
      top: Math.random() * (height - margin * 2) + margin,
    }));

    setPositions(randomPositions);
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.images_container}
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      {imageArray.map((Icon, index) => {
        if (!Icon) return null;

        const style = {
          position: "absolute",
          left: positions[index]?.left || 0,
          top: positions[index]?.top || 0,
        };

        return (
          <Icon
            key={index}
            className={`${styles.fade_in_3d} ${styles.image_container}`}
            style={style}
            size={40}
          />
        );
      })}
    </div>
  );
}