import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./App.css";

export default function Definitions(props) {
  console.log(props.definitions);
  if (props.definitions) {
    return (
      <div className="Definitions">
        <h2 className="text-uppercase">{props.definitions.word}</h2>
        {props.definitions.phonetics.map(function (phonetic, index) {
          return (
            <div key="index">
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        <hr />
        <div className="Meanings">
          {props.definitions.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
