import { useRef } from 'react';
import { sendEmail } from '../services/email';

export default function Contact() {
  const form = useRef();
  /*******************************************************************************************
   * Reste à afficher un message pendant l'envoi puis un message de confirmation ou d'erreur *
   ******************************************************************************************/
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

  return (
    <main className="contact">
      <h2>Contact</h2>
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
              <input type="tel" id="phone" name="phone" />
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
          cols="30"
          rows="10"
          placeholder="Ecrivez votre message ici"
          minLength={50}
          maxLength={4000}
          required
        ></textarea>
        <p id="error-message--message" className="error-message"></p>
        <button type="submit" className="contact__form__submit">
          Envoyer
        </button>
      </form>
    </main>
  );
}
