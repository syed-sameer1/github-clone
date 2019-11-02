import React from "react";
import "./Verified.css";
function Verified() {
  return (
    <div className="verified">
      <div className="verifiedDetail">
        <ul>
          <li>
            <h5>Code security</h5>
            <p>
              Prevent problems before they happen. Protected branches, signed
              commits, and required status checks protect your work and help you
              maintain a high standard for your code.
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
  );
}
export default Verified;
