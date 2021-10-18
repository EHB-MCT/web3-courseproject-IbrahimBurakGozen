"use strict";

import {
    createTransport
} from "nodemailer";

const FROM_MAIL = "ibg_38@outlook.com";
const FROM_PASS = "ibrahim38";

export const mail = async (clientMail, body, subject) => {

    // create reusable transporter object using the default SMTP transport
    const transporter = createTransport({
        service: "hotmail",
        auth: {
            user: FROM_MAIL,
            pass: FROM_PASS
        }
    });

    // send mail with defined transport object
    await transporter.sendMail({
        from: FROM_MAIL,
        to: clientMail,
        subject: subject,
        html: body,
    });

    console.log("Message sent to: " + clientMail);
}