import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import GameFunc from "./GameFunc";

function Game() {
  let kahootReducer = useSelector((state) => state.kahootReducer);

  return (
    <>
      <img
        className="game_gif_kahoot"
        name="gif"
        src="https://hypixel.net/attachments/2753096/"
        alt="404"
      />

      <div className="show_game">
        {kahootReducer.createNewQuestionsIncrement ===
          kahootReducer.playGameObj.allQuestions.length && (
          <button className="create_new_questions">
            <Link to="/">Create New Questions</Link>
          </button>
        )}
        {kahootReducer.playGameObj.allQuestions.map((kahoot) => {
          return (
            <div key={uniqid()}>
              {kahoot.id === kahootReducer.gameId && (
                <>
                  <h5 className="game_question">{kahoot.question}</h5>
                  <GameFunc kahoot={kahoot} />
                </>
              )}
            </div>
          );
        })}

        <div className="game_info_paragraph">
          <h5>True Answers {kahootReducer.trueAnswers}</h5>
          <h5>False Answers {kahootReducer.falseAnswers}</h5>
          <h5>
            Questions:{kahootReducer.questionNumber}/
            {kahootReducer.playGameObj.allQuestions.length}
          </h5>
        </div>
      </div>
    </>
  );
}

export default Game;
