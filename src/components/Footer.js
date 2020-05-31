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
        <GithubIcon className={styles.icons} />
        <InstagramIcon className={styles.icons} />
        <LinkedinIcon className={styles.icons} />
        <TwitterIcon className={styles.icons} />
      </div>
      <div className={styles.linksContainer}>
        <ul>
          <li className={styles.withBar}>
            <Link>Home</Link>
          </li>
          <li className={styles.withBar}>
            <Link>About</Link>
          </li>
          <li className={styles.withBar}>
            <Link>Contact</Link>
          </li>
          <li className={styles.withBar}>
            <Link>Mailing list</Link>
          </li>
          <li>
            <Link>RSS</Link>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>{config.copyright}</div>
    </div>
  </footer>
);

export default Footer;
