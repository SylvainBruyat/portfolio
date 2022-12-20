import emailjs from '@emailjs/browser';

export async function sendEmail(form) {
  const response = await emailjs.sendForm(
    process.env.REACT_APP_EMAIL_SERVICE,
    process.env.REACT_APP_EMAIL_TEMPLATE,
    form,
    process.env.REACT_APP_EMAIL_PUBLIC_KEY
  );
  return response;
}

export function validateFirstName(firstName) {
  let validityMessage = '';
  if (firstName === '') return validityMessage;
  const firstNameRegex = /^[\p{L}]{1}[\p{L} -]+$/u;
  if (!firstNameRegex.test(firstName))
    validityMessage =
      'Votre prénom doit être uniquement composé de lettres, espaces et tirets et comporter au moins 2 caractères.';
  return validityMessage;
}

export function validateLastName(lastName) {
  let validityMessage = '';
  if (lastName === '') return validityMessage;
  const lastNameRegex = /^[\p{L}]{1}[\p{L}' -]+$/u;
  if (!lastNameRegex.test(lastName))
    validityMessage =
      'Votre nom doit être uniquement composé de lettres, espaces, tirets et apostrophes et comporter au moins 2 caractères.';
  return validityMessage;
}

export function validateEmail(email) {
  let validityMessage = '';
  if (email === '') return validityMessage;
  const emailRegex =
    /^[a-zA-Z0-9]{1}[\w.-]*@[a-zA-Z0-9]{1}[\w.-]{1,}\.[a-zA-Z]{1,}$/;
  if (!emailRegex.test(email))
    validityMessage =
      'Veuillez saisir une adresse email valide (format attendu : exemple@mail.com)';
  return validityMessage;
}

export function validatePhoneNumber(phoneNumber) {
  let validityMessage = '';
  if (phoneNumber === '') return validityMessage;
  const phoneNumberRegex = /^\+?[0-9]{7,16}$/;
  if (!phoneNumberRegex.test(phoneNumber))
    validityMessage =
      'Veuillez saisir votre numéro sans espace (entre 7 et 16 chiffres, format attendu : 0123456789 ou +33123456789)';
  return validityMessage;
}

export function validateMessage(message) {
  let validityMessage = '';
  if (message === '') return validityMessage;
  if (message.length < 50)
    validityMessage = 'Dites-moi en un peu plus (minimum 50 caractères)';
  return validityMessage;
}
