/* 
Faire une hero section
*/

import ButtonLink from '../components/ButtonLink';

export default function Home() {
  return (
    <main className="homepage">
      <h1>Sylvain Bruyat | Développeur Web Freelance</h1>

      <section className="homepage__about">
        <h2 className="homepage__h2">A propos</h2>
        <div>
          <p>
            Je m'appelle <span className="text-emphasis">Sylvain Bruyat</span>,
            je suis{' '}
            <span className="text-emphasis">développeur web freelance</span>.
            {/*
            Reconversion
            Green IT / numérique responsable
            */}
          </p>
          <p>
            <img
              src="/assets/images/sylvain-bruyat.webp"
              alt="Sylvain Bruyat"
              width="200px"
              height="240px"
              className="homepage__picture"
            />
          </p>
        </div>
        <p className="button-wrapper">
          <ButtonLink href="/about" text="A propos" />
        </p>
      </section>

      <section>
        <h2 className="homepage__h2">Projets</h2>
        <p>
          Je peux travailler en <span className="text-emphasis">autonomie</span>{' '}
          ou aider votre équipe sur des projets{' '}
          <span className="text-emphasis">frontend</span>,{' '}
          <span className="text-emphasis">backend</span> ou{' '}
          <span className="text-emphasis">fullstack</span>.
        </p>
        <p>
          Mais ne me croyez pas sur parole. Allez plutôt voir ce que je peux
          réaliser avec et pour vous.
        </p>
        <p className="button-wrapper">
          <ButtonLink href="/projects" text="Portfolio" />
        </p>
      </section>

      <section>
        <h2 className="homepage__h2">Compétences</h2>
        <p>
          Je maîtrise évidemment <span className="text-emphasis">HTML 5</span>{' '}
          et <span className="text-emphasis">CSS 3</span>, mais également la
          stack <span className="text-emphasis">MERN</span>, entre autres.
        </p>
        <p>
          J'ai également acquis beaucoup d'autres compétences, notamment sur le{' '}
          <span className="text-emphasis">travail d'équipe</span>, la gestion de
          projet, ou encore la{' '}
          <span className="text-emphasis">résolution de problèmes</span> durant
          mes 15 ans d'expérience professionnelle dans l'industrie aéronautique.
        </p>
        <p>Pour en savoir plus ?</p>
        <p className="button-wrapper">
          <ButtonLink href="/skills" text="Compétences" />
        </p>
      </section>
    </main>
  );
}
