import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Interests from "./components/Interests";

const App = () => {
  return (
    <main>
      <div className="resume-container">
        <Header />
        <Summary />
        <div className="split">
          <div className="first">
            <Experience />
          </div>
          <div>
            <Education />
            <Skills />
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
