import React from "react";
import "./ContactStyle.css";

const Contact = props => {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <p className={props.online ? "status-online" : "status-offline"}> </p>
          <p className="status-text"> {props.online ? "OnLine" : "OffLine"} </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
