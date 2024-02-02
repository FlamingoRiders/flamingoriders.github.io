import * as React from "react";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";
import "styles.scss";
import { useDisclaimer } from "hooks/useDisclaimer";

type LayoutProps = {
  location: WindowLocation;
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  const { lastUpdate, copyright } = useDisclaimer();

  const isRootPath = location.pathname === "/";
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="footer">
        <div>
          <div>{copyright}</div>
          <a href="https://www.gatsbyjs.com/">
            <img src="https://img.shields.io/badge/built_with-gatsby-blue" />
          </a>
        </div>
        <div className="right-align">
          <div>Dernière mise à jour</div>
          <div>{lastUpdate}</div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
