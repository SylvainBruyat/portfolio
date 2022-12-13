import { useRef, useEffect } from 'react';
import {
  sendEmail,
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhoneNumber,
  validateMessage,
} from '../services/contact-form-functions';

export default function Contact() {
  const form = useRef();
  /*******************************************************************************************
   * Reste à afficher un message pendant l'envoi puis un message de confirmation ou d'erreur *
   * et à faire la validation des entrées avec message d'erreur sur chaque champ *************
   ******************************************************************************************/

  const maximumMessageLength = 3000;
  const minimumMessageLength = 50;

  const verifyFirstName = (evt) => {
    const firstName = evt.target.value;
    if (firstName === '') {
      document.getElementById('error-message--first-name').textContent = '';
      return;
    }
    const isFirstNameValid = validateFirstName(firstName);
    if (isFirstNameValid === false)
      document.getElementById('error-message--first-name').textContent =
        'Votre prénom doit être uniquement composé de lettres, espaces et tirets et comporter au moins 2 caractères.';
    else document.getElementById('error-message--first-name').textContent = '';
  };

  const verifyLastName = (evt) => {
    const lastName = evt.target.value;
    if (lastName === '') {
      document.getElementById('error-message--last-name').textContent = '';
      return;
    }
    const isLastNameValid = validateLastName(lastName);
    if (isLastNameValid === false)
      document.getElementById('error-message--last-name').textContent =
        'Votre nom doit être uniquement composé de lettres, espaces, tirets et apostrophes et comporter au moins 2 caractères.';
    else document.getElementById('error-message--last-name').textContent = '';
  };

  const verifyEmail = (evt) => {
    const email = evt.target.value;
    if (email === '') {
      document.getElementById('error-message--email').textContent = '';
      return;
    }
    const isEmailValid = validateEmail(email);
    if (isEmailValid === false)
      document.getElementById('error-message--email').textContent =
        'Veuillez saisir une adresse email valide (format attendu : exemple@mail.com)';
    else document.getElementById('error-message--email').textContent = '';
  };

  const verifyPhoneNumber = (evt) => {
    const phoneNumber = evt.target.value;
    if (phoneNumber === '') {
      document.getElementById('error-message--phone').textContent = '';
      return;
    }
    const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
    if (isPhoneNumberValid === false)
      document.getElementById('error-message--phone').textContent =
        'Veuillez saisir votre numéro sans espace (entre 7 et 16 chiffres, format attendu : 0123456789 ou +33123456789)';
    else document.getElementById('error-message--phone').textContent = '';
  };

  const verifyMessage = (evt) => {
    const message = evt.target.value;
    if (message === '') {
      document.getElementById('error-message--message').textContent = '';
      return;
    }
    const isMessageValid = validateMessage(message);
    if (isMessageValid === false)
      document.getElementById('error-message--message').textContent =
        'Dites-moi en un peu plus (minimum 50 caractères).';
    else document.getElementById('error-message--message').textContent = '';
  };

  const displayMessageCharacters = (evt) => {
    const messageLength = evt.target.value.length;
    document.getElementById(
      'message-length'
    ).textContent = `${messageLength} / ${maximumMessageLength} caractères`;
  };

  function emptyContactForm() {
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  }

  function displayEmailConfirmationMessage() {}

  function displayEmailErrorMessage() {}

  async function handleSubmit(evt) {
    evt.preventDefault();
    const response = await sendEmail(form.current);
    if (response.status === 200) {
      emptyContactForm();
      displayEmailConfirmationMessage();
    } else displayEmailErrorMessage();
  }

  useEffect(() => {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    setTimeout(() => {
      firstNameInput.addEventListener('change', verifyFirstName);
      lastNameInput.addEventListener('change', verifyLastName);
      emailInput.addEventListener('change', verifyEmail);
      phoneInput.addEventListener('change', verifyPhoneNumber);
      messageInput.addEventListener('change', verifyMessage);
      messageInput.addEventListener('input', displayMessageCharacters);
    }, 500);

    return function cleanupEventListeners() {
      firstNameInput.removeEventListener('change', verifyFirstName);
      lastNameInput.removeEventListener('change', verifyLastName);
      emailInput.removeEventListener('change', verifyEmail);
      phoneInput.removeEventListener('change', verifyPhoneNumber);
      messageInput.removeEventListener('change', verifyMessage);
      messageInput.removeEventListener('input', displayMessageCharacters);
    };
  }, []);

  return (
    <main className="contact">
      <h2>Contact</h2>
      <p>
        Vous pouvez aller voir{' '}
        <a
          href="https://www.linkedin.com/in/sylvain-bruyat/"
          target="_blank"
          rel="noreferrer"
          className="in-sentence-link"
        >
          mon profil sur LinkedIn
        </a>{' '}
        <sup>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </sup>{' '}
        et m'y écrire un message.
      </p>
      <p>
        Sinon, vous pouvez m'envoyer un mail via le formulaire de contact
        ci-dessous. Réponse rapide garantie !
      </p>
      <form className="contact__form" ref={form} onSubmit={handleSubmit}>
        <div>
          <section className="contact__form__section">
            <div className="contact__form__field">
              <label htmlFor="first-name">Prénom</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder=""
                required
              />
            </div>
            <p id="error-message--first-name" className="error-message"></p>
          </section>
          <section className="contact__form__section">
            <div className="contact__form__field">
              <label htmlFor="last-name">Nom</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder=""
                required
              />
            </div>
            <p id="error-message--last-name" className="error-message"></p>
          </section>
        </div>
        <div>
          <section className="contact__form__section">
            <div className="contact__form__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemple@mail.com"
                required
              />
            </div>
            <p id="error-message--email" className="error-message"></p>
          </section>
          <section className="contact__form__section">
            <div className="contact__form__field">
              <label htmlFor="phone">Numéro de téléphone (facultatif)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="0123456789 ou +33123456789"
              />
            </div>
            <p id="error-message--phone" className="error-message"></p>
          </section>
        </div>
        <div>
          <div className="contact__form__field">
            <label htmlFor="subject">Objet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Objet de votre mail"
              required
            />
          </div>
          <p id="error-message--subject" className="error-message"></p>
        </div>
        <label htmlFor="message">Votre message</label>
        <textarea
          id="message"
          name="message"
          className="contact__form__message"
          cols="30"
          rows="10"
          placeholder="Ecrivez votre message ici"
          minLength={minimumMessageLength}
          maxLength={maximumMessageLength}
          required
        ></textarea>
        <div className="contact__form__message-indications">
          <p id="error-message--message" className="error-message"></p>
          <p className="contact__form__message-length" id="message-length">
            0 / {maximumMessageLength} caractères
          </p>
        </div>
        <button type="submit" className="contact__form__submit">
          Envoyer
        </button>
      </form>
    </main>
  );
}
