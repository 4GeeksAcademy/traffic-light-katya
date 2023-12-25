import React, { useState, useEffect } from "react";
import TrafficLight from "./trafficLight";
import TrafficLightWithPurple from "./trafficLightWithPurple";

//create your first component
const Home = () => {
  /* -VARIABLES- */ 
  const [color, setColor] = useState("red");
  const colors = ["red", "yellow", "green"];
  const [isRunning, setIsRunning] = useState(false);
  const [purpleAdded, setPurpleAdded] = useState(false);

  /* -BUTTONS CLICK HANDLERS- */

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
      }, 3000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, color]);


  useEffect(() => {
    
  }, [purpleAdded]);

  return (
    <div>
      {purpleAdded ? <TrafficLightWithPurple /> : <TrafficLight />}
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
              onClick={() => setIsRunning(!isRunning)}
              type="button"
              className="btn btn-success m-2 w-25"
            >
              Start the lights
            </button>
          )}

          <button
            onClick={() => setPurpleAdded(!purpleAdded)}
            type="button"
            className="btn text-white m-2 w-25"
            style={{ backgroundColor: "#952a95" }}
          >
            Add purple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
