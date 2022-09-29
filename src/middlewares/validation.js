import message from "../joi/message.js";

import { ValidationError } from "../utils/error.js";

export default (req, res, next) => {
  try {
    if (req.url == "/message" && req.method == "POST") {
      let { error } = message.messagePostScheme.validate(req.body);
      if (error) throw error;
    }

    return next();
  } catch (error) {
    return next(new ValidationError(401, error.message));
  }
};
