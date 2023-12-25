import React, { useState, useEffect } from "react";

//create your first component
const TrafficLight = () => {
  const [color, setColor] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const colors = ["red", "yellow", "green"];

  function clickHandler(clickedColor) {
    setColor(clickedColor);
  };


  function startLights() {
    let currentIndex = colors.indexOf(color);
    currentIndex = (currentIndex + 1) % colors.length;
    setColor(colors[currentIndex]);
  };

  
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        startLights();
      }, 3000); // Change the interval time as needed (e.g., 1000ms = 1 second)
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
        <div className="bg-black" style={{height: "100px", width: "30px"}}></div>{" "}
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-1 d-flex flex-column justify-content-center bg-black rounded">
          <button
            onClick={() => clickHandler("red")}
            type="button"
            className={`btn btn-danger m-3 rounded-circle ${
              color == colors[0] ? "glow-red" : ""
            }`}
            style={{ height: "100px" }}
          ></button>
          <button
            onClick={() => clickHandler("yellow")}
            type="button"
            className={`btn btn-warning m-3 rounded-circle ${
              color == colors[1] ? "glow-yellow" : ""
            }`}
            style={{ height: "100px" }}
          ></button>
          <button
            onClick={() => clickHandler("green")}
            type="button"
            className={`btn btn-success m-3 rounded-circle ${
              color == colors[2] ? "glow-green" : ""
            }`}
            style={{ height: "100px" }}
          ></button>
        </div>
      </div>
      <div className="row d-flex justify-content-center my-3">
      <div className="col-4 d-flex justify-content-center">
      <button onClick={() => setIsRunning(!isRunning)} type="button" className="btn btn-success m-2 w-25">{isRunning ? "Stop the lights" : "Start the lights"}</button>
      <button type="button" className="btn text-white m-2 w-25" style={{backgroundColor: "#952a95"}}>Add purple</button>
      </div>
      </div>
    </div>
  );
};


export default TrafficLight;
