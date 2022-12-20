import ButtonLink from '../components/ButtonLink';

export default function NotFound() {
  return (
    <main className="not-found">
      <h2>Erreur 404</h2>
      <p>
        Désolé, la page que vous cherchez n'existe pas ou n'est pas accessible
        pour l'instant.
      </p>
      <p>
        <ButtonLink
          href="/"
          text="Retour à la page d'accueil"
          listOfClasses="button-link"
          includeArrow={true}
        />
      </p>
    </main>
  );
}
