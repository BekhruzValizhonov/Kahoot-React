import React from "react";

function Options(props) {
  return (
    <div className="time_limit">
      <select onChange={props.handleChange} name="timeLimit">
        <option value="5000">5 seconds</option>
        <option value="10000">10 seconds</option>
        <option value="15000">15 seconds</option>
        <option value="20000">20 seconds</option>
        <option value="30000">30 seconds</option>
        <option value="60000">1 minute</option>
        <option value="90000">1 30 minute</option>
        <option value="120000">2 minute</option>
        <option value="240000">4 minute</option>
      </select>
    </div>
  );
}

export default Options;
