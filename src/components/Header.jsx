import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="header-links__list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'header-links header-links__active' : 'header-links'
              }
            >
              <i class="fa-solid fa-house header-links__icon"></i>
              <span className="header-links__text">Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'header-links header-links__active' : 'header-links'
              }
            >
              <i class="fa-regular fa-address-card header-links__icon"></i>
              <span className="header-links__text">A propos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'header-links header-links__active' : 'header-links'
              }
            >
              <i class="fa-solid fa-laptop-code header-links__icon"></i>
              <span className="header-links__text">Projets</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? 'header-links header-links__active' : 'header-links'
              }
            >
              <i class="fa-solid fa-flask header-links__icon"></i>
              <span className="header-links__text">Compétences</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
