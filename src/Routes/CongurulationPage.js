import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  increaseId,
  subtractionQuestion,
} from "../redux/reducers/kahootReducer";

function CongurulationPage() {
  let kahootReducer = useSelector((state) => state.kahootReducer);
  let dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();
  console.log(location.state);

  useEffect(() => {
    setTimeout(() => {
      dispatch(increaseId());
      navigate("/gamePage");

      if (
        kahootReducer.questionNumber >
        kahootReducer.plyaGameArr.allQuestions.length
      ) {
        dispatch(subtractionQuestion(1));
      }
    }, 3000);
  }, []);

  return (
    <div className="congurulation_page">
      <img
        src={
          location.state.answerState === true
            ? "https://miro.medium.com/max/1200/1*pw64qUlG7uG_4IilKPSnaQ.jpeg"
            : "https://wallpapers.com/images/high/kahoot-incorrect-answer-screen-k26pbz14juhpgmc7.jpg"
        }
        alt="404"
        width="500px"
      />
    </div>
  );
}

export default CongurulationPage;
