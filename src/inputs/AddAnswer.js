import React from "react";
import "./style.css";
import triangle from "../Image/triangle.png";
import rom from "../Image/rom.png";

function AddAnswer(props) {
  return (
    <>
      <div className="kahoot_gif">
        <img
          src="https://c.tenor.com/sTdpTbbxMQIAAAAC/kahoot.gif"
          alt="404"
          width={300}
          height={186}
          style={{ borderRadius: "5px" }}
        />
      </div>

      <div className="addAnswers">
        <img
          src={triangle}
          alt="404"
          width={60}
          height={60}
          style={{ borderRadius: "5px" }}
        />
        <input
          type="text"
          name="addAnswer1"
          placeholder="Add Answer 1"
          value={props.quiz.addAnswer1 || ""}
          onChange={props.handleChange}
        />

        <input
          className="addAnswer_radio"
          type="radio"
          name="isAnswer"
          value={1 || ""}
          onChange={props.handleChange}
        />

        <br />
        <img
          src={rom}
          alt="404"
          width={60}
          height={60}
          style={{ borderRadius: "5px" }}
        />
        <input
          type="text"
          name="addAnswer2"
          placeholder="Add Answer 2"
          value={props.quiz.addAnswer2 || ""}
          onChange={props.handleChange}
        />
        <input
          className="addAnswer_radio"
          type="radio"
          name="isAnswer"
          value={2 || ""}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
}

export default AddAnswer;
