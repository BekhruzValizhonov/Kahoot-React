import React from "react";

function Question(props) {
  return (
    <div className="question">
      <input
        style={{ textAlign: "center" }}
        type="text"
        name="question"
        placeholder="Start typing your question"
        value={props.quiz.question || ""}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Question;
