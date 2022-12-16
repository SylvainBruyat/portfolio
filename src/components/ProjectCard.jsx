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
      <h3>{title}</h3>
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
          <a href={githubLink} className="project-card__link">
            <p>Voir le code sur Github</p>
          </a>

          {projectLink === '' ? (
            <p className="project-card__link no-link">Bientôt en ligne</p>
          ) : (
            <a href={projectLink} className="project-card__link">
              <p>Accéder au site</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
