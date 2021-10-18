import {
    mailCalculateTotalPrice,
    mailProductsToHtml
} from "../../utils/mail-helper-functions";

export const adminEmail = "burakgozen38@gmail.com";

export const adminSubject = (nameActivity) => {
    return (`${nameActivity}`)
}

export const adminMail = (personalInformation, products, nameActivity, afhaalmoment) => {
    let convertedAfhaalmoment = "";
    if (afhaalmoment) {
        convertedAfhaalmoment = `<p>Afhaalmoment: ${afhaalmoment}</p>`;
    }

    return (
        `<p>${nameActivity}</p>
        <br>
        <p>Persoonlijke info:</p>
        <ul>
            <li>Naam: ${personalInformation.name}</li>
            <li>Email: ${personalInformation.email}</li>
        </ul>
        <br>
        <p>Bestelling:</p>
        <ul>
            ${mailProductsToHtml(products)}
        </ul>
        <p><strong>Totaalprijs: €${mailCalculateTotalPrice(products)}</strong></p>
        <br>
        ${convertedAfhaalmoment}`
    )
}