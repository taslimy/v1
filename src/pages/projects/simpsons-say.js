import React, { Component } from "react"

import Layout from "../../components/layout"

import { Link } from "gatsby"

export class SimpsonsSays extends Component {
  render() {
    return (
      <Layout>
        <section>
          <Link className="back-button" to="/">
            <h4>
              <i className="fas fa-chevron-left"></i> back to projects{" "}
            </h4>
          </Link>
          <div className="projectHead">
            <img
              className="aboutImg"
              src="https://taslim.me/project4/devTheme.png"
              alt="Dev Theme"
            />
            <h1>Simpsons Says</h1>
            <h2>UI Developer</h2>
            <ul>
              <li>
                Technologies: HTML, L(CSS), JavaScript, jQuery, 
              </li>
            </ul>
            <div className="projectDescription">
              <div>
                <a
                  className="link-color"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.keyconservation.org/"
                >
                  Key Conservation
                </a>{" "}
                is helping conservationists gain critical funding and global
                support through a mobile app (in development) that provides
                real-time updates on day-to-day campaigns. We are wildlife
                biologists who saw a massive disconnect in the way we could
                reach out for real-time global support for critical needs
                outside our project's budget. We also knew conservation
                organizations all over the world were facing similar issues.
                Additionally, supporters of conservation organizations want more
                transparency as to where their money is going, what the outcome
                of their support is, as well as, better ways to stay connected.
                <div className="style-italic">
                  Refrence:
                  <a
                    className="link-color"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.keyconservation.org/"
                  >
                    {" "}
                    Key Conservation
                  </a>
                </div>
              </div>
              <p>
                <Link className="buttonLink" to="/">
                  Live Demo <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </p>
            </div>
            <h1>Work </h1>
            GitHub: Trello:
          </div>
        </section>
      </Layout>
    )
  }
}

export default SimpsonsSays;
