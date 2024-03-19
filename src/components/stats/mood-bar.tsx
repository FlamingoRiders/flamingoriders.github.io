import React, { useEffect, useRef, useState } from "react";

interface MoodBarProps {
  mood: number;
}
const MoodBar: React.FC<MoodBarProps> = ({ mood }) => {
  return (
    <>
      <h6>L'humeur</h6>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>&nbsp;</span>
        <span>😤</span>
        <span>😩</span>
        <span>🤔</span>
        <span>😃</span>
        <span>😍</span>
      </div>
      <progress id="mood-bar" max="5" value={mood}>
        {`${mood}/5`}
      </progress>
    </>
  );
};

export default MoodBar;
