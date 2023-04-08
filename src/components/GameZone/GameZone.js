import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
// import { useLocation } from "react-router-dom";

import styles from "./GameZone.module.css";

const GameZone = () => {
  const [selectedItems, setSelectedItems] = useState(["one", "two"]);

  const removeFromList = (item) => {
    console.log("removeItem", item);
  };

  const addToList = (item) => {
    console.log(item);
    setSelectedItems((prevItems) => {
      return [...prevItems, item];
    });
    if (selectedItems.length === 5) {
      alert("Your Answer is wrong");
    }
  };

  const options = [1, 2, 4, 5, 6, 7, 8, 9, 0, 8, 7, 6, 5, 4, 3, 2, 1];
  return (
    <div className={styles.gameZoneWrapper}>
      <nav className="navbar">Choose Top 5</nav>
      <div>
        <div className={styles.title}>Choose Top 5 TopicNameHere:</div>
        <div className={`${styles.selectedItems} `}>
          {selectedItems.map((item) => {
            return (
              <div className={styles.selectedItemWrapper}>
                <div className={styles.selectedItem}>{item}</div>
                <AiFillCloseCircle
                  className={styles.icon}
                  onClick={() => {
                    removeFromList(item);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.title2}>Choose the Options here:</div>
        <div className={styles.options}>
          {options.map((option) => {
            return (
              <div
                className={`${styles.option} ${
                  selectedItems.length === 5 ? styles.disable : ""
                }`}
                onClick={() => {
                  addToList(option);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameZone;
