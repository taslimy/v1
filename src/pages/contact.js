import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

class Contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About me" />
        <section id="aboutMe">
          <StaticQuery
            query={aboutMe}
            render={data => (
              <Image
                fluid={data.aboutme.childImageSharp.fluid}
                alt="About me"
                className="aboutImg"
              />
            )}
          />
          <div className="aboutP">
            <h2>about</h2>
            <p>
              My name <strong>Taslim Yakub</strong>, I am a Full Stack
              Developer. I have had on on off coding experience and now I've
              dedicated myself to becoming a developer. In my down time when I'm
              not learning, or programming, I mostly play video games especially
              Dota 2 and the occasional Minecraft, watching movies, and
              exploring local museums.
            </p>

            <h2>technologies I've worked with</h2>
            <p>
              <i className="fas fa-angle-right"></i> HTML & (L)CSS, (S)CSS
            </p>
            <p>
              <i className="fas fa-angle-right"></i> JavaScript (ES6+)
            </p>
            <p>
              <i className="fas fa-angle-right"></i> React & Redux
            </p>
            <p>
              <i className="fas fa-angle-right"></i> React Native
            </p>
            <p>
              <i className="fas fa-angle-right"></i> Python
            </p>
            <p>
              <i className="fas fa-angle-right"></i> NodeJS + Express + Knex +
              Jest
            </p>
            <p>
              <i className="fas fa-angle-right"></i> PostgresSQL
            </p>

            <h2>adobe programs</h2>
            <p>
              <i className="fas fa-angle-right"></i> Adobe Photoshop 2018
            </p>
            <p>
              <i className="fas fa-angle-right"></i> Adobe Illustrator 2018
            </p>
            <p>
              <i className="fas fa-angle-right"></i> Adobe After Effects 2018
            </p>
            <h2>operating systems</h2>
            <p>
              <i className="fas fa-angle-right"></i> Windows 10
            </p>
            <p>
              <i className="fas fa-angle-right"></i> Mac OS
            </p>
            <p>
              <i className="fas fa-angle-right"></i> Linux: Ubuntu (Openstack
              Cloud Development)
            </p>
            <h2>contact</h2>
            <p>
              <i className="fas fa-angle-right"></i>
              <a href="mailto:taslim.yakub.dev@gmail.com">
                {" "}
                taslim.yakub.dev@gmail.com
              </a>
            </p>
            <p>
              <i className="fas fa-angle-right"></i>
              <a href="tel:13474379337"> +1 347 437 9337</a>
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}

const aboutMe = graphql`
  query aboutMe {
    aboutme: file(absolutePath: { regex: "/aboutme.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality:90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Contact
