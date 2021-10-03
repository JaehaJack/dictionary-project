import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Pics">
        {props.photos.map(function (photos, index) {
          return (
            <div className="row">
              <div className="col-4" key={index}>
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.landscape}
                    alt={photos.src.photographer}
                    className="d-flex justify-content-space-evenly img-fluid mb-3"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
