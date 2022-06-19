import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Quiz from "./Routes/Quiz";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Routes/Layout";
import Library from "./Routes/Library";
import GamePage from "./Routes/GamePage";
import CongurulationPage from "./Routes/CongurulationPage";
import NoPage from "./Routes/NoPage";

const AllComponents = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Quiz />} />
          <Route path="library" element={<Library />} />
          <Route path="gamePage" element={<GamePage />} />
          <Route path="congurulationPage" element={<CongurulationPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AllComponents />
  </Provider>
);
