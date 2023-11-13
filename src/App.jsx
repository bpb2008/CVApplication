import React from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import WorkInfo from "./components/Workinfo";

function App() {
  return (
    <>
      <GeneralInfo />
      <EducationInfo />
      <WorkInfo />
    </>
  );
}

export default App;
