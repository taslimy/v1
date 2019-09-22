import React, { Component } from "react"
import { Link } from "gatsby"

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link to="/">
            Taslim Yakub
            <em id="webdev">/ Full Stack Developer /</em>
          </Link>
        </h1>
        <nav>
          <div className="nav-container">
            <ul>
              <li>
                <Link activeClassName="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="/contact">
                  Bio &amp; Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
