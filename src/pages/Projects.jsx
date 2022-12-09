import ProjectCard from '../components/ProjectCard';

import projects from '../data/projects.json';

export default function Projects() {
  return (
    <main>
      <h2>Portfolio</h2>
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
