import {
    mailCalculateTotalPrice,
    mailProductsToHtml
} from "../../utils/mail-helper-functions";
import {
    naamActiviteit,
    tijdActiviteit
} from "../producten/activiteiten-producten";

export const activiteitenSubject = `Bestelling-${naamActiviteit}`;

export const activiteitenMail = (name, products) => {
    return (
        `<p>Dag ${name}
        <p>Bedankt voor je inschrijving voor ${naamActiviteit}</p>
        <br>
        <p>Jouw bestelling:</p>
        <ul>
            ${mailProductsToHtml(products)}
        </ul>
        <p><strong>Totaalprijs: €${mailCalculateTotalPrice(products)}</strong></p>
        <br>
        <p>Wij zien je graag komen op: ${tijdActiviteit}</p>
        <br>
        <p>Tot dan!</p>`
    )
}