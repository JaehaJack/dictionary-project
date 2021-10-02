import React from "react";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="synonym">
        <strong>Synonyms</strong>:{" "}
        {props.synonym.map(function (synonym, index) {
          return <span key={index}> {synonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
