import React, { useState, useEffect } from "react";
import styles from "./chatbox.module.css";
import { MdLightbulbOutline } from "react-icons/md";
import { motion } from "motion/react"

function ChatBox() {
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    console.log(`prompt: ${prompt}`);
  }, [prompt]);

  return (
    <div className={styles.prompt_container}>
      <h1>Chat With Us</h1>
      <textarea
        style={{ zIndex: "1000" }}
        name="text-box"
        className={styles.prompt_input}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Stay growing, sail a new ocean."
      />

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className={styles.learn_button}
      >
        <MdLightbulbOutline />
        Ask Learnly
      </motion.button>
    </div>
  );
}

export default ChatBox;
