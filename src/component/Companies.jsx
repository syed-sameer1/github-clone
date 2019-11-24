import React from "react";
import "./Companies.css";
function Companies() {
  return (
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
  );
}
export default Companies;
