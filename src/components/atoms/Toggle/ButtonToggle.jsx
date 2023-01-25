import React from "react";
import "./ButtonToggle.css";

//Creating a new component called ButtonToggle.
const ButtonToggle = () => {
  return (
    <div>
      {/*labelling the Class name as Switch */}
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ButtonToggle;
