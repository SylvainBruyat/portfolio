export default function Techno({ name, logo }) {
  return (
    <li className="techno-card">
      {logo === '' ? (
        <p className="techno-card__name">{name}</p>
      ) : (
        /* Remplacer les images par des Font Awesomes ? Permettrait un meilleur rendu au niveau des couleurs
    mais moins facile d'identifier les technos à cause des couleurs */
        <img
          src={require(`../assets/icons/${logo}`)}
          alt={name}
          width="40px"
          height="40px"
        />
      )}
    </li>
  );
}
