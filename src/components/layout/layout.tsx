import * as React from "react";
import { WindowLocation } from "@reach/router";
import "styles.scss";
import { useDisclaimer } from "hooks/useDisclaimer";
import Bio from "components/layout/bio";
import Navbar from "./navbar";

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
      <Navbar />
      <main className="main-content">{children}</main>

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
