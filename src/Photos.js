import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Pics">
        {props.photos.map(function (photos, index) {
          return (
            <div className="row">
              <div className="col-4" key={index}>
                <img
                  src={photos.src.landscape}
                  alt="photos by pexels"
                  className="img-fluid mb-2"
                />
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
