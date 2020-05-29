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
        <Link>Home</Link>
        <span className={styles.separator}>|</span>
        <Link>About</Link>
        <span className={styles.separator}>|</span>
        <Link>Contact</Link>
        <span className={styles.separator}>|</span>
        <Link>Mailing list</Link>
        <span className={styles.separator}>|</span>
        <Link>RSS</Link>
      </div>
      <div className={styles.copyright}>
        {config.copyright}
      </div>
    </div>
  </footer>
);

export default Footer;
