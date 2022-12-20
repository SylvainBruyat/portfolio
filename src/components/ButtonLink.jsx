export default function ButtonLink({
  href,
  text,
  listOfClasses,
  includeArrow,
}) {
  return (
    <a href={href} className={`${listOfClasses}`}>
      {text}{' '}
      {includeArrow === true && (
        <span className="button-link__arrow">&rArr;</span>
      )}
    </a>
  );
}
