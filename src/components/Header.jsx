import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="header-links-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'header-links header-links--active' : 'header-links'
              }
            >
              <i className="fa-solid fa-house header-links__icon"></i>
              <span className="header-links__text">Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'header-links header-links--active' : 'header-links'
              }
            >
              <i className="fa-regular fa-id-card header-links__icon"></i>
              <span className="header-links__text">A propos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'header-links header-links--active' : 'header-links'
              }
            >
              <i className="fa-solid fa-laptop-code header-links__icon"></i>
              <span className="header-links__text">Projets</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'header-links header-links--active' : 'header-links'
              }
            >
              <i className="fa-regular fa-envelope header-links__icon"></i>
              <span className="header-links__text">Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
