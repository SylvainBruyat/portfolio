export default function ButtonLink({ href, text, className }) {
  return (
    <a href={href} className="button-link">
      {text} <span className="button-link__arrow">&rArr;</span>
    </a>
  );
}
