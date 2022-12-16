export default function Techno({ name, logo }) {
  return (
    <li className="techno-card">
      {logo === '' ? (
        <p className="techno-card__name">{name}</p>
      ) : (
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
