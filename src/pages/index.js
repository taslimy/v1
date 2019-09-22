import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Link } from "gatsby"
import keycon from "../images/key-con.png"
import devtheme from "../images/dev-theme.png"
import partyplanner from "../images/party-planner.png"
import simpsonssays from "../images/simpsons-says.png"
import pintereach from "../images/pintereach.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <ul className="project-list">
        <li className="key-con">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/taslimy/Frontend-Mobile"
          >
            <div className="project-title">
              <h2>Key conservation</h2>
              <h3>React Native Application for a conservation organization</h3>
              <div className="double-button">
                <div>
                  <a
                    href="https://github.com/taslimy/Frontend-Mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4>Github</h4>
                  </a>
                </div>

                {/* <h4>Learn More</h4> */}
              </div>
            </div>
            <div className="img-container">
              <img src={keycon} alt="Key Conservation" loading="lazy" />
              />
            </div>
          </a>
        </li>
      </ul>
    </section>

    <section>
      <ul className="project-list">
        <li className="pintereach">
          <a
            href="https://github.com/pintereach-bw/Backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-title">
              <h2>Pintereach</h2>
              <h3>
                A RESTful backend API built with Node.js and deployed to Heroku
              </h3>
              <div className="double-button">
                <a
                  href="https://github.com/pintereach-bw/Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Github </h4>
                </a>

                {/* <h4>Learn More</h4> */}
              </div>
            </div>
            <div className="img-container">
              <img src={pintereach} alt="Pintereach" loading="lazy" />
              />
            </div>
          </a>
        </li>
      </ul>
    </section>

    <section>
      <ul className="project-list">
        <li className="partyplanner">
          <a
            href="https://github.com/party-planner-build-week/Party-Planner-FE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-title">
              <h2>Party Planner</h2>
              <h3>
                A party planning wep application for a user to plan an event
              </h3>
              <div className="double-button">
                <a
                  href="https://github.com/party-planner-build-week/Party-Planner-FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4> Github</h4>
                </a>
                {/* 
                <h4>Learn More</h4> */}
              </div>
            </div>
            <div className="img-container">
              <img src={partyplanner} alt="Party Planner" loading="lazy" />
              />
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <ul className="project-list">
        <li className="dev-theme">
          <a
            href="https://github.com/taslimy/simpsons-says"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-title">
              <h2>Simpsons Says</h2>
              <h3>Marketing page the internative web app Simpsons Says</h3>
              <div className="double-button">
                <a
                  href="https://github.com/taslimy/simpsons-says"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4> Github</h4>
                </a>
                {/* 
                <h4>Learn More</h4> */}
              </div>
            </div>
            <div className="img-container">
              <img src={simpsonssays} alt="Simpsons Says" />
              />
            </div>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <ul className="project-list">
        <li className="dev-theme">
          <a
            href="https://github.com/taslimy/dev-theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-title">
              <h2>dev. theme</h2>
              <h3>This is a free minimalist flexbox theme for developers</h3>
              <div className="double-button">
                <a
                  href="https://github.com/taslimy/dev-theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Github</h4>
                </a>

                {/* <h4>Learn More</h4> */}
              </div>
            </div>
            <div className="img-container">
              <img src={devtheme} alt="Dev Theme" />
              />
            </div>
          </a>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
