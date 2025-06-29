const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName}${lastName}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  try {
    await transporter.verify();
  } catch (error) {
    console.error("Transporter verify error:", error);
    res.status(500).json({ error: 'Email server not ready', details: error.toString() });
    return;
  }

  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mail);
    res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.error("SendMail error:", error);
    res.status(500).json({ error: error.toString() });
  }
};
