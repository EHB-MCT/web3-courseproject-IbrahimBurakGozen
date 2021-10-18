"use strict";

export const calculateTotal = (productData, productInformation) => {
    let newPrice = 0;
    productData.forEach(product => {
        const foundProduct = productInformation.find(element => element.id === product.price)
        if (foundProduct)
            newPrice += foundProduct.price * product.quantity;
    });

    return newPrice;
}