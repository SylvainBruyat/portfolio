import emailjs from '@emailjs/browser';

export async function sendEmail(form) {
  const response = await emailjs.sendForm(
    process.env.EMAIL_SERVICE,
    process.env.EMAIL_TEMPLATE,
    form,
    process.env.EMAIL_PUBLIC_KEY
  );
  return response;
}

export function validateFirstName(firstName) {
  const firstNameRegex = /^[\p{L}]{1}[\p{L} -]+$/u;
  if (firstNameRegex.test(firstName)) return true;
  return false;
}

export function validateLastName(lastName) {
  const lastNameRegex = /^[\p{L}]{1}[\p{L}' -]+$/u;
  if (lastNameRegex.test(lastName)) return true;
  return false;
}

export function validateEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9]{1}[\w.-]*@[a-zA-Z0-9]{1}[\w.-]{1,}\.[a-zA-Z]{1,}$/;
  if (emailRegex.test(email)) return true;
  return false;
}

export function validatePhoneNumber(phoneNumber) {
  const phoneNumberRegex = /^\+?[0-9]{7,16}$/;
  if (phoneNumberRegex.test(phoneNumber)) return true;
  return false;
}

export function validateMessage(message) {
  if (message.length >= 50) return true;
  return false;
}
