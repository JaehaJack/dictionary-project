import React from "react";

export default function Antonym(props) {
  if (props.antonym) {
    return (
      <div className="Antonym">
        <strong>antonym</strong>:
        {props.antonym.map(function (antonym, index) {
          return <span key={index}> {antonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
