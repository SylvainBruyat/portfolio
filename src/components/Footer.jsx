/* A mettre dans le footer :
Liens vers mes réseaux et sites :
  - LinkedIn
  - Github
  - ... (Codewars ou autre si pertinent)
*/

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Sylvain Bruyat © 2022</p>
      <ul className="footer__links">
        <li>
          <a
            href="https://www.linkedin.com/in/sylvain-bruyat/"
            title="Mon profil LinkedIn"
            className="footer__link"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SylvainBruyat"
            title="Mon profil Github"
            className="footer__link"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
