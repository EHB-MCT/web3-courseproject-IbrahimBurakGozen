export const nameFinder = (personalData) => {
    let fullname = "";
    personalData.forEach(data => {
        if (data.firstName)
            fullname += data.firstName

        if (data.lastName)
            fullname += " " + data.lastName
    })

    return fullname;
}

export const mailProductsToHtml = (products) => {
    return products.map(product => {
        return (`<li>${product.name}: ${product.quantity}, prijs per stuk €${product.price}</li>`)
    }).join("\n")
}

export const mailCalculateTotalPrice = (products) => {
    let total = 0;
    products.map(product => total += (product.price * product.quantity));
    return total;
}

export const mailProductsConverter = (products) => {
    return products.map(product => {
        return ({
            name: product.description,
            quantity: product.quantity,
            price: product.amount_subtotal / 100
        })
    })
}