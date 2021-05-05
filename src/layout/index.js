import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import config from "../../data/SiteConfig";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    <div className={styles.mainContainer}>{children}</div>
    <Footer />
  </>
);

export default MainLayout;
