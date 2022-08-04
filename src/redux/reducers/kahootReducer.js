import { createSlice } from "@reduxjs/toolkit";

let lastId = 1;

export const quizSlice = createSlice({
  name: "ALL_QUIZ",
  initialState: {
    kahoots: [],
    plyaGameObj: {},
    gameId: 1,
    falseAnswers: 0,
    trueAnswers: 0,
    questionNumber: 1,
    createNewQuestionsIncrement: 0,
  },
  reducers: {
    saveToLibary: (state, action) => {
      state.kahoots.push({
        id: ++lastId,
        allQuestions: action.payload.questionsArray,
        title: action.payload.title,
      });
    },

    playGame: (state, action) => {
      let kahoot = state.kahoots.find((v) => v.id === action.payload.libraryId);
      state.plyaGameObj = kahoot;
    },

    increaseId: (state) => {
      state.gameId += 1;
    },

    trueAnswers: (state, action) => {
      state.trueAnswers += action.payload;
    },

    falseAnswers: (state, action) => {
      state.falseAnswers += action.payload;
    },

    addQuestion: (state, action) => {
      state.questionNumber += action.payload.increment;
    },

    subtractionQuestion: (state, action) => {
      state.questionNumber -= action.payload;
    },

    createNewQuestions: (state, action) => {
      state.createNewQuestionsIncrement += action.payload;
    },
  },
});

export const {
  saveToLibary,
  playGame,
  increaseId,
  trueAnswers,
  falseAnswers,
  addQuestion,
  subtractionQuestion,
  createNewQuestions,
} = quizSlice.actions;
export default quizSlice.reducer;
