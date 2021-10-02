import React from "react";

export default function Phonetics(props) {
  return (
    <span className="phonetics">
      <em>{props.phonetic.text} </em>
      <br />
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        ▶ Listen
      </a>
    </span>
  );
}
