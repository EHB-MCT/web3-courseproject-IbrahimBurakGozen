import {
    mailCalculateTotalPrice,
    mailProductsToHtml
} from "../../utils/mail-helper-functions";
import {
    naamBetaling
} from "../producten/betalingen-producten";

export const betalingenSubject = `Betaling-${naamBetaling}`;

export const betalingenMail = (name, products) => {
    return (
        `<p>Dag ${name}
        <p>Bedankt voor je betaling van ${naamBetaling}</p>
        <br>
        <p>Jouw bestelling:</p>
        <ul>
            ${mailProductsToHtml(products)}
        </ul>
        <p><strong>Totaalprijs: €${mailCalculateTotalPrice(products)}</strong></p>
        <br>
        <p>Wij zien je graag bij onze andere activiteiten.</p>
        <br>
        <p>Tot dan!</p>`
    )
}