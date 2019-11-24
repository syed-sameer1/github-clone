import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <div className="innerIntro">
        <h2>Introducing GitHub Actions with CI/CD</h2>
        <p>
          Automate any workflow with GitHub Actions. See the latest updates
          announced at our HQ reveal.
        </p>
        <button>Check it out →</button>
      </div>
    </div>
  );
}
export default Intro;
