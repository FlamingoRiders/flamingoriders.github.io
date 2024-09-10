import * as React from "react";

interface StepProps {
  startPointName?: string;
  endPointName?: string;
}

const Step: React.FC<StepProps> = ({ startPointName, endPointName }) => {
  const differentPoints = startPointName !== endPointName;
  return (
    <div
      style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: "Montserrat" }}
    >
      {differentPoints && startPointName && <div>🚩 {startPointName}</div>}
      {differentPoints && endPointName && <div>🏁 {endPointName}</div>}
      {!differentPoints && endPointName && <div> 📍 {endPointName}</div>}
    </div>
  );
};

export default Step;
