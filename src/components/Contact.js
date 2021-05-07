import React from "react";
import { Link } from "gatsby";
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
        Help me improve this site 😊. Feel free to...
      </p>
      <ul>
        <li>
          <Link>Submit a bug report</Link>
        </li>
        <li>
          <Link>Request a new feature</Link>
        </li>
        <li>
          <Link>Suggest a topic</Link>
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <p className={styles.boldText}>
        Please email me for business enquiries 🤝.
      </p>
      <Link to="mailto:brian@morangcode.com" target="_blank">
        brian@morangcode.com
      </Link>
    </div>
    <hr />
  </div>
);

export default Contact;
