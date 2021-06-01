import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.contact.imageUrl} alt="Cat" />
      <div className="card-body">
        <h2>{props.contact.title}</h2>
        <small className="text-muted">{props.contact.published}</small>
      </div>
    </div>
  );
}

export default Card;
