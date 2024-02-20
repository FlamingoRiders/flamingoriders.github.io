import * as React from "react";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";
import "styles.scss";
import { useDisclaimer } from "hooks/useDisclaimer";
import Bio from "components/layout/bio";

type LayoutProps = {
  location: WindowLocation;
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  const { lastUpdate, copyright } = useDisclaimer();

  const isRootPath = location.pathname === "/";

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="site__header">
        <Link
          className="site__link"
          to="/presentation"
          activeClassName="site__link--active"
        >
          Qui sommes-nous ?
        </Link>
        <Link
          className="site__link"
          to="/"
          activeClassName="site__link--active"
        >
          Le récit
        </Link>
        <Link
          className="site__link"
          to="/maps"
          activeClassName="site__link--active"
        >
          La carte
        </Link>
        <Link
          className="site__link"
          to="/stats"
          activeClassName="site__link--active"
        >
          Les stats
        </Link>
      </header>
      <main className="content">{children}</main>

      <footer className="footer">
        <div className="footer__line">
          <Bio />
        </div>

        <div className="footer__line">
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
        </div>
      </footer>
    </div>
  );
};

export default Layout;
