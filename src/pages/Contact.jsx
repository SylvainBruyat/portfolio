import { useRef, useState } from 'react';
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
  const [emailSuccessfullySent, setEmailSuccessfullySent] = useState(true);

  const contactForm = useRef(null);
  const emailConfirmationDialog = useRef(null);

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
    setEmailSuccessfullySent(true);
    emailConfirmationDialog.current.showModal();
  }

  function displayEmailSendingErrorMessage() {
    setEmailSuccessfullySent(false);
    emailConfirmationDialog.current.showModal();
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
                onBlur={verifyFirstName}
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
                onBlur={verifyLastName}
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
                onBlur={verifyEmail}
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
                onBlur={verifyPhoneNumber}
              />
            </div>
            <p id="error-message--phone" className="error-message"></p>
          </section>
        </div>
        <section className="contact__form__section contact__form__section--subject">
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
        </section>
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
          onBlur={verifyMessage}
          onInput={displayMessageCharacters}
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
        className={
          emailSuccessfullySent
            ? 'email-success-message'
            : 'email-error-message'
        }
        ref={emailConfirmationDialog}
      >
        <form
          method="dialog"
          className={
            emailSuccessfullySent
              ? 'email-success-message__form'
              : 'email-error-message__form'
          }
        >
          {emailSuccessfullySent ? (
            <p className="email-success-message__text">
              Votre message a été envoyé avec succès. A bientôt !
            </p>
          ) : (
            <>
              <p className="email-error-message__text">
                Désolé, votre message n'a pas pu être envoyé.
              </p>
              <p className="email-error-message__text">
                Veuillez réessayer ultérieurement. Merci !
              </p>
            </>
          )}
          <button>OK</button>
        </form>
      </dialog>
    </main>
  );
}
