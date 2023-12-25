import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
const TrafficLight = (props) => {
  const [color, setColor] = useState("");

  function clickHandler(clickedColor) {
    setColor(clickedColor);
  }

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
      <div className="row d-flex justify-content-center my-3">
      <div className="col-4 d-flex justify-content-center">
      <button onClick={props.set} type="button" className="btn btn-success m-2 w-25">Start the lights</button>
      <button onClick={props.addPurple} type="button" className="btn text-white m-2 w-25" style={{backgroundColor: "#952a95"}}>Add purple</button>
      </div>
      </div>
    </div>
  );
};

TrafficLight.propTypes = {
  onClick: PropTypes.func
};

export default TrafficLight;
