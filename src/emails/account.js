const sgMail = require("@sendgrid/mail");

sgMail.setApiKey("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");

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "surajvishwakarma830@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "surajvishwakarma830@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
