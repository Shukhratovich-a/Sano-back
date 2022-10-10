import wrapedSendMail from "../../utils/mailer.js";
import mailBody from "../../utils/mailBody.js";

import { MAIL } from "../../config.js";

import { InternalServerError, RequestError } from "../../utils/error.js";

export default {
  POST: async (req, res, next) => {
    try {
      const { firstname, surname, mail, phone, organization, message } = req.body;

      const resp = await wrapedSendMail({
        from: `'Sano Agency' <${MAIL}>`,
        to: mail,
        subject: "Спасибо, что посетили наш сайт.",
        text: `Привет ${firstname} ${surname}. Мы получили ваше сообщение. Мы свяжемся с вами в ближайшее время.`,
        html: mailBody(firstname, surname, mail, phone, organization, message, Date.now()),
        amp: mailBody(firstname, surname, mail, phone, organization, message, Date.now()),
      });

      if (!resp) return next(new RequestError(400, "Bad request"));

      res.status(202).json({
        status: 202,
        message: "message sended",
        data: {
          firstname: firstname,
          surname: surname,
          mail: mail,
          phone: phone,
          organization: organization,
          message: message,
          date: Date.now(),
        },
      });
    } catch (error) {
      return next(new InternalServerError(500, error.message));
    }
  },
};
