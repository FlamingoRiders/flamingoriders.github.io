import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useCallback, useState } from "react";
import { AppRoutes, AppSections } from "routes/app-routes";

const Navbar: React.FC = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = useCallback(() => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }, [setIsBurgerMenuOpen, isBurgerMenuOpen]);

  return (
    <nav className="navbar has-shadow is-fixed-top">
      <div className="navbar-brand">
        <Link className="navbar-item" to={AppRoutes.HOME}>
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../../images/profile.png"
            width={50}
            height={50}
            quality={95}
            alt="Flamingo Riders profile picture"
          />
          {AppSections.HOME}
        </Link>
        <a
          onClick={toggleBurgerMenu}
          role="button"
          className={`navbar-burger ${isBurgerMenuOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarMenu"
        className={`navbar-menu ${isBurgerMenuOpen ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link
            className="navbar-item"
            to={AppRoutes.PRESENTATION}
            activeClassName="bd-navbar-item is-active"
          >
            {AppSections.PRESENTATION}
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to={AppRoutes.TRACE}>
              {AppSections.PREPARATION}
            </Link>
            <div className="navbar-dropdown is-boxed">
              <Link
                className="navbar-item"
                to={AppRoutes.TRACE}
                activeClassName="is-active"
              >
                {AppSections.TRACE}
              </Link>
              <hr className="navbar-divider" />
              <Link
                className="navbar-item"
                to={AppRoutes.EQUIPMENT}
                activeClassName="is-active"
              >
                {AppSections.EQUIPMENT}
              </Link>
            </div>
          </div>
          <Link
            className="navbar-item"
            to={AppRoutes.BLOG}
            activeClassName="is-active"
          >
            {AppSections.BLOG}
          </Link>
          <Link
            className="navbar-item"
            to={AppRoutes.MAPS}
            activeClassName="is-active"
          >
            {AppSections.MAPS}
          </Link>
          <Link
            className="navbar-item"
            to={AppRoutes.STATS}
            activeClassName="is-active"
          >
            {AppSections.STATS}
          </Link>
          <Link
            className="navbar-item"
            to={AppRoutes.PHOTOS}
            activeClassName="is-active"
          >
            {AppSections.PHOTOS}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
