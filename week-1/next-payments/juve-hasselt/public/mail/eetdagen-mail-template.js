import {
    mailCalculateTotalPrice,
    mailProductsToHtml
} from "../../utils/mail-helper-functions";
import {
    naamEetdag
} from "../producten/eetdagen-producten";


export const eetdagenSubject = `Bestelling-${naamEetdag}`;

export const eetdagenMail = (name, products, afhaalMoment) => {
    return (
        `<p>Dag ${name}
        <p>Bedankt voor je bestelling voor ${naamEetdag}</p>
        <br>
        <p>Jouw bestelling:</p>
        <ul>
            ${mailProductsToHtml(products)}
        </ul>
        <p><strong>Totaalprijs: €${mailCalculateTotalPrice(products)}</strong></p>
        <br>
        <p>Afhaalmoment: ${afhaalMoment}</p>
        <br>
        <p>Tot dan!</p>`
    )
}