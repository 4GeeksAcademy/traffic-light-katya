import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
  const [color, setColor] = useState("");

  function clickHandler(clickedColor) {
    setColor(clickedColor);
  }

  return (
    <div className="d-flex justify-content-center m-3">
      {" "}
      <div className="col-1 d-flex flex-column mb-3 justify-content-center bg-black rounded">
        <button
          onClick={() => clickHandler("red")}
          type="button"
          className={`btn btn-danger m-3 rounded-circle ${
            color == "red" ? "glow-red" : ""
          }`}
          style={{ height: "100px" }}
        ></button>
        <button
          onClick={() => clickHandler("yellow")}
          type="button"
          className={`btn btn-warning m-3 rounded-circle ${
            color == "yellow" ? "glow-yellow" : ""
          }`}
          style={{ height: "100px" }}
        ></button>
        <button
          onClick={() => clickHandler("green")}
          type="button"
          className={`btn btn-success m-3 rounded-circle ${
            color == "green" ? "glow-green" : ""
          }`}
          style={{ height: "100px" }}
        ></button>
      </div>
    </div>
  );
};

export default TrafficLight;
