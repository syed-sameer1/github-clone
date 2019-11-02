import React from "react";
import "./MainDiv.css";
function MainDiv() {
  return (
    <div className="main">
      <section className="webStart">
        <div className="built">
          <h1>Built for developers</h1>
          <p>
            GitHub is a development platform inspired by the way you work. From{" "}
            <a href="#">open source</a> to <a href="#">business</a>, you can
            host and review code, manage projects, and build software alongside
            40 million developers.
          </p>
        </div>
        <form>
          <label>Username</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <p>
            Make sure it's at least 15 characters OR at least 8 characters
            including a number and a lowercase letter.
            <a href="#"> Learn more</a>.
          </p>
          <input type="submit" value="Sign up for Github" />
          <p className="para2">
            By clicking “Sign up for GitHub”, you agree to our
            <a href="#"> Terms of Service</a> and
            <a href="#"> Privacy Statement</a>. We’ll occasionally send you
            account related emails.
          </p>
        </form>
        <input
          type="submit"
          value="Sign up for Github"
          className="formSubmit"
        />
      </section>
    </div>
  );
}
export default MainDiv;
