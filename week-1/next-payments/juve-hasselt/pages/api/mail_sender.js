import {
    activiteitenMail
} from '../../public/mail/activiteiten-mail';
import {
    betalingenMail
} from '../../public/mail/betalingen-mail';
import {
    eetdagenMail
} from '../../public/mail/eetdagen-mail-template';
import {
    fuifMail
} from '../../public/mail/fuif-mail';
import {
    adminEmail,
    adminMail
} from '../../public/mail/admin-mail';
import {
    mail
} from '../../utils/mail';
import {
    mailProductsConverter
} from '../../utils/mail-helper-functions';
import {
    stripe_key
} from '../../stripe_key';

const stripe = require('stripe')(stripe_key);

const mailTypes = new Map(
    [
        ["activiteiten", {
            body: activiteitenMail,
            subject: activiteitenSubject
        }],
        ["eetdagen", {
            body: eetdagenMail,
            subject: eetdagenSubject
        }],
        ["betalingen", {
            body: betalingenMail,
            subject: betalingenSubject
        }],
        ["fuif", {
            body: fuifMail,
            subject: fuifSubject
        }],
    ]
)

export default async function handler(req, res) {
    const session = await stripe.checkout.sessions.retrieve(req.body.session_id);
    const customer = await stripe.customers.retrieve(session.customer);
    const products = (await stripe.checkout.sessions.listLineItems(req.body.session_id)).data

    const mailType = mailTypes.get(session.metadata.type);

    const mailProducts = mailProductsConverter(products);

    const mailSubject = mailType.subject

    let mailBodyClient = mailType.body(customer.name, mailProducts);

    let mailBodyAdmin = adminMail(customer, mailProducts, mailSubject)

    if (session.metadata.afhaalmoment) {
        mailBodyClient = mailType.body(customer.name, mailProducts, session.metadata.afhaalmoment);
        mailBodyAdmin = adminMail(customer, mailProducts, mailSubject, session.metadata.afhaalmoment);
    }

    //client Mail
    await mail(customer.email, mailBodyClient, mailSubject)

    //mail Juve
    await mail(adminEmail, mailBodyAdmin, mailSubject)

}

//cs_test_a1YpUFriaSI7H84YMAaujc2cKPsLL4qPSMnyxSyUtA5opfa52wJA6LhHJC   betalingen
//cs_test_b1u3kkMxST2hafhu3nq6oaVfLDolyjxnq6VhSDllQapxNdFNVhr8rvXyp9   eetdagen