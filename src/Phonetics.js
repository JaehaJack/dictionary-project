import React from "react";

export default function Phonetics(props) {
  return (
    <span className="phonetics">
      <p>
        <em>{props.phonetic.text} </em>
      </p>
      <a
        href={props.phonetic.audio}
        className="d-inlineblock"
        target="_blank"
        rel="noreferrer"
      >
        ▶
      </a>
    </span>
  );
}
