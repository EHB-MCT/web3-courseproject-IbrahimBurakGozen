import {
    stripe_key
} from '../../stripe_key';

const stripe = require('stripe')(stripe_key);

export default async function handler(req, res) {

    const products = req.body.products;
    const type = req.body.personalInformation.find(object => object.type).type;

    const metaData = {
        type: type
    }

    if (req.body.afhaalmoment) {
        Object.assign(metaData, {
            afhaalmoment: req.body.afhaalmoment
        })
    }

    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    ...products
                ],
                payment_method_types: [
                    'card',
                    'bancontact',
                    'sofort',
                    'ideal',
                ],
                mode: 'payment',
                metadata: metaData,
                success_url: `${req.headers.origin}/succes?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cancel`,
            });
            res.send(session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}