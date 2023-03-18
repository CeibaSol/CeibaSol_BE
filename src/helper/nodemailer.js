const nodemailer = require("nodemailer");

// Configurar el servidor SMTP para enviar el correo electrónico
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ceibasolsas@gmail.com",
    pass: "rxruiqjyavezbwii",
  },
});

module.exports = {
  transporter,
};
