import { NavLink } from 'react-router-dom';

export default function ButtonLink({
  href,
  text,
  listOfClasses,
  includeArrow,
}) {
  return (
    <NavLink to={href} className={`${listOfClasses}`}>
      {text}{' '}
      {includeArrow === true && (
        <span className="button-link__arrow">&rArr;</span>
      )}
    </NavLink>
  );
}
