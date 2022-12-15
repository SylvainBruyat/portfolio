/*******************************************************************
 ********** Voir si possible de fusionner dans ButtonLink **********
 *******************************************************************/

export default function HeroButtonLink({ href, text, secondClass }) {
  return (
    <a href={href} className={`hero-button-link ${secondClass}`}>
      {text}
    </a>
  );
}
