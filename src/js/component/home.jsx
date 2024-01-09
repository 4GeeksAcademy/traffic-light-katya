import React, { useState, useEffect } from "react";
import TrafficLight from "./trafficLight";
import TrafficLightWithPurple from "./trafficLightWithPurple";

//create your first component
const Home = () => {
  /* -VARIABLES- */
  const [purpleAdded, setPurpleAdded] = useState(false);

  useEffect(() => {}, [purpleAdded]);

  return (
    <div>
      {purpleAdded ? <TrafficLightWithPurple /> : <TrafficLight />}
      <div className="row d-flex justify-content-center my-3" /* -BUTTONS- */>
        <div className="col-4 d-flex justify-content-center">
          {purpleAdded ? (
            <button
              onClick={() => setPurpleAdded(!purpleAdded)}
              type="button"
              className="btn text-white w-25"
              style={{ backgroundColor: "#952a95" }}
            >
              Remove purple
            </button>
          ) : (
            <button
              onClick={() => setPurpleAdded(!purpleAdded)}
              type="button"
              className="btn text-white w-25"
              style={{ backgroundColor: "#952a95" }}
            >
              Add purple
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
