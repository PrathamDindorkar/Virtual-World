import React from "react";
import gow from "./God_of_War_4_cover.jpg";

function Story() {
  return (
    <>
      <div className="story_first">
        <br />
        <br />
        <br />
        <section id="story_section">
          <div className="row">
            <div className="column">
              <div className="card">
                <center>
                  <img src={gow} className="title" />{" "}
                </center>
                <h3>God of War</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="card">
                <center>
                  <img src={gow} className="title" />{" "}
                </center>
                <h3>God of War</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="card">
                <center>
                  <img src={gow} className="title" />{" "}
                </center>
                <h3>God of War</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <div className="card">
                <center>
                  <img src={gow} className="title" />{" "}
                </center>
                <h3>God of War</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Story;
