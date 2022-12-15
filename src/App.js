import React from "react";
import SideContainer from "./components/sideContainer";
import MainContainer from "./components/mainContainer";

const App = () => {
  return (
    <div className="container">
      <div className="side-container">
        <SideContainer />
      </div>

      <div className="main-container">
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
