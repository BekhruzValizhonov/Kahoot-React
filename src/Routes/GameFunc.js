import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  falseAnswers,
  addQuestion,
  trueAnswers,
} from "../redux/reducers/kahootReducer";
import triangle from "../Image/triangle.png";
import rom from "../Image/rom.png";
import circle from "../Image/circle.png";
import square from "../Image/square.png";

function GameFunc(props) {
  const [time, setTime] = useState(props.kahoot.timeLimit / 1000);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let answer = 1;

  const handleClick = (event) => {
    const value = event.target.value;

    if (props.kahoot.isAnswer === value) {
      dispatch(trueAnswers(answer));
      navigate("/congurulationPage", { state: { answerState: true } });
      dispatch(
        addQuestion({
          increment: answer,
        })
      );
    } else {
      dispatch(falseAnswers(answer));
      navigate("/congurulationPage", { state: { answerState: false } });
      dispatch(
        addQuestion({
          increment: answer,
        })
      );
    }
  };

  useEffect(() => {
    let interal = setInterval(() => {
      setTime((prevState) => prevState - 1);
    }, 1000);

    if (time === 0) {
      dispatch(
        addQuestion({
          increment: answer,
        })
      );
      navigate("/congurulationPage", { state: { answerState: false } });
    }
    return () => clearInterval(interal);
  });

  return (
    <div className="respondent">
      <h5 className="time_limit">{time}</h5>

      <div className="first_answer">
        <img
          src={triangle}
          className="triangle"
          alt="404"
          width={60}
          height={60}
          name="answerImg"
          style={{ borderRadius: "5px" }}
        />

        <label htmlFor="firstAnswer">{props.kahoot.addAnswer1}</label>
        <input
          style={{ display: "none" }}
          type="radio"
          id="firstAnswer"
          name="isAnswer"
          value={1}
          onClick={handleClick}
        />

        <div>
          <img
            src={rom}
            className="rom"
            alt="404"
            width={60}
            height={60}
            style={{ borderRadius: "5px" }}
          />

          <label style={{ backgroundColor: "blue" }} htmlFor="secondAnswer">
            {props.kahoot.addAnswer2}
          </label>
          <input
            style={{ display: "none" }}
            type="radio"
            id="secondAnswer"
            name="isAnswer"
            value={2}
            onClick={handleClick}
          />
        </div>
      </div>

      <div className="second_answer">
        <img
          src={circle}
          className="circle"
          alt="404"
          width={60}
          height={60}
          style={{ borderRadius: "5px" }}
        />

        <label style={{ backgroundColor: "yellow" }} htmlFor="thirdAnswer">
          {props.kahoot.addAnswer3}
        </label>
        <input
          style={{ display: "none" }}
          type="radio"
          id="thirdAnswer"
          name="isAnswer"
          value={3}
          onClick={handleClick}
        />
        <div>
          <img
            src={square}
            className="square"
            alt="404"
            width={60}
            height={60}
            style={{ borderRadius: "5px" }}
          />

          <label style={{ backgroundColor: "green" }} htmlFor="fourthAnswer">
            {props.kahoot.addAnswer4}
          </label>
          <input
            style={{ display: "none" }}
            type="radio"
            id="fourthAnswer"
            name="isAnswer"
            value={4}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default GameFunc;
