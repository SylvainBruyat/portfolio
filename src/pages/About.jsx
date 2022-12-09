export default function About() {
  /*******************************************************************************************
   * Reprendre la couleur des text-emphasis en faisant attention au contraste et remettre au *
   * propre les variables et les classes *****************************************************
   ******************************************************************************************/
  return (
    <main className="about">
      <h2>A propos</h2>
      <p>
        Bonjour, je m'appelle{' '}
        <span className="text-emphasis text-emphasis">Sylvain</span>, je suis{' '}
        <span className="text-emphasis text-emphasis">
          développeur web freelance
        </span>
        .
      </p>
      <section className="about__section about__section--tertiary-background">
        <div className="about__content about__content--aligned-left">
          <h3 className="about__h3">La vie avant le web</h3>
          <p>
            Phrase typique de freelance : « En 2021, j’ai tout plaqué pour
            changer de vie ! ». Et en ce qui me concerne, je pourrais presque
            rajouter : « Encore une fois. ».
          </p>
          <p>
            Effectivement, j’ai démissionné d’un CDI avec 10 ans d’ancienneté et
            j’ai mis fin à{' '}
            <span className="text-emphasis text-emphasis--dark">
              15 ans de carrière dans l’industrie aéronautique
            </span>{' '}
            pour prendre une année sabbatique, puis me reconvertir en tant que
            développeur web.
          </p>
          <p>
            Avant ça, j’avais entre autres refusé en 2008 un CDI dans une très
            bonne entreprise à Paris pour partir à Toulouse avec comme seule
            garantie un rendez-vous pour un entretien d’embauche. Puis je suis
            parti vivre et travailler au Japon en 2016, avant de poursuivre vers
            les États-Unis en 2017 quand mon emploi a traversé le Pacifique. Et
            c’est donc après un retour en France non-choisi en 2020 (merci le
            Covid) que j’ai décidé de tout changer. Encore une fois.
          </p>
          <p>
            Vous en savez maintenant un peu plus sur mon parcours, mais en quoi
            est-ce intéressant ?
          </p>
        </div>
      </section>
      <section className="about__section">
        <div className="about__content about__content--aligned-right">
          <h3 className="about__h3 about__h3--light">Soft skills</h3>
          <p>
            Ces aventures m’ont permis de{' '}
            <span className="text-emphasis">
              développer beaucoup de compétences
            </span>{' '}
            très utiles, en particulier dans le développement web.
          </p>
          <p>
            Tout d’abord, il faut de bonnes{' '}
            <span className="text-emphasis">
              capacités d’apprentissage, d’adaptation et d’intégration
            </span>{' '}
            pour vivre et travailler sur 3 continents différents en l’espace de
            2 ans.
          </p>
          <p>
            J’ai aussi développé mes capacités d’
            <span className="text-emphasis">autonomie</span>, de{' '}
            <span className="text-emphasis">travail en équipe</span> et mon{' '}
            <span className="text-emphasis">sens des responsabilités</span>,
            notamment en codirigeant une équipe de 12 ingénieurs.
          </p>
          <p>
            Ensuite, ayant été sous-traitant de grands groupes industriels
            pendant 15 ans, j’ai toujours apporté une attention particulière au
            service et à la{' '}
            <span className="text-emphasis">satisfaction du client</span>. Et
            j’ai au fil du temps travaillé selon la plupart des méthodes les
            plus courantes : scrum, agile, 5S, lean, etc.
          </p>
          <p>
            Enfin, les années passées à tester des moteurs d’avion et leurs
            logiciels font que les concepts de{' '}
            <span className="text-emphasis">tests unitaires</span> ou de{' '}
            <span className="text-emphasis">tests d’intégration</span> sont très
            familiers pour moi.
          </p>
        </div>
      </section>
      <section className="about__section about__section--tertiary-background">
        <div className="about__content about__content--aligned-left">
          <h3 className="about__h3">Hard skills</h3>
          <p>
            Et puisqu’on parle de logiciels, parlons un peu technique. Le choix
            de devenir développeur web n’est pas dû au hasard.
          </p>
          <p>
            J’ai appris la programmation informatique lors de mes études : C,
            C++, LabVIEW, etc. Mais aussi une compétence-clé malheureusement
            sous-estimée : l’
            <span className="text-emphasis text-emphasis--dark">
              algorithmique
            </span>
            .
          </p>
          <p>
            J’ai entretenu ces connaissances de base tout au long de ma
            carrière, en testant le fonctionnement et les logiques de nombreux
            logiciels critiques dans un avion : contrôle des moteurs,
            pressurisation de la cabine, détection et extinction incendie, etc.
          </p>
          <p>
            Alors au moment de{' '}
            <span className="text-emphasis text-emphasis--dark">
              changer de carrière
            </span>
            , le choix de{' '}
            <span className="text-emphasis text-emphasis--dark">
              replonger dans le développement
            </span>{' '}
            a été assez logique et naturel. Mais plutôt que de rester dans
            l’industrie, je me suis tourné vers le web, parce que{' '}
            <span className="text-emphasis text-emphasis--dark">
              j’aime le challenge et la nouveauté
            </span>
            .
          </p>
          <p>
            Même si les langages utilisés sont différents, les concepts sont
            similaires. Donc l’adaptation a été relativement simple.
          </p>
        </div>
      </section>
      <section className="about__section about__section--aligned-right">
        <div className="about__content about__content--aligned-right">
          <h3 className="about__h3 about__h3--light">Et maintenant ?</h3>
          <p>
            Après une formation chez OpenClassrooms, je suis maintenant prêt à{' '}
            <span className="text-emphasis">
              vous accompagner sur vos projets
            </span>
            . Sensibilisé et formé aux enjeux du{' '}
            <span className="text-emphasis">
              numérique responsable (greenIT)
            </span>
            , je peux également vous aider à maîtriser l’empreinte carbone de
            vos services et outils numériques.
          </p>
        </div>
      </section>
    </main>
  );
}
