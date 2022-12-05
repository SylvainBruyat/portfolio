/* Créer une page erreur 404 avec renvoi vers la page d'accueil */
import ButtonLink from '../components/ButtonLink';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Erreur 404</h1>
      <p>
        Désolé, la page que vous cherchez n'existe pas ou n'est pas accessible
        pour l'instant.
      </p>
      <p>
        <ButtonLink href="/" text="Retour à la page d'accueil" />
      </p>
    </main>
  );
}
