import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Dictionary() {
  var [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
    <div className="search-engine">
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a word here..."
              autoFocus={true}
              onChange={WordInquired}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
    </div>
  );
}
