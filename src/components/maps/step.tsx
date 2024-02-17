import * as React from "react";

interface StepProps {
  startPointName?: string;
  endPointName?: string;
}

const Step: React.FC<StepProps> = ({ startPointName, endPointName }) => {
  return (
    <div
      style={{ fontSize: "1rem", fontWeight: "bold", fontFamily: "Montserrat" }}
    >
      {startPointName && <div>🚩 {startPointName}</div>}
      {endPointName && <div>🏁 {endPointName}</div>}
    </div>
  );
};

export default Step;
