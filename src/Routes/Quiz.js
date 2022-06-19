import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Options from "../inputs/Options";
import { saveToLibary } from "../redux/reducers/kahootReducer";
import AddQuestionBtn from "../MyButton/AddQuestionBtn";
import Title from "../inputs/Title";
import Question from "../inputs/Question";
import AddAnswer from "../inputs/AddAnswer";
import AddAnswer2 from "../inputs/AddAnswer2";
import QuizNavbar from "../NavbarAndSideBar/QuizNavbar";

let lastId = 1;
let questionsArray = [];

function Quiz() {
  const [quiz, setQuiz] = useState({
    id: lastId,
    timeLimit: "5000",
  });
  const [title, setTitle] = useState("");
  const [isSubmitTitle, setIsSubmitTitle] = useState(true);
  let dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    setQuiz((prevState) => ({
      ...prevState,
      id: ++lastId,
    }));

    questionsArray.push(quiz);
    setIsSubmitTitle(false);
  };

  const saveTheLibrary = () => {
    dispatch(saveToLibary({ questionsArray: questionsArray, title: title }));
    questionsArray = [];
  };

  return (
    <div className="quiz">
      <QuizNavbar
        saveTheLibrary={saveTheLibrary}
        questionsArray={questionsArray}
      />

      <form onSubmit={hundleSubmit}>
        <Question quiz={quiz} handleChange={handleChange} />
        <br />
        <AddAnswer quiz={quiz} handleChange={handleChange} />

        <AddAnswer2 quiz={quiz} handleChange={handleChange} />
        <br />
        <Options quiz={quiz} handleChange={handleChange} />
        <br />
        <Title
          title={title}
          setTitle={setTitle}
          isSubmitTitle={isSubmitTitle}
        />

        <AddQuestionBtn quiz={quiz} title={title} />
      </form>
    </div>
  );
}

export default Quiz;
