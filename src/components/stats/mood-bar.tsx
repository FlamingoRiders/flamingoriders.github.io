import React, { useEffect, useRef, useState } from "react";

interface MoodBarProps {
  mood: number;
}
const MoodBar: React.FC<MoodBarProps> = ({ mood }) => {
  return (
    <div className="mb-5">
      <h6>L'humeur</h6>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>&nbsp;</span>
        <span>😤</span>
        <span>😩</span>
        <span>🤔</span>
        <span>😃</span>
        <span>😍</span>
      </div>
      <progress
        id="mood-bar"
        className="progress is-primary is-small my-2"
        max="5"
        value={mood}
      >
        {`${mood}/5`}
      </progress>
    </div>
  );
};

export default MoodBar;
