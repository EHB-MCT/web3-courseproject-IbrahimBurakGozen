import {
    mailCalculateTotalPrice,
    mailProductsToHtml
} from "../../utils/mail-helper-functions";
import {
    naamFuif,
    tijdFuif
} from "../producten/fuif-producten";

export const fuifSubject = `Inschrijving-${naamFuif}`;

export const fuifMail = (name, products) => {
    return (
        `<p>Dag ${name}
        <p>Bedankt voor je inschrijving voor ${naamFuif}</p>
        <br>
        <p>Jouw bestelling:</p>
        <ul>
            ${mailProductsToHtml(products)}
        </ul>
        <p><strong>Totaalprijs: €${mailCalculateTotalPrice(products)}</strong></p>
        <br>
        <p>Wij zien je graag komen op: ${tijdFuif}</p>
        <br>
        <p>Tot dan!</p>`
    )
}