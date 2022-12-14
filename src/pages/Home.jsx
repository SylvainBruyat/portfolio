import ButtonLink from '../components/ButtonLink';
import Techno from '../components/Techno';

import skills from '../data/skills.json';

export default function Home() {
  return (
    <main className="homepage">
      <h2>Bienvenue !</h2>
      <section className="homepage__hero">
        <p className="homepage__hero__text">
          Vous avez besoin d'un développeur React / Node.js ?<br />
          Je peux intervenir sur vos projets pour des missions de toute durée,
          en full remote.
        </p>
        <div className="homepage__hero__cta">
          <ButtonLink
            href="/contact"
            text="Me contacter"
            listOfClasses="button-link hero-button hero-button--primary"
            includeArrow={false}
          />
          <ButtonLink
            href="/a-propos"
            text="En savoir plus"
            listOfClasses="button-link hero-button hero-button--secondary"
            includeArrow={false}
          />
        </div>
      </section>
      <div className="homepage__content-wrapper">
        <section className="homepage__about">
          <h3 className="homepage__h3">Qui suis-je ?</h3>
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
                Hello, je m'appelle{' '}
                <span className="text-emphasis">Sylvain</span> et je suis{' '}
                <span className="text-emphasis">développeur web freelance</span>
                .
              </p>
              <p>
                Phrase typique de freelance : « En 2021, j’ai tout plaqué pour
                changer de vie ! ». Et en ce qui me concerne, je pourrais
                presque rajouter : « Encore une fois. ».
              </p>
              <p>
                Envie d'
                <span className="text-emphasis">en savoir plus</span> ?
              </p>
              <p className="homepage__button-wrapper">
                <ButtonLink
                  href="/a-propos"
                  text="A propos"
                  listOfClasses="button-link"
                  includeArrow={true}
                />
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
                width="100px"
                height="50px"
                className="homepage__projects__picture homepage__projects__picture--1"
              ></img>
              <img
                src={require('../assets/images/ohmyfood.webp')}
                alt="Capture d'écran du site web Ohmyfood"
                width="100px"
                height="50px"
                className="homepage__projects__picture homepage__projects__picture--2"
              ></img>
              <img
                src={require('../assets/images/kanap.webp')}
                alt="Capture d'écran du site web Kanap"
                width="100px"
                height="50px"
                className="homepage__projects__picture homepage__projects__picture--3"
              ></img>
              <img
                src={require('../assets/images/groupomania.webp')}
                alt="Capture d'écran du site web Groupomania"
                width="100px"
                height="50px"
                className="homepage__projects__picture homepage__projects__picture--4"
              ></img>
              <img
                src={require('../assets/images/portfolio.webp')}
                alt="Capture d'écran du site web portfolio"
                width="100px"
                height="50px"
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
              <p className="homepage__button-wrapper">
                <ButtonLink
                  href="/projets"
                  text="Portfolio"
                  listOfClasses="button-link"
                  includeArrow={true}
                />
              </p>
            </article>
          </div>
        </section>

        <section>
          <h3 className="homepage__h3">Compétences</h3>
          <p>
            Je maîtrise évidemment <span className="text-emphasis">HTML 5</span>
            , <span className="text-emphasis">CSS 3</span> et{' '}
            <span className="text-emphasis">JavaScript</span>, mais également la{' '}
            <span className="text-emphasis">stack MERN</span>, entre autres.
          </p>
          <p>
            J'ai aussi acquis beaucoup d'autres compétences, notamment sur le{' '}
            <span className="text-emphasis">travail d'équipe</span>, la gestion
            de projet, ou encore la{' '}
            <span className="text-emphasis">résolution de problèmes</span>{' '}
            durant mes 15 ans d'expérience professionnelle dans l'industrie
            aéronautique.
          </p>
          <div className="homepage__skills">
            <div className="homepage__skills__hard">
              <h4 className="homepage__h4">Compétences techniques</h4>
              <ul className="homepage__skills-list">
                {skills.hardSkills.map((skill) => (
                  <Techno
                    key={skill.name}
                    name={skill.name}
                    logo={skill.image}
                  />
                ))}
              </ul>
            </div>
            <div className="homepage__skills__soft">
              <h4 className="homepage__h4">Compétences personnelles</h4>
              <ul className="homepage__skills-list">
                {skills.softSkills.map((skill) => (
                  <Techno
                    key={skill.name}
                    name={skill.name}
                    logo={skill.image}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3 className="homepage__h3">Me contacter</h3>
          <p>
            Vous avez{' '}
            <span className="text-emphasis">
              besoin d'un développeur freelance
            </span>{' '}
            pour votre projet front end en React ? Vous cherchez un renfort sur
            du back end Node.js ? Vous souhaitez quelqu'un d'opérationnel
            immédiatement ?
          </p>
          <p>
            <span className="text-emphasis">Contactez-moi</span> pour que nous
            discutions de votre besoin et de l'aide que je peux vous apporter.
          </p>
          <p className="homepage__button-wrapper">
            <ButtonLink
              href="/contact"
              text="Contact"
              listOfClasses="button-link"
              includeArrow={true}
            />
          </p>
        </section>
      </div>
    </main>
  );
}
