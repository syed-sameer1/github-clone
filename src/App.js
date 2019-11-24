import React from "react";
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <li>
              <a>Why Github?</a>
            </li>
            <li>
              <a>Enterprise</a>
            </li>
            <li>
              <a>Explore</a>
            </li>
            <li>
              <a>Marketplace</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </nav>
        <div>
          <input type="search" placeholder="Search GitHub" />
          <button className="signIn">Sign in</button>
          <button className="signUp">Sign up</button>
        </div>
      </header>
      <div className="main">
        <section className="webStart">
          <div className="built">
            <h1>Built for developers</h1>
            <p>
              GitHub is a development platform inspired by the way you work.
              From <a href="#">open source</a> to <a href="#">business</a>, you
              can host and review code, manage projects, and build software
              alongside 40 million developers.
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
      <div className="dotted">
        <div className="innerDotted">
          <h2>Get started with GitHub Enterprise</h2>
          <p>
            Take collaboration to the next level with security and
            administrative features built for businesses.
          </p>
          <button>Contact Sales</button>
          <p>
            <a href="#">Or start a free trial of Enterprise Server →</a>
          </p>
        </div>
      </div>
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
      <div className="organiz">
        <div className="innerOrganiz">
          <p>More than 2.1 million businesses and organizations use GitHub</p>
          <ul>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/airbnb-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/sap-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/ibm-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/google-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/paypal-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/bloomberg-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/spotify-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/swift-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/facebook-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/node-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/nasa-logo.png" />
            </li>
            <li>
              <img src="https://github.githubassets.com/images/modules/site/logos/walmart-logo.png" />
            </li>
          </ul>
        </div>
      </div>
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
                issues and project boards, right alongside your code. All you
                have to do is mention a teammate to get them involved.
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
      <div className="companies">
        <p>See how the world's leading companies use GitHub Enterprise.</p>
        <div className="companyDetail">
          <figure>
            <img src="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg" />
            <figcaption>
              <p>MGM Resorts International</p>
              <span>Hospitality</span>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
          <figure>
            <img src="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg" />
            <figcaption>
              <p>Nationwide</p>
              <span>Insurance</span>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
          <figure>
            <img src="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg" />
            <figcaption>
              <p>SAP</p>
              <span>Business Software</span>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
          <figure>
            <img src="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg" />
            <figcaption>
              <p>Spotify</p>
              <span>Technology / Streaming</span>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="team">
        <div className="innerTeam">
          <h2>Security and administration</h2>
          <p>Your business needs, met</p>
          <p className="teamPara">
            From flexible hosting to granular access controls, we’ve got your
            security requirements covered.
          </p>
          <button>Learn how GitHub Enterprise works →</button>
        </div>
      </div>
      <div className="verified">
        <div className="verifiedDetail">
          <ul>
            <li>
              <h5>Code security</h5>
              <p>
                Prevent problems before they happen. Protected branches, signed
                commits, and required status checks protect your work and help
                you maintain a high standard for your code.
              </p>
            </li>
            <li>
              <h5>Access controlled</h5>
              <p>
                Encourage teams to work together while limiting access to those
                who need it with granular permissions and authentication through
                SAML/SSO and LDAP.
              </p>
            </li>
          </ul>
        </div>
        <div className="verifiedImg">
          <img src="https://github.githubassets.com/images/modules/site/home-illo-business.png" />
        </div>
      </div>
      <div className="host">
        <div className="innerHost">
          <div className="hostImg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              class="mr-4"
              width="64px"
            >
              <path
                d="M27 13h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm15-1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM27 28h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm15 3a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm4 0a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"
                fill="#23292f"
              ></path>
              <path
                d="M50 44h-1a13 13 0 0 0-4.68-9H48a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-5v-3h5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H16a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h5v3h-5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11.72a13 13 0 0 0-3.79 5.21A7 7 0 0 0 13.28 44 6 6 0 0 0 14 56h36a6 6 0 0 0 0-12zM15 17v-6a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1zm8 3h18v3H23zm-7 13a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a12.9 12.9 0 0 0-10 0H16zm34 21H14a4 4 0 1 1 .09-8 1 1 0 0 0 1-.83 5 5 0 0 1 8.6-2.55 1 1 0 0 0 1.7-.42A11 11 0 0 1 47 45a1 1 0 0 0 1 1h2a4 4 0 0 1 0 8z"
                fill="#23292f"
              ></path>
            </svg>
          </div>
          <div className="hostDetail">
            <h5>Hosted where you need it</h5>
            <p>
              Securely and reliably host your work on GitHub using GitHub
              Enterprise Cloud. Or deploy GitHub Enterprise Server in your own
              data centers or in a private cloud using Amazon Web Services,
              Azure, or Google Cloud Platform.
            </p>
            <a href="#">Compare plans →</a>
            <a href="#">Contact Sales for more information →</a>
          </div>
        </div>
      </div>
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
      <div className="team">
        <div className="innerTeam">
          <h2>Community</h2>
          <p>Welcome home, developers</p>
          <p className="teamPara">
            GitHub is home to the world’s largest community of developers and
            their projects...
          </p>
        </div>
      </div>
      <div className="companies">
        <div className="companyDetail">
          <figure>
            <img src="https://customer-stories-feed.github.com/customer_stories/freakboy3742/hero.jpg" />
            <figcaption>
              <p>Russell Keith-Magee</p>
              <span>
                Russell Keith-Magee created BeeWare to fill a gap in his own
                process. Today, BeeWare is the go-to project for supporting
                Python on every platform.
              </span>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
          <figure>
            <img src="https://customer-stories-feed.github.com/customer_stories/kris-nova/hero.jpg" />
            <figcaption>
              <p>Kris Nova</p>
              <span>
                Kris Nova quickly developed a passion for open source software.
                Now she gets to work on open source tooling at her day job,
                which includes maintaining.
              </span>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
          <figure>
            <img src="https://customer-stories-feed.github.com/customer_stories/yyx990803/hero.jpg" />
            <figcaption>
              <p>Evan You</p>
              <span>
                In 2013, Evan You founded Vue, a Javascript framework funded by
                the community on Patreon. In 2016, Vue reached 2,000,000
                downloads.
              </span>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
          <figure>
            <img src="https://customer-stories-feed.github.com/customer_stories/jessfraz/hero.jpg" />
            <figcaption>
              <p>Jess Frazelle</p>
              <span>
                Jess Frazelle works on Kubernetes full-time. Previously she
                maintained Docker, a software containerization platform used by
                thousands of teams.
              </span>
              <a href="#">Read more</a>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="count">
        <div className="countBalls">
          <div className="repo">
            <h2>100M*</h2>
            <p>repositories worldwide</p>
          </div>
          <div className="developers">
            <h2>40M*</h2>
            <p>developers worldwide</p>
          </div>
          <div className="organiz">
            <h2>2.1M*</h2>
            <p>businesses & organizations worldwide </p>
          </div>
        </div>
        <div className="countDetails">
          <ul>
            <li>
              <p>
                GitHub’s users create and maintain influential technologies
                alongside the world’s largest
                <span style={{ color: "#f66a0a" }}> open source community</span>
              </p>
            </li>
            <li>
              <p>
                <span style={{ color: "#0366d6" }}>Developers</span> use GitHub
                for personal projects, from experimenting with new programming
                languages to hosting their life’s work.
              </p>
            </li>
            <li>
              <p>
                <span style={{ color: "#6f42c1" }}>Businesses</span> of all
                sizes use GitHub to support their development process and to
                securely build software.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="last">
        <h2>
          Get started for free — join the millions of developers already using
          GitHub to share their code, work together, and build amazing things.
        </h2>
        <div className="lastForm">
          <input type="text" placeholder="Pick a username" />
          <input type="email" placeholder="Your email address" />
          <input type="password" placeholder="Creat a password" />
          <input type="submit" value="Sign up for GitHub" />
        </div>
        <p>
          By clicking “Sign up for GitHub”, you agree to our
          <a href="#"> terms of service </a>
          and<a href="#"> privacy statement </a>. We’ll occasionally send you
          account related emails.
        </p>
      </div>
      <footer>
        <div className="gitIcon">
          <svg
            height="30"
            class="octicon octicon-logo-github"
            viewBox="0 0 45 16"
            version="1.1"
            width="84"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 0 0-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"
            ></path>
          </svg>
        </div>
        <div className="footerList">
          <ul>
            <li>Product</li>
            <li>Features</li>
            <li>Security</li>
            <li>Enterprise</li>
            <li>Customer stories</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ul>
            <li>Platform</li>
            <li>Developer API</li>
            <li>Partners</li>
            <li>Atom</li>
            <li>Electron</li>
            <li>GitHub Desktop</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>Help</li>
            <li>Community Forum</li>
            <li>Training</li>
            <li>Status</li>
            <li>Contact GitHub</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Shop</li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

export default App;
