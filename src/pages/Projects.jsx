import ProjectCard from '../components/ProjectCard';

import projects from '../data/projects.json';

export default function Projects() {
  return (
    <main>
      <h2>Portfolio</h2>
      <p>Voici mes derniers projets réalisés.</p>
      <p>
        Certains seront un peu long à s'afficher au départ. Ce ne sont pas des
        problèmes de performance. Il faut juste un peu de temps pour que le
        service d'hébergement gratuit se réveille.{' '}
      </p>
      <section className="projects-wrapper">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageName={project.imageName}
            description={project.description}
            technos={project.technos}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
          />
        ))}
      </section>
    </main>
  );
}
