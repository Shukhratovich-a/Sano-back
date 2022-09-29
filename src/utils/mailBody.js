import normalizeTime from "../utils/normalizeDate.js";

const mailBody = (firstname, surname, time) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MUO - Technology, Simplified</title>
      </head>

      <body style="font-family: Arial; margin: 0">
        <table
          style="
            background-color: #f3f3f5;
            padding: 16px 12px;
            min-height: 100vh;
            width: 80%;
            margin: 0 auto;
          "
        >
          <tbody>
            <tr>
              <td style="vertical-align: top">
                <table
                  width="600"
                  style="
                    width: 600px !important;
                    min-width: 600px !important;
                    max-width: 600px !important;
                    margin: auto;
                    border-spacing: 0;
                    border-collapse: collapse;
                    background: white;
                    border-radius: 0px 0px 10px 10px;
                    padding-left: 30px;
                    padding-right: 30px;
                    padding-top: 30px;
                    padding-bottom: 30px;
                    display: block;
                  "
                >
                  <tbody style="width: 100%; display: block">
                    <tr style="width: 100%; display: block">
                      <td
                        style="
                          width: 100%;
                          display: block;
                          text-align: center;
                          font-size: 0;
                          border-collapse: collapse;
                        "
                      >
                        <table
                          border="0"
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          bgcolor="#F8F8F8"
                          style="border-spacing: 0; border-collapse: collapse"
                        >
                          <tbody>
                            <tr style="background-size: cover">
                              <td
                                style="
                                  width: 60%;
                                  text-align: left;
                                  border-collapse: collapse;
                                  background: #fff;
                                  border-radius: 10px 10px 0px 0px;
                                  color: white;
                                  height: 50px;
                                "
                              >
                                <img
                                  src="http://localhost:2349/logo.svg"
                                  width="120px"
                                  class="CToWUd"
                                />
                              </td>
                              <td
                                style="
                                  width: 40%;
                                  text-align: right;
                                  border-collapse: collapse;
                                  background: #fff;
                                  border-radius: 10px 10px 0px 0px;
                                  color: white;
                                  height: 50px;
                                "
                              >
                                <div style="color: #828282; font-size: 14px">${normalizeTime(
                                  time
                                )}</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="vertical-align: top; font-size: 0; border-collapse: collapse">
                        <table
                          border="0"
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          bgcolor="#F8F8F8"
                          style="border-spacing: 0; border-collapse: collapse"
                        >
                          <tbody>
                            <tr>
                              <td
                                style="padding-top: 30px; padding-bottom: 5px; background-color: white"
                              >
                                <span style="font-size: 20px; color: #363636">Привет <b>${firstname} ${surname}</b></span>
                              </td>
                            </tr>

                            <tr>
                              <td
                                style="padding-top: 5px; padding-bottom: 9px; background-color: white"
                              >
                                <span style="font-size: 24px; color: #363636; font-weight: bold"
                                  >Спасибо, что посетили наш сайт.</span
                                >
                              </td>
                            </tr>

                            <tr>
                              <td
                                style="
                                  padding: 10px 0px;
                                  background-color: white;
                                  border-collapse: collapse;
                                "
                              >
                                <div style="font-size: 18px; color: #828282; font-weight: normal">
                                  Мы получили ваше сообщение.
                                </div>
                                <div style="font-size: 18px; color: #828282; font-weight: normal">
                                  Мы свяжемся с вами в ближайшее время.
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  `;
};
export default mailBody;
