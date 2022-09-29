import nodemailer from "nodemailer";
import { MAIL, PASS } from "../config.js";

const wrapedSendMail = (message) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: MAIL,
        pass: PASS,
      },
    });

    transporter.sendMail(message, (error, info) => {
      if (error) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

export default wrapedSendMail;
