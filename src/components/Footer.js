import React from "react";
import { Link } from "gatsby";
import styles from "./Footer.module.scss";
import config from "../../data/SiteConfig";
import {
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
} from "../../static/icons";
const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <ul>
          <li>
            <GithubIcon className={styles.icons} />
          </li>
          <li>
            <InstagramIcon className={styles.icons} />
          </li>
          <li>
            <LinkedinIcon className={styles.icons} />
          </li>
          <li>
            <TwitterIcon className={styles.icons} />
          </li>
        </ul>
      </div>
      <div className={styles.iconsContainer}>
        <ul>
          <li className={styles.withBar}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.withBar}>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li className={styles.withBar}>
            <Link to="/">Mailing list</Link>
          </li>
          <li>
            <Link to="/">RSS</Link>
          </li> */}
        </ul>
      </div>
      <div className={styles.copyright}>{config.copyright}</div>
    </div>
  </footer>
);

export default Footer;
