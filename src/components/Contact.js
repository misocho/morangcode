import React from "react";
import {
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
} from "../../static/icons";
import styles from "./Contact.module.scss";

const Contact = () => (
  <div className={styles.container}>
    <h1>Contact Me!</h1>
    <div className={styles.socialIconsContainer}>
      <p>Want us to connect? Here's my social media 👋. </p>
      <ul>
        <li>
          <GithubIcon className={styles.icon} />
        </li>
        <li>
          <InstagramIcon className={styles.icon} />
        </li>
        <li>
          <LinkedinIcon className={styles.icon} />
        </li>
        <li>
          <TwitterIcon className={styles.icon} />
        </li>
      </ul>
    </div>
    <hr />

    <div className={styles.userActions}>
      <p className={styles.boldText}>
        Help me improve this site. Feel free to...
      </p>
      <ul>
        <li>
          <a
            href="https://github.com/misocho/morangcode/issues/new?template=bug_report.md"
            target="_blank"
          >
            Submit a bug report
          </a>
        </li>
        <li>
          <a
            href="https://github.com/misocho/morangcode/issues/new?template=feature_request.md"
            target="_blank"
          >
            Request a new feature
          </a>
        </li>
        <li>
          <a
            href="https://github.com/misocho/morangcode/issues/new?template=content-suggestion.md"
            target="_blank"
          >
            Suggest a topic
          </a>
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <p className={styles.boldText}>
        Please email me for business enquiries 🤝.
      </p>
      <a href="mailto:brian@morangcode.com" target="_blank">
        brian@morangcode.com
      </a>
    </div>
    <hr />
  </div>
);

export default Contact;
