import React from "react";

import "./App.css";

export default function Photos(props) {
  if (props.pics) {
    return (
      <section className="Pic">
        <div className="row">
          {props.pics.map(function (photos, index) {
            return (
              <div className="col-4 album" key={index}>
                <a
                  href={photos.src.original}
                  target="_blank"
                  rel="noopenner noreferrer"
                >
                  <img
                    src={photos.src.landscape}
                    alt={photos.src.photographer}
                    className="img-fluid mb-3"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
