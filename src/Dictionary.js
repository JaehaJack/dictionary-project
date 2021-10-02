import React, { useState } from "react";
import Definitions from "./Definitions";
import axios from "axios";
import "./App.css";

export default function Dictionary() {
  var [keyWord, setKeyWord] = useState("");
  var [defined, setDefined] = useState(null);

  function handleResponse(response) {
    setDefined(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function WordInquired(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div>
      <div className="search-engine">
        <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a word here..."
            className="form-control mx-1"
            autoFocus={true}
            onChange={WordInquired}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-warning mx-1"
          />
        </form>
      </div>
      <div className="definitions mt-5 pt-3 d-flex justify-content-space-evenly">
        <br />
        <Definitions definitions={defined} />
      </div>
    </div>
  );
}
