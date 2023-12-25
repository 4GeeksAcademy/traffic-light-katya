import React, { useState } from "react";

const TrafficLightWithPurple = () => {
  const [color, setColor] = useState("");

  function highlightColor(clickedColor) {
    setColor(clickedColor);
  }

  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div
          className="bg-black"
          style={{ height: "100px", width: "30px" }}
        ></div>{" "}
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-1 d-flex flex-column justify-content-center bg-black rounded">
          <button
            onClick={() => highlightColor("red")}
            type="button"
            className={`btn btn-danger m-3 rounded-circle ${
              color == "red" ? "glow-red" : ""
            }`}
            style={{ height: "100px" }}
          ></button>
          <button
            onClick={() => highlightColor("yellow")}
            type="button"
            className={`btn btn-warning m-3 rounded-circle ${
              color == "yellow" ? "glow-yellow" : ""
            }`}
            style={{ height: "100px" }}
          ></button>
          <button
            onClick={() => highlightColor("green")}
            type="button"
            className={`btn btn-success m-3 rounded-circle ${
              color == "green" ? "glow-green" : ""
            }`}
            style={{ height: "100px" }}
          ></button>
          <button
            onClick={() => highlightColor("purple")}
            type="button"
            className={`btn btn-success m-3 rounded-circle ${
              color == "purple" ? "glow-purple" : ""
            }`}
            style={{ height: "100px", backgroundColor: "#952a95" }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default TrafficLightWithPurple;
