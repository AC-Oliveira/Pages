const emailJs = require('@emailjs/browser');

const sendMeMail = async ({ name, email, message }) => {
  await emailJs.send(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID_ME,
    {
      name,
      email,
      message,
    },
    process.env.REACT_APP_PUBLIC_KEY
  );
};

const sendUserMail = async ({ name, email }) => {
  await emailJs.send(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID_USER,
    { name, email },
    process.env.REACT_APP_PUBLIC_KEY
  );
};

export default { sendMeMail, sendUserMail };
