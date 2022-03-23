import React from "react";


function Card(props) {
  return (
      <div className="card">
        <img className="img-logo" src={props.img} alt="image_logo" />
        <h3 className="name"> {props.name}</h3>
        <p className="paragraph"> {props.description}</p>
      </div>
  );
}

export default Card;
