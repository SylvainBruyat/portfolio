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
          src={`/assets/images/${imageName}`}
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
            //<li key={techno}>{techno}</li> //A transformer en composant avec key, titre et image
          ))}
        </ul>
        <div className="project-card__link-list">
          <button className="project-card__button">
            {/* Mettre les liens dans des boutons ? Ca bugue comme ça quand la fenêtre rétrécit. Potentiellement
         pas nécessaire si le responsive réduit le nombre de cartes par ligne en maintenant une largeur mini */}
            <a href={githubLink} className="project-card__link">
              Voir le code sur github
            </a>
          </button>
          <button className="project-card__button">
            <a href={projectLink} className="project-card__link">
              Accéder au site
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
