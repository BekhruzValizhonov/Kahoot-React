import React from "react";
import { useSelector } from "react-redux";
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
        {kahootReducer.plyaGameArr.allQuestions.map((kahoot) => {
          return (
            <div key={uniqid()}>
              <h5 className="game_question">{kahoot.question}</h5>

              {kahoot.id === kahootReducer.gameId && (
                <GameFunc kahoot={kahoot} />
              )}
            </div>
          );
        })}

        <div className="game_info_paragraph">
          <h5>True Answers {kahootReducer.trueAnswers}</h5>
          <h5>False Answers {kahootReducer.falseAnswers}</h5>
          <h5>
            Questions:{kahootReducer.questionNumber}/
            {kahootReducer.plyaGameArr.allQuestions.length}
          </h5>
        </div>
      </div>
    </>
  );
}

export default Game;
