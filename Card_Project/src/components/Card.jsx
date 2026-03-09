import React from "react";
import {Bookmark} from 'lucide-react'

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.logo} alt={props.company} />
          <button>
            Save <Bookmark />{" "}
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.posted}</span>
          </h3>
          <h4> {props.role}</h4>

          <div className="tag">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
