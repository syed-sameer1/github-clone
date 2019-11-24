import React from "react";
import "./RobotSection.css";
function RobotSection() {
  return (
    <div className="robot">
      <div className="robotImg">
        <img src="https://github.githubassets.com/images/modules/site/home-illo-team.svg" />
      </div>
      <div className="robotDetail">
        <ul>
          <li>
            <h5>Write better code</h5>
            <p>
              Collaboration makes perfect. The conversations and code reviews
              that happen in pull requests help your team share the weight of
              your work and improve the software you build.
              <a href="#">Learn about code review.</a>
            </p>
          </li>
          <li>
            <h5>Manage your chaos</h5>
            <p>
              Take a deep breath. On GitHub, project management happens in
              issues and project boards, right alongside your code. All you have
              to do is mention a teammate to get them involved.
              <a href="#">Learn about project management.</a>
            </p>
          </li>
          <li>
            <h5>Find the right tools</h5>
            <p>
              Browse and buy apps from GitHub Marketplace with your GitHub
              account. Find the tools you like or discover new favorites—then
              start using them in minutes.
              <a href="#">Learn about integrations.</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default RobotSection;
