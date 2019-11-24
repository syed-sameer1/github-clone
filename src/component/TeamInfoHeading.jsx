import React from "react";
import "./Team.css";
function TeamInfoHeading() {
  return (
    <div className="team">
      <div className="innerTeam">
        <h2>GitHub for teams</h2>
        <p>A better way to work together</p>
        <p className="teamPara">
          GitHub brings teams together to work through problems, move ideas
          forward, and learn from each other along the way.
        </p>
        <button>Sign up your team →</button>
      </div>
    </div>
  );
}
export default TeamInfoHeading;
