import React, { Component } from "react"

import Layout from "../../components/layout"

import { Link } from "gatsby"

export class KeyCon extends Component {
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
            <section className="project-info">
            <h1>Key Conservation</h1>
            <h2>React Native Application (IOS/Andriod)</h2>
            <ul>
              <li>React Native</li>
              <li>Expo</li>
              <li>React</li>
              <li>Redux</li>
              <li>auth0</li>
              <li>Node.js</li>
              <li>PostgreSQL</li> 
              <li>Express</li>
              <li>Knex</li>
              <li>Heroku</li>
            </ul>
            <div className="projectDescription">
              <p>
               Key Conservation is a team collobrated project for a non profit animail conservation organization. This project was chosen to be built in React Native also paired it with Expo.js for accelerated development. My job on this team varied from building out the relational database and deployment to Heroku. Also, worked on the Frontend connecting to the api and building out the User Interface
              </p>
            </div>
            <h1>Work </h1>
            GitHub: Trello:
            </section>
          </div>
        </section>
      </Layout>
    )
  }
}

export default KeyCon
