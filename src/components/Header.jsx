import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-h1">
        <NavLink to="/">
          <img
            src={require('../assets/images/logo_200-200_no-background.png')}
            alt="Logo de Sylvain Bruyat Développeur Web"
            className="header__logo"
          />
        </NavLink>
        <h1 className="header__h1">
          Sylvain Bruyat | Développeur Web Freelance
        </h1>
      </div>
      <nav className="header__nav">
        <ul className="header__links-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'header__links header__links--active'
                  : 'header__links'
              }
              aria-label="Accueil"
            >
              <i
                className="fa-solid fa-house header__links__icon"
                aria-hidden="true"
              ></i>
              <span className="header__links__text">Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'header__links header__links--active'
                  : 'header__links'
              }
              aria-label="A propos"
            >
              <i
                className="fa-regular fa-id-card header__links__icon"
                aria-hidden="true"
              ></i>
              <span className="header__links__text">A propos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? 'header__links header__links--active'
                  : 'header__links'
              }
              aria-label="Projets"
            >
              <i
                className="fa-solid fa-laptop-code header__links__icon"
                aria-hidden="true"
              ></i>
              <span className="header__links__text">Projets</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'header__links header__links--active'
                  : 'header__links'
              }
              aria-label="Contact"
            >
              <i
                className="fa-regular fa-envelope header__links__icon"
                aria-hidden="true"
              ></i>
              <span className="header__links__text">Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
