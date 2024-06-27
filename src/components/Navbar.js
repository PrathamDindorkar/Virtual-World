import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <div className="nav">
          <a className="name" href="/">
            {props.title}
          </a>
          <a className="active" href="#">
            Story Games
          </a>
          &nbsp;
          <a className="active" href="#">
            Multiplayer Games
          </a>
          <a className="active" href="#">
            {props.about}
          </a>
          <div className="search">
            <form role="search" id="searchbar">
              <input
                type="search"
                id="find"
                name="f"
                placeholder="Search Games"
              ></input>
            </form>
          </div>
        </div>
  )
}

Navbar.propTypes = {title: PropTypes.string,
                    about: PropTypes.string}

Navbar.defaultProps = {
  title : "Set Your Title Here",
  about : "This is About or contact space"
}