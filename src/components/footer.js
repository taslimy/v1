import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="foot">
          {new Date().getFullYear()}, Built with
          <span>
            <a
              className="link-color"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org"
            >
              {" "}
              Gatsby
            </a>{" "}
            by Taslim Yakub
          </span>
        </p>
        <nav>
          <li>
            <a href="mailto:taslimer@gmail.com"> email</a>
          </li>
          <li>
            <a
              href="https://github.com/taslimy"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/taslim-yakub-244070186/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/taslimyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>
        </nav>
      </footer>
    )
  }
}

export default Footer
