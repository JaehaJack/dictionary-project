import React from "react";
import Synonym from "./Synonym";
import Antonym from "./Antonym";
import "./App.css";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition</strong>:{definition.definition}
            </p>
            <p>
              <strong> Examples</strong>:<em>{definition.example}</em>
            </p>
            <Synonym synonym={definition.synonyms} />
            <br />
            <Antonym antonym={definition.antonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
