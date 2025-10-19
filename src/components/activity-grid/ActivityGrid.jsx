import { useState, useEffect } from "react";
import styles from "./activitygrid.module.css";

const ActivityGrid = () => {
  const [activityData, setActivityData] = useState(
    Array.from({ length: 44 }, () =>
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
    )
  );

  useEffect(() => {
    console.log(activityData);
  }, [activityData]); // <- dependency array

  const levelColors = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];

  return (
    <div className={styles.activity_grid}>
      <div
        style={{
          display: "flex",
          gap: "4px",
          flexWrap: "nowrap",
          overflowX: "auto",
          height: "100%",
        }}
      >
        {activityData.map((week, weekIdx) => (
          <div
            key={weekIdx}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              flexShrink: 0,
            }}
          >
            {week.map((level, dayIdx) => (
              <div
                key={dayIdx}
                style={{
                  aspectRatio: "1 / 1",
                  flex: "1 1 100%",
                  backgroundColor: levelColors[level],
                  borderRadius: "2px",
                  minWidth: "12px",
                  minHeight: "12px",
                  maxWidth: "20px",
                  maxHeight: "20px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onClick={() => {
                  const newData = [...activityData];
                  newData[weekIdx][dayIdx] = (newData[weekIdx][dayIdx] + 1) % 5;
                  setActivityData(newData);
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityGrid;
