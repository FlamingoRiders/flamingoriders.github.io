import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useCallback, useState } from "react";

const Navbar: React.FC = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = useCallback(() => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }, [setIsBurgerMenuOpen, isBurgerMenuOpen]);

  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <div className="navbar-item">
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
          Flamingo Riders
        </div>
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
            to="/qui-sommes-nous"
            activeClassName="bd-navbar-item is-active"
          >
            Qui sommes-nous ?
          </Link>
          <Link className="navbar-item" to="/" activeClassName="is-active">
            Le récit
          </Link>
          <Link className="navbar-item" to="/maps" activeClassName="is-active">
            La carte
          </Link>
          <Link className="navbar-item" to="/stats" activeClassName="is-active">
            Les stats
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/trace">
              La préparation
            </Link>
            <div className="navbar-dropdown is-boxed">
              <Link
                className="navbar-item"
                to="/trace"
                activeClassName="is-active"
              >
                Le tracé
              </Link>
              <hr className="navbar-divider" />
              <Link
                className="navbar-item"
                to="/equipement"
                activeClassName="is-active"
              >
                L'équipement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
