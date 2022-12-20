import { useRef, useEffect, useState } from 'react';
import {
  sendEmail,
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhoneNumber,
  validateMessage,
} from '../services/contact-form-functions';

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const contactForm = useRef(null);
  const emailConfirmationDialog = useRef(null);
  const emailSendingErrorDialog = useRef(null);

  /****************************************************************************
   ** Reste à afficher le message de confirmation ou d'erreur dynamiquement ***
   ** selon la réponse à l'envoi **********************************************
   ****************************************************************************/

  const maximumMessageLength = 3000;
  const minimumMessageLength = 50;

  const verifyFirstName = (evt) => {
    const firstNameFeedbackMessage = validateFirstName(evt.target.value);
    document.getElementById('error-message--first-name').textContent =
      firstNameFeedbackMessage;
  };

  const verifyLastName = (evt) => {
    const lastNameFeedbackMessage = validateLastName(evt.target.value);
    document.getElementById('error-message--last-name').textContent =
      lastNameFeedbackMessage;
  };

  const verifyEmail = (evt) => {
    const emailFeedbackMessage = validateEmail(evt.target.value);
    document.getElementById('error-message--email').textContent =
      emailFeedbackMessage;
  };

  const verifyPhoneNumber = (evt) => {
    const phoneNumberFeedbackMessage = validatePhoneNumber(evt.target.value);
    document.getElementById('error-message--phone').textContent =
      phoneNumberFeedbackMessage;
  };

  const verifyMessage = (evt) => {
    const messageFeedbackMessage = validateMessage(evt.target.value);
    document.getElementById('error-message--message').textContent =
      messageFeedbackMessage;
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

  function displayEmailConfirmationMessage() {
    emailConfirmationDialog.current.showModal();
  }

  function displayEmailSendingErrorMessage() {
    emailSendingErrorDialog.current.showModal();
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setIsSending(true);
    const response = await sendEmail(contactForm.current);
    if (response.status === 200) {
      emptyContactForm();
      displayEmailConfirmationMessage();
    } else {
      displayEmailSendingErrorMessage();
    }
    setIsSending(false);
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
      {isSending === true && (
        <div className="sending">
          <p className="sending__message">Envoi en cours</p>
        </div>
      )}
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
      <form className="contact__form" ref={contactForm} onSubmit={handleSubmit}>
        <div>
          <section className="contact__form__section">
            <div className="contact__form__field">
              <label htmlFor="first-name">Prénom</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Prénom"
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
                placeholder="Nom"
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
      <dialog
        className="email-confirmation-message"
        id="email-confirmation-message"
        ref={emailConfirmationDialog}
      >
        <form method="dialog" className="email-confirmation-message__form">
          <p className="email-confirmation-message__text">
            Votre message a été envoyé avec succès. A bientôt !
          </p>
          <button>OK</button>
        </form>
      </dialog>
      <dialog
        className="email-sending-error-message"
        id="email-sending-error-message"
        ref={emailSendingErrorDialog}
      >
        <form method="dialog" className="email-sending-error-message__form">
          <p className="email-sending-error-message__text">
            Désolé, votre message n'a pas pu être envoyé.
          </p>
          <p className="email-sending-error-message__text">
            Veuillez réessayer ultérieurement. Merci !
          </p>
          <button>OK</button>
        </form>
      </dialog>
    </main>
  );
}
