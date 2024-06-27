import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import gowr from "./gowr.jpg";
import rdr from "./rdr2.jpg";
import tlou2 from "./tlou2.jpg";
import un from "./u4.jpg";
import hfw from "./hfw.jpg";
import aw from "./aw2.jpg";
import apt from "./aptr.jpg";

function Layout() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/story');
  }
  return (
    <>
              <div className="web">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <h1 className="home">
                  The Way It's
                  <br />
                  Meant To Be
                  <br />
                  <span className="homie">Played</span>
                </h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <div className="secondPage">
                <section className="container">
                  <div className="wrapper">
                    <div className="items">
                      <div
                        className="item"
                        tabIndex="0"
                        style={{ backgroundImage: `url(${rdr})`, height: "350px" }}
                      ></div>
                      <div
                        className="item"
                        tabIndex="0"
                        style={{ backgroundImage: `url(${gowr})`, height: "350px" }}
                      ></div>
                      <div
                        className="item"
                        tabIndex="0"
                        style={{ backgroundImage: `url(${tlou2})`, height: "350px" }}
                      ></div>
                      <div
                        className="item"
                        tabIndex="0"
                        style={{ backgroundImage: `url(${un})`, height: "350px" }}
                      ></div>
                      <div
                        className="item"
                        tabIndex="0"
                        style={{ backgroundImage: `url(${apt})`, height: "350px" }}
                      ></div>
                      <div
                        className="item"
                        tabIndex="0"
                        style={{ backgroundImage: `url(${hfw})`, height: "350px" }}
                      ></div>
                      <div
                        className="item"
                        tabIndex="0"
                        style={{ backgroundImage: `url(${aw})`, height: "350px" }}
                      ></div>
                    </div>
                  </div>
                </section>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>
                  <span className="homie">
                    Great <br />
                    Narrations
                  </span>
                  <br />
                  Stories Heard
                  <br /> Never Before
                </h1>
                <br />
                <br />
                <button className="fill" onClick={handleClick}>More Like This</button>
                <br />
                <br />
              </div>
            </>
  )
}

export default Layout
