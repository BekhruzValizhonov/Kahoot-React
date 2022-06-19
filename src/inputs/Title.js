import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className={props.isSubmitTitle === true ? "title" : "none"}>
      <input
        type="text"
        name="addTitle"
        placeholder="Title"
        value={props.title}
        onChange={(event) => props.setTitle(event.target.value)}
      />
    </div>
  );
}

export default Title;
