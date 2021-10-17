import React, { useState } from "react";
import Definitions from "./Definitions";
import Photos from "./Photos";
import axios from "axios";
import "./App.css";

export default function Dictionary(props) {
  var [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  var [picture, setPicture] = useState(null);
  var [defined, setDefined] = useState(null);
  var [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setDefined(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Inquire();
  }

  function handlePexelsResponse(response) {
    setPicture(response.data.photos);
  }

  function Inquire() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001141310ebe79345c190e8133b743ab348";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function WordInquired(event) {
    setKeyWord(event.target.value);
  }

  function Output() {
    setLoaded(true);
    Inquire();
  }

  if (loaded) {
    return (
      <div>
        <div className="search-engine">
          <form
            className="d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
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
          <Definitions definitions={defined} />
        </div>
        <div className="photos">
          <Photos pics={picture} />
        </div>
      </div>
    );
  } else {
    Output();
    return "Seeking for words...";
  }
}
