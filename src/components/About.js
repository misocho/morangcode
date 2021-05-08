import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styles from "./About.module.scss";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/portfolioImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  return (
    <>
      <h1>Hi, I'm Brian, a software engineer from Nairobi, Kenya!</h1>
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutImage}>
          <Img fluid={data.file.childImageSharp.fluid} alt="brian" />
          <div className={styles.sectionContainer}>
            <h2>About me</h2>
            <p>
              Here's a little about me. I love software engineering with a focus
              on the backend. I got into this out of pure curiosity and ended up
              being completely engrossed by it. I don't have much going on
              outside of development. I love reading non-fiction books, recently
              started learning to draw. In my downtime, I play video games or
              watch anime. My current favorite TV show is Attack On Titan. I'm
              horrible at singing. I currently work as a contract backend
              developer at{" "}
              <a href="https://crowdbotics.com" target="_blank">
                Crowdbotics
              </a>{" "}
              while taking my BSC. in Mathematics with computing at Kisii
              University, Kenya. You can follow me on Instagram. I'll be posting
              weekly Gists on my{" "}
              <a href="https://www.instagram.com/morangcode/" target="_blank">
                Instagram
              </a>{" "}
              Story.
            </p>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h2>About this blog</h2>
          <p>
            I strive to be a better developer every day. Some of the recommended
            ways to achieve this are by teaching and journaling progress. This
            blog is meant to serve this purpose by acting as a platform for me
            to track and measure my progress as I learn and for you to learn
            various software engineering topics with real-world examples. We
            will discuss algorithms & data structures, system design &
            architecture, databases, APIs & Microservices, DevOps, and tackle
            emerging technologies. Join me in this journey, and let us learn
            together 🙂.
          </p>
        </div>
        <div>
          <h2>Resources</h2>
          <p>Interested in the tools and resources I use to learn?</p>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg"
                target="_blank"
              >
                Hussein Nasser's youtube channel
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"
                target="_blank"
              >
                FreeCodeCamp.org youtube channel
              </a>
            </li>
            <li>
              <a
                href="https://github.com/donnemartin/system-design-primer"
                target="_blank"
              >
                The system design primer
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/" target="_blank">
                Leetcode
              </a>
            </li>
            <li>
              <a
                href="https://www.crackingthecodinginterview.com/"
                target="_blank"
              >
                Cracking the coding interview
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.sectionContainer}>
          <h2>Get in touch</h2>
          <p>
            Have any questions or would like to say hi 👋,{" "}
            <Link to="/contact">contact me!</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
