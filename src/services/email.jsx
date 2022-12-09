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
