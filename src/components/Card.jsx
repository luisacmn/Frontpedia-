import React from "react";
import { ExternalLink } from 'react-external-link';

function Card(props) {
  return (
      <div className="card">
        <ExternalLink className="externalLink" href={props.href} target="_blank">
          <img className="img-logo" src={props.img} alt="image_logo" />
          <h3 className="name"> {props.name}</h3>
          <p className="paragraph"> {props.description}</p>
        </ExternalLink>
      </div>
  );
}

export default Card;
