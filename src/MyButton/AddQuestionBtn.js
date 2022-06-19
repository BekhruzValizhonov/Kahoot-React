import React from "react";

function AddQuestionBtn(props) {
  return (
    <div className="add_question_btn">
      {props.quiz.addAnswer1 &&
      props.quiz.addAnswer2 &&
      props.quiz.addAnswer3 &&
      props.quiz.addAnswer4 &&
      props.title ? (
        <button disabled={false} className="btn btn-primary">
          Add Question
        </button>
      ) : (
        <button disabled className="btn btn-primary">
          Add Question
        </button>
      )}
    </div>
  );
}

export default AddQuestionBtn;
