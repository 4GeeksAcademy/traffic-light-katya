import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("");
    const colors = ["red", "yellow", "green"];
    const [isRunning, setIsRunning] = useState(false);

  function highlightColor(clickedColor) {
    setColor(clickedColor);
  }

  function startLights() {
    let currentIndex = colors.indexOf(color);
    currentIndex = (currentIndex + 1) % colors.length;
    setColor(colors[currentIndex]);
  }

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        startLights();
      }, 2500);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, color]);

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
            onClick={() => highlightColor(colors[0])}
            type="button"
            className={`btn btn-danger m-3 rounded-circle ${
              color == colors[0] ? "glow-red" : ""
            }`}
            style={{ height: "100px" }}
          ></button>
          <button
            onClick={() => highlightColor(colors[1])}
            type="button"
            className={`btn btn-warning m-3 rounded-circle ${
              color == colors[1] ? "glow-yellow" : ""
            }`}
            style={{ height: "100px" }}
          ></button>
          <button
            onClick={() => highlightColor(colors[2])}
            type="button"
            className={`btn btn-success m-3 rounded-circle ${
              color == colors[2] ? "glow-green" : ""
            }`}
            style={{ height: "100px" }}
          ></button>
        </div>
      </div>
      <div className="row d-flex justify-content-center my-3" /* -BUTTONS- */>
        <div className="col-4 d-flex justify-content-center">
          {isRunning ? (
            <button
              onClick={() => setIsRunning(!isRunning)}
              type="button"
              className="btn btn-danger m-2 w-25"
            >
              Stop the lights
            </button>
          ) : (
            <button
              onClick={() => {
                setColor("red")
                setIsRunning(!isRunning)
            
              }}
              type="button"
              className="btn btn-success m-2 w-25"
            >
              Start the lights
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrafficLight;
