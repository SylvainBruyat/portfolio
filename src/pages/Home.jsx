/* 
Faire une hero section
*/

import ButtonLink from '../components/ButtonLink';
import Techno from '../components/Techno';

import skills from '../data/skills.json';

export default function Home() {
  return (
    <main className="homepage">
      <h2>Bienvenue</h2>

      <section className="homepage__about">
        <h3 className="homepage__h3">A propos</h3>
        <div className="homepage__about__content">
          <p>
            <img
              src={require('../assets/images/sylvain-bruyat.webp')}
              alt="Portrait de Sylvain Bruyat"
              width="250px"
              height="250px"
              className="homepage__picture"
            />
          </p>
          <article>
            <p>
              Hello, je m'appelle <span className="text-emphasis">Sylvain</span>{' '}
              et je suis{' '}
              <span className="text-emphasis">développeur web freelance</span>.
            </p>
            <p>
              Phrase typique de freelance : « En 2021, j’ai tout plaqué pour
              changer de vie ! ». Et en ce qui me concerne, je pourrais presque
              rajouter : « Encore une fois. ».
            </p>
            <p>
              Envie d'
              <span className="text-emphasis">en savoir plus</span> ?
            </p>
            <p>
              <ButtonLink href="/about" text="A propos" />
            </p>
          </article>
        </div>
      </section>

      <section>
        <h3 className="homepage__h3">Projets</h3>
        <div className="homepage__projects__content">
          <div className="homepage__projects__content__pictures">
            <img
              src={require('../assets/images/booki.webp')}
              alt="Capture d'écran du site web Booki"
              height="50px"
              width="50px"
              className="homepage__projects__picture homepage__projects__picture--1"
            ></img>
            <img
              src={require('../assets/images/ohmyfood.webp')}
              alt="Capture d'écran du site web Ohmyfood"
              height="50px"
              width="50px"
              className="homepage__projects__picture homepage__projects__picture--2"
            ></img>
            <img
              src={require('../assets/images/kanap.webp')}
              alt="Capture d'écran du site web Kanap"
              height="50px"
              width="50px"
              className="homepage__projects__picture homepage__projects__picture--3"
            ></img>
            <img
              src={require('../assets/images/groupomania.webp')}
              alt="Capture d'écran du site web Groupomania"
              height="50px"
              width="50px"
              className="homepage__projects__picture homepage__projects__picture--4"
            ></img>
            <img
              src={require('../assets/images/portfolio.webp')}
              alt="Capture d'écran du site web portfolio"
              height="50px"
              width="50px"
              className="homepage__projects__picture homepage__projects__picture--5"
            ></img>
          </div>
          <article>
            <p>
              Je peux travailler en{' '}
              <span className="text-emphasis">autonomie</span> ou aider votre
              équipe sur des projets{' '}
              <span className="text-emphasis">frontend</span>,{' '}
              <span className="text-emphasis">backend</span> ou{' '}
              <span className="text-emphasis">fullstack</span>.
            </p>
            <p>
              Mais ne me croyez pas sur parole. Allez plutôt{' '}
              <span className="text-emphasis">
                voir ce que je peux réaliser
              </span>{' '}
              avec et pour vous.
            </p>
            <p>
              <ButtonLink href="/projects" text="Portfolio" />
            </p>
          </article>
        </div>
      </section>

      <section>
        <h3 className="homepage__h3">Compétences</h3>
        <p>
          Je maîtrise évidemment <span className="text-emphasis">HTML 5</span>,{' '}
          <span className="text-emphasis">CSS 3</span> et{' '}
          <span className="text-emphasis">JavaScript</span>, mais également la
          stack <span className="text-emphasis">MERN</span>, entre autres.
        </p>
        <p>
          J'ai également acquis beaucoup d'autres compétences, notamment sur le{' '}
          <span className="text-emphasis">travail d'équipe</span>, la gestion de
          projet, ou encore la{' '}
          <span className="text-emphasis">résolution de problèmes</span> durant
          mes 15 ans d'expérience professionnelle dans l'industrie aéronautique.
        </p>
        <h4 className="homepage__h4">Compétences techniques</h4>
        <ul className="homepage__skills-list">
          {skills.hardSkills.map((skill) => (
            <Techno key={skill.name} name={skill.name} logo={skill.image} />
          ))}
        </ul>
      </section>
      <section>
        <h3 className="homepage__h3">Me contacter</h3>
        <p></p>
        <p>
          <ButtonLink href="/contact" text="Contact" />
        </p>
      </section>
    </main>
  );
}
