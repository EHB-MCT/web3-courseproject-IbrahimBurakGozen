"use strict";

export const handleChangePersonal = (array, event) => {
    const name = event.target.name;
    let value = event.target.value;
    const id = event.target.id;

    if (array[id]) {
        array.splice(id, 1);
        array.splice(id, 1, {
            [name]: value
        });

    } else {
        array.push({
            [name]: value
        })
    }
}

export const handleChangeProducts = (array, event) => {
    const name = event.target.name;
    let count = event.target.value;
    const id = event.target.id;

    let alreadyInArray = false;

    if (count === '0' || count === 0) {
        return array.filter(product => {
            if (product.price === name) {
                return;
            }
            return product;
        })
    }

    if (Number(count)) {
        count = Number(count);
    }

    const refactoredObject = {
        price: name,
        quantity: count
    }

    const newArray = array.map(product => {
        if (product.price === name) {
            alreadyInArray = true;
            return refactoredObject;
        }
        return product;
    })

    if (!alreadyInArray) {
        newArray.push(refactoredObject);
    }

    return newArray;


    // if (array[id]) {
    //     array.splice(id, 1);
    //     array.splice(id, 1, refactoredObject);

    // } else {
    //     array.push(refactoredObject)
    // }
}