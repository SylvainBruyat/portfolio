/* A mettre dans les cartes :
- liens github et site
*/

import Techno from './Techno';

export default function ProjectCard({
  title,
  imageName,
  description,
  technos,
  githubLink,
  projectLink,
}) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <div className="project-card__image-wrapper">
        <img
          className="project-card__image"
          src={require(`../assets/images/${imageName}`)}
          alt={`Projet ${title}`}
          width="250"
          height="125"
        />
      </div>
      <p>{description}</p>
      <div className="project-card__techno-links">
        <ul className="project-card__techno-list">
          {technos.map((techno) => (
            <Techno key={techno.name} name={techno.name} logo={techno.logo} />
          ))}
        </ul>
        <div className="project-card__link-list">
          <button className="project-card__button">
            {/* Enlever les boutons autour des liens et styliser les liens comme des boutons */}
            <a href={githubLink} className="project-card__link">
              Voir le code sur Github
            </a>
          </button>
          <button className="project-card__button">
            {projectLink === '' ? (
              <p className="project-card__link">Bientôt en ligne</p>
            ) : (
              <a href={projectLink} className="project-card__link">
                Accéder au site
              </a>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
