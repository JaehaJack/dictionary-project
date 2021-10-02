import React, { useState } from "react";
import "./App.css";

export default function Dictionary() {
  var [keyWord, setKeyWord] = useState("");

  function handleResponse() {
    alert(`searching for ${keyWord}`);
  }

  function WordInquired(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }

  return (
    <div className="search-engine">
      <form className="d-flex justify-content-center" onSubmit={handleResponse}>
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
