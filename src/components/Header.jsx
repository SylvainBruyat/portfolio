import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="header__link-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'header__links header__links--active'
                  : 'header__links'
              }
            >
              Accueil
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
            >
              A propos
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
            >
              Projets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? 'header__links header__links--active'
                  : 'header__links'
              }
            >
              Compétences
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
