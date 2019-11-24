import React from "react";
import "./Integrations.css";

const Integrations = () => {
  return (
    <>
      <div className="team">
        <div className="innerTeam">
          <h2>Integrations</h2>
          <p>Build on GitHub</p>
          <p className="teamPara">
            Customize your process with GitHub apps and an intuitive API.
            Integrate the tools you already use or discover new favorites to
            create a happier, more efficient way of working.
          </p>
          <button>Learn about integrations →</button>
        </div>
      </div>
      <div className="balls">
        <div className="innerBalls">
          <div className="setUp slack">
            <img
              src="https://github.githubassets.com/images/modules/site/integrators/slackhq.png"
              alt="Slack"
              className="ballImg"
            />
          </div>
          <div className="setDown zen">
            <img
              src="https://github.githubassets.com/images/modules/site/integrators/zenhubio.png"
              alt="ZenHub"
              className="ballImg"
            />
          </div>
          <div className="setUp travis">
            <img
              src="https://github.githubassets.com/images/modules/site/integrators/travis-ci.png"
              alt="Travis CI"
              className="ballImg"
            />
          </div>
          <div className="setDown atom">
            <img
              src="https://github.githubassets.com/images/modules/site/integrators/atom.png"
              alt="Atom"
              className="ballImg"
            />
          </div>
          <div className="setUp circle">
            <img
              src="https://github.githubassets.com/images/modules/site/integrators/circleci.png"
              alt="Circle CI"
              className="ballImg"
            />
          </div>
          <div className="setDown google">
            <img
              src="https://github.githubassets.com/images/modules/site/integrators/google.png"
              alt="Google"
              className="ballImg"
            />
          </div>
          <div className="setUp  code">
            <img
              src="https://github.githubassets.com/images/modules/site/integrators/codeclimate.png"
              alt="Code Climate"
              className="ballImg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
