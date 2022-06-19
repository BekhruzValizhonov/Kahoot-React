import React from "react";
import circle from "../Image/circle.png";
import square from "../Image/square.png";

function AddAnswer2(props) {
  return (
    <>
      <div className="addAnswers">
        <img
          src={circle}
          alt="404"
          width={60}
          height={60}
          style={{ borderRadius: "5px" }}
        />
        <input
          type="text"
          name="addAnswer3"
          placeholder="Add Answer 3"
          value={props.quiz.addAnswer3 || ""}
          onChange={props.handleChange}
        />

        <input
          className="addAnswer_radio"
          type="radio"
          name="isAnswer"
          value={3 || ""}
          onChange={props.handleChange}
        />

        <br />
        <img
          src={square}
          alt="404"
          width={60}
          height={60}
          style={{ borderRadius: "5px" }}
        />
        <input
          type="text"
          name="addAnswer4"
          placeholder="Add Answer 4"
          value={props.quiz.addAnswer4 || ""}
          onChange={props.handleChange}
        />

        <input
          className="addAnswer_radio"
          type="radio"
          name="isAnswer"
          value={4 || ""}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
}

export default AddAnswer2;
