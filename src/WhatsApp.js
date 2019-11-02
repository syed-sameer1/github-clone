import React from "react";
import "./WhatsApp.css";
const WhatsApp = props => {
  return (
    <div className="main">
      <div className="imgDiv">
        <img src={props.imgLink} />
      </div>
      <div className="detail">
        <div className="info">
          <h2>{props.name}</h2>
          <p className="number">{props.number}</p>
          <p className="messege">{props.lastMessege}</p>
          <p className="time">{props.time}</p>
        </div>
        <div className="unread">
          <div>{props.unreadNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
