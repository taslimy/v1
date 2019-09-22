import React, { Component } from "react"

import Layout from "../../components/layout"

import { Link } from "gatsby"

export class project1 extends Component {
  render() {
    return (
      <Layout>
        <section>
          <div className="projectHead">
            {/* Reminder to remove placeholder image.~ */}
            <img
              className="aboutImg"
              src="https://taslim.me/project4/devTheme.png"
              alt="Dev Theme"
            />
            <h1>Dev. Theme</h1>
            <h2>Personal project / 2019</h2>
            <ul>
              <li>HTML5, CSS3 </li>
            </ul>
            <div className="projectDescription">
              <p>
                Enim fugiat tempor fugiat magna eu ad elit aliquip esse ad anim.
                Excepteur consectetur et qui aute sit non sit esse commodo et
                dolore. Dolore sit velit enim aliquip ipsum laborum ipsum
                mollit. Id nulla proident laborum magna ad velit consectetur
                duis in esse nisi.
              </p>
              <p>
              <Link className="buttonLink" to="/">
                Live Demo <i className="fas fa-arrow-circle-right"></i>
              </Link>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default project1
